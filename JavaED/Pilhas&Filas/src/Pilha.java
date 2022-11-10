public class Pilha {
    String pilha[];
    int top;
    public Pilha(){ // Criação da Pilha, com 5 elementos possíveis
        pilha = new String[5];
        top = -1; // Declaração do topo da pilha, iniciando como -1
    }

    public void Empilhar(String valor) {
        top++; // Adicionando +1 ao topo
        if(top==5){
            System.err.println("ERRO, pilha cheia");
        }
        if (pilha[top]==null){ // Verificação se a posição que está sendo inserida o valor está nula
            pilha[top] = valor; // Inserção do valor
        }
    }

    public void Desempilhar(String pilha[]) {
        pilha[top] = null; // Excluindo o último valor da pilha
        top--; // Retirando 1 do topo, pois o último valor foi retirado
    }

    public void ListarPilha(String pilha[]){
        System.err.println("#### PILHA FORMADA ####");
        for (String element : pilha) {
            System.out.print(element + " / ");
        }
        System.out.println("\n=-=-=-=-=-=-=-=-=-=-=-=");
    }
}
