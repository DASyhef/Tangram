const Body = document.querySelector("body");
let CVEric = document.createElement("a");

//Add buttons and links for each new figures
function AddFigures() {
    const Buttons = document.querySelector(".buttons");
    const Head = document.querySelector("head");

    //Change names of buttons
    document.querySelector("#btnOne").innerHTML = "Carré";
    document.querySelector("#btnTwo").innerHTML = "Chat";
    document.querySelector("#btnThree").innerHTML = "Bateau";
    document.querySelector("#btnFour").innerHTML = "Chien";
    document.querySelector("#btnFive").innerHTML = "Ours";
    document.querySelector("#btnSix").innerHTML = "Cheval";
    document.querySelector("#btnSeven").innerHTML = "Papillon";


    // Turtle
    const newButton1 = document.createElement("button");
    Buttons.appendChild(newButton1);
    newButton1.setAttribute('id', 'btnHeight');
    newButton1.innerHTML = "Tortue";
    newButton1.setAttribute('rel', 'stylesheet');

    const newLink1 = document.createElement("link");
    Head.appendChild(newLink1);
    newLink1.setAttribute('rel', 'stylesheet');
    newLink1.setAttribute('href', 'css/figure8.css');


    // Secret
    const newButton2 = document.createElement("button");
    Buttons.appendChild(newButton2);
    newButton2.setAttribute('id', 'btnSecret');
    newButton2.innerHTML = "Cédric";

    const newLink2 = document.createElement("link");
    Head.appendChild(newLink2);
    newLink2.setAttribute('rel', 'stylesheet');
    newLink2.setAttribute('href', 'css/figure9.css');

    const newButton3 = document.createElement("button");
    Buttons.appendChild(newButton3);
    newButton3.setAttribute('id', 'btnBonus');
    newButton3.innerHTML = "Bonus";

    const newLink3 = document.createElement("link");
    Head.appendChild(newLink3);
    newLink3.setAttribute('rel', 'stylesheet');
    newLink3.setAttribute('href', 'css/figure10bis.css');

    const newButton4 = document.createElement("button");
    Buttons.appendChild(newButton4);
    newButton4.setAttribute('id', 'DIY');
    newButton4.innerHTML = "Faites le vous-même";

    const newLink4 = document.createElement("link");
    Head.appendChild(newLink4);
    newLink4.setAttribute('rel', 'stylesheet');
    newLink4.setAttribute('href', 'css/figure11.css');

    // Timer
    const newButton5 = document.createElement("button");
    Buttons.appendChild(newButton5);
    newButton5.setAttribute('id', 'btnTimer');
    newButton5.innerHTML = "Stop/Start Timer";
}
AddFigures()


// CHANGE CLASS WHEN CLICK ON BUTTONS TO ACTIVATE THE FIGURE WANTED //

//Square Figure
function Square() {
    document.querySelector(".red").setAttribute('class', 'figure red square');
    document.querySelector(".green").setAttribute('class', 'figure green square');
    document.querySelector(".blue").setAttribute('class', 'figure blue square');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow square');
    document.querySelector(".purple").setAttribute('class', 'figure purple square');
    document.querySelector(".brown").setAttribute('class', 'figure brown square');
    document.querySelector(".orange").setAttribute('class', 'figure orange square');
    document.querySelector(".canvas").setAttribute('class', 'canvas square');
    CVEric.innerHTML = " ";
    counter = 0;
}
document.getElementById("btnOne").addEventListener('click', Square)

//Cat Figure
function Cat() {
    document.querySelector(".red").setAttribute('class', 'figure red cat');
    document.querySelector(".green").setAttribute('class', 'figure green cat');
    document.querySelector(".blue").setAttribute('class', 'figure blue cat');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow cat');
    document.querySelector(".purple").setAttribute('class', 'figure purple cat');
    document.querySelector(".brown").setAttribute('class', 'figure brown cat');
    document.querySelector(".orange").setAttribute('class', 'figure orange cat');
    document.querySelector(".canvas").setAttribute('class', 'canvas cat');
    CVEric.innerHTML = " ";
    counter = 1;
}
document.getElementById("btnTwo").addEventListener('click', Cat)

//Boat Figure
function Boat() {
    document.querySelector(".red").setAttribute('class', 'figure red Boat');
    document.querySelector(".green").setAttribute('class', 'figure green Boat');
    document.querySelector(".blue").setAttribute('class', 'figure blue Boat');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow Boat');
    document.querySelector(".purple").setAttribute('class', 'figure purple Boat');
    document.querySelector(".brown").setAttribute('class', 'figure brown Boat');
    document.querySelector(".orange").setAttribute('class', 'figure orange Boat');
    document.querySelector(".canvas").setAttribute('class', 'canvas Boat');
    CVEric.innerHTML = " ";
    counter = 2;
}
document.getElementById("btnThree").addEventListener('click', Boat)

//Dog Figure
function Dog() {
    document.querySelector(".red").setAttribute('class', 'figure red dog');
    document.querySelector(".green").setAttribute('class', 'figure green dog');
    document.querySelector(".blue").setAttribute('class', 'figure blue dog');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow dog');
    document.querySelector(".purple").setAttribute('class', 'figure purple dog');
    document.querySelector(".brown").setAttribute('class', 'figure brown dog');
    document.querySelector(".orange").setAttribute('class', 'figure orange dog');
    document.querySelector(".canvas").setAttribute('class', 'canvas dog');
    CVEric.innerHTML = " ";
    counter = 3;
}
document.getElementById("btnFour").addEventListener('click', Dog)

//Bear Figure
function Bear() {
    document.querySelector(".red").setAttribute('class', 'figure red ours');
    document.querySelector(".green").setAttribute('class', 'figure green ours');
    document.querySelector(".blue").setAttribute('class', 'figure blue ours');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ours');
    document.querySelector(".purple").setAttribute('class', 'figure purple ours');
    document.querySelector(".brown").setAttribute('class', 'figure brown ours');
    document.querySelector(".orange").setAttribute('class', 'figure orange ours');
    document.querySelector(".canvas").setAttribute('class', 'canvas ours');
    CVEric.innerHTML = " ";
    counter = 4;
}
document.getElementById("btnFive").addEventListener('click', Bear)

//Horse Figure
function Horse() {
    document.querySelector(".red").setAttribute('class', 'figure red cheval');
    document.querySelector(".green").setAttribute('class', 'figure green cheval');
    document.querySelector(".blue").setAttribute('class', 'figure blue cheval');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow cheval');
    document.querySelector(".purple").setAttribute('class', 'figure purple cheval');
    document.querySelector(".brown").setAttribute('class', 'figure brown cheval');
    document.querySelector(".orange").setAttribute('class', 'figure orange cheval');
    document.querySelector(".canvas").setAttribute('class', 'canvas cheval');
    CVEric.innerHTML = " ";
    counter = 5;
}
document.getElementById("btnSix").addEventListener('click', Horse)

//Butterfly Figure
function Butterfly() {
    document.querySelector(".red").setAttribute('class', 'figure red butterfly');
    document.querySelector(".green").setAttribute('class', 'figure green butterfly');
    document.querySelector(".blue").setAttribute('class', 'figure blue butterfly');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow butterfly');
    document.querySelector(".purple").setAttribute('class', 'figure purple butterfly');
    document.querySelector(".brown").setAttribute('class', 'figure brown butterfly');
    document.querySelector(".orange").setAttribute('class', 'figure orange butterfly');
    document.querySelector(".canvas").setAttribute('class', 'canvas butterfly');
    CVEric.innerHTML = " ";
    counter = 6;
}
document.getElementById("btnSeven").addEventListener('click', Butterfly)

//Turtle Figure
function Turtle() {
    document.querySelector(".red").setAttribute('class', 'figure red turtle');
    document.querySelector(".green").setAttribute('class', 'figure green turtle');
    document.querySelector(".blue").setAttribute('class', 'figure blue turtle');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow turtle');
    document.querySelector(".purple").setAttribute('class', 'figure purple turtle');
    document.querySelector(".brown").setAttribute('class', 'figure brown turtle');
    document.querySelector(".orange").setAttribute('class', 'figure orange turtle');
    document.querySelector(".canvas").setAttribute('class', 'canvas turtle');
    CVEric.innerHTML = " ";
    counter = 7;
}
document.getElementById("btnHeight").addEventListener('click', Turtle)

//VOTRE NOM Secret Figure
document.getElementById("btnSecret").addEventListener('click', function () {
    document.querySelector(".red").setAttribute('class', 'figure red cedric');
    document.querySelector(".green").setAttribute('class', 'figure green cedric');
    document.querySelector(".blue").setAttribute('class', 'figure blue cedric');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow cedric');
    document.querySelector(".purple").setAttribute('class', 'figure purple cedric');
    document.querySelector(".brown").setAttribute('class', 'figure brown cedric');
    document.querySelector(".orange").setAttribute('class', 'figure orange cedric');
    document.querySelector(".canvas").setAttribute('class', 'canvas cedric');
    document.querySelector("body").setAttribute('class', 'body cedric');
    Body.appendChild(CVEric);
    CVEric.setAttribute('id', 'btnHeight');
    CVEric.innerHTML = "Le CV d' Éric";
    CVEric.setAttribute('href', 'https://ericdsr.github.io/CV_en_ligne/');
});

document.getElementById("btnBonus").addEventListener('click', function () {

    document.querySelector(".red").setAttribute('class', 'figure red greg');
    document.querySelector(".green").setAttribute('class', 'figure green greg');
    document.querySelector(".blue").setAttribute('class', 'figure blue greg');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow greg');
    document.querySelector(".purple").setAttribute('class', 'figure purple greg');
    document.querySelector(".brown").setAttribute('class', 'figure brown greg');
    document.querySelector(".orange").setAttribute('class', 'figure orange greg');
    document.querySelector(".canvas").setAttribute('class', 'canvas greg');
    CVEric.innerHTML = " ";

});

document.getElementById("DIY").addEventListener('click', function () {
    document.querySelector(".red").setAttribute('class', 'figure red draggable');
    document.querySelector(".green").setAttribute('class', 'figure green draggable');
    document.querySelector(".blue").setAttribute('class', 'figure blue draggable');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow draggable');
    document.querySelector(".purple").setAttribute('class', 'figure purple draggable');
    document.querySelector(".brown").setAttribute('class', 'figure brown draggable');
    document.querySelector(".orange").setAttribute('class', 'figure orange draggable');
    document.querySelector(".canvas").setAttribute('class', 'canvas square');
    CVEric.innerHTML = " ";

    // Make the DIV element draggable:
dragElement(document.querySelector(".draggable"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.querySelector(elmnt.id + ".canvas")) {
    // if present, the header is where you move the DIV from:
    document.querySelector(elmnt.id + ".canvas").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

})

// TIMER TO AUTOMATICALLY CHANGE FIGURES //

//Define elements
const FiguresList = [Square, Cat, Boat, Dog, Bear, Horse, Butterfly, Turtle];
let counter = 0;

//Square Figure on load page
Square()

// The Timer //
let timerStatus = false;
let intervalId;

//Button to enable or disable Timer
document.getElementById("btnTimer").addEventListener("click", () => {
    //Activate the timer if variable on "false"
    if (!timerStatus) {
        intervalId = setInterval(() => {
            counter = (counter + 1);
            //If element to loop the Timer
            if (counter === 8) {
                counter = 0;
            }
            FiguresList[counter](); //Function to change the figures
            console.log(FiguresList[counter])
        }, 5000);
        timerStatus = true;
        console.log("Statut du Timer =", timerStatus)
    }
    //Disable the timer if variable on "true"
    else {
        clearInterval(intervalId); //Stop the Timer
        timerStatus = false;
        console.log("Statut du Timer =", timerStatus)
    }
});