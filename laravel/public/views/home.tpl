<div class="page">
   <div class="off-canvas-wrap">
     <div class="inner-wrap">
      <nav class="tab-bar" role="navigation">
        <section class="middle tab-bar-section">
          <a href="#/home" class="title">Code <mark class="orange">Quiz</mark></a>
        </section>

        <section class="right-small">
          <a class="right-off-canvas-toggle menu-icon" ><span></span></a>
        </section>
      </nav>

        <aside class="right-off-canvas-menu">
         <div ng-hide="loggedIn">
            <ul class="off-canvas-list">
              <li><label id="nav-label">Code <mark class="orange">Quiz</mark></label></li>
              <li class="borderTop"><a href="#/home">Home</a></li>
              <li><a href="#/contribute">Contribute</a></li>
            </ul>
          </div>
          <div ng-hide="!loggedIn">
            <ul class="off-canvas-list">
              <li><label id="nav-label">Code <mark class="orange">Quiz</mark></label></li>
            <img ng-src="{{userImage}}" class="profileImage" alt="Profile Picture" title="You!">
            <h2 class="profileUser">{{user}}</h2>
              <li class="borderTop"><a href="#/home">Home</a></li>
              <li><a href="#/contribute">Contribute</a></li>
              <li><a href="#/myQuizzes">My Quizzes</a></li>
            </ul>
            <h3 class="menuShare">Share Us!</h3>
            <a href="https://twitter.com/share" class="twitter-share-button" data-via="MikeTMiller04" data-size="large" data-count="none">Tweet!</a>
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
        <section class="main-section">
          <!-- content goes here -->
          <!-- FRONT END -->
          <div class="row" id="front_end">
            <div class="large-12 small-6-centered columns">
              <h2 class="section_title">Front End</h2>
              <dl class="accordion front_end_accordion">
                <dd ng-repeat="quiz in $root.frontQuizzes">
                  <a href="#/quiz_landing/{{quiz.sub_category}}" ng-click="loadTitles(quiz.sub_category)">{{quiz.sub_category}} <mark class="arrow"><img src="images/arrow.png"></mark></a>
                </dd>
              </dl>
            </div>
          </div>
          <!-- BACK END -->
          <div class="row" id="back_end">
            <div class="large-12 small-6-centered columns">
              <h2 class="section_title">Back End</h2>
              <dl class="accordion back_end_accordion">
                <dd ng-repeat="quiz in $root.backQuizzes">
                  <a href="#/quiz_landing/{{quiz.sub_category}}" ng-click="loadTitles(quiz.sub_category)">{{quiz.sub_category}} <mark class="arrow"><img src="images/arrow_back.png"></mark></a>
                </dd>
              </dl>
            </div>
          </div>
        </section>

      <a class="exit-off-canvas"></a>

      </div>
    </div>
  </div> <!-- Closing Page -->
