from django.contrib import admin
from django.urls import path
from .views import index, about, contact,solutions, career, notpage, construction

urlpatterns = [
    path('', index),
    path("about", about),
    path("contact",contact),
    path("solutions", solutions),
    path("career",career),
    # path("not", notpage),
    # path("construction", construction)
   
    
]