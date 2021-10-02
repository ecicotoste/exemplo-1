import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');

function MyBoard(request, response) {
    const placa = 'RB.2'

    console.log('request.param..........: ' + request.param);
    console.log('request.url............: ' + request.url);
    console.log('request.query.id.......: ' + request.query.id);
    console.log('request.session.user...: ' + request.session);

    /*
    localStorage . _deleteLocation ();
    response.json({delete:'localStorage'}); 
     */

    if  ( typeof  localStorage  ===  "undefined"  ||  localStorage  ===  null )  { 
        var  LocalStorage  =  require('node-localstorage').LocalStorage ; 
        localStorage  =  new  LocalStorage ('./scratch' ) ;         
      }     
   
    var hist_placa = localStorage.getItem('histPlaca');    
    if(hist_placa === null){
        const listPlacas = [];
        for (var i = 0; i < 1000; i++) {
            listPlacas.push(['RB.' + i, 0]);
            }
       localStorage.setItem('histPlaca', JSON.stringify(listPlacas));
    }
    
    response.json(hist_placa); 
    
}

export default MyBoard;

