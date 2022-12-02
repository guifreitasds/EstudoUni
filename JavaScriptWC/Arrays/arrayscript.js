function createArray(tam) {
    var i=0;
    var lista = [];
    while (true){
        if(i==tam){
            break;
        }
        var valor = window.prompt('Digite o nome a ser inserido na lista')
        lista[i] = valor;
        i++
        console.log(tam)
    }
    console.log(lista)
}