function addListItem() {
    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.innerText = 'Milk and bread';
    list.appendChild(item);
};

$('#button-id').click(function() {
    $('#grocery-list').append('<li>Apples and oranges</li>');
    $('#grocery-list').append('<li>Milk and bread</li>');
});



$('.button-class').click(function () {
    console.log('.button-class was clicked')

    
});