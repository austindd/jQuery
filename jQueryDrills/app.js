$(document).ready(function() {

    console.log('Page Loaded');

    // Bootstrappin' because it's pretty.
    $(document.body).css('margin', '2em');
    $(document.body).prepend("<div id='mainContainer' class='flex-box container'></div>");
    
    // Create rows for the page.
    $('#mainContainer').append("<div id='row1' class='row'></div>");
    $('#mainContainer').append("<div id='row2' class='row'></div>");
    $('#mainContainer').append("<div id='row3' class='row'></div>");


    // Create form with submit button.
    $('#row1').append("<form action='' id='form1'></form>");
    $('#form1').append("<input id='form1TextBox' type='text'></input>");
    $('#form1').css({
        'display': 'block',
        'margin': 'auto'
    });
    $('#form1').append("<input id='btnSubmit' type='submit' value='Submit' class='btn-dark'></input>");
    $('#btnSubmit').css({'margin': '0', 'border-radius': '0.5em'});
    $('#form1TextBox').css('border-radius', '0.25em');
    


    // Disable form button.
    $('#btnSubmit').attr('disabled', 'disabled');

    // Enable form button if text entered in form1TextBox.
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

    // Submit Form Function
    $('#form1').on('submit', function() {
        console.log('Form Submitted');
        console.log($('input').val());
        alert(`${$('input[type=text]').val()}`);
        return false;   // Prevent reload page (form default)
    });

});