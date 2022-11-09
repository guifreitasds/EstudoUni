public class Pilha {
    String pilha[];
    int top;
    public Pilha(){
        pilha = new String[5];
        top = -1;
    }

    public void Empilhar(String valor) {
        top++;
        if (pilha[top]==null){
            pilha[top] = valor;
        }
        if(top==5){
            System.err.println("ERRO, pilha cheia");
        }
    }

    public void Desempilhar(String pilha[]) {
        pilha[top] = null;
        top--;
    }

    public void ListarPilha(String pilha[]){
        System.err.println("#### PILHA FORMADA ####");
        for (String element : pilha) {
            System.out.print(element + " / ");
        }
        System.out.println("\n=-=-=-=-=-=-=-=-=-=-=-=");
    }
}
