$(document).ready(function () {



// ================ CREATE & STYLE ELEMENTS ================
    
    // Paragraph wrappers

    $('#sentence').append(`<div id='para1Wrapper' class='para-wrapper col-md-9'></div>`);
    $('#sentence').append(`<div id='para2Wrapper' class='para-wrapper col-md-9'></div>`);
    $('#sentence').append(`<div id='para3Wrapper' class='para-wrapper col-md-9'></div>`);
    $('#sentence').append(`<div id='para4Wrapper' class='para-wrapper col-md-9'></div>`);
    $('#sentence').append(`<div id='para5Wrapper' class='para-wrapper col-md-9'></div>`);

    $('.para-wrapper').css({
        'display': 'block',
    });

    $('#para1Wrapper').append(`<p id='para1' class='output-line'></p>`);
    $('#para2Wrapper').append(`<p id='para2' class='output-line'></p>`);
    $('#para3Wrapper').append(`<p id='para3' class='output-line'></p>`);
    $('#para4Wrapper').append(`<p id='para4' class='output-line'></p>`);
    $('#para5Wrapper').append(`<p id='para5' class='output-line'></p>`);


    // Disable text highlighting for visual purposes
    $('.row').addClass('disable_text_highlighting');

    

// ================ 'SHIFT' KEY TOGGLES KEYBOARD ================

    $('#keyboard-upper-container').hide();
    let shiftKeyDown = false;

    $(document).keydown(function () {
        let key = event.keyCode;
        if (key == 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
            shiftKeyDown = true;
        };
    });
    $(document).keyup(function () {
        let key = event.keyCode || event.which;
        if (key == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
            shiftKeyDown = false;
        };
    });


// ==================== KEYBOARD & OUPUT LOGIC ====================

    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate', 
        'Too ato too nOt enot one totA not anot tOO aNot', 
        'oat itain oat tain nate eate tea anne inant nean', 
        'itant eate anot eat nato inate eat anot tain eat', 
        'nee ene ate ite tent tiet ent ine ene ete ene ate'
    ];

    let myCharCode = null;
    let currentRow = 1;
    let charCount = 0;

    let currentString = '';

    let inputObject = {
        1: [''],
        2: [''],
        3: [''],
        4: [''],
        5: [''],
    };

    let feedbackObject = {
        1: [''],
        2: [''],
        3: [''],
        4: [''],
        5: [''],
    };

    $(document.body).keypress(function(){
        myCharCode = event.keyCode || event.which;
        myChar = event.key;
        console.log('Key:', event.key, 'ASCII: ', event.keyCode);
        $(`#${myCharCode}`).addClass('well-highlight');

        if (currentRow < 5 && myCharCode == 13) {
            currentRow = currentRow + 1;
        } else if (myCharCode != 13) {
            let newString = inputObject[currentRow] + myChar;
            inputObject[currentRow] = newString;
            $('#para1').text(inputObject[1]);
            $('#para2').text(inputObject[2]);
            $('#para3').text(inputObject[3]);
            $('#para4').text(inputObject[4]);
            $('#para5').text(inputObject[5]);
        };
        dispNextLetter();
        charCount = charCount + 1;
        });

    $(document.body).keyup(function() {
        $(`.well-highlight`).removeClass('well-highlight');
    });



    let paraDOMRect = null;
    let yellowBlockXY = null;

    function dispNextLetter() {

        // find paragraph element dimensions
        paraDOMRect = $(`#para${currentRow}`)[0].getBoundingClientRect();
        console.log($(`#para${currentRow}`)[0].getBoundingClientRect());

        // set yellow block position data based on paragraph dimensions
        yellowBlockXY = {
            top: paraDOMRect.y,
            bottom: paraDOMRect.y + paraDOMRect.height,
            left: paraDOMRect.x + paraDOMRect.width,
            right: paraDOMRect.x + paraDOMRect.width + parseFloat($('#yellow-block').width()),
        };
        console.log(yellowBlockXY);

        // reposition yellow block on screen
        $('#yellow-block').css({
            'position': 'fixed !important',
            'top': `${yellowBlockXY.top}px`,
            'left': `${yellowBlockXY.left}px`,
        });
        console.log($('#yellow-block').offset());
    };






// ================ Clicks and taps =================


    $('.well').on('mousedown' || 'touchstart', function() {

        highlighter = this.id;
        $(`#${highlighter}`).addClass('well-highlight');

        myCharCode = this.id;
        myChar = this.innerHTML;
        console.log('Key:', myChar, 'ASCII: ', myCharCode);

        if (myCharCode == 13) {  // 'Enter'key
            currentRow = currentRow + 1;
        };

        if (myCharCode == 32) {  // 'Space'key
            myChar = ' ';
        };
        
        if (myCharCode != 13) {  // If input clears all exceptional conditions

            currentString = inputObject[currentRow];
            let newString = currentString + myChar;
            inputObject[currentRow] = newString;
    
            $('#para1').text(inputObject[1]);
            $('#para2').text(inputObject[2]);
            $('#para3').text(inputObject[3]);
            $('#para4').text(inputObject[4]);
            $('#para5').text(inputObject[5]);

            
        };
    });

    $('.well').on('mouseup' || 'touchend', function() {
        $(`.well-highlight`).removeClass('well-highlight');
    });

});