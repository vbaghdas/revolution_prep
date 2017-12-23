/*==========================================================

                CONTACT FORM VALIDATION

===========================================================*/
 $(document).ready(function(){

    //only allow alphabetical characters on input
    function requireLetters(event) {
        var value = String.fromCharCode(event.which);
        var pattern = new RegExp(/[a-zåäö]/i);
        return pattern.test(value);
    }

    $('#name').on('keypress', requireLetters);
     
    //form validation
    $("#btn").click(function(){

        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_select = $('select[name=grade-menu]').val();

        //simple validation at client's end
        //we simply change border color to orange if empty field using .css()
        var proceed = true;
        if (user_name == "" || user_name == " ") {
            $('input[name=name]').css('border-color', '#FF0000');
            $('.form-feedback-name').text('Please enter your name');
            proceed = false;
        }
        if (user_email == "" || user_name == " ") {
            $('input[name=email]').css('border-color', '#FF0000');
            $('.form-feedback-email').text('Please enter your email');
            proceed = false;
        }

        if (user_select == "" || user_name == " ") {
            $('select[name=grade-menu]').css('border-color', '#FF0000');
            $('.form-feedback-grade').text('Please choose a grade');
            proceed = false;
        }
        var atpos = user_email.indexOf("@");
        var dotpos = user_email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=user_email.length) {
            $('input[name=email]').css('border-color', '#FF0000');
            proceed = false;
        }

        //everything looks good! proceed...
        if (proceed) {
            //Show modal when message has been sent
            $('.modal-title').text('Thank You!');
            $('.modal-body > p').text('We will send you more information via email shortly.');
            $("#contact-modal").modal('show');
        }

        return false;
    });

    //reset previously set border colors and hide all message on .keyup() and click()
    $("#contact-form #name").keyup(function(){
        $("#contact-form #name").css('border-color', '');
        $('.form-feedback-name').text('');
    });

    $("#contact-form #email").keyup(function(){
        $("#contact-form #email").css('border-color', '');
        $('.form-feedback-email').text('');
    });

    $("#contact-form #grade-menu").click(function(){
        $("#contact-form #grade-menu").css('border-color', '');
        $('.form-feedback-grade').text('');
    });

});