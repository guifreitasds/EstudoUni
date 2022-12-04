function createArray(tam) {
    // Ex 001, 002 e 003
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

function buyStore() {
    // Ex 004
    var matriz = [];
    do {
        var opc = Number(window.prompt(`
            Escolha a opção desejada
            [1]-Inserir novo registro
            [2]-Editar Registro
            [3]-Excluir Registro
            [4]-Ver registros no console
            [5]-Procurar registros por nome
            [6]-Sair
        `));
        switch (opc) {
            case 1:
                var name = window.prompt("Digite o nome do cliente");
                var qtdpdt = window.prompt("Digite a quantidade de produtos comprados");
                var total = Number(window.prompt("Digite o valor total da compra"));
                var listaaux = []
                listaaux.push(name, qtdpdt, total);
                matriz.push(listaaux)
                break;
            case 2:
                var busc = window.prompt("Digite o nome do registro a ser editado")
                for(i=0;i<matriz.length;i++){
                    if(matriz[i][0]==busc){
                        window.alert('Registro encontrado!')
                        var name = window.prompt("Digite o nome do cliente");
                        var qtdpdt = window.prompt("Digite a quantidade de produtos comprados");
                        var total = Number(window.prompt("Digite o valor total da compra"));
                        var listaaux = []
                        listaaux.push(name, qtdpdt, total);
                        matriz[i]=listaaux
                    }
                }
                break;
            case 3:
                var busc = window.prompt("Digite o nome do registro a ser excluído")
                for(i=0;i<matriz.length;i++){
                    if(matriz[i][0]==busc){
                        matriz[i]=null;
                        window.alert('Registro encontrado e excluído!')
                    }
                }
                break;
            case 4:
                for(i=0;i<matriz.length;i++){
                    console.log(matriz[i])
                }
                break;
            case 5:
                var busc = window.prompt("Digite o nome do registro a ser procurado")
                for(i=0;i<matriz.length;i++){
                    if(matriz[i][0]==busc){
                        window.alert('Registro encontrado, cheque o console')
                        console.log(matriz[i])
                    }
                }
                break;
            case 6:
                window.alert('Sair...')
                break;
            default:
                window.alert('Opção inválida');
                break;
        }
        
    } while(opc!=6);
}

function Users() {
    // Ex 005
    var matriz = [];
    do {
        var opc = Number(window.prompt(`
            Escolha a opção desejada
            [1]-Inserir novo registro
            [2]-Editar Registro
            [3]-Excluir Registro
            [4]-Ver registros no console
            [5]-Procurar registros por nome
            [6]-Sair
        `));
        switch (opc) {
            case 1:
                var name = window.prompt("Digite o nome do cliente");
                var listaaux = []
                listaaux.push(name);
                matriz.push(listaaux)
                break;
            case 2:
                var busc = window.prompt("Digite o nome do registro a ser editado")
                for(i=0;i<matriz.length;i++){
                    if(matriz[i][0]==busc){
                        window.alert('Registro encontrado!')
                        var name = window.prompt("Digite o nome do cliente");
                        var listaaux = []
                        listaaux.push(name);
                        matriz[i]=listaaux
                    }
                }
                break;
            case 3:
                var busc = window.prompt("Digite o nome do registro a ser excluído")
                for(i=0;i<matriz.length;i++){
                    if(matriz[i][0]==busc){
                        matriz[i]=null;
                        window.alert('Registro encontrado e excluído!');
                    }
                }
                break;
            case 4:
                for(i=0;i<matriz.length;i++){
                    console.log(matriz[i]);
                }
                break;
            case 5:
                var busc = window.prompt("Digite o nome do registro a ser procurado");
                for(i=0;i<matriz.length;i++){
                    if(matriz[i][0]==busc){
                        window.alert('Registro encontrado, cheque o console');
                        console.log(matriz[i]);
                    }
                }
                break;
            case 6:
                window.alert('Sair...')
                break;
            default:
                window.alert('Opção inválida');
                break;
        }
        
    } while(opc!=6);
}

function buyStoreAward() {
    // Ex 006
    var matriz = [];
    do {
        var opc = Number(window.prompt(`
            Escolha a opção desejada
            [1]-Inserir novo registro
            [2]-Ver registros
            [3]-Procurar registros por nome
            [4]-Ver prêmios do registro pelo nome
            [5]-Sair
        `));
        switch (opc) {
            case 1:
                var name = window.prompt("Digite o nome do cliente");
                var qtdpdt = window.prompt("Digite a quantidade de produtos comprados");
                var total = Number(window.prompt("Digite o valor total da compra"));
                var listaaux = []
                listaaux.push(name, qtdpdt, total);
                matriz.push(listaaux)
                break;
            case 2:
                for(i=0;i<matriz.length;i++){
                    console.log(matriz[i])
                }
                break;
            case 3:
                var busc = window.prompt("Digite o nome do registro a ser procurado")
                for(i=0;i<matriz.length;i++){
                    if(matriz[i][0]==busc){
                        window.alert('Registro encontrado, cheque o console')
                        console.log(matriz[i])
                    }
                }
                break;
            case 4:
                var maior=[0,0,0];
                for(a=0;a<matriz.length;a++){
                    if(matriz[a][2]>maior[2]){
                        maior=matriz[a];
                    }
                }
                var busc = window.prompt("Digite o nome do registro a ser procurado")
                for(i=0;i<matriz.length;i++){
                    if(matriz[i][0]==busc){
                        window.alert('Registro encontrado!');
                        if(maior[0]==busc){
                            window.alert("Você ganhou um cashback no valor de 10% da sua compra!!!")
                        } else{
                            window.alert("Você ganhou um cupom de 5% de desconto na sua próxima compra (máximo de desconto 25 reais)!!!")
                        }
                    }
                }
                break;
            case 5:
                window.alert('Sair...')
                break;
            default:
                window.alert('Opção inválida');
                break;
        }
        
    } while(opc!=5);
}
