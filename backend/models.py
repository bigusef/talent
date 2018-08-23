from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class University(models.Model):
    name = models.CharField(max_length=50)
    timestamps = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Department(models.Model):
    name = models.CharField(max_length=100)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    timestamps = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Expert(models.Model):
    def upload_dir(instance, filename):
        return f'profile_img/i-{instance.name}-{filename}'

    name = models.CharField(max_length=150)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    img = models.ImageField(width_field=100, height_field=100, upload_to=upload_dir)
    rate = models.FloatField(validators=[MinValueValidator(0.0), MaxValueValidator(5.0)])
    hours = models.IntegerField()
    timestamps = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Tutorial(models.Model):
    name = models.CharField(max_length=150)
    expert = models.OneToOneField(Expert, on_delete=models.CASCADE)
    price = models.IntegerField()
    description = models.TextField()
    timestamps = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
