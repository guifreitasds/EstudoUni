public class Pilha {
    String pilha[];
    int top;
    public Pilha(){ // Criação da Pilha, com 5 elementos possíveis
        this.pilha = new String[5];
        this.top = -1; // Declaração do topo da pilha, iniciando como -1
    }

    public void Empilhar(String valor) {
        this.top++; // Adicionando +1 ao topo
        if(this.top==5){
            System.err.println("ERRO, pilha cheia");
        }
        if (this.pilha[this.top]==null){ // Verificação se a posição que está sendo inserida o valor está nula
            this.pilha[this.top] = valor; // Inserção do valor
            System.err.println("VALOR " + valor + " INSERIDO NA POSIÇÃO " + this.top);
        }
    }

    public void Desempilhar(String pilha[]) {
        if(top==-1){
            System.err.println("ERRO, PILHA VAZIA!");
        }else{
            System.out.println("Excluindo última posição de valor: " + this.pilha[top]);
            this.pilha[top] = null; // Excluindo o último valor da pilha
            this.top--; // Retirando 1 do topo, pois o último valor foi retirado
        }
    }

    public void ListarPilha(String pilha[]){
        System.err.println("#### PILHA FORMADA ####");
        for (String element : pilha) {
            System.out.print(element + " / ");
        }
        System.out.println("\n=-=-=-=-=-=-=-=-=-=-=-=");
    }
}
