document.addEventListener('DOMContentLoaded', function(){

    let mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    mainContainer.style.margin = '2em 0 2em 0';
    mainContainer.style.fontFamily = 'Play, sans-serif';

    document.body.appendChild(mainContainer);

    // ================ OBJECTIVE 1 ================

    let button1 = document.createElement('button');
    button1.id = 'button1';
    button1.className = 'btn btn-secondary';
    button1.style.display = 'block';
    button1.style.margin = '1em auto';

    let button1Text = document.createTextNode('Push It');

    button1.appendChild(button1Text);
    mainContainer.appendChild(button1);

    button1.addEventListener('click', function(){
        alert("Push it REAL good!")
    });
    
    // ================ OBJECTIVE 2 ================
    
    let textBox1Wrapper = document.createElement('div');
    textBox1Wrapper.id = 'textBox1Wrapper';
    textBox1Wrapper.style.display = 'block';
    textBox1Wrapper.style.margin = '2em auto';
    textBox1Wrapper.style.height = '40px';
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
    textBox1.style.fontSize = '20px';

    textBox1Wrapper.appendChild(textBox1);
    mainContainer.appendChild(textBox1Wrapper);

    let button2 = document.createElement('button');
    button2.id = 'button2';
    button2.className = 'btn btn-secondary';
    button2.style.display = 'inline-block';
    button2.style.margin = '0 0 0.5em 0';

    let button2Text = document.createTextNode('Submit');

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
    hoverDiv.style.margin = '1em auto';
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
        hoverDiv.style.backgroundColor = randomColor;
        hoverDiv.style.fontWeight = 'bold';
    });

    hoverDiv.addEventListener('mouseout', function(){
        hoverDiv.style.backgroundColor = mainContainer.style.backgroundColor;
        hoverDiv.style.fontWeight = 'normal';
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
        para1.style.color = randomColor;
    });


    // ================ OBJECTIVE 5 ================

    let button3 = document.createElement('button');
    button3.id = 'button3';
    button3.className = 'btn btn-secondary';
    button3.style.display = 'block';
    button3.style.margin = '0 auto';
    button3.style.marginTop = '1em';

    let button3Text = document.createTextNode("Don't wear it out!");

    button3.appendChild(button3Text);
    mainContainer.appendChild(button3);

    let myNameDiv = document.createElement('div');
    myNameDiv.id = 'myNameDiv';
    myNameDiv.className = 'display-3 align-middle text-dark';
    myNameDiv.style.display = 'block';
    myNameDiv.style.margin = '0.1em auto';
    myNameDiv.style.height = '120px';
    myNameDiv.style.width = '500px';
    myNameDiv.style.border = '1px solid black';
    myNameDiv.style.textAlign = 'center';
    myNameDiv.style.paddingTop = '0.2em';

    mainContainer.appendChild(myNameDiv);

    button3.addEventListener('click', function(){
        let myNameDivSpan = document.createElement('span')
        let myNameDivSpanText = document.createTextNode('Austin Davis');

        myNameDivSpan.appendChild(myNameDivSpanText);
        myNameDiv.appendChild(myNameDivSpan);
    });


    // ================ OBJECTIVE 6 ================

    let button4 = document.createElement('button');
    button4.id = 'button4';
    button4.className = 'btn btn-secondary';
    button4.style.display = 'block';
    button4.style.margin = '0 auto';
    button4.style.marginTop = '1em';

    let button4Text = document.createTextNode('Friend Creator')

    button4.appendChild(button4Text);
    mainContainer.appendChild(button4);

    let list1 = document.createElement('ul');
    list1.id = 'list1';
    list1.className = 'list-group';
    list1.style.display = 'block';
    list1.style.margin = '1em auto';
    list1.style.fontStyle = 'italic';
    list1.style.fontWeight = 'bold';
    list1.style.width = '75%';

    mainContainer.appendChild(list1);

    let friendArray = [
        'Sterling Archer',
        'Lana Kane',
        'Cheryl Tunt',
        'Cyril Figgis',
        'Pam Poovey',
        'Doctor Krieger',
        'Mallory Archer',
        'Slater',
        'Barry Dillon',
        'Katya Kazanova',
        'Woodhouse',
        'Kenny Loggins',
        'Burt Reynolds'
    ];

    button4.addEventListener('click', function() {

        if(friendArray.length > 0) {

            friendArray.sort(function(a, b) {return 0.5 - Math.random()});
            let newFriend = friendArray.pop();
            console.log("New Friend: ", newFriend);

            let listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.style.textAlign = 'center';

            let listItemText = document.createTextNode(newFriend);
            listItem.appendChild(listItemText);
            list1.appendChild(listItem);

            if(newFriend === 'Kenny Loggins') {
                listItem.style.color = 'darkred';
                listItem.addEventListener('click', function() {
                    window.location.href = `https://www.youtube.com/watch?v=siwpn14IE7E&autoplay=1`;
                });
            };

            if(newFriend === 'Burt Reynolds') {
                listItem.style.color = 'darkred';
                listItem.addEventListener('click', function() {
                    window.location.href = `https://www.youtube.com/watch?v=sr7laYDcqIw&autoplay=1`;
                });
            };
        };
    });






    // // Kenny Loggins Danger Zone
    // `https://www.youtube.com/watch?v=siwpn14IE7E`

    // // Burt Reynolds Gator
    // `https://www.youtube.com/watch?v=sr7laYDcqIw`
});