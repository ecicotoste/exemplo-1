import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');

function MyBoard(request, response) {
    const placa = 'RB.2'

    console.log('request.name...........: ' + request.name);
    console.log('request.param..........: ' + request.param);
    console.log('request.url............: ' + request.url);
    console.log('request.query.id.......: ' + request.query.id);
    console.log('request.session.user...: ' + request.session);
    console.log('');                                        
    
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

    var novaPlaca = '';         
    var hist_placa = localStorage.getItem('histPlaca');    
    const listPlacas = JSON.parse(hist_placa);    
    for (var i = 0; i < listPlacas.length; i++){
        if(param2 == listPlacas[i][0] && listPlacas[i][2] == 0){
            novaPlaca = param2;
            break;
        }
    }  

    if(novaPlaca == ''){
        for (var i = 0; i < listPlacas.length; i++){
            if(listPlacas[i][2] == 9){
                var dataAtual = new Date(); 
                novaPlaca = listPlacas[i][0];
                listPlacas[i][2] = 0;
                listPlacas[i][1] = dataAtual;
                localStorage.setItem('histPlaca', JSON.stringify(listPlacas));
                break;
            }
        }
    }

    if(novaPlaca == ''){
        novaPlaca = 'RB.' + listPlacas.length;    
        var dataAtual = new Date(); 
        listPlacas.push(['RB.' + listPlacas.length, dataAtual, 0]);    
        localStorage.setItem('histPlaca', JSON.stringify(listPlacas));
    }
        
    console.log(listPlacas);

    response.json(novaPlaca);     
}

export default MyBoard;

