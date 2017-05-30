var form = document.getElementById("contactForm");
var burger = document.getElementById("burger-button");
var sendButton = document.getElementById("sendButton");
var inputs = document.getElementsByTagName("input");
var msg = document.getElementById("message");
var elem = document.getElementById("frmEmailC");
var frmNameA = document.getElementById("frmNameA");
var frmEmailA = document.getElementById("frmEmailA");
var success = document.getElementById("success");

var nameTick = document.querySelector("#nameTick");
var email1Tick = document.querySelector("#email1Tick");
var email2Tick = document.querySelector("#email2Tick");
var msgTick = document.querySelector("#msgTick");

var nameValidError = document.querySelector("#nameValidError");
var email1ValidError = document.querySelector("#email1ValidError");
var email2ValidError = document.querySelector("#email2ValidError");
var msgValidError = document.querySelector("#msgValidError");


var frmNameAjq = $("#frmNameA");
var frmEmailAjq = $("#frmEmailA");
var frmEmailCjq = $("#frmEmailC");
var messagejq = $("#message");


var formInfo = {};


/*****   Check name has been entered into form and that its valid  ~~   *****/ 


    function initConfName(){
    
        /*  bind input via theText to keys  */
        frmNameAjq.on("keydown keypress", function (event) {
            console.log(' frmNameAjq.on  keydown keypress');
            
                // catch enter key = submit (Safari on iPhone=10)
            if ((event.which == 10 || event.which == 13) && (event.target.value !== '')) {
                event.preventDefault();
                frmNameAjq.blur();
            }
                else {
                    return;
                }
        });

    
        frmNameAjq.on("blur", function (event) {
            event.preventDefault();
            console.log('frmNameAjq');
            checkName(event);
        });
 
    
    
        function checkName(event){
            if((event.target.value === 0) || (event.target.value >= 51)){
                    //input.setCustomValidity('Name must be between 1 and 26 characters');
                    nameValidError.setAttribute('data-validityerror', 'true');
                    console.log("Name must be between 1 and 26 characters", event.target.value);
                }
                else{
                    console.log('frmNameAjq  event.target.value = ' + event.target.value);
                    formInfo.name = event.target.value;
                    frmEmailA.disabled = false;
                    frmEmailA.className = "highliteInput";
                    nameValidError.setAttribute('data-validityerror', 'false');
                    nameTick.setAttribute('data-tickvalid', 'true');
                    }
        }
    }



/********   Check first email entered into form and that its valid  ~~ ******/

    function initCheckEmailRegex(){
        
        frmEmailAjq.on("keydown keypress", function (event) {
            
             console.log('frmEmailAjq.on  keydown keypress');
                // catch enter key = submit (Safari on iPhone=10)
            if ((event.which == 10 || event.which == 13) && (event.target.value !== '')) {
                event.preventDefault();
                frmEmailAjq.blur();
            }
            else {
                   return;
                }
        });

    
        frmEmailAjq.on("blur", function (event) {
            console.log('frmEmailAjq');
            event.preventDefault();
            checkEmail(event);
        });
 
        
    
        function checkEmail(event){
            console.log('frmEmailAjq   event.target.value = ' + event.target.value);
            
            if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(event.target.value) === false) {
            // the provided value doesn't match the primary email address
            //input.setCustomValidity('The two email addresses must match.');
            email1ValidError.setAttribute('data-validityerror', 'true');
            console.log("email not correct format", event.target.value);
            }
            
            else {
            // input is valid -- reset the error message
              console.log('frmEmailAjq is valid');
              email1ValidError.setAttribute('data-validityerror', 'false');
              email1Tick.setAttribute('data-tickvalid', 'true');
              elem.disabled = false;
              elem.className = "highliteInput";
          }
        }
    }








/********   Check second email entered is identical to first email  ~~ **********/

    function initConfirmEmail(){
    
        /*  bind input via theText to keys  */
        frmEmailCjq.on("keydown keypress", function (event) {
            console.log(' frmEmailCjq.on  keydown keypress');
            
                // catch enter key = submit (Safari on iPhone=10)
            if ((event.which == 10 || event.which == 13) && (event.target.value !== '')) {
                event.preventDefault();
                frmEmailCjq.blur();
            }
                else {
                    return;
                }
        });

    
        frmEmailCjq.on("blur", function (event) {
            event.preventDefault();
            console.log('frmEmailCjq');
            verifyEmail(event);
        });
 
    
    
        function verifyEmail(event){
            console.log("checking if emails match");
            
            if(event.target.value !== frmEmailA.value){
                    // the provided value doesn't match the primary email address
                    //input.setCustomValidity('The two email addresses must match.');
                    email2ValidError.setAttribute('data-validityerror', 'true');
                    console.log("E-mail addresses do not match   first email = " + frmEmailA.value + "      second email =" + event.target.value);
                }
                else{
                    console.log('frmEmailCjq  event.target.value = ' + event.target.value);
                    formInfo.email = event.target.value;
                     // input is valid -- reset the error message
                    msg.disabled = false;
                    msg.className = "highliteInput";
                    email2ValidError.setAttribute('data-validityerror', 'false');
                    email2Tick.setAttribute('data-tickvalid', 'true');
                    }
        }
    }








/*********   Check message entered is 1 to 300 characters long   ~~ *******/


function initConfMesg(){
        
        messagejq.on("keydown keypress", function (event) {
            
             console.log('messagejq.on  keydown keypress');
                // catch enter key = submit (Safari on iPhone=10)
            if ((event.which == 10 || event.which == 13) && (event.target.value !== '')) {
                event.preventDefault();
                messagejq.blur();
            }
            else {
                   return;
                }
        });

    
        messagejq.on("blur", function (event) {
            console.log('messagejq');
            event.preventDefault();
            verifyMsg(event);
        });
 
        
    
        function verifyMsg(event){
            console.log('messagejq   event.target.value = ' + event.target.value);
            formInfo.message = event.target.value;
            
            if((event.target.value.length === 0) || (event.target.value.length >= 301)){
                    //input.setCustomValidity('Message must be between 1 and 300 characters');
                    msgValidError.setAttribute('data-validityerror', 'true');
                    console.log("Message must be between 1 and 300 characters", event.target.value);
                }
                else{
                    sendButton.disabled = false;
                    msgValidError.setAttribute('data-validityerror', 'false');
                    msgTick.setAttribute('data-tickvalid', 'true');
                }
        }
    }







/*****  Check entire form is valid and only if it is valid allow it to be submitted  ****/

      function initForm() {
        form.addEventListener("submit", function(evt) {
          if ((form.checkValidity() === false) || (form.reportValidity() === false)) {
            evt.preventDefault();
            console.log("not sent");
            return false;
          } 
            else {
                   // don't submitt here but use send button on submitt instead
                }
        });
      }



/*********    When the submit button is enabled can submit via ajax    *******/

$('#contactForm').on('submit', function(e) {
	e.preventDefault();  
    
	$.ajax({
		url: '//formspree.io/tom@appijumbo.com',
		method: 'POST',
		data:{ name:formInfo.name,
              email:formInfo.email, 
              comments:formInfo.message,
              _subject:"An Appijumbo form Submission",
             },
		dataType: 'json',
		success: function(data) {
            console.log("success  " + data);
            success.innerHTML = "<svg><use xlink:href='#tick'/></svg>";
            success.className = "sent yes";
		},
		error: function(err) {
			console.log("failed  " + err);
            success.innerHTML = "<p>sorry, mail server is not responding. Please try again later!</p>";
            success.className = "fail";
		}
	});
});





/**  Add 'Dirtyclass' (invalid) to form input listners, this controls valid/ invalid css **/

      function initInputs() {
         var inputs_len = inputs.length;
         var addDirtyClass = function(evt) {
         evt.target.classList.toggle("dirty", true);
        };
          
        for (var i = 0; i < inputs_len; i++) {
          var input = inputs[i];
          input.addEventListener("blur", addDirtyClass);
          input.addEventListener("invalid", addDirtyClass);
          input.addEventListener("valid", addDirtyClass);
            
        }
          
          msg.addEventListener("blur", addDirtyClass);
          msg.addEventListener("invalid", addDirtyClass);
          msg.addEventListener("valid", addDirtyClass);
      }







/*****************    MENU TOGGLE CONTROL      *******************/
                           
function close_menu() {
    document.body.classList.toggle("open");
    burger.classList.toggle("open");
}







burger.addEventListener("click", function (e) {  /*  event handler 'click' is attached to the "burger-button" element  */
    e.preventDefault();   /*  the default action of the event will not be triggered when buger clicked */
    close_menu();   /*  then toggle the 'open' class, which closes the menu */
});

/*  Use the element.removeEventListener() method remove the 'click' event handlers from "burger-menu" in a more sophisticated design - Good practice  */







/***************************  SMOOTH SCROLL **************************/

// http://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2/


$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );   /* assign to 'target' the attributes of the anchor clicked */

    if( target.length ) {   /*  if target length isnt zero */
        event.preventDefault();
        $('html, body').animate({   
            scrollTop: target.offset().top
        }, 1000);
        /* animate the body using scrollTop, to the href attribute of the anchor clicked, for 1 second duration */
    }

});


/****************** DRAW SHADE TRIANGLE FUNCTION *********************/

function draw_triangle(ctx_width, ctx_height, top_h, element, x_origin, y_origin, x_shift, y_shift){
    
    var c = document.getElementById(element);
    var context = c.getContext("2d");
    
    $("#"+element).attr({width:ctx_width, height:ctx_height});
    $("#"+element).css({width: "ctx_width"+"px", height: "ctx_height"+"px", top:"top_h"+"px"}); 
    
    context.beginPath();   // Draw a path
    
        context.moveTo(x_origin, y_origin);   // Top Corner origin
        context.lineTo(x_shift, y_shift);  // Bottom Right
        context.lineTo(x_origin, y_shift);  // Bottom Left
    
    context.closePath();
    context.fillStyle = "#000";  // Fill the path
    context.fill(); 
}

/****************** SHADE AND LAPTOP ANGLE *********************/

var w1 = $("#top").width();

function shade1(ht1, w1){
    var top_height = 0;
    draw_triangle(w1, ht1, top_height, "canvasShade1" ,0, 0, w1, ht1);
}

/*
function shade2(ht2, w1){
    var half_width = w1/2;
    var s_height = $("#codeHere").height() + 270 + $(".cta").height();
    draw_triangle(w1, s_height, ht2, "canvasShade2", w1, 0, half_width, s_height);
}
*/




/*****************     INITIALISE     *******************/


elem.disabled = true;
msg.disabled = true;
sendButton.disabled = true;
frmEmailA.disabled = true;
frmNameA.className = "highliteInput";

initForm();
initInputs();
initConfName();
initCheckEmailRegex();
initConfirmEmail();
initConfMesg();




window.onload = shade1($("#lapTitWrap").height() + $("#aboutHere").height() + 50, w1);   /*  Draw shades when page loads  */

$(window).resize(function() {  /* keep redrawing shade when page re-sized */
    var h1 = $("#lapTitWrap").height() + $("#aboutHere").height() + 50;
    var w1 = $("#top").width();
    shade1(h1, w1);
});


