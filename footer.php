
<?php if ( is_active_sidebar( 'footer-widgets' ) ) : // بررسی می کند که آیا ابزارکی وجود دارد یا خیر ?>
		<?php dynamic_sidebar( 'footer-widgets' ); // فراخوانی ابزارک ?>
<?php endif; ?>