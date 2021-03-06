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
        </aside>

        <section class="main-section" id="front_end">
          <!-- content goes here -->
          <div class="row" ng-hide="noQuizzes">
            <div class="small-6-centered columns">
              <h2 class="section_title" ng-hide="noPublish">Published Quizzes</h2>
              <dl class="accordion front_end_accordion" data-accordion>
                <dd class="no_hover" ng-repeat="quizzes in published">
                  <a ng-href="#panel{{quizzes.quiz_ID}}" target="_self" ng-click="toggleImage()">{{quizzes.title}} <mark class="arrow"><img ng-src="{{imageSrc}}"></mark></a>
                  <div id="panel{{quizzes.quiz_ID}}" class="content">
                    <p>{{quizzes.description}}</p>
                    <h3 class="star">Rating:<img ng-repeat="rank in getNumber(quizzes.quiz_ranking) track by $index" src="images/star.png" width="20" height="20"></h3>
                    <h4>By <a href="#/quizzes/{{quizzes.username}}" class="usernameLink">{{quizzes.username}}</a></h4>
                    <a ng-href="#/quiz/{{quizzes.quiz_ID}}/" ng-click='setQuizID(quizzes.quiz_ID)' class="button front_start">Start Quiz<img src="images/play.png" width="30" height="30"></a>
                    <a ng-href="" ng-click="unpublish(quizzes.quiz_ID)" class="button delete">Unpublish Quiz<img src="images/unpublish.png" width="25" height="25"></a>
                  </div>
                </dd>

              <h2 class="section_title">Unpublished Quizzes</h2>
              <dl class="accordion front_end_accordion" data-accordion>
                <dd class="no_hover" ng-repeat="quizzes in unpublished">
                  <a ng-href="#panel{{quizzes.quiz_ID}}" target="_self" ng-click="toggleImage()">{{quizzes.title}} <mark class="arrow"><img ng-src="{{imageSrc}}"></mark></a>
                  <div id="panel{{quizzes.quiz_ID}}" class="content">
                    <p>{{quizzes.description}}</p>
                    <h3 class="star">Rating:<img ng-repeat="rank in getNumber(quizzes.quiz_ranking) track by $index" src="images/star.png" width="20" height="20"></h3>
                    <h4>By <a href="#/quizzes/{{quizzes.username}}" class="usernameLink">{{quizzes.username}}</a></h4>
                    <a ng-href="" ng-click='addQuestions(quizzes.quiz_ID)' class="button edit">Edit<img src="images/edit.png" width="25" height="25"></a>
                    <a ng-href="" class="button delete">Delete<img src="images/trash.png" width="20" height="20"></a>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <div class="row" ng-show="noQuizzes">
            <div class="small-6-centered columns">
              <h2 class="section_title">Woah! You haven't made any quizzes!</h2>
              <h2 class="section_title">Let's change that! <a ng-href="#/contribute" class="button">Create a Quiz!</a></h2>
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