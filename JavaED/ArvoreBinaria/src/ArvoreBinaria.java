package arvorebinaria;
public class ArvoreBinaria {
    public static void main(String[] args) {
        Arvore ab = new Arvore(null);
        ab.inserir(15);
        ab.inserir(25);
        ab.inserir(5);
        ab.inserir(6);
        ab.inserir(4);
        ab.inserir(26);
        ab.inserir(24);
        ab.inserir(8);
        ab.inserir(30);
        ab.inserir(34);
        ab.imprimirArvore();
    }
}
