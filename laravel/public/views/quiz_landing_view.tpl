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
          <div ng-hide="loggedIn">
            <ul class="off-canvas-list">
              <li><label id="nav-label">Code <mark class="orange">Quiz</mark></label></li>
              <li class="borderTop"><a href="#/">Home</a></li>
              <li><a href="#/contribute">Contribute</a></li>
            </ul>
          </div>
          <div ng-hide="!loggedIn">
            <ul class="off-canvas-list">
              <li><label id="nav-label">Code <mark class="orange">Quiz</mark></label></li>
            <img ng-src="{{userImage}}" class="profileImage" alt="Profile Picture" title="You!">
            <h2 class="profileUser">{{user}}</h2>
              <li class="borderTop"><a href="#/">Home</a></li>
              <li><a href="#/contribute">Contribute</a></li>
              <li><a href="#/myQuizzes">My Quizzes</a></li>
            </ul>
            <h3 class="menuShare">Share Us!</h3>
            <a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-via="MikeTMiller04" data-size="large" data-count="none">Tweet!</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

            <div class="fb-share-button" data-href="http://codequiz.io" data-type="button"></div>

            <div id="fb-root"></div>
            <script>(function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=512385565533608&version=v2.0";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>
          </div>
        </aside>

        <section class="main-section" id="front_end">
          <!-- content goes here -->
          <div class="row">
            <div class="small-6-centered columns">

              <h2 class="section_title">{{quiz[0].sub_category}}</h2>
              <dl class="accordion front_end_accordion" data-accordion>
                <dd class="no_hover" ng-repeat="quizzes in quiz">
                  <a ng-href="#panel{{quizzes.quiz_ID}}" target="_self" ng-click="toggleImage()">{{quizzes.title}} <mark class="arrow"><img ng-src="{{imageSrc}}"></mark></a>
                  <div id="panel{{quizzes.quiz_ID}}" class="content">
                    <p>{{quizzes.description}}</p>
                    <h3 class="star">Rating:<img ng-repeat="rank in getNumber(quizzes.quiz_ranking) track by $index" src="images/star.png" width="20" height="20"></h3>
                    <h4>By <a href="#/quizzes/{{quizzes.username}}" class="usernameLink">{{quizzes.username}}</a></h4>
                    <a ng-href="" ng-hide="loggedIn" class="button front_start" data-reveal-id="logIn">Start Quiz<img src="images/play.png" width="30" height="30"></a>
                    <a ng-href="#/quiz/{{quizzes.quiz_ID}}/" ng-hide="!loggedIn" ng-click='setQuizID(quizzes.quiz_ID)' class="button front_start">Start Quiz<img src="images/play.png" width="30" height="30"></a>
                  </div>
                </dd>
              </dl>
            </div>
          </div>


          <div id="logIn" class="reveal-modal small" data-reveal>
            <h3 class="flag_header">Whoops!</h3>
            <a class="close-reveal-modal">&#215;</a>
            <p>You must log in to continue.</p>
            <a href="" ng-click="facebookLogin()" class="button facebook" id="homeButton"><img src="images/fb_logo.png" width="35" height="35">Facebook Login</a>

            <a href="" ng-click="twitterLogin()" class="button twitter text-center"><img src="images/twitter.png" width="40" height="40">Twitter Login</a>
          </div> <!-- /log In modal -->

        </section>

      <a class="exit-off-canvas"></a>

      </div>
    </div>
  </div> <!-- Closing Page -->
<script>
  $(document).foundation();
</script>