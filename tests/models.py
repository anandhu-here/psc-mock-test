from django.db import models

# Create your models here.

class Test(models.Model):
    name            = models.CharField(max_length=200)
    discription     = models.CharField(max_length=200, blank=True, null = True)

    def __str__(self):
        return self.name
    

    class Meta:
        ordering = ['name']



class Question(models.Model):
    test        = models.ForeignKey(Test, on_delete=models.CASCADE)
    question    = models.CharField(max_length=200)
    label       = models.CharField(max_length = 100)

    def __str__(self):
        return self.label


class Options(models.Model):
    question        = models.ForeignKey(Question, on_delete=models.CASCADE)
    Options         = models.CharField(max_length = 200)
    is_correct      = models.BooleanField(default=False)

    def __str__(self):
        return self.question.label
    
