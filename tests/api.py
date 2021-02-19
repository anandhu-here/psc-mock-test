from rest_framework import views
from rest_framework.response import Response
from .models import Test
from .serializers import DemoSerializer



class DemoTest(views.APIView):
    def get(self,request, *args, **kwargs):
        psc = Test.objects.get(name="PSC")
        questions = psc.question_set.all()
        ser = DemoSerializer(questions, many=True)
        return Response({'questions':ser.data})
        
