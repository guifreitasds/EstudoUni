package arvoreavl;

import java.util.Scanner;

public class main {
    
    public static void main(String[] args) throws Exception {
        Scanner esc = new Scanner(System.in);
        ArvoreAvl arvore = new ArvoreAvl();
        int opc = 0;
        int valor;
        while (opc != 5) {
            System.out.println("-=-=-=-=  ARVORE AVL  -=-=-=-=");
            System.out.println("");
            System.out.println("1 - Inserir Nó ");
            System.out.println("2 - Remover Nó ");
            System.out.println("3 - Imprimir Árvore ");
            System.out.println("4 - Buscar Nó ");
            System.out.println("5 - Sair ");
            System.out.println("");
            System.out.println("------------------------");
            System.out.print("Informe a opção desejada: ");
            opc = esc.nextInt();
            switch (opc) {
                case 1:
                    //INSERIR
                    System.out.println("-=-=-= INSERIR -=-=-=");
                    System.out.println("");
                    System.out.print("Informe o valor que deseja inserir: ");
                    valor = esc.nextInt();
                    arvore.Inserir(valor);
                    System.out.println("");
                    System.out.println("-----------------");
                    break;
                case 2:
                    //REMOVER
                    System.out.println("-=-=-= EXCLUIR -=-=-=");
                    System.out.println("");
                    if (arvore.isEmpty() == true) {
                        System.out.println("A árvore está vazia!");
                        System.out.println("");
                    System.out.println("-------------------");
                        break;
                    }
                    System.out.print("Informe o valor que deseja excluir: ");
                    valor = esc.nextInt();
                    arvore.Remover(valor);
                    System.out.println("");
                    System.out.println("-------------------");
                    break;
                case 3:
                    //IMPRIMIR
                    System.out.println("-=-=-= IMPRIMIR -=-=-=");
                    System.out.println("");
                    arvore.imprimirArvore();
                    System.out.println("");
                    System.out.println("--------------------");
                    break;
                case 4:
                    System.out.print("Informe o valor que deseja buscar: ");
                    valor = esc.nextInt();
                    arvore.Buscar(valor);
                    System.out.println("");
                    System.out.println("-------------------");
                case 5:
                    System.out.println("Sair");
                    break;
                default:
                    System.out.println("Sua opção é inválida!");
                    break;
            }
            System.out.println("");
            System.out.println("");
            System.out.println("");
        }
    }
    
}
