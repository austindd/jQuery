$(document).ready(function() {

    console.log('Page Loaded');

    $(document.body).css('margin', '2em');
    $(document.body).prepend("<div id='mainContainer' class='container'></div>");

    // Adding 3 rows to main container
    $('#mainContainer').append("<div id='row1' class='container row flex-centered'></div>");
    $('#mainContainer').append("<div id='row2' class='container row flex-centered'></div>");
    $('#mainContainer').append("<div id='row3' class='container row flex-centered'></div>");

    $('.row').css({
        'display': 'flex',
        'justify-content': 'center',
    });

    // Row 1: Entry Form & Submit Button
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

    // Row 2: Message Banner
    $('#row2').append(`<div id='messageBanner'></div>`);
    $('#messageBanner').css({
        'margin': '2em',
        'font-family': 'Lobster, cursive',
        'text-align': 'center',
    });

    // Row 3: Unordered List
    $('#row3').append(`<div id='listWrapper' class='container'></div>`);
    $('#listWrapper').append(`<ul id='list1' class='list'></ul>`);
    $('#listWrapper').css({
        'width': '100%',
        'justify-content': 'center',
    });
    $('#list1').css({
        'margin': '0 2em',
        'font-family': 'Lobster, cursive',
    });

    // Disable 'submit' button on initial page load.
    $('#btnSubmit').attr('disabled', 'disabled');


    // ================================================================
    // ===================== MAIN INTERFACE LOGIC =====================
    // ================================================================


    // Form Validation (enable/disable 'submit' button)
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
    
    $('#form1TextBox').trigger('change');  // Trigger form validation immediately in case browser auto-completes form on initial page load.
    
    let listItemCount = 0;

    // FUNCTION: SUBMIT FORM
    $('#form1').on('submit', function() {
        console.log(`Form Submitted: "${$('input').val()}"`);

        alert(`${$('input[type=text]').val()}`); // Display alert first.

        $('#messageBanner').empty();  // Clear out previous message text.

        $('#messageBanner').append(`<h3 id='messageText'>${$('input[type=text]').val()}</h3>`);
        $('#messageText').css({
            'margin': '1em 2em 1em 2em',
        });
        
        // Message Banner Event Listener (Mouse Enter)
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
        }); // END Message Banner Event Listener (Mouse Enter)

        // Add list item to page.
        listItemCount = listItemCount + 1;
        console.log(`List Item Count: ${listItemCount}`);

        $('#list1').append(`<li id='listItem${listItemCount}' class='listItem'>${$('input[type=text]').val()}</li>`);
        $('.listItem').css({
            'justify-content': 'left',
            'font-size': '20px',
        });

        // List Item Event Listener (Click)
        $(`#listItem${listItemCount}`).on('click', function(){
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let randomColor = `rgb(${red},${green},${blue})`;
            $(this).css({
                'color': randomColor,
            });
        }); // END List Item Event Listener (Double Click)

        // List Item Event Listener (Double Clicks)
        $(`#listItem${listItemCount}`).on('dblclick', function() {
            console.log(`Removed List Item #${listItemCount}`);
            $(`#listItem${listItemCount}`).remove();
            listItemCount = listItemCount - 1;
            console.log(`List Item Count: ${listItemCount}`);
        }); // END List Item Event Listener (Double Click)

        return false;   // Prevent reloading page (form default)

    }); // END FUNCTION: SUBMIT FORM

}); // END DOCUMENT READY FUNCTION.