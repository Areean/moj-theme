<div class="search_form">
	<form action="/" method="get">
			<input type="text" name="s" id="search" value="<?php the_search_query(); ?>" />
			<input type="image" alt="Search" src="<?php bloginfo( 'template_url' ); ?>/images/search.png" />
			 <?php echo esc_html( get_search_query( false ) ); ?> 
	</form>
</div>	