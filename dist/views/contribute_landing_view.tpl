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
                      <h3>Contribute!</h3>
                      <p>Each quiz must be a minimum of 10 questions, with a limit of 20. To begin, please fill out the fields below.</p>
                      <label>Quiz Category
                        <select ng-model="quiz.category" required >
                          <option selected disabled>Select Quiz Category</option>
                          <option value="Javascript">JavaScript</option>
                          <option value="HTML">HTML</option>
                          <option value="CSS">CSS</option>
                          <option value="PHP">PHP</option>
                          <option value="Python">Python</option>
                          <option value="ColdFusion">Cold Fusion</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="medium-12 columns">
                      <label>Quiz Title
                        <input type="text" ng-model="quiz.title" placeholder="Ex: Prototyping or Functions" required />
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="medium-12 columns">
                      <label>Description
                        <textarea ng-model="quiz.description" placeholder="Brief description of your quiz. Make it engaging!" required ></textarea>
                      </label>

                      <a ng-href="#/contribute/1" ng-click="submitQuizInfo(quiz)" class="button report_button">Continue</a>
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