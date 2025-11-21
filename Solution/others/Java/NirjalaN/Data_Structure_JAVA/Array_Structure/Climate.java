import java.util.Random;

public class Climate {

    float temperature;
    float humidity;
    float lightIntensity;
    float co2;
    float soilMoisture;

    public static void main(String[] args) {
        final int ROWS = 2;
        final int COLS = 5;

        Climate[][] farm = new Climate[ROWS][COLS];
        Random rand = new Random();

        for (int r = 0; r < ROWS; r++) {
            for (int c = 0; c < COLS; c++) {
                farm[r][c] = new Climate();
                farm[r][c].temperature = rand.nextInt(1500) / 10.0f;
                farm[r][c].humidity = rand.nextInt(101);
                farm[r][c].lightIntensity = rand.nextInt(10000);
                farm[r][c].co2 = rand.nextInt(2000) + 300;
                farm[r][c].soilMoisture = rand.nextInt(101);
            }
        }

        System.out.println("Transflower Farm Climate Data (Tambade Mala)");
        System.out.println("------------------------------------------------------");

        for (int r = 0; r < ROWS; r++) {
            for (int c = 0; c < COLS; c++) {
                System.out.printf("[R%dC%d] T=%.1f°C H=%.1f%% L=%d Lux CO₂=%.0fppm SM=%.1f%%\t",
                        r + 1, c + 1,
                        farm[r][c].temperature,
                        farm[r][c].humidity,
                        (int) farm[r][c].lightIntensity,
                        farm[r][c].co2,
                        farm[r][c].soilMoisture);
            }
            System.out.println("\n");
        }
    }
}
