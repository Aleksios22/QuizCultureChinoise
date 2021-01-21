

// VARIABLES


var buttonIndice = document.querySelector("#pagequestionNovice #buttonindice"); //btn
var buttonIndice2 = document.querySelector("#section3 #buttonindice2"); //btn
var buttonSuivant = document.querySelector("div #buttonsuivant"); //btn
var buttonSuivant2 = document.querySelector("div #buttonsuivant2"); //btn

var pageniveau = document.querySelector("#pageniveau");   //page
var pagequestionNovice = document.querySelector("#pagequestionNovice"); //page
var pagequestionExpert = document.querySelector("#pagequestionExpert"); //page

var titreNiveauExpert = document.querySelector("#spanNiveau2"); //qst
var pIndice = document.querySelector("#pagequestionNovice #pIndice"); //qst
var titreNumeroQuestion = document.querySelector("div h1 #spanNumero2"); //qst
var elementQuestion = document.querySelector("div p"); //qst
var elementReponse1 = document.querySelector("div button.rp1"); //qst
var elementReponse2 = document.querySelector("div button.rp2"); //qst
var elementReponse3 = document.querySelector("div button.rp3"); //qst
var elementReponse4 = document.querySelector("div button.rp4"); //qst
var pointage = 0;

var pIndiceExp = document.querySelector("#section3 #pIndice2"); //qst
var elementQuestionExp = document.querySelector("#divDuQuestionExpert #pQuestionExpert"); //qst
var elementReponse1exp = document.querySelector("#divDuQuestionExpert button.rp1"); //qst
var elementReponse2exp = document.querySelector("#divDuQuestionExpert button.rp2"); //qst
var elementReponse3exp = document.querySelector("#divDuQuestionExpert button.rp3"); //qst
var elementReponse4exp = document.querySelector("#divDuQuestionExpert button.rp4"); //qst

var pageresultat = document.querySelector("#pageresultatReussi"); //rst
var pageresultatAband = document.querySelector("#pageresultatAbandonne"); //rst
var buttonAbandonnerQuestionNovice = document.querySelector("div #buttonabadonner"); //rst
var pointageAbandonne = document.querySelector("#pageresultatAbandonne #spanpointage"); //rst
var pourcentageAbandonne = document.querySelector("#pageresultatAbandonne #spanpourcentage"); //rst
 
var bonneReponseCourante;
var reponseChoisie = null;
/**
 * Pour changer les question aléatoirement.
*/

titreNiveauNovice = document.querySelector("#pagequestionNovice #spanNiveau").textContent;

function changerQuestionFacile() {

    let positionAleaFac = Math.floor(Math.random()*choixquestion.facile.length);

    let questionAleatoire = choixquestion.facile[positionAleaFac]; 
    let texteIndice = choixquestion.facile[positionAleaFac].indice;
        elementQuestion.innerHTML = questionAleatoire.titre;
        pIndice.style.display = "none";
        pIndice.innerHTML = texteIndice;
        elementReponse1.innerHTML = questionAleatoire.reponses[0];
        elementReponse2.innerHTML = questionAleatoire.reponses[1];
        elementReponse3.innerHTML = questionAleatoire.reponses[2];
        elementReponse4.innerHTML = questionAleatoire.reponses[3];
        bonneReponseCourante = questionAleatoire.bonneReponse;
        choixquestion.facile.splice([positionAleaFac], 1);
}

function changerQuestionIntermediaireEtFacile() {
    let positionAlea = Math.floor(Math.random()*choixquestion.intermediaire.length);
    let questionAleatoire = choixquestion.intermediaire[positionAlea];
    let texteIndice = choixquestion.intermediaire[positionAlea].indice;
    
        elementQuestion.innerHTML = questionAleatoire.titre;
        pIndice.style.display = "none";
        pIndice.innerHTML = texteIndice;
        elementReponse1.innerHTML = questionAleatoire.reponses[0];
        elementReponse2.innerHTML = questionAleatoire.reponses[1];
        elementReponse3.innerHTML = questionAleatoire.reponses[2];
        elementReponse4.innerHTML = questionAleatoire.reponses[3];
        bonneReponseCourante = questionAleatoire.bonneReponse; 
        choixquestion.intermediaire.splice([positionAlea], 1);
}

function changerQuestionIntermediaireEtDifficle() {
    let positionAlea = Math.floor(Math.random()*choixquestion.intermediaire.length);
    let questionAleatoire = choixquestion.intermediaire[positionAlea];
    let texteIndice = choixquestion.intermediaire[positionAlea].indice;
    
        elementQuestionExp.innerHTML = questionAleatoire.titre;
        pIndiceExp.style.display = "none";
        pIndiceExp.innerHTML = texteIndice;
        elementReponse1exp.innerHTML = questionAleatoire.reponses[0];
        elementReponse2exp.innerHTML = questionAleatoire.reponses[1];
        elementReponse3exp.innerHTML = questionAleatoire.reponses[2];
        elementReponse4exp.innerHTML = questionAleatoire.reponses[3];
        bonneReponseCourante = questionAleatoire.bonneReponse;
        choixquestion.intermediaire.splice([positionAlea], 1);
}

function changerQuestionDifficile() {
    let positionAlea = Math.floor(Math.random()*choixquestion.difficile.length);
    let questionAleatoire = choixquestion.difficile[positionAlea];
    let texteIndice = choixquestion.difficile[positionAlea].indice;
        elementQuestionExp.innerHTML = questionAleatoire.titre;
        pIndiceExp.style.display = "none";
        pIndiceExp.innerHTML = texteIndice;
        elementReponse1exp.innerHTML = questionAleatoire.reponses[0];
        elementReponse2exp.innerHTML = questionAleatoire.reponses[1];
        elementReponse3exp.innerHTML = questionAleatoire.reponses[2];
        elementReponse4exp.innerHTML = questionAleatoire.reponses[3];

        bonneReponseCourante = questionAleatoire.bonneReponse;
        choixquestion.difficile.splice([positionAlea], 1);
        
}




/**
 * Pour changer la page Acceuil à la page Niveau
*/ 
var changehtmlAcceuilANiveau = document.querySelector("#pageacc .stylebutton");

changehtmlAcceuilANiveau.addEventListener("click", function(){
    pageacc.style.display = "none";
    pageniveau.style.display = "block";
});


/**
 * Pour changer la page Niveau à la page Question Novice 
*/ 
var changehtmlNiveauAQuestionNovice = document.querySelector("#section2 #button2");

    changehtmlNiveauAQuestionNovice.addEventListener("click", function(){
    pageniveau.style.display = "none";
    pagequestionNovice.style.display = "block";
    changerQuestionFacile();
    titreNiveauNovice.innerHTML = "Facile";

    // POUR AFFICHER L'INDICE

buttonIndice.addEventListener("click", function(){
    pIndice.style.display = "block";
})
});





/**
 * Pour Changer le numéro de la question en novice quand on click le button suivant.
*/  
    
    var titreNiveauNovice = document.querySelector("#spanNiveau");
    var NombreQuestion = 1;
    var NombreDePoint = 0;


    buttonSuivant.addEventListener("click",function(){
        
        if(reponseChoisie == bonneReponseCourante){
            NombreDePoint++;
        }
        
        if(NombreQuestion < 3){
            changerQuestionFacile();
            NombreQuestion++;
            titreNiveauNovice.innerHTML = "Facile";
        }

        else if(NombreQuestion <= 4){
            changerQuestionIntermediaireEtFacile();
            NombreQuestion++;
            titreNiveauNovice.innerHTML = "Intermediaire";
    }
        else
        {
            pagequestionNovice.style.display = "none";
            pageresultat.style.display = "block";
            spanpointage2.innerHTML = NombreDePoint;
            spanpourcentage2.innerHTML = NombreDePoint * 20;
        }

    document.querySelector("span").innerHTML = NombreQuestion;
});


/** 
 * Pour changer la page Niveau à la page Question Expert
*/
var changehtmlNiveauAQuestionExpert = document.querySelector("#section2 #button3");

changehtmlNiveauAQuestionExpert.addEventListener("click", function(){
    
    pageniveau.style.display = "none";
    pagequestionExpert.style.display = "block";
    changerQuestionDifficile();
    titreNiveauExpert.innerHTML = "Difficile";

buttonIndice2.addEventListener("click", function(){
pIndiceExp.style.display = "block";


})
});

/**
 * Pour changer le numéro de la question en expert quand on click le button suivant.
*/ 

let positionAleaintermediaire = Math.floor(Math.random()*choixquestion.intermediaire.length);
let positionAleaDifficle = Math.floor(Math.random()*choixquestion.difficile.length);
var NombreQuestion2 = 1;


buttonSuivant2.addEventListener("click",function(){
    
    if(reponseChoisie2 == bonneReponseCourante){
        NombreDePoint++;
    }

    if(NombreQuestion2 < 3){
        changerQuestionDifficile();
        NombreQuestion2++;
        titreNiveauExpert.innerHTML = "Difficile";
    }

    else if(NombreQuestion2 <= 4){
        changerQuestionIntermediaireEtDifficle();
        NombreQuestion2++;
        titreNiveauExpert.innerHTML = "Intermediaire";

    }

    else
        {
            pagequestionExpert.style.display = "none";
            pageresultat.style.display = "block";
            spanpointage2.innerHTML = NombreDePoint;
            spanpourcentage2.innerHTML = NombreDePoint * 20;
        }
    
    titreNumeroQuestion.innerHTML = NombreQuestion2;

});

// Aller a la page résultat quand on click le button abandonner de la page novice.


buttonAbandonnerQuestionNovice.addEventListener("click", function(){
    pagequestionNovice.style.display = "none";
    pageresultatAband.style.display = "block";
    pointageAbandonne.innerHTML = 0;
    pourcentageAbandonne.innerHTML = 0;
});


// Aller au page résultat quand on click le button abandonner de la page expert.
var buttonAbandonnerQuestionExpert = document.querySelector("div #buttonabadonner2");
var pointageAbandonne = document.querySelector("#pageresultatAbandonne #spanpointage");
var pourcentageAbandonne = document.querySelector("#pageresultatAbandonne #spanpourcentage");

buttonAbandonnerQuestionExpert.addEventListener("click", function(){
    pagequestionExpert.style.display = "none";
    pageresultatAband.style.display = "block";
    pointageAbandonne.innerHTML = 0;
    pourcentageAbandonne.innerHTML = 0;
});


// Pour css rester en jaune quand on click
var lesButtonsNovice = document.getElementById("lesButtonNovice");
var resultat = document.querySelector("#pageresultat #spanpointage");
var buttonsNovice = lesButtonsNovice.getElementsByClassName("button");
var lesButtonsExpert = document.getElementById("divDuQuestionExpert");
var lesButtonsExpert = lesButtonsExpert.getElementsByClassName("button2")



 // POINTAGE

for (let i=0; i<buttonsNovice.length; i++){
    buttonsNovice[i].addEventListener("click", function(){  
        reponseChoisie = i;
        var buttonchoisi = document.getElementsByClassName("active");
        buttonchoisi[0].className = buttonchoisi[0].className.replace("active", "");
        this.className += " active";
    });
}

for (let i=0; i<lesButtonsExpert.length; i++){
    lesButtonsExpert[i].addEventListener("click", function(){  
        reponseChoisie2 = i;
        var buttonchoisi2 = document.getElementsByClassName("active2");
        buttonchoisi2[0].className = buttonchoisi2[0].className.replace("active2", "");
        this.className += " active2";
    });
}
