<?php
/* Template Name: Documents Page */

get_header(); ?>

<main class="main-content">
    <?php
    // Получаем имя текущей страницы
    $current_page = get_post_field('post_name', get_post());

    // Определяем классы и workflow_state в зависимости от текущей страницы
    $section_classes = 'docs'; // Базовый класс
    $page_title = 'Документы'; // Базовый заголовок
    $workflow_state = 'info'; // Базовое значение для workflow_state

    if ($current_page === 'resources') {
        $section_classes .= ' resources';
        $page_title = 'Расчет собственных средств';
        $workflow_state = 'resources';
    } elseif ($current_page === 'messages') {
        $section_classes .= ' messages';
        $page_title = 'Сообщения';
        $workflow_state = 'messages';
    } elseif ($current_page === 'reports') {
        $section_classes .= ' reports';
        $page_title = 'Отчетность';
        $workflow_state = 'reports';
    }
    ?>

    <section class="<?php echo esc_attr($section_classes); ?>">
        <div class="docs__inner wrapper">
            <div class="docs__hero flexbox-column">
                <h2 class="docs__title page-heading-h2"><?php echo esc_html($page_title); ?></h2>
				
				<?php if ($current_page === 'messages'): ?>
                    <p class="docs__content-info">
                        Здесь еще ничего нет.
                    </p>
                <?php endif; ?>
                
            </div>
            <?php echo do_shortcode('[documents workflow_state="' . esc_attr($workflow_state) . '" new_tab="true" show_edit="false" show_descr="true" orderby="date" order="DESC"]'); ?>
        </div>
    </section>
</main>
<?php get_footer(); ?>
