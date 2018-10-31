$(document).ready(function () {

    // Press & hold 'shift' to toggle lower/upper keyboard

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


    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate', 
        'Too ato too nOt enot one totA not anot tOO aNot', 
        'oat itain oat tain nate eate tea anne inant nean', 
        'itant eate anot eat nato inate eat anot tain eat', 
        'nee ene ate ite tent tiet ent ine ene ete ene ate'
    ];
    
    $('#sentence').append(`<p id='para1' class='output-line'></p>`);
    $('#sentence').append(`<p id='para2' class='output-line'></p>`);
    $('#sentence').append(`<p id='para3' class='output-line'></p>`);
    $('#sentence').append(`<p id='para4' class='output-line'></p>`);
    $('#sentence').append(`<p id='para5' class='output-line'></p>`);




// =================== KEYBOARD & OUPUT LOGIC ===================

    let myCharCode = null;
    let currentRow = 1;
    let currentString = '';

    let sentenceObject = {
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

        if (myCharCode == 13) {
            currentRow = currentRow + 1;
        } else if (myCharCode != 13) {
            currentString = sentenceObject[currentRow];
            let newString = currentString + myChar;
            sentenceObject[currentRow] = newString;
    
            $('#para1').text(sentenceObject[1]);
            $('#para2').text(sentenceObject[2]);
            $('#para3').text(sentenceObject[3]);
            $('#para4').text(sentenceObject[4]);
            $('#para5').text(sentenceObject[5]);
        };
        });

    $(document.body).keyup(function() {
        $(`.well-highlight`).removeClass('well-highlight');
    });





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

            currentString = sentenceObject[currentRow];
            let newString = currentString + myChar;
            sentenceObject[currentRow] = newString;
    
            $('#para1').text(sentenceObject[1]);
            $('#para2').text(sentenceObject[2]);
            $('#para3').text(sentenceObject[3]);
            $('#para4').text(sentenceObject[4]);
            $('#para5').text(sentenceObject[5]);

            
        };
    });

    $('.well').on('mouseup' || 'touchend', function() {
        $(`.well-highlight`).removeClass('well-highlight');
    });

});