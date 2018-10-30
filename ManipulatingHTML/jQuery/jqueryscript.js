$(document).ready(function() {

    $(document.body).prepend(`<div id="mainContainer" class="container"></div>`);
    $("#mainContainer").append(`<div id="row1" class="row d-flex"></div>`);
    $("#row1").append(`<div id="column1" class="column"></div>`);
    $("#row1").append(`<div id="column2" class="column"></div>`);
    $("#row1").append(`<div id="column3" class="column"></div>`);
    $("#mainContainer").append(`<div id="row2" class="row d-flex"></div>`);
    $("#row2").append(`<div id="column4" class="column"></div>`);
    $("#row2").append(`<div id="column5" class="column"></div>`);
    $("#row2").append(`<div id="column6" class="column"></div>`);
    $("#mainContainer").append(`<div id="row3" class="row d-flex"></div>`);
    $("#row3").append(`<div id="column7" class="column"></div>`);
    $("#row3").append(`<div id="column8" class="column"></div>`);
    $("#row3").append(`<div id="column9" class="column"></div>`);

    // Main Page Style Template
    $(document.body).css({'margin': '0'});
    $('#mainContainer').css({
        'margin': '3em 2em 6em 2em',
        'font-family': 'Play, sans-serif',
    });
    $('.row').css({
        'margin': '2em 0 2em 0',
        'border': '1px solid black',
    });
    $('.column').css({
        'padding': '0.5em',
        'border': '1px solid black',
    });


// ==================== OBJECTIVE 1 ====================

    // Styling row 1
    $("#column1").addClass('col-1 d-inline-flex justify-content-center');
    $("#column2").addClass('col-10 d-inline-flex justify-content-center');
    $("#column3").addClass('col-1 d-inline-flex justify-content-center');

    $('#column1').append(`<div id='taskNum1' class='taskNum'>(1)</div>`);

    // Button 1
    $('#column2').append(`<button id="button1" class="btn btn-dark">Push It</button>`);
    $('#button1').on('click', function(){
        alert("Push it REAL good!");
    });

// ==================== OBJECTIVE 2 ====================

    // Styling row 2
    $("#column4").addClass('col-1 d-inline-flex justify-content-center');
    $("#column5").addClass('col-10 d-inline-flex justify-content-center');
    $("#column6").addClass('col-1 d-inline-flex justify-content-center');

    $('#column4').append(`<div id='taskNum2' class='taskNum'>(2)</div>`);

    // Text box and button wrapper
    $('#column5').append(`<div id='textBoxWrapper'></div>`);
    $('#textBoxWrapper').css({
        'display': 'block',
        
    });

    // Text Box
    $('#textBoxWrapper').append(`<input id='textBox' type='text'></input>`);
    $('#textBox').css({
        'padding': '0 0.5em 0 0.5em',
        'height': '2.5em',
        'width': '18em',
        'border': '1px solid black',
        'word-wrap': 'normal',
    });

    $('#textBox').keypress(function(){
        let key = event.keyCode;
        if (key == 13){
            alert(`${$('#textBox').val()}`);
        };
    });

    // Button 2
    $('#textBoxWrapper').append(`<button id='button2' class='btn btn-dark align-bottom'>Submit</button>`)

    $('#button2').on('click', function(){
        alert(`${$('#textBox').val()}`);
    });




    
    // Class Styles
    $('.taskNum').css({
        'padding': '0',
        'font-size': '20px',
    });
    $('.btn').css({
        'height': '2.5em',
        'font-size': '16px',
    });
});