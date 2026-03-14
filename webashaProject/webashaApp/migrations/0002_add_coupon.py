"""Auto migration: add Coupon model.

This migration was created manually to match the newly added `Coupon` model.
Run `python manage.py migrate` to apply it.
"""
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = False

    dependencies = [
        ('webashaApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Coupon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=64, unique=True)),
                ('discount_percent', models.PositiveSmallIntegerField(default=0)),
                ('expiry', models.DateField(blank=True, null=True)),
                ('active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Coupon',
                'verbose_name_plural': 'Coupons',
            },
        ),
    ]
