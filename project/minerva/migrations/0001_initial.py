# Generated by Django 4.2.7 on 2023-11-19 01:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='integra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mensagem', models.CharField(max_length=500)),
                ('hora', models.CharField(max_length=5)),
                ('dia', models.CharField(max_length=10)),
            ],
            options={
                'verbose_name': 'Mensagem',
                'verbose_name_plural': 'Mensagens',
            },
        ),
    ]
