from . import views
from django.urls import path
from .views import home, projuct


urlpatterns = [

    path('', views.home, name='home'),
    path('projuct/', views.projuct, name='projuct'),



]
