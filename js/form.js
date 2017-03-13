(function(){
    
    var form;

      function initForm() {
        form = document.getElementById("usrForm")
        /* // [START preventsubmission] */
        form.addEventListener("submit", function(evt) {
          if (form.checkValidity() === false) {
            evt.preventDefault();
            alert("Form is invalid - submission prevented!");
            return false;
          } else {
            // To prevent data from being sent, we've prevented submission
            // here, but normally this code block would not exist.
            evt.preventDefault();
            alert("Form is valid - submission prevented to protect privacy.");
            return false;
          }
        });
        /* // [END preventsubmission] */
      }

      function initConfirmEmail() {
        var elem = document.getElementById("frmEmailC");
        elem.addEventListener("blur", verifyEmail);
        function verifyEmail(input) {
          input = input.srcElement;
          sampleCompleted("Forms-orderConfirm");
          var primaryEmail = document.getElementById('frmEmailA').value
          /* // [START customvalidation] */
          if (input.value != primaryEmail) {
            // the provided value doesn't match the primary email address
            input.setCustomValidity('The two email addresses must match.');
            console.log("E-mail addresses do not match", primaryEmail, input.value);
          } else {
            // input is valid -- reset the error message
            input.setCustomValidity('');
          }
          /* // [END customvalidation] */
        }
      }

      function initInputs() {
        /* // [START initinputs] */
        var inputs = document.getElementsByTagName("input");
        var inputs_len = inputs.length;
        var addDirtyClass = function(evt) {
          sampleCompleted("Forms-order-dirty");
          evt.srcElement.classList.toggle("dirty", true);
        };
        for (var i = 0; i < inputs_len; i++) {
          var input = inputs[i];
          input.addEventListener("blur", addDirtyClass);
          input.addEventListener("invalid", addDirtyClass);
          input.addEventListener("valid", addDirtyClass);
        }
        /* // [END initinputs] */
      }

      function initNoSubmit() {
        form.addEventListener("submit", function(evt) {
          evt.preventDefault();
          alert("Submission of this form is prevented.");
        });
      }
    
    
initForm();
initInputs();
initConfirmEmail();

    
    
})();

