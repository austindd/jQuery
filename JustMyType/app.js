$(document).ready(function(){

    // Press & hold 'shift' to toggle lower/upper keyboard
    $('#keyboard-upper-container').hide();
    let shiftKeyDown = false;

    $(document).keydown(function(){
        let key = event.keyCode;
        if (key == 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
            shiftKeyDown = true;
        };
    });
    $(document).keyup(function(){
        let key = event.keyCode;
        if (key == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
            shiftKeyDown = false;
        };
    });

    
    $(document.body).keydown(function(){
        if (shiftKeyDown == false){
            let key = (event.keyCode + 32);     // Accounting for lowercase ASCII codes (JS keyCode +32)
            $(`#${key}`).addClass('well-highlight');
        } else {
            let key = (event.keyCode);
            $(`#${key}`).addClass('well-highlight');
        };
    });

    $(document.body).keyup(function(){
        if (shiftKeyDown == false){
            let key = (event.keyCode + 32);     // Accounting for lowercase ASCII codes (JS keyCode +32)
            console.log('keyup: ', key);
            console.log($(`#${key}`));
            $(`#${key}`).removeClass('well-highlight');
        } else {
            let key = (event.keyCode);
            console.log('keyup: ', key);
            console.log($(`#${key}`));
            $(`#${key}`).removeClass('well-highlight');
        };
    });
    
// NUMBERS STILL DON'T WORK. NEED TO REFACTOR THE CONDITIONAL FUNCTIONS.









});