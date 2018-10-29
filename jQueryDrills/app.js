$(document).ready(function() {

    console.log('Page Loaded');

    // Bootstrappin' and flexboxin' because it's pretty.
    $(document.body).css('margin', '2em');
    $(document.body).prepend("<div id='mainContainer' class='container'></div>");

    
    // Create rows for the page.
    $('#mainContainer').append("<div id='row1' class='row flex-centered'></div>");
    $('#mainContainer').append("<div id='row2' class='row flex-centered'></div>");
    $('#mainContainer').append("<div id='row3' class='row flex-centered'></div>");

    $('.flex-centered').css({
        'display': 'flex',
        'justify-content': 'center',
    });

    // Create form with submit button.
    $('#row1').append("<form id='form1' action=''></form>");
    $('#form1').append("<input id='form1TextBox' type='text'></input>");
    $('#form1').append("<input id='btnSubmit' type='submit' value='Submit' class='btn-dark'></input>");

    $('#form1').css({
        'display': 'block',
        'margin': '2em',
    });
    $('#btnSubmit').css({
        'margin': '0 0.5em 0 0.5em',
        'border-radius': '0.5em',
    });
    $('#form1TextBox').css({
        'margin': '0 0.5em 0 0.5em',
        'border-radius': '0.25em',
    });
    

    // Disable form button on initial page load.
    $('#btnSubmit').attr('disabled', 'disabled');


    // FUNCTION: ENABLE FORM BUTTON IF FORM TEXT ENTERED BY USER
    $('#form1TextBox').change(function() {
        console.log("Button Enabled");
        let validEntry = true;
        if($('#form1TextBox').val() == '' || $('#form1TextBox').val() == null) {
            validEntry = false;
            console.log("Invalid Form");
        };
        if(validEntry == true) {
            $('#btnSubmit').removeAttr('disabled');
            console.log("Valid Form");
        };
    });

    // Trigger form validation when page loads in case of auto-complete.
    $('#form1TextBox').trigger('change')



    // FUNCTION: SUBMIT FORM
    $('#form1').on('submit', function() {
        console.log('Form Submitted');
        console.log($('input').val());

        alert(`${$('input[type=text]').val()}`);

        $('#row2').append(`<div id='messageBanner'></div>`);
        $('#messageBanner').css({
            'margin': '2em',
            'font-family': 'Lobster, cursive',
            'text-align': 'center',
        });
        $('#messageBanner').append(`<h3 id='messageText'>${$('input[type=text]').val()}</h3>`);
        $('#messageText').css({
            'margin': '1em 2em 1em 2em',
        });
        
        // FUNCTION: CHANGE H3 BACKGROUND COLOR & BORDER RADIUS
        $('#messageBanner').on('mouseenter', function(){
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let randomColor = `rgb(${red},${green},${blue})`;

            let random1 = (Math.floor(Math.random() * 49) + 1);
            let random2 = (Math.floor(Math.random() * 49) + 1);

            let randomBorderRadius = `${random1}% ${random2}% ${random1}% ${random2}%`;

            $(this).css({
                'border-radius': randomBorderRadius,
                'background-color': randomColor,
            });

            console.log("New Color: ", randomColor);
        }); // END FUNCTION: CHANGE H3 BACKGROUND COLOR & BORDER RADIUS

        return false;   // Prevent reload page (form default)

    }); // END FUNCTION: SUBMIT FORM



    

}); // END DOCUMENT.READY FUNCTION.