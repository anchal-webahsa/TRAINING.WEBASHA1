window.addEventListener('load', function() {
    const reviewTypeField = document.querySelector('#id_review_type');
    if (!reviewTypeField) return;

    const videoIdRow = document.querySelector('.field-video_id');
    const linkedinUrlRow = document.querySelector('.field-linkedin_url');

    function toggleFields() {
        const type = reviewTypeField.value;
        if (type === 'video') {
            if (videoIdRow) videoIdRow.style.display = 'block';
            if (linkedinUrlRow) linkedinUrlRow.style.display = 'none';
        } else {
            // 'text' or other
            if (videoIdRow) videoIdRow.style.display = 'none';
            if (linkedinUrlRow) linkedinUrlRow.style.display = 'block';
        }
    }

    // Run on load
    toggleFields();

    // Run on change
    reviewTypeField.addEventListener('change', toggleFields);

    // Add min/max constraints to the rating field
    const ratingField = document.querySelector('#id_rating');
    if (ratingField) {
        ratingField.setAttribute('min', '1');
        ratingField.setAttribute('max', '5');
    }
});
