package arvorebinaria;

public class Arvore {

    private No noraiz;

    public Arvore(No noraiz) {
        this.noraiz = noraiz;
    }

    public boolean isEmpty() {
        if (noraiz == null) {
            return true;
        }
        return false;
    }

    public int getAltura() {
        return getAltura(this.noraiz);
    }

    private int getAltura(No noraiz) {
        if (noraiz == null) {
            return 0;
        }
        int altEsq = getAltura(noraiz.getNoEsquerda());
        int altDir = getAltura(noraiz.getNoDireita());
        if (altEsq > altDir) {
            return altEsq + 1;
        } else {
            return altDir + 1;
        }
    }

    public int getQtdNode() {
        return getQtdNode(noraiz);
    }

    private int getQtdNode(No noraiz) {
        if (noraiz == null) {
            return 0;
        }
        int qtdNodeEsq = getQtdNode(noraiz.getNoEsquerda());
        int qtdNodeDireita = getQtdNode(noraiz.getNoDireita());
        return qtdNodeEsq + qtdNodeDireita + 1;
    }

    public void imprimirArvore() {
        if (this.noraiz == null) {
            System.out.println("Árvore vazia");
        } else {
            imprimirArvore(this.noraiz);
        }
    }

    private void imprimirArvore(No node) {
        if (node.getNoEsquerda() != null) {
            imprimirArvore(node.getNoEsquerda());
        }
        if (node.getNoDireita() != null) {
            imprimirArvore(node.getNoDireita());
        }
        System.out.println("Nó: " + node.getValor());
        System.out.println("NóEsquerda: " + node.getNoEsquerda());
        System.out.println("NóDireita: " + node.getNoDireita());
    }

    public void inserir(int valor) {
        inserir(this.noraiz, valor);
    }

    public void inserir(No node, int valor) {
        if (this.noraiz == null) {
            this.noraiz = new No(valor);
        } else {
            if (valor < node.getValor()) {
                if (node.getNoEsquerda() != null) {
                    inserir(node.getNoEsquerda(), valor);
                } else {
                    //Se nodo esquerdo vazio insere o novo no aqui 
                    node.setNoEsquerda(new No(valor));
                }
                //Verifica se o valor a ser inserido é maior que o no corrente da árvore, se sim vai para subarvore direita 
            } else if (valor > node.getValor()) {
                //Se tiver elemento no no direito continua a busca 
                if (node.getNoDireita() != null) {
                    inserir(node.getNoDireita(), valor);
                } else {
                    //Se nodo direito vazio insere o novo no aqui 
                    node.setNoDireita(new No(valor));
                }
            }
        }
    }

    public No remover(int valor) throws Exception {
        return remover(this.noraiz, valor);
    }

    private No remover(No node, int valor) {
        if (this.noraiz == null) {
            System.out.println("Árvore vazia");
        } else {
            if (valor < node.getValor()) {
                node.setNoEsquerda(remover(node.getNoEsquerda(), valor));
            } else if (valor > node.getValor()) {
                node.setNoDireita(remover(node.getNoDireita(), valor));
            } else if (node.getNoEsquerda() != null && node.getNoDireita() != null) {
                /*2 filhos*/
                System.out.println("  Removeu No " + node.getValor());
                node.setValor(encontraMinimo(node.getNoDireita()).getValor());
                node.setNoDireita(removeMinimo(node.getNoDireita()));
            } else {
                System.out.println("  Removeu No " + node.getValor());
                node = (node.getNoEsquerda() != null) ? node.getNoEsquerda() : node.getNoDireita();
            }

        }
        return node;
    }

    private No removeMinimo(No node) {
        if (node == null) {
            System.out.println("  ERRO ");
        } else if (node.getNoEsquerda() != null) {
            node.setNoEsquerda(removeMinimo(node.getNoEsquerda()));
            return node;
        } else {
            return node.getNoDireita();
        }
        return null;
    }

    private No encontraMinimo(No node) {
        if (node != null) {
            while (node.getNoEsquerda() != null) {
                node = node.getNoEsquerda();
            }
        }
        return node;
    }

    // private int fatorBalanceamento(No node){
    //     int direita, esquerda;
    //     direita = getAltura(node.getNoDireita());
    //     esquerda = getAltura(node.getNoEsquerda());
    //     return direita-esquerda;
    // }

    // private void verifica(No pai, No node, int fb){
    //     if(fb>0){
    //         if(fatorBalanceamento(node.getNoDireita())>0){
    //             rotacaoEsquerda(pai, node);
    //         } else{
    //             rotacaoDireita(node, node.getNoDireita());
    //             rotacaoEsquerda(pai, node);
    //         }
    //     } else{
    //         if(fatorBalanceamento(node.getNoEsquerda())<0){
    //             rotacaoDireita(pai, node);
    //         } else{
    //             rotacaoEsquerda(node, node.getNoEsquerda());
    //             rotacaoDireita(pai, node);
    //         }
    //     }
    // }
}
