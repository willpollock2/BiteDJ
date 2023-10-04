from django import forms
from .models import Food  # replace with your actual model

class FoodTypeForm(forms.Form):
    food_type = forms.ChoiceField(choices=[])  # Initially empty

    def __init__(self, *args, **kwargs):
        super(FoodTypeForm, self).__init__(*args, **kwargs)
        # Populating choices with unique food types from the database.
        self.fields['food_type'].choices = [(x, x) for x in Food.objects.values_list('category', flat=True).distinct()]
        # Setting the initial value to 'Pizza'
        self.fields['food_type'].initial = 'Pizza'
