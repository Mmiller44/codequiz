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

        <section class="main-section" id="front_end">
          <!-- content goes here -->
          <!-- FRONT END -->
          <div class="row">
            <div class="small-6-centered columns">
              <div ng-hide="desktop">
                <h2 class="section_title">Contribute!</h2>
                <p>We really appreciate you making quizzes for the Code Quiz community. To create one, please visit this page from a desktop computer.</p>
              </div>
              <div ng-hide="mobile">
                <h2>DESKTOP</h2>
              </div>
                
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