
from django.shortcuts import render, get_object_or_404
from django.http import Http404
cars = [
    {
        "id": 1,
        "name": "Toyota Crown Sedan",
        "category": "Modern Luxury",
        "description": "A masterpiece of contemporary Japanese elegance.",
        "image": "main/images/crown-sedan-hero.webp",
    },
    {
        "id": 2,
        "name": "Toyota Century G50",
        "category": "Royal Heritage",
        "description": "An enduring symbol of Japanese royal craftsmanship.",
        "image": "main/images/century-g50-heritage.webp",
    },
    {
        "id": 3,
        "name": "Toyota Crown Premium",
        "category": "Premium Edition",
        "description": "Sophisticated design with exceptional everyday comfort.",
        "image": "main/images/crown-premium.webp",
    },
]


def all_cars(request):
    context = {"cars": cars}
    return render(request, "cars/all_cars.html", context)


def car_detail(request, car_id):
    return render(request, "cars/car_detail.html")
