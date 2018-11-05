$(document).ready(function () {



    // ================ CREATE & STYLE ELEMENTS ================

    // Paragraph wrappers

    $('#sentence').append(`<div id='para1Wrapper' class='para-wrapper col-md-12'></div>`);
    $('#sentence').append(`<div id='para2Wrapper' class='para-wrapper col-md-12'></div>`);
    $('#sentence').append(`<div id='para3Wrapper' class='para-wrapper col-md-12'></div>`);
    $('#sentence').append(`<div id='para4Wrapper' class='para-wrapper col-md-12'></div>`);
    $('#sentence').append(`<div id='para5Wrapper' class='para-wrapper col-md-12'></div>`);

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
    let inputObject = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    };
    let correctObject = {
        1: sentences[0].split(''),
        2: sentences[1].split(''),
        3: sentences[2].split(''),
        4: sentences[3].split(''),
        5: sentences[4].split(''),
    };

    let stopUserInput = false;
    let myCharCode = null;
    let myChar = null;
    let currentRow = 1;
    let charCount = 0;
    let currentString = '';

    $(document.body).keypress(function () {
        myCharCode = event.keyCode || event.which;
        myChar = event.key;
        console.log('Key:', myChar, ' | ASCII: ', event.keyCode);
        $(`#${myCharCode}`).addClass('well-highlight'); // On any keypress, highlight associated key element
        testEndCondition()

        if (stopUserInput == false && inputObject[currentRow].length < correctObject[currentRow].length) { // If current row not yet complete
            displayUserInput();
            feedback();
            targetLetter();
            yellowBlock();
            charCount = charCount + 1;
            testEndCondition();

        } else if (stopUserInput == false && inputObject[currentRow].length == correctObject[currentRow].length) { // If at end of current row AND not on last row
            console.log('New Row Created');
            currentRow = currentRow + 1; // new row
            charCount = 0; // reset character count to 0
            displayUserInput();
            feedback();
            targetLetter();
            yellowBlock();
            charCount = charCount + 1;
            testEndCondition();
        };
    });

    function testEndCondition() {
        if (currentRow >= sentences.length && inputObject[currentRow].length >= correctObject[currentRow].length) {// If completed last character of last line
            console.log('end');
            stopUserInput = true;
            return true;
        };
    };

    // Lifting a key removes all highlight classes from html wells.
    $(document.body).keyup(function () {
        $(`.well-highlight`).removeClass('well-highlight');
    });

    let outputArray = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    };
    let outputString = '';

    function displayUserInput() {
        if (myCharCode == 13) {
            myChar = '[ENTER]';  // Changing the way 'enter' key text is displayed after pressing 'enter'.
        };
        if (myCharCode == 32) {
            myChar = ' ';
        };

        if (stopUserInput == false) {

            inputObject[currentRow].push(myChar);
            let goodChar = feedback()

            // Push a span element for each character into an array, with different HTML classes for right/wrong characters.
            outputArray[currentRow].push(`<span id='row-${currentRow}-char-${charCount}' class='${goodChar}'>${myChar}<span>`);

            // Append <span> to paragraph element, displays on screen.
            $(`#para${currentRow}`).append(`${outputArray[currentRow][charCount]}`);

        };
        testEndCondition();
    };

    let countKeysGood = 0;
    let countKeysBad = 0;
    let feedbackArray = [];

    function feedback() {
        if (stopUserInput == false) {
            console.log('Input: ', inputObject[currentRow][charCount], 'Correct: ', correctObject[currentRow][charCount]);

            if (inputObject[currentRow][charCount] == correctObject[currentRow][charCount]) {
                countKeysGood++;
                $('#feedback').empty();
                $('#feedback').append(`<span id='feedbackIcon' class='glyphicon glyphicon-ok'></span>`);
                return 'good-char';
            };
            if (inputObject[currentRow][charCount] != correctObject[currentRow][charCount]) {
                countKeysBad++;
                $('#feedback').empty();
                $('#feedback').append(`<span id='feedbackIcon' class='glyphicon glyphicon-remove'></span>`);
                return 'bad-char';
            };
        };
        testEndCondition();
    };

    let paraXY = null;
    let yellowBlockXY = null;

    function targetLetter() {
        if (stopUserInput == false) {

            if (inputObject[currentRow].length < correctObject[currentRow].length && inputObject[currentRow].length > 0) {

                if (`${correctObject[currentRow][charCount + 1]}` == ' ') { // If next key is 'space' 
                    $('#target-letter').text('[space]');
                } else {
                    $('#target-letter').text(`${correctObject[currentRow][charCount + 1]}`); // Normal output
                };
            };
            if (inputObject[currentRow].length == 0 && currentRow < sentences.length + 1) { // If at beginning of line
                $('#target-letter').text(`${correctObject[currentRow][charCount]}`);
            };
            if (inputObject[currentRow].length == correctObject[currentRow].length && currentRow != sentences.length + 1) { // If at end of line && not on last row
                console.log('Displaying next row first character');
                $('#target-letter').text(`${correctObject[currentRow + 1][0]}`);
            };
        } else if (stopUserInput == true) {
            alert('All Finished!');
        };
        testEndCondition();
    };

    function yellowBlock() {
        if (stopUserInput == false) {

            // find paragraph dimensions
            if (inputObject[currentRow].length < correctObject[currentRow].length) {   // If current line incomplete OR
                paraXY = $(`#para${currentRow}`)[0].getBoundingClientRect();
            };

            if (currentRow < sentences.length + 1 && inputObject[currentRow].length == correctObject[currentRow].length) { // If completed last character of current row && not on final row
                paraXY = $(`#para${currentRow + 1}`)[0].getBoundingClientRect();
            };
            // set yellow block position
            if (myCharCode == 32) {
                yellowBlockXY = {
                    top: paraXY.top,
                    left: paraXY.width + 65,
                };
            } else {
                yellowBlockXY = {
                    top: paraXY.top,
                    left: paraXY.width + 51,
                };
            };
            console.log(yellowBlockXY.left);
            // reposition yellow block on screen
            $('#yellow-block').css({
                'position': 'absolute !important',
                'top': `${yellowBlockXY.top}px`,   // relative to '#sentence' div top
                'left': `${yellowBlockXY.left}px`, // relative to paragraph element's right edge (see above)
            });
        };
        testEndCondition();
    };
    window.onload = yellowBlock(); // Run once when the page loads so yellow block is already in position
    window.onload = targetLetter(); // First target letter displayed on page load








    // ================ Mouse Click & Touch Support =================

    $('.well').on('mousedown' || 'touchstart', function () {

        highlighter = this.id;
        $(`#${highlighter}`).addClass('well-highlight');

        myCharCode = this.id;
        myChar = this.innerHTML;
        console.log('Key:', myChar, 'ASCII: ', myCharCode);

        if (stopUserInput == false && inputObject[currentRow].length < correctObject[currentRow].length) { // If current row not yet complete
            displayUserInput();
            feedback();
            targetLetter();
            yellowBlock();
            charCount = charCount + 1;
            testEndCondition();

        } else if (stopUserInput == false && inputObject[currentRow].length == correctObject[currentRow].length) { // If at end of current row AND not on last row
            console.log('New Row Created');
            currentRow = currentRow + 1; // new row
            charCount = 0; // reset character count to 0
            displayUserInput();
            feedback();
            targetLetter();
            yellowBlock();
            charCount = charCount + 1;
            testEndCondition();
        };
    });

    $('.well').on('mouseup' || 'touchend', function () {
        $(`.well-highlight`).removeClass('well-highlight');
    });

});