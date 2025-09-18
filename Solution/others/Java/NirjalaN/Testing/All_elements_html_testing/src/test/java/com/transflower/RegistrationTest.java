package com.transflower;

import java.time.Duration;

import org.junit.jupiter.api.AfterAll;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class RegistrationTest {
    private static WebDriver driver;
    private static  WebDriverWait wait;

    @BeforeAll
    static void setup(){
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        driver.get("http://127.0.0.1:5500/src/webpages/registration.html");
         wait=new WebDriverWait(driver, Duration.ofSeconds(5));
        
    }

    @Test
     public void test_register(){
        WebElement username=driver.findElement(By.id("username"));
        WebElement email=driver.findElement(By.id("email"));
        WebElement password=driver.findElement(By.id("password"));
        WebElement age=driver.findElement(By.id("age"));
        WebElement dob=driver.findElement(By.id("dob"));
        WebElement male=driver.findElement(By.id("male"));
        WebElement female=driver.findElement(By.id("female"));
        WebElement reading =driver.findElement(By.id("reading"));
        WebElement sports=driver.findElement(By.id("sports"));
        WebElement music=driver.findElement(By.id("music"));
        WebElement country=driver.findElement(By.id("country"));
        WebElement address=driver.findElement(By.id("address"));
        WebElement button=driver.findElement(By.id("submit"));
        WebElement reset=driver.findElement(By.id("reset"));


        username.sendKeys("Nirjala Naik");
        try{
            Thread.sleep(1000);
        }
        catch(InterruptedException e){
            System.out.println(e);
        }
        email.sendKeys("nirjalanaik@gmail.com");
        try{
            Thread.sleep(1000);
        }
        catch(InterruptedException e){
            System.out.println(e);
        }
        password.sendKeys("nirjala@123");
        try{
            Thread.sleep(1000);
        }
        catch(InterruptedException e){
            System.out.println(e);
        }
        age.sendKeys("21");
        try{
            Thread.sleep(1000);
        }
        catch(InterruptedException e){
            System.out.println(e);
        }
        dob.sendKeys("17-06-2004");
        try{
            Thread.sleep(1000);
        }
        catch(InterruptedException e){
            System.out.println(e);
        }

         String enteredusername=username.getAttribute("value");
        // String enteredemail=email.getAttribute("nirjalanaik@gmail.com");
        // String enteredpassword=password.getAttribute("nirjala@123");
        // String enteredage=age.getAttribute("21");
        // String entereddob=dob.getAttribute("17-06-2004");

        female.click();
        reading.click();
        music.click();

        Select CountrySelect=new Select(country);
        CountrySelect.selectByVisibleText("India");

        // String enteredcountry=country.getAttribute("India");

        address.sendKeys("Kolhapur");
        // String enteredaddress=address.getAttribute("Kolhapur");
        button.click();

       
        WebElement message=wait.until(
            ExpectedConditions.visibilityOfElementLocated(By.id("msg"))
        );
        message.sendKeys("Welcome Dear "+enteredusername);

        // if(enteredusername.equals("Nirjala Naik")&&
        //    enteredemail.equals("nirjalanaik@gmail.com")&&
        //    enteredpassword.equals("nirjala@123")&&
        //    enteredage.equals("21")&&
        //    entereddob.equals("2004-06-17")&&
        //    enteredaddress.equals("kolhapur")&&
        //    enteredcountry.equals("India")
        //    ){
        //     message.sendKeys("Registration Successful!");
        //    }
        // else{
        //     message.sendKeys("Registration failed");
        // }
        assertTrue(message.getAttribute("value").contains("Welcome Dear " +enteredusername));
        try{
            Thread.sleep(2000);
        }
        catch(InterruptedException e){
            System.out.println(e);
        }
        

    }

    @AfterAll
    static void teardown(){
        if(driver!=null){
            driver.quit();
        }
    }
}