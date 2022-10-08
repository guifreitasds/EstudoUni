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
        int vet[] = new int[10];
        int vetAux[] = new int[vet.length];
        Random aleatorio = new Random();
        for(int i=0; i<vet.length;i++){ // Loop para formação aleatória do vetor
            vet[i] = aleatorio.nextInt(10);
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
            System.out.println("2 - Por Seleção");
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

        int tro = 0; //Variável para contar a quantidade de Trocas desse método
        int com = 0; //Variável para contar a quantidade de Comparações desse método
        boolean trocou = true; // Variável para provar que houve troca em certo loop, caso seja false, bloqueia o while loop
        System.out.println("### Ordenação por Troca ###");
        while(trocou){
        int troca = 0; // Variável para checagem de troca no loop atual, emm caso de 0 o for loop inteiro, faz com que a var 'trocou' torne-se false
            for(int i=0;i<vetAux.length-1;i++){
                int par=0; 
                com++;
                if(vetAux[i]>vetAux[i+1]){
                    par=vetAux[i+1]; // Armazenamento do par do número escolhido em uma variável
                    vetAux[i+1]=vetAux[i]; // Passagem do número escolhido para o par (que está na variavel)
                    vetAux[i]=par; // Passagem do número armazenado na variável para o lugar que estava o número escolhido
                    tro++; 
                    troca++;
                }
            }
            com++;
            if(troca>0){  // Comparação para saber se houve alguma troca no loop
                trocou=true;
            } else{ // Caso não, a variável é false e o loop é finalizado, pois o vetor está totalmente ordenado
                trocou=false;
            }
        }
        listarComplexidade(tro,com);
        listarVetorOrdenado(vetAux);
    }

    private static void ordenarPorSelecao(int vetAux[]) {
        int qtd = 0;
        int tro = 0; //Variável para contar a quantidade de Trocas desse método
        int com = 0; //Variável para contar a quantidade de Comparações desse método
        int maior = 0;
        int posmaior = 0;
        System.out.println("### Ordenação por Seleção ###");
        //criar aqui a lógica da Ordenação por Seleção
        for(int b=0;b<=vetAux.length-qtd-1;qtd++){
            maior=0;
            for(int i=0;i<vetAux.length-qtd;i++){ // Varredura para ordenação do maior número
                com++;
                if(vetAux[i]>maior){ // Comparação para armazenar o maior valor na variável "maior"
                    maior = vetAux[i]; // Armazenamento do maior valor na sua variável
                    posmaior = i; // Armazenamento da posição do maior valor, para uso posterior
                }
            }
            for(int a=posmaior;a<=vetAux.length-qtd-1;a++){ // Varredura para Ordenação dos números, sempre retirando o maior número.
                com++;
                if(a==vetAux.length-qtd-1){ // Comparação da variável de controle, caso seja a última, o valor último será o maior
                    vetAux[a] = maior;
                    tro++;
                    break;
                } else{
                    vetAux[a] = vetAux[a+1]; // Caso não, o vetor so é ordenado normalmente, passando os números da direita para a esquerda
                    tro++;
                }
            }
        }
        listarComplexidade(tro,com);
        listarVetorOrdenado(vetAux);
    }

        private static void ordenarPorInsercao(int vetAux[]) {
            int tro = 0; //Variável para contar a quantidade de Trocas desse método
            int com = 0; //Variável para contar a quantidade de Comparações desse método
            System.out.println("### Ordenação por Inserção ###");
            for(int i=1;i<vetAux.length;i++){ // 
                int esc = vetAux[i];
                for(int a = i;a>-1;a--){
                    int esc2 = 0;
                    com++;
                    if (vetAux[a]>esc) {
                        esc2=vetAux[a];
                        vetAux[a]=vetAux[a+1];
                        vetAux[a+1]=esc2;
                        tro++;
                    } 
                }
            }
            listarComplexidade(tro,com);
            listarVetorOrdenado(vetAux);
        }
            


    private static void listarVetorOrdenado(int vetAux[]) {
        System.out.println("### Lista Ordenada ###");
        for(int val:vetAux){
            System.out.print(val+"-");
        }
        System.out.println("");
    }

    private static void listarComplexidade(int tro, int com) {
        System.out.println("### Complexidade ###");
        System.out.println("Comparações: "+com);
        System.out.println("Trocas: "+tro);
    }
    
}
