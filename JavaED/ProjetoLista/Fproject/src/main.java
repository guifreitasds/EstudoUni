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
                    for(int i=0;i<notas.length;i++){
                        System.out.println("O valor na posição " + i + " é igual a " + notas[i]);
                    }
                    break;
                case 3:
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
            } else{
                System.out.println("Lista Cheia!");
            }
        }
    }
}
