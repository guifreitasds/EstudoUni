public class Fila {
    String elementos[];
    int top;
    int start;
    public Fila(){
        elementos = new String[5];
        top = -1;
        start = 0;
    }

    public void IncluirFila(String valor){
        top++;
        if(elementos[top]==null){
            elementos[top] = valor;
        }
    }

    public void ExcluirFila(){
        elementos[start] = null;
        for(int i=0;i<elementos.length-1;i++){
            elementos[i]=elementos[i+1];
            elementos[i+1] = null;
        }
        top--;
    }

    public void ListarFila(String fila[]){
        System.out.println("#### FILA FORMADA ####");
        for (String string : fila) {
            System.out.print(string + " / ");
        }
        System.out.println("");
    }
}
