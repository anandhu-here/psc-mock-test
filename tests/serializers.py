from rest_framework import serializers
from .models import Question, Options

class OptionsSerializer(serializers.ModelSerializer):
    label = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = Options
        fields = ('id','Options','is_correct','label',)
    def get_label(self, obj):
        return obj.question.label
class DemoSerializer(serializers.ModelSerializer):
    options = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = Question
        fields = ('label','options','question')

    def get_options(self, obj):
        opt = obj.options_set.all()
        ser = OptionsSerializer(opt, many=True)
        
        return ser.data

    

    

