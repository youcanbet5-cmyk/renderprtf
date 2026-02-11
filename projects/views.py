from django.shortcuts import render, redirect
from django.conf import settings
from django.core.mail import EmailMessage
from .models import Project, Contact


def home(request):

    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # Save to DB
        Contact.objects.create(
            name=name,
            email=email,
            message=message
        )

        # SEND MAIL TO OWNER ONLY
        email_msg = EmailMessage(
            subject=f"New Client Message from {name}",
            body=f"Client Email: {email}\n\n{message}",
            from_email=settings.EMAIL_HOST_USER,
            to=[settings.EMAIL_HOST_USER],
            reply_to=[email],   # ⭐ reply goes to client
        )

        email_msg.send()

        return redirect("/")

    projects = Project.objects.all()
    context = {"projects": projects}

    return render(request, "projects/index.html", context)


def projuct(request):
    projects = Project.objects.all()

    contex = {'projects': projects, }

    return render(request, "projects/project_list.html", contex)
