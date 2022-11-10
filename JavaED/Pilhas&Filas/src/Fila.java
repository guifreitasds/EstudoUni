public class Fila {
    String elementos[];
    int top;
    public Fila(){
        this.elementos = new String[5]; // Criação da Fila, com 5 elementos possíveis
        this.top = -1; // Declaração do topo da Fila, iniciando como -1
    }

    public void IncluirFila(String valor){
        this.top++;
        if(elementos[this.top]==null){ // Verificação se a posição que está sendo inserida o valor está nula
            elementos[this.top] = valor; // Inserção do valor
            System.err.println("VALOR " + valor + " INSERIDO NA POSIÇÃO " + top);
        }
    }

    public void ExcluirFila(){
        this.elementos[0] = null; // Exclusão do primeiro elemento
        for(int i=0;i<this.elementos.length-1;i++){ // Laço de Reorganização da fila, após o primeiro elemento ter sido excluído
            this.elementos[i]=this.elementos[i+1];
            this.elementos[i+1] = null; 
        }
        this.top--; // Retirando 1 do topo, pois o primeiro valor foi retirado
    }

    public void ListarFila(String fila[]){
        System.out.println("#### FILA FORMADA ####");
        for (String string : fila) {
            System.out.print(string + " / ");
        }
        System.out.println("\n=-=-=-=-=-=-=-=-=-=-=-=");
    }
}
