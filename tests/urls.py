from django.urls import path
from .api import DemoTest

urlpatterns=[
    path('api/questions/demo', DemoTest.as_view() )
]