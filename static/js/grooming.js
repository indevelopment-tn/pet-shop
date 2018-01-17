$(document).ready(function(){
    $("#breed_name").prop('required', false);
    $("#breed_name").hide();
    $("#breed_name").val("");
});

function validate_contact_form(form_data){
    var retval = true

    /*------------------------------------
    | check first name value of the form
     -------------------------------------*/
    if (form_data['firstname']){
        //length of name must be longer than 1
        if (form_data['firstname'].length <= 1){
            retval = false
        }
    }

    /*------------------------------------
   | check last name value of the form
    -------------------------------------*/
    if (form_data['lastname']){
        //length of name must be longer than 1
        if (form_data['lastname'].length <= 1){
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

    /*------------------------------------
   | check name value of the form['address']
   -------------------------------------*/

    if (form_data['address']){
        //length of name must be longer than 1
        // need 1 chracters for even the most simplist message
        if (form_data['address'].length < 1){
            retval = false
        }
    }

    /*------------------------------------
   | check name value of the form['city']
   -------------------------------------*/

    if (form_data['city']){
        //length of name must be longer than 1
        // need 1 chracters for even the most simplist message
        if (form_data['city'].length < 1){
            retval = false
        }
    }

    /*------------------------------------
   | check name value of the form['state']
   -------------------------------------*/

    if (form_data['state']){
        //length of name must be longer than 1
        // need 1 chracters for even the most simplist message
        if (form_data['state'].length < 1){
            retval = false
        }
    }

    /*------------------------------------
   | check name value of the form['zipcode']
   -------------------------------------*/

    if (form_data['zipcode']){
        //length of name must be longer than 1
        // need 1 chracters for even the most simplist message
        if (form_data['zipcode'].length < 1){
            retval = false
        }
    }

    /*------------------------------------
   | check name value of the form['type']
   -------------------------------------*/

    if (form_data['type']){
        //length of name must be longer than 1
        // need 1 chracters for even the most simplist message
        if (form_data['type'].length < 1){
            retval = false
        }
    }

    /*------------------------------------
   | check name value of the form['petname']
   -------------------------------------*/

    if (form_data['petname']){
        //length of name must be longer than 1
        // need 1 chracters for even the most simplist message
        if (form_data['petname'].length < 1){
            retval = false
        }
    }

    /*------------------------------------
   | check name value of the form['petage']
   -------------------------------------*/

    if (form_data['petage']){
        //length of name must be longer than 1
        // need 1 chracters for even the most simplist message
        if (form_data['petage'].length < 1){
            retval = false
        }
    }




    // check length of form
    return retval;
}

function process_contact_form(){
    var form = $('#grooming_form'); //form id here
    //collect data from the form
    var contact_inputs = {
        firstname:form.find("input[name='firstname']").val(),
        lastname:form.find("input[name='lastname']").val(),
        email:form.find("input[name='email']").val(),
        message:form.find("textarea[name='message']").val(),
        address:form.find("input[name='address']").val(),
        city:form.find("input[name='city']").val(),
        state:form.find("input[name='state']").val(),
        zipcode:form.find("input[name='zipcode']").val(),
        phone:form.find("input[name='phone']").val(),
        type:form.find("input[name='type']").val(),
        petname:form.find("input[name='petname']").val(),
        petage:form.find("input[name='petage']").val()


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

function toggle_breed_required(x){
    var value = $(x).val();
    if (value == "dog") {
        $("#breed_name").val("")
        $("#breed_name").prop('required', true);
        $("#breed_name").show();
    }else{
        $("#breed_name").prop('required', false);
        $("#breed_name").hide();
        $("#breed_name").val("");
    }
}

function send_contact_data(form_data){

    // transmit form data
    var form = $('#grooming_form');
    form.submit(function(event){

        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');


        $.ajax({
            type: 'POST',
            url: "/pet-shop/php/submit_grooming_request.php",
            data:form_data,

            beforeSend: function(){
                form.append(form_status.html('Email is sending...').fadeIn());

            }
        }).done(function(data){
            form_status.html('Email Sent!').delay(3210).fadeOut();
        });

        //delete messages when submit

        document.getElementsByName("firstname").value= "";
        document.getElementsByName("lastname").value= "";
        document.getElementsByName("email").value= "";
        document.getElementsByName("message").value= "";
        document.getElementsByName("address").value= "";
        document.getElementsByName("city").value= "";
        document.getElementsByName("state").value= "";
        document.getElementsByName("zipecode").value= "";
        document.getElementsByName("phone").value= "";
        document.getElementsByName("type").value= "";
        document.getElementsByName("petname").value= "";
        document.getElementsByName("petage").value= "";


    })
}
//});