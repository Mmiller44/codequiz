	<div ng-controller="quiz_controller">
  <div class="page" ng-cloak>
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
              <h2 class="quiz_title_front" ng-bind="quizCategory"></h2>
              <h3 class="progress_indicator">{{indicatorNumber}}/{{questions.length}}</h3>

              <a href="" class="flag_question" data-reveal-id="report_modal"><img src="images/flag.png"></a>
             
            </div>
          </div>
            <div id="questionContainer">
              <code class="question" language="{{quizCategory}}" hljs source="questions[currentNumber].question"></code>
            </div>
            <div id="answer_block_wrap">
              <ul ng-cloak>
                  <li class="answer_block">
                    <span class="answer_a"><span class="character">A</span></span>
                      <a href="" class="odd" ng-click="saveAnswer('A')" ng-bind="questions[currentNumber].a"></a>
                  </li>

                  <li class="answer_block">
                      <span class="answer_a answer_b"><span class="character">B</span></span>       
                        <a href="" ng-click="saveAnswer('B')" ng-bind="questions[currentNumber].b"></a>
                  </li>

                  <li class="answer_block">
                      <span class="answer_a answer_c"><span class="character">C</span></span>       
                      <a href="" class="odd" ng-click="saveAnswer('C')" ng-bind="questions[currentNumber].c"></a>
                  </li>

                  <li class="answer_block">
                      <span class="answer_a answer_d"><span class="character">D</span></span>       
                      <a href="" ng-click="saveAnswer('D')" ng-bind="questions[currentNumber].d"></a>
                  </li>
              <ul>
            </div>

        </section>

      <a class="exit-off-canvas"></a>

      </div>
    </div>
  </div> <!-- Closing Page -->
</div>
 <div id="report_modal" class="reveal-modal" data-reveal>
    <h3 class="flag_header">Flag question?</h3>
    <a class="close-reveal-modal">&#215;</a>
    <p>Please select the options below that best relate to why you are flagging this question.</p>
   

    <form class="flag_form" novalidate>
      <input type="checkbox" ng-model="input.radio1" name="input1" value="No correct Answer is given"><mark class="report">No correct answer is given.</mark><br>
      <input type="checkbox" ng-model="input.radio2" name="input2" value="Question is worded wrong"><mark class="report">Question is worded wrong.</mark><br>
      <input type="checkbox" ng-model="input.radio3" name="input3" value="Not fit for this category"><mark class="report">Not fit for this category.</mark><br>
      <label class="report">Other:</label>
      <textarea ng-model="input.custom" name="input4"></textarea>
    </form>
    
    <a ng-href="" id="reportButton" class="button close-reveal-modal" ng-click="submitReport(input)" data-reveal-id="ThankYou">Send Report</a>

    <div id="ThankYou" class="reveal-modal small" data-reveal>
      <h3 class="flag_header">Saved!</h3>
      <a class="close-reveal-modal">&#215;</a>
      <p>Thank you for letting us know about this question. We will be looking into this further.</p>
    </div> <!-- /ThankYou modal -->

  </div>
<script>
  $(document).foundation();
</script>