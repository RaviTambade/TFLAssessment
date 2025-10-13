package  com.example.maths.repository;

public class MathRepositoryImpl implements MathRepository {
    @Override
    public int getNumber() {
        
        // In a real implementation, this might fetch data from a database or another source
        return 42; // Example static number
    }
    
}
