# Generated by Django 3.1.5 on 2021-02-17 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='options',
            name='check',
            field=models.BooleanField(default=False),
        ),
    ]
