

window.onload=function(){

/*
-----------------------VARIABLEN--------------------------
*/

    var nachname=document.getElementById('nachname');
    var vorname=document.getElementById('vorname');
    var age=document.getElementById('age');
    var sub=document.getElementById('sub');
	var email=document.getElementById("mail");
	var dönername=document.getElementById('dönername');
	var döneradresse=document.getElementById("döneradresse");
	var dönerbezirk=document.getElementById('dönerbezirk');
	
if(nachname!==null){
		
   document.getElementById("formular")[0].addEventListener("submit", function(){checkForm()});
	
}
	
                      	
/*
-----------------------FUNKTIONEN--------------------------
*/

		
function notEmpty(field){
        console.log(field.value);
	
        if(field.value!==""){
			console.log("True")
            return true;}
        else{
            //alert(field);
			console.log("False");
            return false;
        }  
}
	
function checkForm(){
	
	//return false;
	var ret = ""; 
	var valid = true;
	var regexletter = new RegExp(/^[a-zA-Z]/);

	
	if(!regexletter.test(vorname.value)){
		ret = ret + "\nVorname";
		valid = false;
	}
	
	if(!regexletter.test(nachname.value)){
		ret = ret + "\nNachname";
		valid = false;
	}
	
	if(!notEmpty(age)){
		ret = ret + "\nAlter";
		valid = false;
	}
	
	if(!notEmpty(mail)){
		ret = ret + "\nE-Mail";
		valid = false;
	}
	
	if(!notEmpty(dönername)){
		ret = ret + "\nName des Dönerladens";
		valid = false;
	}
	
	if(!notEmpty(döneradresse)){
		ret = ret + "\nAdresse des Dönerladens";
	 	valid = false;

	}
	
	if(!notEmpty(dönerbezirk)){
		ret = ret + "\nBezirk des Dönerladens";
		valid = false;
	}
	
	if(!valid){
		
		ret = "Bitte gib uns noch folgende Daten: " + ret;
		alert(ret);
		
	}
	
	if(valid){
		form = true;
		document.getElementById("spiel").href = "SpielReal.html";
	}
	

	return valid;
}

    
/*------------------SPIEL---------------------*/
    
var zutaten =document.querySelectorAll("#zutaten img")
var fleisch =document.getElementById("1")
var hänchen =document.getElementById("2")
var knoblachsoße =document.getElementById("3")
var kräutersoße =document.getElementById("4")
var schafskäse =document.getElementById("5")
var salat =document.getElementById("6")
var dönerLeer =document.getElementById("7")
var deinDöner = "Dein Döner besteht aus: Brot ";
var leeresFeld = document.getElementById("leer")
var abschicken = document.querySelector("#button")

console.log(salat.alt)
console.log(abschicken)

for(var i = 0; i<zutaten.length; i++){
    zutaten[i].addEventListener("click",function(){
        changeStuff();
        this.style.visibility="hidden";
        var temp = this.alt   
        deinDöner += ", " + temp 
        schreiben();
    },false)
            
 }

function schreiben(){
    leeresFeld.innerHTML = deinDöner
}

function changeStuff(){
    dönerLeer.src = "Grafiken/D%C3%B6ner%20voll.png"
    
}

abschicken.addEventListener("click", function(){
alert("Danke!");
console.log(deinDöner);
location.reload();
},false)
    

}