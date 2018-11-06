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
            $(`.shift`).addClass('well-highlight');
            shiftKeyDown = true;
        };
    });
    $(document).keyup(function () {
        let key = event.keyCode || event.which;
        if (key == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
            $(`.shift`).removeClass('well-highlight');
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


    // ======================== EVENT LISTENERS & GAME LOGIC ========================

    let inputArray = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    };
    let correctArray = {
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

    $(document.body).keypress(function () {
        myCharCode = event.keyCode || event.which;
        myChar = event.key;
        console.log('Key:', myChar, ' | ASCII: ', event.keyCode);
        $(`#${myCharCode}`).addClass('well-highlight'); // On any keypress, highlight associated key element
        testEndCondition()

        if (timer.timerOn == false) {
            timer.timerOn = true;
            timer.run();
        }

        if (stopUserInput == false && inputArray[currentRow].length < correctArray[currentRow].length) { // If current row not yet complete
            displayUserInput();
            feedback();
            targetLetter();
            yellowBlock();
            charCount = charCount + 1;
            testEndCondition();

        } else if (stopUserInput == false && inputArray[currentRow].length == correctArray[currentRow].length) { // If at end of current row AND not on last row
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
    // Lifting a key removes all highlight classes from html wells.
    $(document.body).keyup(function () {
        $(`.well-highlight`).removeClass('well-highlight');
    });




    // ========================== HELPER FUNCTIONS ==========================


    let resultsDisplayed = false;

    function testEndCondition() {

        // If completed last character of last line, stop all text input and most functions.
        if (currentRow >= sentences.length && inputArray[currentRow].length >= correctArray[currentRow].length) {
            console.log('end');
            stopUserInput = true;
            timer.stop();

            // Display results, including errors and WPM.
            if(resultsDisplayed == false) {
                $('#feedback').empty();
                $('#target-letter').empty();
                setTimeout(function () {
                    $('#feedback').text('THE END');
                }, 500);
                setTimeout(function () {
                    $('#feedback').text(`Errors: ${countKeysBad} | WPM: ${getWPM()}`);
                }, 1500);
                setTimeout(function () {
                    $('#target-letter').append(`<div id='play-again'>Play Again?</div>`);
                    $('#play-again').on('click', function() {
                        window.location.href = window.location.pathname + window.location.search + window.location.hash;
                    });
                }, 2500);
                resultsDisplayed = true;
            };
            return true;
        };
    };


    let outputArray = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    };

    function displayUserInput() {
        if (myCharCode == 13) {
            myChar = '[ENTER]';  // Changing the way 'enter' key text is displayed after pressing 'enter'.
        };
        if (myCharCode == 32) {
            myChar = ' ';
        };
        if (stopUserInput == false) {
            inputArray[currentRow].push(myChar);
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

    function feedback() {
        if (stopUserInput == false) {
            if (inputArray[currentRow][charCount] == correctArray[currentRow][charCount]) {
                countKeysGood = countKeysGood + 1;
                $('#feedback').empty();
                $('#feedback').append(`<span id='feedbackIcon' class='glyphicon glyphicon-ok'></span>`);
                return 'good-char';
            };
            if (inputArray[currentRow][charCount] != correctArray[currentRow][charCount]) {
                countKeysBad = countKeysBad + 1;
                $('#feedback').empty();
                $('#feedback').append(`<span id='feedbackIcon' class='glyphicon glyphicon-remove'></span>`);
                return 'bad-char';
            };
        };
    };



    let paraXY = null;
    let yellowBlockXY = null;

    function targetLetter() {
        if (stopUserInput == false) {

            if (inputArray[currentRow].length < correctArray[currentRow].length && inputArray[currentRow].length > 0) {

                if (`${correctArray[currentRow][charCount + 1]}` == ' ') { // If next key is 'space' 
                    $('#target-letter').text('[space]');
                } else {
                    $('#target-letter').text(`${correctArray[currentRow][charCount + 1]}`); // Normal output
                };
            };
            if (inputArray[currentRow].length == 0 && currentRow < sentences.length + 1) { // If at beginning of line
                $('#target-letter').text(`${correctArray[currentRow][charCount]}`);
            };
            if (inputArray[currentRow].length == correctArray[currentRow].length && currentRow != sentences.length + 1) { // If at end of line && not on last row
                $('#target-letter').text(`${correctArray[currentRow + 1][0]}`);
            };
        } else if (stopUserInput == true) {
            return false;
        };
        testEndCondition();
    };



    function yellowBlock() {
        if (stopUserInput == false) {

            // find paragraph dimensions
            if (inputArray[currentRow].length < correctArray[currentRow].length) {   // If current line incomplete OR
                paraXY = $(`#para${currentRow}`)[0].getBoundingClientRect();
            };
            if (currentRow < sentences.length + 1 && inputArray[currentRow].length == correctArray[currentRow].length) { // If completed last character of current row && not on final row
                paraXY = $(`#para${currentRow + 1}`)[0].getBoundingClientRect();
            };
            // set yellow block position
            if (myCharCode == 32) {     // Force yellow block to move on 'space' key.
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



    // ======================== Game Timer =========================

    $('#target').append(`<div id='timer-box' class='timer fixed-top'>00:00:00</div>`);

    let timer = {
        timerOn: false,
        element: $('#timer-box'),
        totalSeconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
        string: '00:00:00',
        count() {
            timer.seconds++;
            timer.totalSeconds++;
            if (timer.seconds >= 60) {
                timer.seconds = 0;
                timer.minutes++;
                if (timer.minutes >= 60) {
                    timer.minutes = 0;
                    timer.hours++;
                }
            }
            timer.string =
                (timer.hours ? (timer.hours > 9 ? timer.hours : '0' + timer.hours) : '00') + ':' +
                (timer.minutes ? (timer.minutes > 9 ? timer.minutes : '0' + timer.minutes) : '00') + ':' +
                (timer.seconds ? (timer.seconds > 9 ? timer.seconds : '0' + timer.seconds) : '00');
            timer.element.text(`${timer.string}`);
        },
        run() {
            if (timer.timerOn == true) {
                t = setInterval(timer.count, 1000);
            }
        },
        stop() {
            if (timer.timerOn == true) {
                clearInterval(t);
            }
        },
    };


    function getWPM() {
        let wordCount = sentences.length + 1; // Accounting for first word of each line (not separated by spaces).
        for (let i = 1; i < sentences.length + 1; i++) {
            for (let j = 0; j < correctArray[i].length; j++) {
                if (correctArray[i][j] == ' ') {
                    wordCount = wordCount + 1;
                };
            };
        };
        let wpm = parseFloat(Math.round((wordCount / (timer.totalSeconds / 60)) * 100) / 100).toFixed(2);
        return wpm;
    };








    // ================ Mouse Click & Touch Support (CURRENTLY BROKEN) =================

    // let shiftToggle = false;

    // $('.well').on('mousedown' || 'touchstart', function () {

    //     highlighter = this.id;
    //     $(`#${highlighter}`).addClass('well-highlight');

    //     if (this.id == '16') {
    //         if (shiftToggle = false) {
    //             $('#keyboard-upper-container').show();
    //             $('#keyboard-lower-container').hide();
    //             $(`#16`).addClass('well-highlight');
    //             shiftKeyDown = true;
    //             shiftToggle = true;
    //         };
    //         if (shiftToggle = true) {
    //             $('#keyboard-upper-container').hide();
    //             $('#keyboard-lower-container').show();
    //             $(`#16`).removeClass('well-highlight');
    //             shiftKeyDown = false;
    //             shiftToggle = false;
    //         };
    //     };

    //     myCharCode = this.id;
    //     myChar = this.innerHTML;
    //     console.log('Key:', myChar, 'ASCII: ', myCharCode);

    //     if (stopUserInput == false && inputArray[currentRow].length < correctArray[currentRow].length) { // If current row not yet complete
    //         displayUserInput();
    //         feedback();
    //         targetLetter();
    //         yellowBlock();
    //         charCount = charCount + 1;
    //         testEndCondition();

    //     } else if (stopUserInput == false && inputArray[currentRow].length == correctArray[currentRow].length) { // If at end of current row AND not on last row
    //         console.log('New Row Created');
    //         currentRow = currentRow + 1; // new row
    //         charCount = 0; // reset character count to 0
    //         displayUserInput();
    //         feedback();
    //         targetLetter();
    //         yellowBlock();
    //         charCount = charCount + 1;
    //         testEndCondition();
    //     };
    // });

    // $('.well').on('mouseup' || 'touchend', function () {
    //     highlighter = this.id;
    //     $(`#${highlighter}`).addClass('well-highlight');

    //     if (this.id == '16') {
    //         $('#keyboard-upper-container').hide();
    //         $('#keyboard-lower-container').show();
    //         $(`#16`).removeClass('well-highlight');
    //         shiftKeyDown = false;
    //     };

    //     $(`.well-highlight`).removeClass('well-highlight');
    // });

});