from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate

User = get_user_model() 
# User Serializer
class UserSerializer(serializers.ModelSerializer):
  # dp = serializers.SerializerMethodField()
  class Meta:
    model = User
    fields = ('id', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'email')
    extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
      
      user = User.objects.create_user(**validated_data)
      return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  email = serializers.EmailField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(email=data['email'], password = data['password'])
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")

