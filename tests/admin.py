from django.contrib import admin
from .models import Test, Question, Options

class OptionsInline(admin.StackedInline):
    model = Options
    extra = 1


class QuestionAdmin(admin.ModelAdmin):
    inlines = [OptionsInline,]


admin.site.register(Test )
admin.site.register(Question, QuestionAdmin)