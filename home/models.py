from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    business = models.CharField(max_length=255)
    rating = models.FloatField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    tax = models.DecimalField(max_digits=5, decimal_places=2)
    tip = models.DecimalField(max_digits=5, decimal_places=2)
    est_price = models.DecimalField(max_digits=5, decimal_places=2)
    distance = models.FloatField()

    def __str__(self):
        return self.name
