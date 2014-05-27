<div class="page">
	 <div class="off-canvas-wrap">
     <div class="inner-wrap">
      <nav class="tab-bar" role="navigation">
        <section class="middle tab-bar-section">
          <a href="#/" class="title">Code <mark class="orange">Quiz</mark></a>
        </section>

        <section class="right-small">
          <a class="right-off-canvas-toggle menu-icon" ><span></span></a>
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

      <!-- IF ON MOBILE THIS IS THE VIEW -->
          <div class="row">
            <div class="small-6-centered columns">
              <div ng-hide="desktop" class="mobile_contribution">
                <h2 class="section_title">Contribute!</h2>
                <p>We really appreciate you making quizzes for the Code Quiz community. To create one, please visit this page from a desktop computer.</p>
              </div>
            </div><!-- /columns -->
          </div><!-- /row -->

          <!-- IF ON A DESKTOP THIS IS THE VIEW -->
              <div ng-hide="mobile" class="desktop_contribution">
                <h3>Contribute!</h3>
                <p>Thanks for joining the Code Quiz community. Our community strives off contributions from users like you. To get started, please see the instructions below.</p>
                <ol>
                  <li>Each Quiz must be a minimum of 10 questions to be published.</li>
                  <li>Your quizzes are automatically saved and unpublished until you complete them.</li>
                  <li>All your quizzes can be seen under "My Quizzes".</li>
                  <li>Quizzes can be unpublished and edited anytime.</li>
                  <li>Any inappropriate content will be removed.</li>
                </ol>
              </div>
              <form id='contribution_form' ng-hide="mobile">
                  <label>Quiz Category
                    <select ng-model="quiz.category" class="contributeCategory animated {{shake1}}" required >
                      <option selected disabled>Select Quiz Category</option>
                      <option value="Javascript">JavaScript</option>
                      <option value="HTML">HTML</option>
                      <option value="CSS">CSS</option>
                      <option value="PHP">PHP</option>
                      <option value="Python">Python</option>
                      <option value="ColdFusion">ColdFusion</option>
                    </select>
                  </label>
                  <label>Quiz Title
                    <input type="text" id="contributeTitle" class="animated {{shake2}}" ng-model="quiz.title" placeholder="Ex: Prototyping or Functions" required />
                  </label>

                  <label>Description
                    <textarea ng-model="quiz.description" class="contributeDesc animated {{shake3}}" placeholder="Brief description of your quiz. Make it engaging!" required ></textarea>
                  </label>
                  <a ng-hide="loggedIn" class="button contributeButton" data-reveal-id="logIn">Create A Quiz</a>
                  <a ng-hide="!loggedIn" ng-href="" ng-click="submitQuizInfo(quiz)" class="button contributeButton">{{createText}}</a>
                  <a ng-hide="!loggedIn" ng-href="#/myQuizzes" class="button contributeButton">My Quizzes</a>
            </form>

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