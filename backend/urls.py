from django.urls import path

from .views import ExpertListView, ExpertDetailView

urlpatterns = [
    path('', ExpertListView.as_view(), name='list'),
    path('<int:pk>/', ExpertDetailView.as_view(), name='detial'),
]
