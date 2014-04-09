<div class="page">
	 <div class="off-canvas-wrap">
     <div class="inner-wrap">
      <nav class="tab-bar" role="navigation">
        <section class="middle tab-bar-section">
          <a href="#/" class="title">Code <mark class="orange">Quiz</mark></a>
        </section>

        <section class="right-small">
          <a class="right-off-canvas-toggle menu-icon"><span></span></a>
        </section>
      </nav>

        <aside class="right-off-canvas-menu">
           <ul class="off-canvas-list">
            <li><label id="nav-label">Code <mark class="orange">Quiz</mark></label></li>
            <li><a href="#/">Home</a></li>
            <li><a href="#/contribute">Contribute</a></li>
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

              <h2 class="section_title">{{quizTitles[0].sub_category}}</h2>
              <dl class="accordion front_end_accordion" data-accordion>
                <dd class="no_hover" ng-repeat="quizzes in quizTitles">
                  <a ng-href="#panel{{quizzes.quiz_ID}}" target="_self" ng-click="toggleImage()">{{quizzes.title}} <mark class="plus"><img src="{{imageSrc}}" width="20" height="20"></mark></a>
                  <div id="panel{{quizzes.quiz_ID}}" class="content">
                    <p>{{quizzes.description}}</p>
                    <h3 class="star">Rating:<img src="images/star.png" width="20" height="20"><img src="images/star.png" width="20" height="20"><img src="images/star.png" width="20" height="20"></h3>
                    <h4>By {{quizzes.username}}</h4>
                    <a ng-href="#/quiz" class="button front_start">Start Quiz<img src="images/play.png" width="30" height="30"></a>
                  </div>
                </dd>

<!--                 <dd class="no_hover">
                  <a href="#">Prototypes <mark class="plus"><img src="images/plus.png" width="20" height="20"></mark></a>
                </dd>

                <dd class="no_hover">
                  <a href="#">Functions <mark class="plus"><img src="images/plus.png" width="20" height="20"></mark></a>
                </dd> -->
              </dl>
            </div>
          </div>
        </section>

      <a class="exit-off-canvas"></a>

      </div>
    </div>
  </div> <!-- Closing Page -->
<script>
  $(document).foundation();
</script>