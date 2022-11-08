import java.util.Scanner;
public class PilhaFila {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        String vFila[] = new String[5];
        int opc = 0;

        Pilha pilha = new Pilha();
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
                    for(int i=0;i<pilha.pilha.length;i++){
                        System.out.print("Digite um número para empilhar: ");
                        String esc = ler.next();
                        pilha.Empilhar(esc);
                        System.out.println("Deseja inserir mais um valor? [1-SIM/2-NÃO]");
                        int continuar = ler.nextInt();
                        if (continuar==2){
                            break;
                        }
                    }
                    break;
                case 2:
                    // DESEMPILHAR
                    pilha.Desempilhar(pilha.pilha);
                    break;
                case 3:
                    //LISTAR PILHA
                    pilha.ListarPilha(pilha.pilha);
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





