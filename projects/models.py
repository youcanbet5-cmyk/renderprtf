from django.db import models

# Create your models here.


class Project (models.Model):

    CATEGORY_CHOICES = [
        ('short', 'Short Form'),
        ('long', 'Long Form'),
        ('ads', 'Ads & VSL'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()

    category = models.CharField(
        max_length=10,
        choices=CATEGORY_CHOICES,
        default='short'
    )

    video_file = models.FileField(upload_to='videos/', blank=True, null=True)

    def __str__(self):
        return self.title or 'unnamed'

    @property
    def ratio_class(self):
        if self.category == 'long':
            return 'card-landscape'
        return 'card-vertical'


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
