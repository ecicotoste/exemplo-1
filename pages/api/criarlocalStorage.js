import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');

function CRSTRG(request, response) {

    if  ( typeof  localStorage  ===  "undefined"  ||  localStorage  ===  null )  { 
        var  LocalStorage  =  require('node-localstorage').LocalStorage ; 
        localStorage  =  new  LocalStorage ('./scratch' ) ;         
      }     
   
    var hist_placa = localStorage.getItem('histPlaca');    
    if(hist_placa === null){
        const listPlacas = [];       
        var dataAtual = new Date(); 
        listPlacas.push(['RB.' + 0, dataAtual, 0]);
        localStorage.setItem('histPlaca', JSON.stringify(listPlacas));
    }   

    response.json({create:'localStorage'}); 
}

export default CRSTRG;