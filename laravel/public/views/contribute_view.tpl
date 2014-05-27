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
                <p>Here are some Tips and Tricks to making your quiz:</p>
                <ol>
                  <li>Use line breaks to break up your question.</li>
                  <li>If your quiz doesn't look how you'd like, edit it!</li>
                  <li>You can use code comments to describe or ask a question.</li>
                  <li>White space is very important for word wrapping.</li>
                  <li>Double check your answers before publishing!</li>
                </ol>
              </div>
                <form id='contribution_form'>
                  <h3 id="first">Question #{{routeNumber}}</h3>
                    <textarea ng-model="question.text" placeholder="Type your question out just like you would in a text editor. Comments, strings, variables and numbers are all supported and highlighted." class="contributeDesc" title="Line Breaks are needed for breaking up code.
            Ex: // What is counter equal to?
                var counter = 10;
                counter++;
                counter = ?;"></textarea>
                  <label>A
                    <input id="second" type="text" ng-model="question.a" id="inputText" placeholder="Ex: Cascading Style Sheets" />
                  </label>
                  <label>B
                    <input type="text" ng-model="question.b" id="inputText1" placeholder="Ex: Creative Style Selectors" />
                  </label>
                  <label>C
                    <input type="text" ng-model="question.c" id="inputText2" placeholder="Ex: Both A and B." />
                  </label>                      
                  <label>D
                    <input type="text" ng-model="question.d" id="inputText3" placeholder="Ex: None of the above." />
                  </label>
                  <label>Correct Answer
                    <select ng-model="question.correctAnswer" class="contributeCategory">
                      <option selected disabled>Select Correct Answer</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </label>
                  <label id="third">Explanation
                    <textarea ng-model="question.explanation" class="contributeDesc" placeholder="Be descriptive and helpful. Remember this is going to teach someone why they were wrong!"></textarea>
                  </label>
                  <a ng-href="#/contribute/{{routeNumber - 1}}" ng-show="back" class="button report_button">Back</a>
                  <a ng-href="" ng-click="storeQuestion(question)" ng-hide="hideContinue" class="button report_button">Next</a>
                  <a ng-href="#/home" ng-hide="showSubmit" ng-click="publishQuiz()" class="button report_button">Publish</a>
                </form>
        </section>

      <a class="exit-off-canvas"></a>

      <ol class="joyride-list" data-joyride>
        <li data-id="first" data-options="tip_animation:fade">
            <p>Line Breaks are very important!</p>
            <p>Ex: // What is counter equal to?</p>
            <p>var counter = 10;</p>
            <p>counter++</p>
            <p>counter = ? </p>
            <a href="#" class="small button joyride-next-tip">Next</a>
            <a href="#" class="joyride-close-tip">&times;</a>
        </li>
        <li data-id="second" data-options="tip_animation:fade">
            <p>Answer options are placed here. Text will wrap itself for smaller devices.</p>
            <a href="#" class="small button joyride-next-tip">Next</a>
            <a href="#" class="joyride-close-tip">&times;</a>
        </li>
        <li data-id="third" data-options="tip_animation:fade">
            <p>Lastly, explain why the correct answer is correct. Remember, this will be used to teach someone something new :)</p>
            <a href="#" class="small button joyride-next-tip">Next</a>
            <a href="#" class="joyride-close-tip">&times;</a>
        </li>

      </ol>


      </div>
    </div>
  </div> <!-- Closing Page -->
<script>
  $(document).foundation();
  $(document).foundation('joyride', 'start');
</script>