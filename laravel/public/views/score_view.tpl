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

        <section class="main-section" id="front_end">
          <!-- content goes here -->
          <!-- FRONT END -->
          <div class="row">
            <div class="small-6-centered columns">
              <div class="final_score_wrap">
                <h2 class="quiz_title_front" ng-bind="quizCategory"></h2>

                <h3 class="final_score">Final Score:</h3>
                <h4 class="percentSign">%<h4>
                <h4 class="score" count-to="{{$root.finalScore}}" ng-bind="$root.finalScore" value="0" duration="{{duration}}"></h4>

                <a ng-click="viewAnswers($root.quizID)" class="button front_score_button">View Answers <img src="images/trophy.png" alt="Trophy Icon" width="40" height="40"></a>
                <a href="" class="button front_score_button" data-reveal-id="report_modal" data-reveal>Rate Quiz <img src="images/star.png" alt="Star Icon" width="40" height="40"></a>

                <h5 class="final_score">Share Your Results!</h5>
                <!-- Twitter button for sharing here-->
                 <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://codequiz.io/" data-via="MikeTMiller04" data-lang="en" data-count="none" data-text="I just scored a {{$root.finalScore}}% on a {{quizCategory}} quiz.">Tweet</a>
                <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>


                <div id="report_modal" class="reveal-modal small" data-reveal>
                <h3 class="flag_header">Rate The Quiz!</h3>
                <a class="close-reveal-modal">&#215;</a>
                <p>Please select how you would rate this quiz.</p>
                <form class="flag_form" action="">
                  <input type="radio" name="rate_question" ng-model="rating" value="4"><mark class="report">I loved it!</mark><br>
                  <input type="radio" name="rate_question" ng-model="rating" value="3"><mark class="report">It was pretty good.</mark><br>
                  <input type="radio" name="rate_question" ng-model="rating" value="2"><mark class="report">Could be better.</mark><br>
                  <input type="radio" name="rate_question" ng-model="rating" value="1"><mark class="report">Not worth my time.</mark><br>
                </form>
                <input type="submit" id="reportButton" class="button close-reveal-modal" value="Submit Rating" ng-click="addRating(rating)" data-reveal-id="ThankYou">
              </div>

              <div id="ThankYou" class="reveal-modal small" data-reveal>
                <h3 class="flag_header">Saved!</h3>
                <a class="close-reveal-modal">&#215;</a>
                <p>Thank you for rating the quiz!</p>
                <button class="button close-reveal-modal">Close</button>
              </div> <!-- /ThankYou modal -->
            </div><!-- /columns -->

          </div><!-- /row -->

        </section>

      <a class="exit-off-canvas"></a>

      </div>
    </div>
  </div> <!-- Closing Page -->
<script>
  $(document).foundation();
</script>