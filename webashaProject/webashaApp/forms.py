from django import forms
from .models import Course, Coupon


class CourseForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = ['title', 'short_description', 'status', 'price']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'short_description': forms.Textarea(attrs={'rows':2, 'class': 'form-control'}),
        }


class CouponForm(forms.ModelForm):
    class Meta:
        model = Coupon
        fields = ['code', 'discount_percent', 'expiry', 'active']
        widgets = {
            'code': forms.TextInput(attrs={'class': 'form-control'}),
            'discount_percent': forms.NumberInput(attrs={'class': 'form-control', 'min': 0, 'max': 100}),
            'expiry': forms.DateInput(attrs={'type':'date','class':'form-control'}),
            'active': forms.CheckboxInput(attrs={'class':'form-check-input'}),
        }
