import java.util.Scanner;
public class PilhaFila {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int opc = 0;

        Pilha pilha = new Pilha();
        Fila fila = new Fila();
        while (opc != 7){
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
                    for(int i=pilha.top;i<=pilha.pilha.length-2;i++){
                        if(pilha.top==5){
                            break;
                        }
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
                    for(int i=fila.top;i<=fila.elementos.length-2;i++){
                        if(pilha.top==5){
                            break;
                        }
                        System.out.print("Digite um valor para incluir na fila: ");
                        String esc = ler.next(); // Pedindo valor para o usuário
                        fila.IncluirFila(esc); // Utilização do metodo para inserir o valor
                        System.out.println("Deseja inserir mais um valor? [1-SIM/2-NÃO]"); 
                        System.out.println(i);
                        int continuar = ler.nextInt(); // Solicitação de resposta de continuação do usuário
                        if (continuar==2){
                            break;
                        }
                    }
                    break;
                case 5:
                    //EXCLUIR FILA
                    fila.ExcluirFila();
                    break;
                case 6:
                    //LISTAR FILA
                    fila.ListarFila(fila.elementos);
                    break;
                case 7:
                    System.out.println("Sair");
                    break;
                default:
                    System.out.println("Opção inválida!");
                    break;
            } 
        }
        ler.close();
    }

}





