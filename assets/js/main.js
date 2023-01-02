
let score = 0
let temps = 10
let inter
let globalCount = 0;     //j'ai ajouter une variable compteur global pour me repérer dans mes 3 tableaux qui sont liés pour rester sur la meme dimension des tableaux//
let end = " TERMINE" + score
let questArray = [
    "En quelle année fut signé la déclaration d'indépendance des états-unis ?",
    "Qui a été le premier pharaon d'egypte?",
    "Quel est l'ingredient principal des pâtes ?",
    "Ou veut retourner ET l'extraterrestre  ?",
    "Dans quelle ville se trouve la tour de pise?",
    "Quel pays a inventé les pâtes?",
    "Dans quel film comique louis de funès joue un commissaire de police?",
    "Quel pays est le plus grand producteur de vin au monde?",
    "Quel est le nom du celebre chasseur de Pokemon?",
    "quelle personnalité anglaise célèbre possede une voiture qui utilise du vin comme carburant?"
]

let answer = [
    ["1823", "1776", "1797", "1805"],
    ["Toutankhamon", "Ramsès", "kheops", "Narmer(ménès)"],
    ["l'huile", "le lait", "la farine", "la levure"],
    ["a aqualand", "je sais pas", "maison", "faire une promenade"],
    ["venise", "pise", "rome", "florence"],
    ["italie","chine","pologne","inde"],
    ["le gendarme de saint-tropez"," flic ou voyou","Fantomas","l'aile ou la cuisse"],
    ["espagne","italie","chine","états-unis"],
    ["sasha Distel","sasha Touille","sasha Ketchum","sacha Guitry"],
    ["Sir Sean Connery","le prince Charles","david Beckham","David Bowie"]
]

let goodAnswer = [
    "1776",
    "Narmer(ménès)",
    "la farine",
    "maison",
    "pise",
    "chine",
    "rabbi jaccob",
    "italie",
    "sasha Ketchum",
    "le prince Charles"

]
// (...savedquestions) = questions; pour ne pas associé dans la mémoire deux éléments questions = variable et savedquestions=tableau qui ne doit pas bouger = sauvegarde

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// /*;tableau des bonnes reponses;*

function displayQuestions() {
    clearInterval(inter)
    temps = 10
    if (globalCount < 10) {//Defini le nombre de questions//
         inter = setInterval(diminuerTemps, 1000)
        if (document.querySelector('#question') != null) {
            document.querySelector('#question').innerHTML = questArray[globalCount] //j'ai enlever la valeur 0 du array pour la transformer en globalcount//
            displayReponse()//AFFICHER LES REPONSES//
        }
    }else{
        globalCount = 0;
       
        document.querySelector('#container').childNodes.forEach(function(el)  {el.remove()})
        document.querySelector('#container').innerHTML = "<p>C'est fini !</p>"
      // je rappele les questions et reponses avec une valeur de zero pour redemarrer//
    }
   
}

function displayReponse() {//fonction pour interagir sur les reponses//
 
    let reponseContainer = document.querySelectorAll(".reponse")

    for (let i = 0; i < reponseContainer.length; i++) {
        console.log(reponseContainer, answer);
        reponseContainer[i].innerHTML = answer[globalCount][i] 
    } 
}



function reply(elem) {
   
    if (elem.innerHTML == goodAnswer[globalCount] && globalCount !== 10) {
        score = score + 1;
        globalCount = globalCount + 1;
        document.querySelector("#score").innerHTML = score
        document.querySelector('#question').innerHTML = questArray[globalCount]
      
    } else {
        globalCount = globalCount + 1;
        document.querySelector('#question').innerHTML = questArray[globalCount]
        document.querySelector("#score").innerHTML = score
       
        end = questArray  -1
    }
    displayQuestions()

}

document.querySelector("#butreset").innerHTML = `<a href="">Recommencer le Quiz !</a>`;

displayQuestions()
//timer pour les questions//
const timerElement = document.getElementById("timer")
timerElement.innerText = temps

function diminuerTemps() {
    timerElement.innerText = temps
    temps--
    if(temps == -1){
        temps = 10
        globalCount++
        displayQuestions()
    }
}
  
  
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  