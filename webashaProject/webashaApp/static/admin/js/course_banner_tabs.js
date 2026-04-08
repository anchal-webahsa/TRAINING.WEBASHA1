document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form#coursebanner_form') || document.querySelector('.change-form form');
    if (!form) return;

    // 1. Create a layout wrap
    const formContent = document.createElement('div');
    formContent.id = 'course-banner-form-wrap';

    const tabNav = document.createElement('ul');
    tabNav.id = 'course-banner-tabs';
    
    const tabContentContainer = document.createElement('div');
    tabContentContainer.id = 'course-banner-tab-content';

    // Move all fieldsets and inline-groups into tabContentContainer
    const fieldsets = form.querySelectorAll('fieldset.tab-section');
    const inlines = form.querySelectorAll('.inline-group');
    
    let tabIndex = 0;
    
    const createTab = (element, title) => {
        element.classList.add('tab-pane');
        element.dataset.tabIndex = tabIndex;
        
        const li = document.createElement('li');
        li.className = 'tab-nav-item';
        if (tabIndex === 0) {
            li.classList.add('active');
            element.classList.add('active');
        }
        
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = title;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            // hide all
            document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.tab-nav-item').forEach(el => el.classList.remove('active'));
            
            // show current
            element.classList.add('active');
            li.classList.add('active');
            
            // Re-layout Summernote widgets if needed
            if (typeof window.dispatchEvent === 'function') {
                window.dispatchEvent(new Event('resize'));
            }
        });
        
        li.appendChild(a);
        tabNav.appendChild(li);
        tabContentContainer.appendChild(element);
        
        tabIndex++;
    };

    fieldsets.forEach(fs => {
        const h2 = fs.querySelector('h2');
        const title = h2 ? h2.textContent : 'Section';
        createTab(fs, title);
    });

    inlines.forEach(inline => {
        const h2 = inline.querySelector('h2');
        const title = h2 ? h2.textContent : 'Related Elements';
        createTab(inline, title);
    });

    // We want the tab layout before the submit buttons
    const submitRow = form.querySelector('.submit-row');
    if(submitRow && submitRow.parentNode) {
        submitRow.parentNode.insertBefore(formContent, submitRow);
    } else {
        form.appendChild(formContent);
    }
    
    formContent.appendChild(tabNav);
    formContent.appendChild(tabContentContainer);
    
    // Auto-save functionality
    const toast = document.createElement('div');
    toast.id = 'autosave-toast';
    document.body.appendChild(toast);

    const showToast = (message, state='') => {
        toast.textContent = message;
        toast.className = 'show ' + state;
        setTimeout(() => toast.classList.remove('show'), 3000);
    };

    // check if it's an edit page or add page
    const isAddPage = window.location.pathname.includes('/add/');
    let isCurrentlySaving = false;
    let pendingSave = false;

    const performAutoSave = () => {
        if(isCurrentlySaving) {
            pendingSave = true;
            return;
        }

        // Only autosave on Add page if at least some data is filled? 
        // We'll proceed. The backend might reject it due to required fields.
        
        // Sync Summernote content if available
        if (typeof window.jQuery !== 'undefined' && window.jQuery.fn.summernote) {
            window.jQuery('.django-summernote').each(function() {
                window.jQuery(this).val(window.jQuery(this).summernote('code'));
            });
        }
        
        const formData = new FormData(form);
        formData.append('_continue', '1'); // Django's "Save and continue editing"
        
        showToast('Autosaving...', '');
        isCurrentlySaving = true;
        
        fetch(window.location.pathname + window.location.search, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(response => {
            isCurrentlySaving = false;
            if (response.ok) {
                // If it's the add page, a successful auto-save redirects to the change page.
                if(isAddPage && response.redirected && response.url.includes('/change/')) {
                    // Update URL and reload to fully enter edit mode
                    window.history.replaceState(null, '', response.url);
                    window.location.reload();
                    return;
                }
                showToast('Autosaved successfully.', 'success');
            } else {
                // Form might be invalid (e.g. required fields missing)
                // That's normal during intermediate typing.
                if (response.status === 400 || response.status === 200) {
                    showToast('Draft. Fix errors to save fully.', '');
                } else {
                    showToast('Server error during autosave.', 'error');
                }
            }
            if (pendingSave) {
                pendingSave = false;
                setTimeout(performAutoSave, 1000);
            }
        }).catch(err => {
            isCurrentlySaving = false;
            console.error(err);
        });
    };

    let debounceTimer;
    
    // Attach autosave trigger to form
    // Listen to change (selects, blur etc) and input (typing)
    form.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        // Delay 5 seconds to reduce load while typing
        debounceTimer = setTimeout(performAutoSave, 5000);
    });

    form.addEventListener('change', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(performAutoSave, 2500);
    });

    // Also handle summernote specifically if events aren't bubbling
    if (typeof window.jQuery !== 'undefined') {
        window.jQuery(document).on('summernote.change', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(performAutoSave, 5000);
        });
    }
});
