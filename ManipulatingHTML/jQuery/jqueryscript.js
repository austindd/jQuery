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
    $("#mainContainer").append(`<div id="row4" class="row d-flex"></div>`);
    $("#row4").append(`<div id="column10" class="column"></div>`);
    $("#row4").append(`<div id="column11" class="column"></div>`);
    $("#row4").append(`<div id="column12" class="column"></div>`);
    $("#mainContainer").append(`<div id="row5" class="row d-flex"></div>`);
    $("#row5").append(`<div id="column13" class="column"></div>`);
    $("#row5").append(`<div id="column14" class="column"></div>`);
    $("#row5").append(`<div id="column15" class="column"></div>`);
    $("#mainContainer").append(`<div id="row6" class="row d-flex"></div>`);
    $("#row6").append(`<div id="column16" class="column"></div>`);
    $("#row6").append(`<div id="column17" class="column"></div>`);
    $("#row6").append(`<div id="column18" class="column"></div>`);

    // Main Page Style Template
    $(document.body).css({'margin': '0'});
    $('#mainContainer').css({
        'margin': '3em 2em 6em 2em',
        'font-family': 'Play, sans-serif',
    });
    $('.row').css({
        'margin': '2em 0 2em 0',
    });
    $('.column').css({
        'padding': '0.5em',
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
    $('#textBox').keypress(function(){  // Press 'enter' key to trigger alert
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


// ==================== OBJECTIVE 3 ====================

    $("#column7").addClass('col-1 d-inline-flex justify-content-center');
    $("#column8").addClass('col-10 d-inline-flex justify-content-center');
    $("#column9").addClass('col-1 d-inline-flex justify-content-center');
    $('#column7').append(`<div id='taskNum3' class='taskNum'>(3)</div>`);

    // Div with hover text
    $('#column8').append(`<div id='hoverDiv' class='bg-light'>Don't Click Me!</div>`);
    $('#hoverDiv').css({
        'height': '100px',
        'width': '162px',
        'border': '1px solid black',
        'border-radius': '5%',
        'text-align': 'center',
        'padding': '34px 0 0 0',
        'font-weight': 'bold',
    });

    $('#hoverDiv').on('mouseenter', function(){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${red},${green},${blue})`;
        $('#hoverDiv').removeClass('bg-light');
        $('#hoverDiv').css({'background-color': randomColor});
    });
    $('#hoverDiv').on('mouseout', function(){
        $('#hoverDiv').addClass('bg-light');
        $('#hoverDiv').css({'background-color': ''});
    });
    $('#hoverDiv').on('click', function(){
        window.location.href = `helloworld.txt`;
    });


// ==================== OBJECTIVE 4 ====================

    $("#column10").addClass('col-1 d-inline-flex justify-content-center');
    $("#column11").addClass('col-10 d-inline-flex justify-content-center');
    $("#column12").addClass('col-1 d-inline-flex justify-content-center');
    $('#column10').append(`<div id='taskNum4' class='taskNum'>(4)</div>`);

    // Paragraph 1
    $('#column11').append(`<p id='para1' class='para'></p>`);
    $('#para1').text("Pi Draconis, Latinized from π Dra, is a solitary star in the northern circumpolar constellation of Draco. It is visible to the naked eye with an apparent visual magnitude of 4.59. Based upon an annual parallax shift of 14.25 mas as measured from Earth, it is located around 229 light years from the Sun. At that distance, the visual magnitude is diminished by an extinction factor of 0.063±0.10 due to interstellar dust.");
    $('#para1').css({
        'text-align': 'justify',
        'text-justify': 'inter-word',
    });

    // Paragraph change color
    $('#para1').on('click', function(){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${red},${green},${blue})`;
        $('#para1').removeClass('bg-light');
        $('#para1').css({'color': randomColor});
    });

    
// ==================== OBJECTIVE 5 ====================

    $("#column13").addClass('col-1 d-inline-flex justify-content-center');
    $("#column14").addClass('col-10 d-inline-flex justify-content-center');
    $("#column15").addClass('col-1 d-inline-flex justify-content-center');
    $('#column13').append(`<div id='taskNum5' class='taskNum'>(5)</div>`);

    // Wrapper Div (button3, nameBanner)
    $('#column14').append(`<div id='nameBannerWrapper' class='flex-column justify-content-center'></div>`);
    $('#nameBannerWrapper').css({
        'display': 'block',
    });

    // Button 3
    $('#nameBannerWrapper').append(`<button id='button3' class='btn btn-dark'>Don't wear it out!</button>`);
    $('#button3').css({
        'display': 'block',
        'margin': '2px auto',
    });

    // Name Banner
    $('#nameBannerWrapper').append(`<div id='nameBanner'></div>`);
    $('#nameBanner').css({
        'height': '100px',
        'width': '400px',
        'border': '1px solid black',
        'margin': '0 auto',
        'text-align': 'center',
        'padding': '14px',
    });

    // Button3 Function
    let nameBannerFlag = false;
    $('#button3').on('click', function(){
        if(nameBannerFlag == false){
            $('#nameBanner').text("Austin Davis");
            $('#nameBanner').addClass('display-4 bg-warning')
            nameBannerFlag = true;
        } else if(nameBannerFlag == true){
            $('#nameBanner').text("");
            $('#nameBanner').removeClass('display-4 bg-warning')
            nameBannerFlag = false;
        };

    });
    

// ==================== OBJECTIVE 6 ====================

    $("#column16").addClass('col-1 d-inline-flex justify-content-center');
    $("#column17").addClass('col-10 d-inline-flex justify-content-center');
    $("#column18").addClass('col-1 d-inline-flex justify-content-center');
    $('#column16').append(`<div id='taskNum6' class='taskNum'>(6)</div>`);

    // Wrapper (Unordered List and Button)
    $('#column17').append(`<div id='listWrapper' class='flex-column wrapper'></div>`);
    $('#listWrapper').css({
        'width': '100%',
    });

    // Button 4: Imaginary Friend Creator
    $('#listWrapper').append(`<button id='button4' class='btn btn-dark'>Imaginate Friend</button>`);
    $('#button4').css({
        'display': 'block',
        'margin': '2px auto',
    });
    // Unordered List
    $('#listWrapper').append(`<ul id='friendList' class='list-group'></ul>`);
    $('#friendList').css({
        'text-align': 'center',
    });

    // Friend Creator Logic
    let friendArray = [
        'Sterling Archer',
        'Lana Kane',
        'Cheryl Tunt',
        'Cyril Figgis',
        'Pam Poovey',
        'Algernop Krieger',
        'Mallory Archer',
        'Slater',
        'Barry Dylan',
        'Katya Kazanova',
        'Woodhouse',
        'Kenny Loggins',
        'Burt Reynolds'
    ];
    let friendCount = 0;

    $('#button4').on('click', function(){
        if(friendArray.length > 0){
            friendCount = friendCount + 1;
            friendArray.sort(function(a, b) {return 0.5 - Math.random()});
            let newFriend = friendArray.pop();
            console.log("New Friend: ", newFriend);

            $('#friendList').append(`<li id='friend${friendCount}' class='list-group-item friend'>${newFriend}</li>`);
            $(`#friend${friendCount}`).on('mouseenter', function(){
                $(this).addClass('bg-warning');
                $(this).css({
                    'font-weight': 'bold',
                    'font-size': '2em',
                });
            });

            $(`#friend${friendCount}`).on('mouseout', function(){
                $(this).removeClass('bg-warning');
                $(this).css({
                    'font-weight': 'normal',
                    'font-size': '1em',
                });
            });
        };
    });

// =====================================================

    // Class Styles/Functions
    $('.taskNum').css({
        'padding': '0',
        'font-size': '20px',
    });
    $('.btn').css({
        'height': '2.5em',
        'font-size': '16px',
    });


}); // End Document Ready Function