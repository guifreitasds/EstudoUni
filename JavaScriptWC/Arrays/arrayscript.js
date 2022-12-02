function createArray(tam) {
    var i=0;
    var iaux = 0;
    var lista = [];
    var listavogal = [];
    while (true){
        if(i==tam){
            break;
        }
        var valor = window.prompt('Digite o nome a ser inserido na lista')
        console.log(valor[0].toLowerCase())
        if(valor[0].toLowerCase() == 'a' || valor[0].toLowerCase() == 'e' || valor[0].toLowerCase() == 'i' || valor[0].toLowerCase() == 'o' || valor[0].toLowerCase() == 'u'){
            listavogal[iaux] = valor;
            iaux++; 
        }
        lista[i] = valor;
        i++
    }
    console.log(lista.sort())
    console.log(listavogal.sort())
}
