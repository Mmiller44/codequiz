<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Code Quiz The only mobile app that quizzes you on multiple web design and development languages with challenging questions</title>

	<!-- Foundation -->
	<link rel="stylesheet" type="text/css" href="css/foundation.css">
  <script type="text/javascript" src="js/vendor/modernizr.min.js"></script>

	<!-- My CSS -->
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	<div class="page">
	 <div class="off-canvas-wrap">
     <div class="inner-wrap">
      <nav class="tab-bar" role="navigation">
        <section class="middle tab-bar-section">
          <a href="index.html" class="title">Code <mark class="orange">Quiz</mark></a>
        </section>

        <section class="right-small">
          <a class="right-off-canvas-toggle menu-icon" ><span></span></a>
        </section>
      </nav>

        <aside class="right-off-canvas-menu">
           <ul class="off-canvas-list">
            <li><label id="nav-label">Code <mark class="orange">Quiz</mark></label></li>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Contribute</a></li>
          </ul>
          
          <div id="login_section">
            <a href="#" class="button github"><img src="images/github.png" width="40" height="40">Github Login</a>
            <a href="#" class="button twitter text-center"><img src="images/twitter.png" width="40" height="40">Twitter Login</a>
          </div>

          <div id="social_media">

          </div>
        </aside>

        <section class="main-section" id="front_end">
          <!-- content goes here -->
          <div class="row">
            <div class="small-6-centered columns">

              <h2 class="section_title">JavaScript</h2>
              <dl class="accordion front_end_accordion" data-accordion>
                <dd class="no_hover">
                  <a href="#panel2">General <mark class="plus"><img src="images/plus.png" width="20" height="20"></mark></a>
                  <div id="panel2" class="content">
                    <p>This quiz will challenge users on generic questions, such as: logic, arrays, and functions.</p>
                    <h3>Rating:<img src="images/star.png" width="20" height="20"><img src="images/star.png" width="20" height="20"><img src="images/star.png" width="20" height="20"></h3>
                    <h4>By Mike Miller</h4>
                    <a href="quiz.html" class="button front_start">Start Quiz<img src="images/play.png" width="30" height="30"></a>
                    <a href="quiz.html" class="button front_rank">Ranking<img src="images/trophy.png" width="30" height="30"></a>
                  </div>
                </dd>

                <dd class="no_hover">
                  <a href="#">Prototypes <mark class="plus"><img src="images/plus.png" width="20" height="20"></mark></a>
                </dd>

                <dd class="no_hover">
                  <a href="#">Functions <mark class="plus"><img src="images/plus.png" width="20" height="20"></mark></a>
                </dd>
              </dl>
            </div>
          </div>
        </section>

      <a class="exit-off-canvas"></a>

      </div>
    </div>
  </div> <!-- Closing Page -->

	<script type="text/javascript" src="js/jquery-2.0.2.js"></script>
  <script type="text/javascript" src="js/vendor/jquery.min.js"></script>
  <script type="text/javascript" src="js/foundation.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
  <script>
  $(document).foundation();
</script>
</body>
</html>