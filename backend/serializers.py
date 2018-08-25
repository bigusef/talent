from rest_framework import serializers
from .models import Expert, Tutorial


class TutorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutorial
        fields = 'pk', 'title', 'hours', 'price', 'description', 'timestamps', 'updated'
        read_only = 'timestamps', 'updated'


class ExpertSerializer(serializers.ModelSerializer):
    tutorial = TutorialSerializer()

    class Meta:
        model = Expert
        fields = 'pk', 'name', 'university', 'department', 'img', 'rate', 'tutorial', 'timestamps', 'updated'
        read_only = 'timestamps', 'updated'

    def create(self, validated_data):
        tutorial_data = validated_data.pop('tutorial')
        expert = Expert.objects.create(**validated_data)
        Tutorial.objects.create(expert=expert, **tutorial_data)
        return expert

    def update(self, instance, validated_data):
        if 'tutorial' in validated_data:
            tutorial_data = validated_data.pop('tutorial')
            instance.tutorial.title = tutorial_data.get('title', instance.tutorial.title)
            instance.tutorial.hours = tutorial_data.get('hours', instance.tutorial.hours)
            instance.tutorial.price = tutorial_data.get('price', instance.tutorial.price)
            instance.tutorial.description = tutorial_data.get('description', instance.tutorial.description)
            instance.tutorial.save()
        return super(ExpertSerializer, self).update(instance, validated_data)
