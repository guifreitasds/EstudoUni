import java.util.Random;
import java.util.Scanner;
/**
 * O Projeto foi realizado pela equipe:
 * 1 - Guilherme Freitas dos Santos - 01564838
 * 2 - Matrícula e Nome do Aluno 02
 * 3 - Matrícula e Nome do Aluno 03
 * 
 * Turma: (2MA, 2MB, 2MC, 2MD, 2NA, 2NB ou 2NC)
 * Disciplina: Estrutura de Dados
 * Professor: José Mário Souza
 */
public class Prova1AVEstruturaDeDados {
    public static void main(String[] args) {
        int vet[] = new int[20];
        int vetAux[] = new int[vet.length];
        Random aleatorio = new Random();
        for(int i=0; i<vet.length;i++){ // Loop para formação aleatória do vetor
            vet[i] = aleatorio.nextInt(1000);
        }
        System.out.println("### Lista Desordenada ###");
        for(int val:vet){
            System.out.print(val+"-"); // Print para estilização da ordenação inicial dos números
        }
        System.out.println("");
        Scanner leia = new Scanner(System.in);
        int opc = 0;
        while (opc != 4){ // Loop de Menu para o usuário
            System.out.println("");
            System.out.println("# Vamos Ordenar? #");
            System.out.println("1 - Por Troca");
            System.out.println("2 - Por Selação");
            System.out.println("3 - Por Inserção");
            System.out.println("4 - Sair");
            System.out.println("");
            System.out.print("Informe a opção desejada: ");
            opc = leia.nextInt();
            switch (opc) {
                case 1:
                    vetAux = vet;
                    ordenarPorTroca(vetAux);
                    break;
                case 2:
                    vetAux = vet;
                    ordenarPorSelecao(vetAux);
                    break;
                case 3:
                    vetAux = vet;
                    ordenarPorInsercao(vetAux);
                    break;
                case 4:
                    System.out.println("Sair");
                    break;
                default:
                    System.out.println("Opção inválida!");
                    break;
            } 
        }
    }

    private static void ordenarPorTroca(int vetAux[]) {
        int qtd = 0;
        int tro = 0; //Variável para contar a quantidade de Trocas desse método
        int com = 0; //Variável para contar a quantidade de Comparações desse método
        System.out.println("### Ordenação por Troca ###");
        int maior = 0;
        int posmaior = 0;
        for(int b=0;b<=vetAux.length-qtd-1;qtd++){
            maior=0;
            for(int i=0;i<vetAux.length-qtd;i++){ // Varredura para ordenação do maior número
                if(vetAux[i]>maior){
                    maior = vetAux[i];
                    posmaior = i;
                }
            }
            for(int a=posmaior;a<=vetAux.length-qtd-1;a++){
                if(a==vetAux.length-qtd-1){
                    vetAux[a] = maior;
                    tro++;
                    break;
                } else{
                    vetAux[a] = vetAux[a+1];
                    tro++;
                }
            }
        }
        listarComplexiade(tro,com);
        listarVetorOrdenado(vetAux);
    }

    private static void ordenarPorSelecao(int vetAux[]) {
        int tro = 0; //Variável para contar a quantidade de Trocas desse método
        int com = 0; //Variável para contar a quantidade de Comparações desse método
        System.out.println("### Ordenação por Seleção ###");
        //criar aqui a lógica da Ordenação por Seleção
        listarComplexiade(tro,com);
        listarVetorOrdenado(vetAux);
    }

        private static void ordenarPorInsercao(int vetAux[]) {
        int tro = 0; //Variável para contar a quantidade de Trocas desse método
        int com = 0; //Variável para contar a quantidade de Comparações desse método
        System.out.println("### Ordenação por Inserção ###");
        //criar aqui a lógica da Ordenação por Inserção
        listarComplexiade(tro,com);
        listarVetorOrdenado(vetAux);
    }

    private static void listarVetorOrdenado(int vetAux[]) {
        System.out.println("### Lista Ordenada ###");
        for(int val:vetAux){
            System.out.print(val+"-");
        }
        System.out.println("");
    }

    private static void listarComplexiade(int tro, int com) {
        System.out.println("### Complexidade ###");
        System.out.println("Comparações: "+com);
        System.out.println("Trocas: "+tro);
    }
    
}
