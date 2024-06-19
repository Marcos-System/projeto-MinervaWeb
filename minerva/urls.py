from django.urls import path
from minerva.views import *

urlpatterns = [
    path('', index, name='index'),
    path('minerva/', home, name='home'),
    path("create/", create, name="create"),
    path('delete/<int:pk>/', delete, name='delete'),
    
]

