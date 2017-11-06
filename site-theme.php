<?php get_header();?>
<body <?php body_class(); ?>>

							 <?php
								$argsmenu = array(
								'theme_location'    => 'top_menu',
								'container'            =>    false,
								'menu_class'        =>    'main_menu'
								);
								wp_nav_menu($argsmenu);
							?>	

	
					<?php	
						while (have_posts()) : the_post();
						the_content(''); 
						endwhile;
					?>

					<?php get_footer(); ?>

<?php wp_footer(); ?>
</body>
</html>		