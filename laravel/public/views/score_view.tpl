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
              <div class="final_score_wrap">
                <h2 class="quiz_title_front">JavaScript</h2>

                <h3 class="final_score">Final Score:</h3>
                <h4 class="score">100%</h4>

                <a href="#" class="button front_score_button">View Answers <img src="images/trophy.png" alt="Trophy Icon" width="40" height="40"></a>
                <a href="" class="button front_score_button" data-reveal-id="report_modal" data-reveal>Rate Quiz <img src="images/star.png" alt="Star Icon" width="40" height="40"></a>

                <div id="report_modal" class="reveal-modal small" data-reveal>
                <h3 class="flag_header">Rate The Quiz!</h3>
                <a class="close-reveal-modal">&#215;</a>
                <p>Please select how you would rate this quiz.</p>
                <form class="flag_form" action="">
                  <input type="radio" name="report_question" value="1"><mark class="report">I loved it!</mark><br>
                  <input type="radio" name="report_question" value="2"><mark class="report">It was pretty good.</mark><br>
                  <input type="radio" name="report_question" value="3"><mark class="report">Could be better.</mark><br>
                  <input type="radio" name="report_question" value="4"><mark class="report">Not worth my time.</mark><br>
                </form>
                <input type="submit" class="button report_button" value="Submit Rating">
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