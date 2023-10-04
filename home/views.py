from django.shortcuts import render
from .models import Food
from .forms import FoodTypeForm


def home(request):
    return render(request, 'home/home.html')

def promotions(request):
    return render(request, 'home/promotions.html')

def survey(request):
    return render(request, 'home/survey.html')

def social(request):
    return render(request, 'home/social.html')

def index(request):
    return render(request, 'home/index.html')

def index(request):
    if request.method == "POST":
        form = FoodTypeForm(request.POST)
        if form.is_valid():
            selected_food_type = form.cleaned_data['food_type']
            food_data = Food.objects.filter(category=selected_food_type)
            return render(request, 'home/index.html', {'form': form, 'food_data': food_data})
    else:
        form = FoodTypeForm()
        selected_food_type = 'Pizza'  # Set the default food_type
        food_data = Food.objects.filter(category=selected_food_type)  # Adjust with your actual query
    return render(request, 'home/index.html', {'form': form, 'food_data': food_data})