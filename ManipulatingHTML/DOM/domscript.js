document.addEventListener('DOMContentLoaded', function(){

    let mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    document.body.appendChild(mainContainer);

    // ================ OBJECTIVE 1 ================

    let button1 = document.createElement('button');
    button1.id = 'button1';
    let button1Text = document.createTextNode('Button 1');
    button1.style.display = 'block';
    button1.style.margin = '1em auto';
    button1.appendChild(button1Text);
    mainContainer.appendChild(button1);

    button1.addEventListener('click', function(){
        alert("You really know how to push my buttons...")
    });
    
    // ================ OBJECTIVE 2 ================
    
    let textBox1Wrapper = document.createElement('div');
    textBox1Wrapper.id = 'textBox1Wrapper';
    textBox1Wrapper.style.display = 'block';
    textBox1Wrapper.style.margin = '2em auto';
    textBox1Wrapper.style.height = '2em';
    textBox1Wrapper.style.width = 'fit-content';
    // textBox1Wrapper.style.border = '1px solid black';

    let textBox1 = document.createElement('input');
    textBox1.id = 'textBox1';
    textBox1.type = 'text';
    textBox1.style.display = 'inline-block';
    textBox1.style.margin = '0 auto';
    textBox1.style.height = '90%';
    textBox1.style.width = '400px';
    textBox1.style.lineHeight = '300px';
    textBox1.style.border = '1px dotted darkgrey';
    textBox1Wrapper.appendChild(textBox1);
    mainContainer.appendChild(textBox1Wrapper);

    let button2 = document.createElement('button');
    button2.id = 'button2';
    let button2Text = document.createTextNode('Submit');
    button2.style.display = 'inline-block';
    button2.style.margin = '0';
    button2.appendChild(button2Text);
    textBox1Wrapper.appendChild(button2);

    button2.addEventListener('click', function(){
        alert(textBox1.value);
    })

    // ================ OBJECTIVE 3 ================

    
});