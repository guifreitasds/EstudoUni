package arvoreavl;

import java.util.Scanner;

public class main {
    
    public static void main(String[] args) throws Exception {
        Scanner ler = new Scanner(System.in);
        ArvoreAvl Metodos = new ArvoreAvl();
        int opc = 0;
        int valor;
        while (opc != 4) {
            System.out.println("-----  ARVORE AVL  -----");
            System.out.println("");
            System.out.println("1 - Inserir Nó");
            System.out.println("2 - Remover Nó");
            System.out.println("3 - Imprimir Árvore");
            System.out.println("4 - Buscar Nó");
            System.out.println("4 - Sair");
            System.out.println("");
            System.out.println("------------------------");
            System.out.print("Informe a opção desejada: ");
            opc = ler.nextInt();
            switch (opc) {
                case 1:
                    //INSERIR
                    System.out.println("----- INSERIR -----");
                    System.out.println("");
                    System.out.print("Informe o valor que deseja inserir: ");
                    valor = ler.nextInt();
                    Metodos.Inserir(valor);
                    System.out.println("");
                    System.out.println("-----------------");
                    break;
                case 2:
                    //REMOVER
                    System.out.println("----- RETIRAR -----");
                    System.out.println("");
                    if (Metodos.Vazia() == true) {
                        System.out.println("A árvore está vazia!");
                        System.out.println("");
                    System.out.println("-------------------");
                        break;
                    }
                    System.out.print("Informe o valor que deseja retirar: ");
                    valor = ler.nextInt();
                    Metodos.Remover(valor);
                    System.out.println("");
                    System.out.println("-------------------");
                    break;
                case 3:
                    //IMPRIMIR
                    System.out.println("----- IMPRIMIR -----");
                    System.out.println("");
                    Metodos.imprimirArvore();
                    System.out.println("");
                    System.out.println("--------------------");
                    break;
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
