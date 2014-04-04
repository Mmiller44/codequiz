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
            <li><a href="#">Contribute</a></li>
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
              <h2 class="quiz_title_front">JavaScript</h2>
              <h3 class="progress_indicator">1/20</h3>

              <a href="" class="flag_question" data-reveal-id="report_modal" data-reveal><img src="images/flag.png"></a>
              <div id="report_modal" class="reveal-modal small" data-reveal>
                <h3 class="flag_header">Flag question?</h3>
                <a class="close-reveal-modal">&#215;</a>
                <p>Please select the options below that best relate to why you are flagging this question.</p>
                <form class="flag_form" action="">
                  <input type="checkbox" name="report_question" value="1"><mark class="report">No correct answer is given.</mark><br>
                  <input type="checkbox" name="report_question" value="2"><mark class="report">Question is worded wrong.</mark><br>
                  <input type="checkbox" name="report_question" value="3"><mark class="report">Not fit for this category.</mark><br>
                  <input type="checkbox" name="report_question" value="4"><mark class="report">Custom:</mark><br>
                  <textarea></textarea>
                </form>
                <input type="submit" class="button report_button" value="Send Report">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="small-6-centered columns">
             <p class="question">Javascript is an object oriented language, true or false?</p>
            </div>
            <div id="answer_block_wrap">


              <ul>
                  <li class="answer_block">
                    <span class="answer_a"><span class="character">A</span></span>
                      <a href="#/score" class="odd">True </a>
                  </li>

                  <li class="answer_block">
                      <span class="answer_a answer_b"><span class="character">B</span></span>       
                        <a href="#">False</a>
                  </li>

                  <li class="answer_block">
                      <span class="answer_a answer_c"><span class="character">C</span></span>       
                      <a href="#" class="odd">I don't understand the question.</a>
                  </li>

                  <li class="answer_block">
                      <span class="answer_a answer_d"><span class="character">D</span></span>       
                      <a href="#">None of the above.</a>
                  </li>
              <ul>

        </section>

      <a class="exit-off-canvas"></a>

      </div>
    </div>
  </div> <!-- Closing Page -->
<script>
  $(document).foundation();
</script>