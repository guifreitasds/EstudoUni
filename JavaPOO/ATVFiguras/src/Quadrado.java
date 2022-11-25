public class Quadrado extends Figura{
    private double lado;

    public Quadrado(){
    }

    public Quadrado(String cor, double lado){
        super(cor);
        this.lado=lado;
    }

    public double getLado(){
        return lado;
    }

    public void setLado(double lado){
        this.lado=lado;
    }

    public String toString(){
        return "Quadrado [lado="+lado+", cor="+super.getCor()+"]";
    }
    public double area(){
        return lado*lado;
    }
}
