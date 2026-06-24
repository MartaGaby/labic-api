from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        # --- PROJETO ---
        # Status choices agora batem com os valores do front
        migrations.AlterField(
            model_name='projeto',
            name='status',
            field=models.CharField(
                choices=[
                    ('Em Planejamento', 'Em Planejamento'),
                    ('Ativo', 'Ativo'),
                    ('Em Execução', 'Em Execução'),
                    ('Concluído', 'Concluído'),
                    ('Pausado', 'Pausado'),
                ],
                default='Em Planejamento',
                max_length=20,
            ),
        ),
        # descricao e metodologia agora são opcionais
        migrations.AlterField(
            model_name='projeto',
            name='descricao',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='projeto',
            name='metodologia',
            field=models.TextField(blank=True, default=''),
        ),

        # --- ARTIGO ---
        # Status choices agora batem com os valores do front
        migrations.AlterField(
            model_name='artigo',
            name='status',
            field=models.CharField(
                choices=[
                    ('Ativo', 'Ativo'),
                    ('Em Execução', 'Em Execução'),
                    ('Concluído', 'Concluído'),
                ],
                default='Ativo',
                max_length=20,
            ),
        ),
        # Campos obrigatórios do PDF viram opcionais para M2
        migrations.AlterField(
            model_name='artigo',
            name='resumo',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='artigo',
            name='metodologia',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='artigo',
            name='revisao_bibliografica',
            field=models.TextField(blank=True, default=''),
        ),
        # Novo campo: string de autores que o front manda/recebe
        migrations.AddField(
            model_name='artigo',
            name='authors',
            field=models.TextField(blank=True, default=''),
        ),
    ]
