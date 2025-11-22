public class Product {

    
        int id;
        String name;
        float price;
        int quantity;

        public Product(int id, String name, float price, int quantity) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
   

    public static void main(String[] args) {
        
       Product flower1 = new Product(1,"Rose", 40, 3);
       Product flower2 = new Product(2, "Lily", 30, 3);

       System.out.println("Id="+flower1.id+" "+"Name="+flower1.name+" "+"price="+flower1.price+" "+"quantity="+flower1.quantity);
       System.out.println("Id="+flower2.id+" "+"Name="+flower2.name+" "+"price="+flower2.price+" "+"quantity="+flower2.quantity);
    }
    
}
