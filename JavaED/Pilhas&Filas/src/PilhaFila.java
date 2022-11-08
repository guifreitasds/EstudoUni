import java.util.Scanner;
public class PilhaFila {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        String vPilha[] = new String[5];
        String vFila[] = new String[5];
        int opc = 0;
        while (opc != 5){
            System.out.println("#### PILHA ####");
            System.out.println("1 - Empilhar");
            System.out.println("2 - Desempilhar");
            System.out.println("3 - Listar Pilha");
            System.out.println("#### FILA ####");
            System.out.println("4 - Incluir Fila");
            System.out.println("5 - Remover Fila");
            System.out.println("6 - Listar Fila");
            System.out.println("##############");
            System.out.println("7 - Sair");
            System.out.println("");
            System.out.print("Informe a opção desejada: ");
            opc = ler.nextInt();
            switch (opc) {
                case 1:
                    //EMPILHAR
                    break;
                case 2:
                    //DESEMPILHAR
                    break;
                case 3:
                    //LISTAR PILHA
                    break;
                case 4:
                    //INCLUIR FILA
                    break;
                case 5:
                    //EXCLUIR FILA
                    break;
                case 6:
                    //LISTAR FILA
                    break;
                case 7:
                    System.out.println("Sair");
                    break;
                default:
                    System.out.println("Opção inválida!");
                    break;
            } 
        }
    }
    
}
