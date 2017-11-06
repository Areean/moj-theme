<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=<?php bloginfo( 'charset' ); ?>">
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<meta name="viewport" content="width=device-width">
	
    <title>
		<?php
			global $page, $paged;
			wp_title( '|', true, 'right' );
			bloginfo( 'name' );
			if ( $paged >= 2 || $page >= 2 ) echo ' | ' . sprintf( __( 'صفحه %s'), max( $paged, $page ) );
		?>
	</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	
			<link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" type="text/css" />
			
			<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/bootstrap-3.3.6/css/bootstrap.css" />
			<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/bootstrap-3.3.6/css/bootstrap-theme.min.css" />
			
			 <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/webfonts/font-awesome-4.7.0/css/font-awesome.min.css" />

			<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/webfonts/iran-sans/webfonts/css/style.css" />
			<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/webfonts/iran-sans/webfonts/css_woff/style.css" />

			<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/webfonts/iran-sans/webfonts(num)/css/style.css" />
			<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/webfonts/iran-sans/webfonts(num)/css_woff/style.css" />

			<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/css/style.css" />
			<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/css/menu.css" />
			<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/sources/css/hover-min.css" />
		
			
						<!-- jQuery library -->
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

			<script src="<?php bloginfo('template_url'); ?>/sources/bootstrap-3.3.6/js/bootstrap.min.js" type="text/javascript"></script>
			<script src="<?php bloginfo('template_url'); ?>/sources/bootstrap-3.3.6/js/npm.js" type="text/javascript"></script>
	
	


						
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>"/> 
	
	<?php wp_head(); ?>


	
</head>