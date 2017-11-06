<?php get_header();?>
<body <?php body_class(); ?>>
    <!-- Header Section -->
    <div class="header">
        <!-- Header Top-->
        <div class="header-top">
            <div class="container-fluid">
                <div class="header-top-date">جمعه 12 آبان 1396</div>
                <div class="header-top-left">
                    <span class="user-menu">
                        <a href="#">ثبت نام</a> | 
                        <a href="#">ورود</a>
                    </span>
                    <span class="social-networks">
                        <a href="https://instagram.com/mojonlineclinic">
                            mojonlineclinic<i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <!-- Header -->
        <nav class="navbar navbar-default">
            <div class="container-fluid">  
                <!-- Logo -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <img src="<?php bloginfo('template_url'); ?>/assets/image/logo-white.png" />
                    </a>
                </div>
                <!-- Navigation Bar 
                <ul class="nav navbar-nav">
                    <li><a href="#about">درباره مرکز</a></li>
                    <li><a href="#">تعرفه ارائه خدمات</a></li>
                    <li><a href="#services">خدمات آنلاین</a></li>
                    <li><a href="#contactUs">تماس با ما</a></li>
                </ul>
				-->
				 <?php
						$argsmenu = array(
						'theme_location'    => 'top_menu',
						'container'            =>    false,
						'menu_class'        =>    'nav navbar-nav'
						);
						wp_nav_menu($argsmenu);
				?>	
                <!-- Phone Number -->
                <div class="header-phone left">
                    <div class="phone-icon right">
                        
                    </div>
                    <div class="phone-text">
                        <div class="phone-text-head">با ما تماس بگیرید : </div>
                        <div>03132664429 - 03132664430</div>
                    </div>
                </div>
                
            </div>
        </nav>
        
    </div>
    <!-- Body Section -->
    				<?php	
						/*while (have_posts()) : the_post();
						the_content(''); 
						endwhile;*/
					?>
    <div class="container ">
        <!-- Body Menu -->
        <div id="services" class="row body-menu">
            <div class="col-md-3">
                <a href="#">
                    <div class="body-menu-icon phone-menu"></div>
                    <div class="body-menu-text">دریافت مشاوره آنلاین</div>
                </a>
            </div>
            <div class="col-md-3">
                <a href="#">
                    <div class="body-menu-icon calendar-menu"></div>
                    <div class="body-menu-text">دریافت نوبت آنلاین</div>
                </a>
            </div>
            <div class="col-md-3">
                <a href="#">
                    <div class="body-menu-icon ruler-menu"></div>
                    <div class="body-menu-text">شرکت در آزمون آنلاین</div>
                </a>
            </div>
            <div class="col-md-3">
                <a href="#">
                    <div class="body-menu-icon profile-menu"></div>
                    <div class="body-menu-text">مشاورین مرکز</div>
                </a>
            </div>
        </div>
        <!-- Body Content -->
        
        
        <div class="row body-content">
            <div class="col-md-12">
                <div id="about" class="well">
                    <h4 class="content-title">درباره مرکز روانشناختی و مشاوره موج</h4>
                    <p class="content-body">مرکز خدمات روانشناختی و مشاوره موج با مجوز رسمی از سازمان نظام روان شناسی (شماره پروانه 648) به مدیریت خانم دکتر صدیقه رضایی با هدف ارائه خدمات روانشناسی و مشاوره توسط بهترین کارشناسان و متخصصان سراسر کشور برای همه ی مردم ایران و همه فارسی زبانان سراسر جهان از کودک تا سالمند در زمینه های مختلف با شعار مشاوره  مطمئن برای همه، در همه جا، کوتاهترین زمان و با حداقل هزینه راه اندازی شده است.این مرکز برای اولین بار  در ایران عمده خدمات خود را از آزمونهای روانشناختی تا برگزاری جلسات مشاوره فردی و گروهی و کارگاه های تخصصی روان شناسی را به صورت آنلاین برگزار می کند.منظور از مشاوره آنلاین ارتباط با مشاور از طریق سایت است به گونه ای که هم مراجع و هم مشاور می توانند در فضای مجازی با داشتن صدا و تصویر یکدیگربه برگزاری جلسه مشاوره تخصصی فردی، گروهی و یا برگزاری کارگاه بپردازند. مرکز خدمات روانشناختی موج با بهره گیری از بهترین کارشناسان در زمینه فناوری اطلاعات، فضایی برای شما فراهم آورده که در هر جای دنیا به راحتی، در کوتاهترین زمان و با حداقل هزینه  می توانید از خدمات مختلف روانشناسی و مشاوره در سطوح مختلف که توسط افراد متخصص، کارآزموده و دارای مدرک معتبر دریافت کنید و از زندگی خود نهایت لذت را ببرید و آرامش به معنای واقعی را تجربه کنید.</p>
                    <p class="content-slogan">کافیست یک بار امتحان کنید</p>
                </div>
            </div>
        </div>
        
    </div>
    <!-- Parallax Slogan -->
    <div class="parallax" >
        <h1 class="content-parallax">به صورت 24 ساعته در خدمت شما هستیم.</h1>
    </div>
    <!-- Team Carousel -->
    <div class="team-section">
        <p class="team-title">مشاورین مرکز مشاوره موج</p>
        <div class="owl-carousel">
            
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/NafiseKhodadadi.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">نفیسه خدادی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/aghamohammadi.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر سمیه آقا محمدی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/akram-dehghani.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر اکرم دهقانی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/Bahman-Babayee.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر بهمن بابایی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/arezou-rezayee.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">آرزو رضایی</p>
                    <p class="team-memeber-title">روان شناسی بالینی متخصص در زمینه اختلالات کودکان</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/ameli.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر شیدا جبل عاملی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
          
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/Abouzar-Golvarz.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر ابوذر گلورز</p>
                    <p class="team-memeber-title">متخصص روانشناسی کودک و نوجوان</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/mehdi-ranjbar.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">مهدی رنجبر</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/mojtaba-amiri.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر مجتبی امیری مجد</p>
                    <p class="team-memeber-title">متخصص روانشناسی کودک و نوجوان</p>
                </div>
            </div>
           
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/defualt.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">سمیه رشیدی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/defualt.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">سمیه نورانی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/defualt.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">فاطمه تقی زاده</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src=<?php bloginfo('template_url'); ?>/assets/image/team-profile/defualt.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">رضوان بت شکن</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/defualt.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر مصطفی خان زاده</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/defualt.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر صدیقه رضایی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/defualt.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر آمنه حدادی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/defualt.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر حمیده میرصانعی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            <div class="team-members">
                <div class="team-image-container">
                    <img src="<?php bloginfo('template_url'); ?>/assets/image/team-profile/defualt.jpg" />
                </div>
                <div class="team-descryption">
                    <p class="team-member-name">دکتر حدیث حاجی زاده ارمکی</p>
                    <p class="team-memeber-title">مشاور</p>
                </div>
            </div>
            
        </div>
    </div>
    <!-- Footer Section -->
    <div class="footer-top navbar">
        <div class="table-display">
            <ul class="nav navbar-nav">
                <li><a href="#">پرسش های متدوال</a></li>
                <li><a href="#">آیا من به مشاوره نیاز دارم؟</a></li>
                <li><a href="#">آیا فردی از اطرافیان من به مشاوره نیاز دارد؟</a></li> 
                <li><a href="#">قوانین سایت</a></li>                
            </ul>
        </div>
    </div>
    <div id="contactUs" class="footer">
        <div class="container contact">
            <div class="col-md-4">
                <div class="contact-icons">
                    <span class="lnr lnr-phone-handset"></span>
                </div>
                <span class="titles"> شماره های تماس</span>
                <p>03132664429 و 03132664430 </p>
            </div>
            <div class="col-md-4">
                <div class="contact-icons">
                    <span class="lnr lnr-map"></span>
                </div>
                <span class="titles"> آدرس</span>
                <p>اصفهان ، خیابان شریف واقفی ، جنب داروخانه بهشتی ، ساختمان آرین ، طبقه اول ، واحد 3</p>
            </div>
            <div class="col-md-4">
                <div class="contact-icons">
                    <span class="lnr lnr-envelope"></span>
                </div>
                <span class="titles"> رایانامه</span>
                <p><a href="mailto:info@moj-online.com">info@moj-online.com</a></p>
            </div>
        </div>
        <div class="footer-logo">
            <img style="width:22%" src="<?php bloginfo('template_url'); ?>/assets/image/logo-footer.png" />
        </div>
        <div class="footer-copyright">
				<?php get_footer(); ?>
            <p style="font-size:8pt;">تمامی حقوق مادی و معنوی برای مرکز روانشناختی مشاوره موج محفوظ می باشد.</p>
        </div>
        
    </div>
	<?php wp_footer(); ?>
</body>
</html>