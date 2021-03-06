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
                <form id='contribution_form'>
                  <div class="row">
                    <div class="medium-12 columns">
                      <h3>Question #{{routeNumber}}</h3>
                      <label>Question
                        <textarea ng-model="question.text" placeholder="Ex: What does CSS stand for?" required ></textarea>
                      </label>
                      <label>A
                        <input type="text" ng-model="question.a" placeholder="Ex: Cascading Style Sheets" required />
                      </label>
                      <label>B
                        <input type="text" ng-model="question.b" placeholder="Ex: Coloring Style Sheets" required />
                      </label>
                      <label>C
                        <input type="text" ng-model="question.c" placeholder="Ex: Coloring Style Sheets" required />
                      </label>                      
                      <label>D
                        <input type="text" ng-model="question.d" placeholder="Ex: Coloring Style Sheets" required />
                      </label>
                      <label>Correct Answer
                        <select ng-model="question.correctAnswer" required >
                          <option selected disabled>Select Correct Answer</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
                      </label>

                      <a ng-href="#/contribute/{{routeNumber + 1}}" ng-click="storeQuestion(question)" ng-hide="hideContinue" class="button report_button">Continue</a>
                      <a ng-href="#/" ng-hide="showSubmit" class="button report_button">Submit</a>

                    </div>
                  </div>

                </form>
              </div>

        </section>

      <a class="exit-off-canvas"></a>

      </div>
    </div>
  </div> <!-- Closing Page -->
<script>
  $(document).foundation();
</script>