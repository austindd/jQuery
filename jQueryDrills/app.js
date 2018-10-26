$(document).ready(function() {

    $(document.body).prepend("<div id='mainContainer' class='background'></div>");

    $('#mainContainer').append("<input id=btnSubmit type='submit' value='Submit'></input>")

    $('#btnSubmit').on('click', function() {
        console.log('Submitted!');
    });
});