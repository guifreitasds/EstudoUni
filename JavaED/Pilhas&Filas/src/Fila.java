public class Fila {
    String elementos[];
    int top;
    public Fila(){
        elementos = new String[5]; // Criação da Fila, com 5 elementos possíveis
        top = -1; // Declaração do topo da Fila, iniciando como -1
    }

    public void IncluirFila(String valor){
        top++;
        if(elementos[top]==null){ // Verificação se a posição que está sendo inserida o valor está nula
            elementos[top] = valor; // Inserção do valor
        }
    }

    public void ExcluirFila(){
        elementos[0] = null; // Exclusão do primeiro elemento
        for(int i=0;i<elementos.length-1;i++){ // Laço de Reorganização da fila, após o primeiro elemento ter sido excluído
            elementos[i]=elementos[i+1];
            elementos[i+1] = null; 
        }
        top--; // Retirando 1 do topo, pois o primeiro valor foi retirado
    }

    public void ListarFila(String fila[]){
        System.out.println("#### FILA FORMADA ####");
        for (String string : fila) {
            System.out.print(string + " / ");
        }
        System.out.println("");
    }
}
