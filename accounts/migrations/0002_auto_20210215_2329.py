# Generated by Django 3.1.5 on 2021-02-15 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='score',
            field=models.IntegerField(default=16),
        ),
        migrations.AddField(
            model_name='user',
            name='standard',
            field=models.CharField(blank=True, max_length=3, null=True),
        ),
    ]