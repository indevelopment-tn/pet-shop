//$(document).ready(function(){

    function validate_contact_form(form_data){
        var retval = true

        /*------------------------------------
        | check name value of the form
         -------------------------------------*/
        if (form_data['name']){
            //length of name must be longer than 1
            if (form_data['name'].length <= 1){
                retval = false
            }
        }


        /*------------------------------------
        | check name value of the form['email']
         -------------------------------------*/

        if (form_data['email']){
            //length of name must be longer than 1
            // need 5 chracters for even the most simplist email
            // a@b.c
            if (form_data['email'].length <= 5){
                retval = false
            }
        }


        /*------------------------------------
        | check name value of the form['message']
        -------------------------------------*/

        if (form_data['message']){
            //length of name must be longer than 1
            // need 1 chracters for even the most simplist message
            if (form_data['message'].length < 1){
                retval = false
            }
        }
        // check length of form
        return retval;
    }

    function process_contact_form(){
        var form = $('#contact_form'); //form id here
        //collect data from the form
        var contact_inputs = {
            name:form.find("input[name='name']").val(),
            email:form.find("input[name='email']").val(),
            message:form.find("textarea[name='message']").val()
        }

        //have the form data validated
        if (validate_contact_form(contact_inputs) == true){
            send_contact_data(contact_inputs);
        }else{
            //we can review the instructions to see if there is a better
            // way to render the info
            alert("Failed to Pass Validation");
        }



    }

    function send_contact_data(form_data){

        // transmit form data
        var form = $('#contact_form');
        form.submit(function(event){

            event.preventDefault();
            var form_status = $('<div class="form_status"></div>');


            $.ajax({
                type: 'POST',
                url: "/pet-shop/php/contact_email.php",
                data:form_data,

                beforeSend: function(){
                    form.append(form_status.html('Email is sending...').fadeIn());

                }
            }).done(function(data){
                form_status.html('Email Sent!').delay(3210).fadeOut();
            });

            //delete messages when submit

            document.getElementById("name").value= "";
            document.getElementById("email").value= "";
            document.getElementById("message").value= "";

        })
    }
//});
