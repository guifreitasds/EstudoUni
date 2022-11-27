package arvorebinaria;

public class No {

    private int valor;
    private No noEsquerda;
    private No noDireita;

    No(int valor) {
        this.valor = valor;
        this.noEsquerda = null;
        this.noDireita = null;
    }

    public int getValor() {
        return valor;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }

    public No getNoEsquerda() {
        return noEsquerda;
    }

    public void setNoEsquerda(No noEsquerda) {
        this.noEsquerda = noEsquerda;
    }

    public No getNoDireita() {
        return noDireita;
    }

    public void setNoDireita(No noDireita) {
        this.noDireita = noDireita;
    }

    public No(int valor, No noEsquerda, No noDireita) {
        this.valor = valor;
        this.noEsquerda = noEsquerda;
        this.noDireita = noDireita;
    }

}
