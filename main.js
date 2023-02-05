let continu =0

//Called when application is started.

let invoer = ""

let woorden = []

let wegIndex = 0;

let backupLijst =[]

function randomSentence(lijst){

  

  let welkeZin = Math.floor(Math.random() * lijst.length)

  

document.getElementById("test").innerHTML= lijst[welkeZin];

	woorden = lijst[welkeZin].split(" ")
	let zin = ""

	//random woord weglaten

wegIndex = Math.floor(Math.random() * woorden.length)

for(let i=0; i< woorden.length; i++){

if (i== wegIndex){

let letters = woorden[i].length

zin = zin + " "

for (let j =0; j<letters; j++){

zin = zin +"🤡"

}

}else{

zin = zin + " " +woorden[i]

	}

	

	

}

	document.getElementById("test").innerHTML=zin;

	

		

invoer = "hoi"

	//invulveld voor woord

  

  

  

}

function SayHello(){

  invoer = document.getElementById("ingang").value

continu = 1

console.log(woorden[wegIndex])

console.log(invoer)

if (invoer.localeCompare(woorden[wegIndex])==0){

document.getElementById("test").innerHTML = "correct";

}

}

function uploaden (){

  

  let tekst = "Hey hoe gaat het. Met mij goed."

const file = document.getElementById('docpicker').files[0]

console.log(file.name)

const reader = new FileReader();

reader.readAsText(file);

reader.addEventListener("load", () => {

    // this will then display a text file

  let lijst = reader.result;

  

  

  lijst = lijst.split(".")

  backupLijst = lijst

  randomSentence(lijst)  

  }, false);

	

  

}
