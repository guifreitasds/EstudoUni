import java.util.Scanner;


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
                    System.out.println(notas);
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

    public static int inserir(int vet[], int qtd) {
        Scanner read = new Scanner(System.in);
        int valor = read.nextInt();
        if(vet.length==0){
        vet[0]=valor;
        }
        for(int i=0;i<vet.length;i++){
            if (vet[i]<valor) {
                i++;
            } else {
                vet[i] = valor;
            }
        }
        return valor;
    }
}
