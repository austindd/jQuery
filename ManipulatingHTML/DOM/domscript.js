document.addEventListener('DOMContentLoaded', function(){

    let mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    mainContainer.style.margin = '2em 0 2em 0';
    mainContainer.style.fontFamily = 'Play, sans-serif';
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
    textBox1Wrapper.style.margin = '3em auto';
    textBox1Wrapper.style.height = '2em';
    textBox1Wrapper.style.width = 'fit-content';
    

    let textBox1 = document.createElement('input');
    textBox1.id = 'textBox1';
    textBox1.type = 'text';
    textBox1.style.display = 'inline-block';
    textBox1.style.margin = '0 auto';
    textBox1.style.height = '90%';
    textBox1.style.width = '400px';
    textBox1.style.lineHeight = '300px';
    textBox1.style.border = '1px solid black';
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
    });

    // ================ OBJECTIVE 3 ================

    let hoverDiv = document.createElement('div');
    hoverDiv.id = 'hoverDiv';
    hoverDiv.style.display = 'block';
    hoverDiv.style.height = '100px';
    hoverDiv.style.width = '100px';
    hoverDiv.style.border = '1px solid black';
    hoverDiv.style.borderRadius = '0.75em';
    hoverDiv.style.margin = '2em auto';
    hoverDiv.style.paddingTop = '23px';
    hoverDiv.style.textAlign = 'center';

    let hoverDivText = document.createTextNode(`Don't click me!`);

    hoverDiv.appendChild(hoverDivText);
    mainContainer.appendChild(hoverDiv);

    hoverDiv.addEventListener('mouseenter', function(){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let randomColor = "rgb(" + red + ", " + green + ", " + blue + ") ";
        console.log(randomColor);
        hoverDiv.style.backgroundColor = randomColor;
    });

    hoverDiv.addEventListener('mouseout', function(){
        hoverDiv.style.backgroundColor = mainContainer.style.backgroundColor;
    });
    hoverDiv.addEventListener('click', function(){window.location.href =`https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1`});


    // ================ OBJECTIVE 4 ================

    let para1 = document.createElement('p');
    para1.id = 'para1';
    para1.style.display = 'block';
    para1.style.margin = '2em auto';
    para1.style.width = '80%';
    para1.style.textAlign = 'justify';
    para1.style.textJustify = 'inter-word';
    
    para1Text = document.createTextNode("Pi Draconis, Latinized from π Dra, is a solitary star in the northern circumpolar constellation of Draco. It is visible to the naked eye with an apparent visual magnitude of 4.59. Based upon an annual parallax shift of 14.25 mas as measured from Earth, it is located around 229 light years from the Sun. At that distance, the visual magnitude is diminished by an extinction factor of 0.063±0.10 due to interstellar dust.")

    para1.appendChild(para1Text);
    mainContainer.appendChild(para1);

    para1.addEventListener('click', function(){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let randomColor = "rgb(" + red + ", " + green + ", " + blue + ") ";
        console.log(randomColor);
        para1.style.color = randomColor;
    });


    // ================ OBJECTIVE 5 ================

    let button3 = document.createElement('button');
    button3.id = 'button3';
    button3.style.display = 'block';
    button3.style.margin = '0 auto';

    let button3Text = document.createTextNode("Don't wear it out!");

    button3.appendChild(button3Text);
    mainContainer.appendChild(button3);

    let myNameDiv = document.createElement('div');
    myNameDiv.id = 'myNameDiv';
    myNameDiv.className = 'display-3 align-middle text-success';
    myNameDiv.style.display = 'block';
    myNameDiv.style.margin = '0 auto';
    myNameDiv.style.height = '120px';
    myNameDiv.style.width = '500px';
    myNameDiv.style.border = '1px solid black';
    myNameDiv.style.textAlign = 'center';
    myNameDiv.style.paddingTop = '0.2em';




    mainContainer.appendChild(myNameDiv);

    button3.addEventListener('click', function(){
        let myNameDivText = document.createTextNode('Austin Davis');
        myNameDiv.appendChild(myNameDivText);
    });


});