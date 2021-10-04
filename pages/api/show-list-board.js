import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');

function ListBoard(request, response) {
    var hist_placa = localStorage.getItem('histPlaca');    
    const listPlacas = JSON.parse(hist_placa);    
    response.json(listPlacas);  
}

export default ListBoard;