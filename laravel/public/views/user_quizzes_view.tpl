<div class="page">
	 <div class="off-canvas-wrap">
     <div class="inner-wrap">
      <nav class="tab-bar" role="navigation">
        <section class="middle tab-bar-section">
          <a href="#/home" class="title">Code <mark class="orange">Quiz</mark></a>
        </section>

        <section class="right-small">
          <a class="right-off-canvas-toggle menu-icon"><span></span></a>
        </section>
      </nav>

        <aside class="right-off-canvas-menu">
           <ul class="off-canvas-list">
            <li><label id="nav-label">Code <mark class="orange">Quiz</mark></label></li>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/contribute">Contribute</a></li>
          </ul>
        </aside>

        <section class="main-section" id="front_end">
          <!-- content goes here -->
          <div class="row">
            <div class="small-6-centered columns">
              <div ng-hide="isUser">
              <h2 class="section_title">All Quizzes by {{searchUser}}</strong></h2>
              <dl class="accordion front_end_accordion" data-accordion>
                <dd class="no_hover" ng-repeat="quizzes in quizInfo">
                  <a ng-href="#panel{{quizzes.quiz_ID}}" target="_self" ng-click="toggleImage()">{{quizzes.title}} <mark class="plus"><img src="{{imageSrc}}" width="20" height="20"></mark></a>
                  <div id="panel{{quizzes.quiz_ID}}" class="content">
                    <p>{{quizzes.description}}</p>
                    <h3 class="star">Rating:<img src="images/star.png" width="20" height="20"><img src="images/star.png" width="20" height="20"><img src="images/star.png" width="20" height="20"></h3>
                    <h4>By {{quizzes.username}}</h4>
                    <a ng-href="#/quiz/{{quizzes.quiz_ID}}/" ng-click='setQuizID(quizzes.quiz_ID)' class="button front_start">Start Quiz<img src="images/play.png" width="30" height="30"></a>
                  </div>
                </dd>
              </dl>
            </div>
            
            <div ng-hide="noUser">
              <h2 class="section_title">Sorry, no quizzes found.</h2>
            </div>

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