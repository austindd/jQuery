$(document).ready(function () {

    Press & hold 'shift' to toggle lower/upper keyboard

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
        let key = event.keyCode;
        if (key == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
            shiftKeyDown = false;
        };
    });

    //============================= Working Copy ====================================

    let myCharCode = null;

    $(document.body).keypress(function(){
        myCharCode = event.keyCode;
        console.log(event.keyCode);
        $(`#${myCharCode}`).addClass('well-highlight');
    });

    $(document.body).keydown(function(){
        console.log('Key Down: ', myCharCode);
    });

    $(document.body).keyup(function(){
        console.log('Key Up: ', myCharCode);
        $(`#${myCharCode}`).removeClass('well-highlight');
    });









    


// ======================== Attempts to handle multiple keypresses at once.

//     let myCharCode = null;
//     let myKeyCode = null;
//     let charCodeArray = [null];
//     let keyCodeArray = [null];
//     let keyIndex = 0;

// // ============================ KEY PRESSED ============================
//     $(document.body).keypress(function () {
//         myCharCode = event.keyCode;
//         charCodeArray[keyIndex] = event.keyCode;
//         console.log('charCodeArray: ', charCodeArray);
//         for (let i = 0; i < keyIndex; function () {
//             $(`#${charCodeArray[i]}`).addClass('well-highlight');
//         });
//         keyIndex = keyIndex + 1;
//     });
// // ============================ HOLD KEY DOWN ============================
//     $(document.body).keydown(function () {
//         myKeyCode = event.keyCode;
//         keyCodeArray[keyIndex] = event.keyCode;
//         console.log('Key Down: ', myCharCode);
//     });
// // ============================ LIFT KEY UP ============================
//     $(document.body).keyup(function () {
//         console.log('keyCodeArray: ', keyCodeArray);
//         $(`#${myKeyCode}`).removeClass('well-highlight');
//     });




    //=================================================================

    // $(document.body).keydown(function(){

    //     let key = (event.keyCode);

    //     if (shiftKeyDown == false && key > 64 && key < 91){
    //         key = key + 32;     // Accounting for lowercase ASCII codes (JS keyCode +32)
    //         $(`#${key}`).addClass('well-highlight');
    //     } else {
    //         $(`#${key}`).addClass('well-highlight');
    //     };
    // });

    // $(document.body).keyup(function(){

    //     let key = (event.keyCode);

    //     if (shiftKeyDown == false && key > 64 && key < 91){
    //         key = key + 32;     // Accounting for lowercase letter ASCII codes (JS keyCode +32)
    //         console.log('keyup: ', key);
    //         console.log($(`#${key}`));
    //         $(`#${key}`).removeClass('well-highlight');
    //     } else {

    //         console.log('keyup: ', key);
    //         console.log($(`#${key}`));
    //         $(`#${key}`).removeClass('well-highlight');
    //     };
    // });





});