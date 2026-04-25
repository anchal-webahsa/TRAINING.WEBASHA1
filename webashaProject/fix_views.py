import sys
import os

path = r'd:\1.webashaProject\webashaProject\webashaApp\views.py'
with open(path, 'r') as f:
    lines = f.readlines()

# Find the start of add_exam
start_line = -1
for i, line in enumerate(lines):
    if "def add_exam(request, pk=None):" in line:
        start_line = i
        break

if start_line == -1:
    print("Could not find add_exam function")
    sys.exit(1)

# Find where it ends (it seems it merged with manage_exam_certificates)
end_line = -1
for i in range(start_line + 1, len(lines)):
    if "def delete_gallery_image(request, pk):" in lines[i]:
        end_line = i
        break

if end_line == -1:
    print("Could not find end of function")
    sys.exit(1)

new_func = """def add_exam(request, pk=None):
    if pk:
        exam = get_object_or_404(Exam, pk=pk)
        title = "Edit Exam"
    else:
        exam = None
        title = "Add Exam"

    if request.method == 'POST':
        form = ExamForm(request.POST, request.FILES, instance=exam)
        faq_formset = ExamFAQFormSet(request.POST, request.FILES, prefix='faq', instance=exam)
        review_formset = ExamReviewFormSet(request.POST, request.FILES, prefix='review', instance=exam)
        partner_formset = ExamPartnerLogoFormSet(request.POST, request.FILES, prefix='partner', instance=exam)
        related_course_formset = ExamRelatedCourseFormSet(request.POST, request.FILES, prefix='relatedcourse', instance=exam)
        why_choose_us_formset = ExamWhyChooseUsFormSet(request.POST, request.FILES, prefix='whychooseus', instance=exam)
        ad_banner_formset = ExamAdBannerFormSet(request.POST, request.FILES, prefix='adbanner', instance=exam)
        carousel_formset = ExamSidebarCarouselFormSet(request.POST, request.FILES, prefix='carousel', instance=exam)
        certificate_formset = ExamCertificateFormSet(request.POST, request.FILES, prefix='certificate', instance=exam)
        
        if (form.is_valid() and faq_formset.is_valid() and review_formset.is_valid() and 
            partner_formset.is_valid() and related_course_formset.is_valid() and 
            why_choose_us_formset.is_valid() and ad_banner_formset.is_valid() and 
            carousel_formset.is_valid() and certificate_formset.is_valid()):
            
            exam_instance = form.save()
            
            faq_formset.instance = exam_instance
            faq_formset.save()
            
            review_formset.instance = exam_instance
            review_formset.save()
            
            partner_formset.instance = exam_instance
            partner_formset.save()
            
            related_course_formset.instance = exam_instance
            related_course_formset.save()
            
            why_choose_us_formset.instance = exam_instance
            why_choose_us_formset.save()
            
            ad_banner_formset.instance = exam_instance
            ad_banner_formset.save()
            
            carousel_formset.instance = exam_instance
            carousel_formset.save()

            certificate_formset.instance = exam_instance
            certificate_formset.save()

            messages.success(request, f'Exam {"updated" if pk else "added"} successfully with all inline modules!')
            return redirect('manage_exams')
        else:
            messages.error(request, 'Please correct the highlighted errors in the form or tabs.')
    else:
        form = ExamForm(instance=exam)
        faq_formset = ExamFAQFormSet(prefix='faq', instance=exam)
        review_formset = ExamReviewFormSet(prefix='review', instance=exam)
        partner_formset = ExamPartnerLogoFormSet(prefix='partner', instance=exam)
        related_course_formset = ExamRelatedCourseFormSet(prefix='relatedcourse', instance=exam)
        why_choose_us_formset = ExamWhyChooseUsFormSet(prefix='whychooseus', instance=exam)
        ad_banner_formset = ExamAdBannerFormSet(prefix='adbanner', instance=exam)
        carousel_formset = ExamSidebarCarouselFormSet(prefix='carousel', instance=exam)
        certificate_formset = ExamCertificateFormSet(prefix='certificate', instance=exam)

    return render(request, 'webashaApp/add_exam.html', {
        'form': form,
        'title': title,
        'faq_formset': faq_formset,
        'review_formset': review_formset,
        'partner_formset': partner_formset,
        'related_course_formset': related_course_formset,
        'why_choose_us_formset': why_choose_us_formset,
        'ad_banner_formset': ad_banner_formset,
        'carousel_formset': carousel_formset,
        'certificate_formset': certificate_formset
    })

"""

lines[start_line:end_line] = [new_func + "\n"]

with open(path, 'w') as f:
    f.writelines(lines)

print("Successfully restored and updated add_exam in views.py")
