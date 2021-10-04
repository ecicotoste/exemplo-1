import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');

function DLSTRG(request, response) {

    localStorage . _deleteLocation ();
    response.json({delete:'localStorage'}); 
}

export default DLSTRG;