var panel = $("#quiz-area");

var questions = [{
  question: "In what month did The Venture Bros Premier??",
  answers: ["February", "January", "May", "November"],
  correctAnswer: "February"
}, {
  question: "Incredible Industries is a take off on what popular superhero team?",
  answers: ["The Fantastic Four", "The X Men", "The Avengers", "The Justice League"],
  correctAnswer: "The Fantastic Four"
}, {
  question: "The sons of Dr. Thaddeus Venture are named:",
  answers: ["John and Rick", "Rick and Morty", "Dean and Hank", "Tom and Jerry"],
  correctAnswer: "Chicago Bulls"
}, {
  question: "The 'Sovereign' is the mysterious leader of the Guild of Calamitous Intent. In Episode 26, the 'Sovereign' is revealed to be what ageless rocker?",
  answers: ["Mick Jagger", "David Bowie", "Tommy Lee", "Madonna"],
  correctAnswer: "Nirvana"
}, {
  question: "On what network did the series premier?",
  answers: ["ABC", "Comedy Central", "Cartoon Network", "Fox"],
  correctAnswer: "The Lion King"
}, {
  question: "Who is the voice of Brock Samson?",
  answers: ["Patrick Warburton", "Robert DeNero", "Mel Gibson", "Dean Martin"],
  correctAnswer: "Fresh"
}, {
  question: "This animated series, featuring the adventures of the Venture family and perpetual retainer Brock Samson, was inspired by what 1960's Hanna-Barbera cartoon?",
  answers: ["Tom and Jerry", "The Tick", "Adventures of the Hardy Boys", "Johnny Quest"],
  correctAnswer: "Skeeter"
}, {
  question: "Whose childhood nickname is Rusty?",
  answers: ["Dr Thaddeus Venture", "Hank Venture", "Dean Venture", "Jonas Venture Jr"],
  correctAnswer: "Mr.Belding"
}];

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    // $('body').css('background-image', 'display','none');
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
      $('body').css('background-image', 'url(../images/brock1.jpg)',);

});


$(document).on("click", "#done", function() {
  game.done();
});


