$(document).ready(function() {
  // ================================================================================================= SMOOTH SCROLLING
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // =================================================================================================  FIXED NAVBAR
  $(document).scroll(function() {    
    var current_scrolled_lenght = $(document).scrollTop();
    var section_Home_Height = $('#section_Home').outerHeight();

    if (current_scrolled_lenght >= section_Home_Height) {
      $(".navbar").addClass("fixed_navbar");
    } else {
      $(".navbar").removeClass("fixed_navbar");
    }   
  });

  // =================================================================================================  COLAPSE NAVBAR
  $('a').click(function() {
    $("#myNavbar").collapse('hide');
  });

  // =================================================================================================  SCROLL TO NAVBAR
  $(".navbar-toggle").click(function (){
    $('html, body').animate({
      scrollTop: $(".navbar").offset().top
    }, 800);
  });

  // =================================================================================================  PORTFOLIO TRANSITION 
  $('.all_btn').addClass('active_btn');
  $(".gallery_buttons button").focus(function(){
    $(".gallery_buttons button").removeClass('active_btn');
    $(this).addClass('active_btn');
  });

  setTimeout(function(){
    $('.gallery_img:has(img[alt="Flutter"])').removeClass('add_img');
    $('.gallery_img:has(img[alt="Firebase"])').removeClass('add_img');
    $('.gallery_img:has(img[alt="Android"])').removeClass('add_img');
    $('.gallery_img:has(img[alt="Bootstrap"])').removeClass('add_img');
    $('.gallery_img:has(img[alt="JQuery"])').removeClass('add_img');
    },0,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').hide();
      $('.gallery_img:has(img[alt="Firebase"])').hide();
      $('.gallery_img:has(img[alt="Android"])').hide();
      $('.gallery_img:has(img[alt="Bootstrap"])').hide();
      $('.gallery_img:has(img[alt="JQuery"])').hide();
    },500,
    setTimeout(function(){
      $('.gallery_img').show().addClass('add_img');
  },550)));

  $(".all_btn").click(function(){
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Firebase"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Android"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Bootstrap"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="JQuery"])').removeClass('add_img');
    },0,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').hide();
      $('.gallery_img:has(img[alt="Firebase"])').hide();
      $('.gallery_img:has(img[alt="Android"])').hide();
      $('.gallery_img:has(img[alt="Bootstrap"])').hide();
      $('.gallery_img:has(img[alt="JQuery"])').hide();
    },500,
    setTimeout(function(){
      $('.gallery_img').show().addClass('add_img');
    },550)));
  });

  $(".Flutter_btn").click(function(){
      setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Firebase"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Android"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Bootstrap"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="JQuery"])').removeClass('add_img');
    },0,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Firebase"])').hide();
      $('.gallery_img:has(img[alt="Android"])').hide();
      $('.gallery_img:has(img[alt="Bootstrap"])').hide();
      $('.gallery_img:has(img[alt="JQuery"])').hide();
    },500,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').show().addClass('add_img');
    },450)));
  });

  $(".Firebase_btn").click(function(){
      setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Firebase"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Android"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Bootstrap"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="JQuery"])').removeClass('add_img');
    },0,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').hide();
      $('.gallery_img:has(img[alt="Android"])').hide();
      $('.gallery_img:has(img[alt="Bootstrap"])').hide();
      $('.gallery_img:has(img[alt="JQuery"])').hide();
    },500,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Firebase"])').show().addClass('add_img');
    },450)));
  });

  $(".Android_btn").click(function(){
      setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Firebase"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Android"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Bootstrap"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="JQuery"])').removeClass('add_img');
    },0,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').hide();
      $('.gallery_img:has(img[alt="Firebase"])').hide();
      $('.gallery_img:has(img[alt="Bootstrap"])').hide();
      $('.gallery_img:has(img[alt="JQuery"])').hide();
    },500,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Android"])').show().addClass('add_img');
    },450)));
  });

  $(".Bootstrap_btn").click(function(){
      setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Firebase"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Android"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Bootstrap"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="JQuery"])').removeClass('add_img');
    },0,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').hide();
      $('.gallery_img:has(img[alt="Firebase"])').hide();
      $('.gallery_img:has(img[alt="Android"])').hide();
      $('.gallery_img:has(img[alt="JQuery"])').hide();
    },500,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Bootstrap"])').show().addClass('add_img');
    },450)));
  });

  $(".JQuery_btn").click(function(){
      setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Firebase"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Android"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="Bootstrap"])').removeClass('add_img');
      $('.gallery_img:has(img[alt="JQuery"])').removeClass('add_img');
    },0,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="Flutter"])').hide();
      $('.gallery_img:has(img[alt="Firebase"])').hide();
      $('.gallery_img:has(img[alt="Android"])').hide();
      $('.gallery_img:has(img[alt="Bootstrap"])').hide();
    },500,
    setTimeout(function(){
      $('.gallery_img:has(img[alt="JQuery"])').show().addClass('add_img');
    },450)));
  });

  var $lightbox = $('#lightbox');
  $('[data-target="#lightbox"]').on('click', function(event) {
    var $img = $(this).find('img'),
      src = $img.attr('src'),
      alt = $img.attr('alt'),
      css = {
        'maxWidth': $(window).width() - 200,
        'maxHeight': $(window).height() - 150
      };
    $lightbox.find('img').attr('src', src);
    $lightbox.find('img').attr('alt', alt);
    $lightbox.find('img').css(css);
  });
  $lightbox.on('shown.bs.modal', function(e) {
    var $img = $lightbox.find('img');
    $lightbox.find('.modal-dialog').css({
      'width': $img.width()
    });
    $lightbox.find('.close').removeClass('hidden');
  });
  // =================================================================================================  CONTACT FORM 
  // ------------------------------------ BUTTON ANIMATION
  function btn_animation() {
    $(".btn").addClass("onclic");
    setTimeout(() => {
      $(".btn").removeClass("onclic").addClass("validate");
    },2000,removeValidate());
  }
  function removeValidate() {
    setTimeout(() => {
      $(".btn").removeClass("validate");
    },3800,dull_InputText());
  }
  function dull_InputText() {
    setTimeout(() => {
      $("input").val('');
      $("textarea").val('');
    },2000);
  }

  // ------------------------------------ FOR INPUT FIELDS
  $(".inputBox").on({
    mouseover: function(){
        var $current_input = $(this).find("input");
        var $current_label = $(this).find("span");
        $current_input.css("border-bottom-color", "#45A29E");
        $current_label.addClass("label_move_up_highlight").css("color","#45A29E");
        $current_input.prop('disabled', false); //makes it enabled
      },
      mouseleave: function(){
        var $current_input = $(this).find("input");
        var $current_label = $(this).find("span");
        

        if($current_input.val() == ""){
          $current_input.css("border-bottom-color", "gray");
          $current_label.removeClass("label_move_up_highlight").css("color","gray");
        }else{
          $current_input.css("border-bottom-color", "#54C4C0");
          $current_label.addClass("label_move_up_highlight").css("color","#54C4C0");
        }
      },
      click: function(){
        var $current_input = $(this).find("input");
        var $current_label = $(this).find("span");
        $current_input.css("border-bottom-color", "#54C4C0");
        $current_label.addClass("label_move_up_highlight").css("color","#54C4C0");
        $current_input.prop('disabled', false); //makes it enabled
      },
      input: function(){
        var $current_input = $(this).find("input");
        var $current_label = $(this).find("span");
        $current_input.css("border-bottom-color", "#54C4C0");
        $current_label.addClass("label_move_up_highlight").css("color","#54C4C0");
        $current_input.prop('disabled', false); //makes it enabled
      },
      off: function(){
        var $current_input = $(this).find("input");
        var $current_label = $(this).find("span");
        $current_input.prop('disabled', true); //makes it disabled

        if($current_input.val() == ""){
          $current_input.css("border-bottom-color", "gray");
          $current_label.removeClass("label_move_up_highlight").css("color","gray");
        }else{
          $current_input.css("border-bottom-color", "#45A29E");
          $current_label.addClass("label_move_up_highlight").css("color","#45A29E");
        }
      }
  });

  // ------------------------------------ FOR TEXTAREA FIELDS
  $("#textarea_box").on({
    mouseover: function(){
        var $current_input = $(this).find("textarea");
        var $current_label = $(this).find("span");
        $current_input.css("border-bottom-color", "#45A29E");
        $current_label.addClass("label_move_up_highlight").css("color","#45A29E");
        $current_input.prop('disabled', false); //makes it enabled
      },
      mouseleave: function(){
        var $current_input = $(this).find("textarea");
        var $current_label = $(this).find("span");
        $current_input.prop('disabled', true); //makes it disabled

        if($current_input.val() == ""){
          $current_input.css("border-bottom-color", "gray");
          $current_label.removeClass("label_move_up_highlight").css("color","gray");
        }else{
          $current_input.css("border-bottom-color", "#54C4C0");
          $current_label.addClass("label_move_up_highlight").css("color","#54C4C0");
        }
      },
      input: function(){
        var $current_input = $(this).find("input");
        var $current_label = $(this).find("span");
        $current_input.css("border-bottom-color", "#54C4C0");
        $current_label.addClass("label_move_up_highlight").css("color","#54C4C0");
        $current_input.prop('disabled', false); //makes it enabled
      },
      click: function(){
        var $current_input = $(this).find("textarea");
        var $current_label = $(this).find("span");
        $current_input.css("border-bottom-color", "#54C4C0");
        $current_label.addClass("label_move_up_highlight").css("color","#54C4C0");
        $current_input.prop('disabled', false); //makes it enabled
      },
      off: function(){
        var $current_input = $(this).find("textarea");
        var $current_label = $(this).find("span");
        $current_input.prop('disabled', true); //makes it disabled

        if($current_input.val() == ""){
          $current_input.css("border-bottom-color", "gray");
          $current_label.removeClass("label_move_up_highlight").css("color","gray");
        }else{
          $current_input.css("border-bottom-color", "#45A29E");
          $current_label.addClass("label_move_up_highlight").css("color","#45A29E");
        }
      }
  });

  // VALIDATING FORM INPUT
  $('#contact_form').submit(function (e) {
      e.preventDefault();
      if (validate() == true) {
        btn_animation();
      }
  });

  // ------------------------------------ FORM VALIDATION 
  function validate(){
    var isValid = true;
    if($("#first_name").val() == ""){
      $("#first_name_err").html("Please Enter First Name.");
      isValid = false;
    }else{
      $("#first_name_err").html("");
    }
    if($("#last_name").val() == ""){
      $("#last_name_err").html("Please Enter Last Name.");
      isValid = false;
    }else{
      $("#last_name_err").html("");
    }
    if($("#email").val() == ""){
      $("#email_err").html("Please Enter Your E-mail.");
      isValid = false;
    }else{
      var email_format = /[0-9a-zA-Z](@)[a-zA-Z].*[.](com)$/;
      if (!($("#email").val().match(email_format))) {
        $("#email_err").html("Enter E-mail in Correct Format.");
        isValid = false;
      }else {
        $("#email_err").html("");
      }
    }
    if($("#phone_number").val() == ""){
      $("#phone_number_err").html("Please Enter Your Phone Number.");
      isValid = false;
    }else{
      $("#phone_number_err").html("");
    }
    if($("#message").val() == ""){
      $("#message_err").html("Enter Your Message.");
      isValid = false;
    }else{
      $("#message_err").html("");
    }
    return isValid;
  }

  // ================================================================================================= SKILLS

  $("#owl-example").owlCarousel({
      itemsDesktop : [1499,4],
      itemsDesktopSmall : [1199,3],
      itemsTablet : [899,2],
      itemsMobile : [599,1]
  });

  $(function() {
      $('.chart').easyPieChart({
          size: 180,
          barColor: "#45A29E",
          scaleLength: 0,
          lineWidth: 15,
          trackColor: "transparent",
          lineCap: "circle",
          animate: 2000,
      });
  });
});