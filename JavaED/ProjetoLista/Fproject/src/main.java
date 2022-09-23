import java.util.Scanner;
import java.util.ArrayList;


public class main{
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int notas[] = new int [5];
        int opc = 0;
        int qtd = 0;
        while(opc!=5){
            System.out.println("1 - Inserir");
            System.out.println("2 - Listar");
            System.out.println("3 - Pesquisar");
            System.out.println("4 - Excluir");
            System.out.println("5 - Sair");
            System.out.println("Informe a opção desejada: ");
            opc = ler.nextInt();
            switch (opc) {
                case 1: 
                    inserir(notas, qtd);
                    break;
                case 2:
                    listar(notas);
                    break;
                case 3:
                    int v = pesquisar(notas);
                    if(v==-1){
                        System.out.println("Valor não encontrado!");
                    } else{
                        System.out.println("Valor encontrado na posição " + v);
                    }
                    break;
                case 4:
                    break;
                
                default:
                    System.out.println("Opção inválida!");
                    break;
            }
        }

    }

    public static void inserir(int vet[], int qtd) {
        Scanner read = new Scanner(System.in);
        System.out.println("Digite o valor: ");
        int valor = read.nextInt();
        for(int i=0;i<vet.length;i++){
            if(vet[i]==0){
                vet[i]=valor;
                break;
            } else if(i==vet.length-1 && vet[i]!=0){
                    System.out.println("Lista Cheia");
            }
        }
    }
    public static void listar(int vet[]) {
        System.out.println("Valores da Lista");
        System.out.println("-------------------------------");
        for(int i=0;i<vet.length;i++){
            System.out.println("O valor na posição " + i + " é igual a " + vet[i]);
        }
        System.out.println("-------------------------------");
    }
    public static int pesquisar(int vet[]) {
        Scanner read = new Scanner(System.in);
        System.out.println("Digite o valor a ser pesquisado: ");
        int valor = read.nextInt();
        for(int i=0;i<vet.length;i++){
            if(vet[i]==valor){
               return i;
            }
        }
        return -1;
        
    }
}
