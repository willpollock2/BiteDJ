# home/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('promotions/', views.promotions, name='promotions'),
    path('survey/', views.survey, name='survey'),
    path('social/', views.social, name='social'),
    path('index/', views.index, name='index'),
]
