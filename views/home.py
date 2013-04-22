from django.template.response import TemplateResponse
from django.core.mail import send_mail


def home(request):
  c = {}

  if request.method == "POST":
    email = request.POST.get('email')
    name = request.POST.get('name')
    phone = request.POST.get('phone')
    msg = request.POST.get('message')

    message = '''
      %s has requested additional information
      about Verifip through the website. \n\n
      Name: %s \n
      Email: %s \n
      Phone: %s \n\n
      %s
    ''' % (name, name, email, phone, msg)

    send_mail('Verifip Contact Form',
              message,
              'admin@verifip.com',
              ['nhagianis@gmail.com'],
              fail_silently=False)

    return TemplateResponse(request, 'email_confirmation.html', c)

  return TemplateResponse(request, 'index.html', c)
