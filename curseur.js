let valeur = 1 * document.querySelector('.valeur').innerHTML;
let demo = document.querySelector('#demo');



window.onload = function() {
    function changeOpac(newValueOpac) {
        demo.style.opacity = newValueOpac / 100;
    }

    function changeLarg(v) {
        demo.style.width = v + 'px';
    }

    function changeHaut(v) {
        demo.style.height = v + 'px';
    }


    let c = new Curseur('cursOpac', 'Opacité', 100, 0, 100, ".box1", "#f00");
    c.addEvents(changeOpac);
    let c2 = new Curseur('cursLarg', 'Largeur', 200, 1, 500, ".box2", "#0f0");
    c2.addEvents(changeLarg);
    let c3 = new Curseur('cursHaut', 'Hauteur', 200, 1, 500, ".box3", "#88f");
    c3.addEvents(changeHaut);

    console.log(c3.getValue());
}

//on mousehover sur la valeur changement de curseur
let curseurValeur = document.querySelector('.curseur .valeur');
let valeurDepart = 0;
//let mousedown_b = false;

//let clientX = 100;


//on mouse down 

//on mouse up
//arreter de ajouter ou reduire la valeur;

//si mouse down
//----et on  mouse move
//-----------detecter si on bouge à droite ou à gauche

// ----------ajouter une valeur sur la valeur de span en continuité
//


curseurValeur.addEventListener('mousedown', function(e) {

    // crée les écouteurs
    window.addEventListener('mousemove', changeCurseur);
    window.addEventListener('mouseup', removeListener);

    valeurDepart = e.clientX;
    console.log(e.clientX);
    // mousedown_b = true;
});

// annule les écouteurs
function removeListener() {
    window.removeEventListener('mousemove', changeCurseur);
    window.removeEventListener('mouseup', removeListener);
}


function changeCurseur(e) {
    // if (mousedown_b) {
    // if (valeurDepart != 0) {
    //valeurDepart  100     100     100
    //e.clientX     102     104     98
    //difference    2       4     -2
    let diffValeurX = e.clientX - valeurDepart;
    //console.log(diffValeurX);
    let newVal = parseInt(valeur) + diffValeurX;
    // console.log(newVal);
    // if (e.clientX > valeurDepart) {
    //     console.log('mouvement vers la droite');
    //     // ajouter la différence entre valDepart et clientX

    //     valeur++;

    // } else {
    //     console.log('mouvement vers la gauche');
    //     valeur--;
    // }

    document.querySelector('.valeur').innerHTML = newVal;
    // }

}
//changement de la valuer