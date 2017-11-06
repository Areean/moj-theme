<?php
 
/* ساخت بخش منو سایت*/
if (function_exists('add_theme_support')) {
add_theme_support('menus');
}
add_action( 'init', 'register_menu' );
function register_menu() {
register_nav_menus(
array(
'top_menu' => __( 'منوی اصلی سایت' ),
)
);
}


	function check_for_submenu($classes, $item) {
	    global $wpdb;
	    $has_children = $wpdb->get_var("SELECT COUNT(meta_id) FROM wp_postmeta WHERE meta_key='_menu_item_menu_item_parent' AND meta_value='".$item->ID."'");
	    if ($has_children > 0) array_push($classes,'test_amin'); // assign the class test_amin to list items with sub menu.
	    return $classes;
    }
    add_filter( 'nav_menu_css_class', 'check_for_submenu', 10, 2);
    
/*پایان بخش منوهای سایت*/ 

/*sub menu class*/
function add_classes_on_li($classes, $item, $args) {
  $classes[] = 'hvr-wobble-horizontal1';
  return $classes;
}
add_filter('nav_menu_css_class','add_classes_on_li',1,3);


/*end of sub menu effect*/
/*اگر کاربر لاگین کرده باشد نوار ادمین رو نشون نده
if ( is_user_logged_in() ) {
function my_function_admin_bar() {
return false;
}
}
add_filter('show_admin_bar', 'my_function_admin_bar');
پایان لاگین کاربر*/

// فعال کردن بخش ابزارک ها
if ( function_exists('register_sidebar') )
register_sidebar(array(
      'name' => 'ابزارک های سایدبار', // نام سایدبار اینجا قرار میگیرد
      'id'   => 'sidebar-widgets', // آی دی مربوط به سایدبار برای فراخوانی در پوسته
      'description'   => 'ابزارک های این ناحیه در سایدبار نمایش داده خواهند شد', // توضیحات مربوط به سایدبار
      'before_widget' => '<div class="sidebar-widget">', // مقداری که قبل از هر بلوک قرار می گیرد
      'after_widget'  => '</div>', // مقداری که بعد از هر بلوک قرار می گیرد
      'before_title'  => '<h3 class="widget-title">', // مقداری که قبل از عنوان ابزارک قرار می گیرد
      'after_title'   => '</h3>', // مقداری که بعد از عنوان ابزارک قرار می گیرد
     ));
	 
	 register_sidebar(array(
      'name' => 'ابزارک های فوتر', // نام سایدبار اینجا قرار میگیرد
      'id'   => 'footer-widgets', // آی دی مربوط به سایدبار برای فراخوانی در پوسته
      'description'   => 'ابزارک های این ناحیه در فوتر نمایش داده خواهند شد', // توضیحات مربوط به سایدبار
      'before_widget' => '<div class="theme-footer-widgets">',  // مقداری که قبل از هر بلوک قرار می گیرد
      'after_widget'  => '</div>',  // مقداری که بعد از هر بلوک قرار می گیرد
      'before_title'  => '<h3 class="widget-title">', // مقداری که قبل از عنوان ابزارک قرار می گیرد
      'after_title'   => '</h3>', // مقداری که بعد از عنوان ابزارک قرار می گیرد
     ));
/*پایان فعال کردن ابزارک ها*/	
function add_custom_comment_field( $comment_id ) {

   add_comment_meta( $comment_id, 'my_custom_comment_field', $_POST['my_custom_comment_field'] );
}
add_action( 'comment_post', 'add_custom_comment_field' );

/*محدود کردن طول کامنت ها*/
add_filter( 'preprocess_comment', 'wps_preprocess_comment' );
function wps_preprocess_comment($comment) {
    if ( strlen( $comment['comment_content'] ) > 5000 ) {
        wp_die('طول دیدگاه بسیار زیاد است. لطفا حداکثر 5000 کاراکتر وارد کنید');
    }
if ( strlen( $comment['comment_content'] ) < 10 ) {
        wp_die('طول دیدگاه بسیار کم است. لطفا حداقل 60 کاراکتر وارد کنید');
    }
    return $comment;
} 

 add_theme_support( 'post-thumbnails' );


/*[audio5 src="http://your-site/audio/your-audio.mp3" loop="true" autoplay="autoplay" preload="auto" loop="loop" controls=""]
*/
function html5_audio($atts, $content = null) {
	extract(shortcode_atts(array(
		"src" => '',
		"autoplay" => '',
		"preload"=> 'true',
		"loop" => '',
		"controls"=> ''
	), $atts));
	return '<audio src="'.$src.'" autoplay="'.$autoplay.'" preload="'.$preload.'" loop="'.$loop.'" controls="'.$controls.'" autobuffer />';
}
add_shortcode('audio5', 'html5_audio');

 ?>
