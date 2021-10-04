import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');

function CallBoard(request, response) {
    var parametro = request.url.split('?');
    var param1 = '';
    var param2 = '';
    if(parametro.length > 1)
    {
        param1 = parametro[0];
        console.log('parametro[1]..: ' + param1);
        param2 = parametro[1];
        console.log('parametro[2]..: ' + param2);
    }

    var hist_placa = localStorage.getItem('histPlaca');    
    const listPlacas = JSON.parse(hist_placa); 
    
    for (var i = 0; i < listPlacas.length; i++){
        if(param2 == listPlacas[i][0] && listPlacas[i][2] == 0){
            listPlacas[i][2] = 1;
            localStorage.setItem('histPlaca', JSON.stringify(listPlacas));
            break;
        }
    }  
    
    response.json(listPlacas);  
}

export default CallBoard;