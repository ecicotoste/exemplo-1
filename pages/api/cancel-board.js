import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');

function CCLBRD(request, response) {

    var hist_placa = localStorage.getItem('histPlaca');    
    const listPlacas = JSON.parse(hist_placa);
    var tempoNow = new Date;
    for (var i = 0; i < listPlacas.length; i++){
        var placaTempo = new Date(listPlacas[i][1]);
        var diferencaTempo = tempoNow - placaTempo;
        console.log('placaTempo.....: ' + placaTempo);
        console.log('tempoNow.......: ' + tempoNow);
        console.log('diferencaTempo.: ' + diferencaTempo);

        /* ==> CANCELAR APOS 2 HORAS EM ESPERA
        if(diferencaTempo > 7200000){
            listPlacas[i][2] = 9;
            localStorage.setItem('histPlaca', JSON.stringify(listPlacas));  
        }
        */

        if(diferencaTempo > 60000){
            listPlacas[i][2] = 9;
            localStorage.setItem('histPlaca', JSON.stringify(listPlacas));  
        }
    }

    response.json(listPlacas); 
}

export default CCLBRD;