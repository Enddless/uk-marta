<?php
/* Template Name: Documents Page */

get_header(); ?>
<main class="main-content">
    <section class="docs">
        <div class="docs__inner wrapper">
            <div class="docs__hero flexbox-column">
                <h2 class="docs__title page-heading-h2">Документы</h2>
                <p class="docs__content-info">
                    Общество с ограниченной ответственностью «Управляющая компания «МАРТА»
                    использует систему электронного документооборота с Акционерным обществом «Независимая регистраторская
                    компания Р.О.С.Т.». Информация о порядке и условиях обмена электронными документами размещена на сайте АО
                    «НРК-Р.О.С.Т.» в сети Интернет по адресу <a href="https://rrost.ru/ru/">https://rrost.ru/ru/.</a>
                    Опубликовано: 27 ноября 2024 г. 13:10. Доступно к ознакомлению бессрочно.
                </p>
            </div>
            <?php echo do_shortcode('[documents workflow_state="info" new_tab="true" show_edit="false" show_descr="true"]'); ?>
        </div>
    </section>
</main>
<?php get_footer(); ?>
