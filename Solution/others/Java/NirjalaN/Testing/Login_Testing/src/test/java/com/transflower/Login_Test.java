package com.transflower;

import org.junit.jupiter.api.AfterAll;

import static org.junit.jupiter.api.Assertions.*;

import java.time.Duration;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Login_Test {
    private static WebDriver driver;

    @BeforeAll
    static void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("D:\\TAP\\PROGRAMMING\\Testing\\Login_Testing\\src\\webpages\\login.html");
    }

    @Test
    void testLoginForm() {
        WebElement username = driver.findElement(By.id("username"));
        WebElement password = driver.findElement(By.id("password"));
        WebElement login = driver.findElement(By.id("login"));
        //WebElement msg = driver.findElement(By.id("msg"));

        username.sendKeys("nirjalanaik@gmail.com");
        try{
            Thread.sleep(2000);
        }
        catch(InterruptedException e){
            System.out.println(e);
        }
        password.sendKeys("nirjala@123");
        try{
            Thread.sleep(2000);
        }
        catch(InterruptedException e)
        {
            System.out.println(e);
        }

        String enteredUser=username.getAttribute("value");
        String enteredPass=password.getAttribute("value");

        login.click();

            WebDriverWait wait=new WebDriverWait(driver, Duration.ofSeconds(5));
            WebElement message=wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.id("msg"))
            );

            if(enteredUser.equals("nirjalanaik@gmail.com")&&enteredPass.equals("nirjala@123")){
                message.sendKeys("Login successfull");
            }
            else{
                message.sendKeys("invalid login");
            }


        assertTrue(message.getAttribute("value").contains("Login successfull"));
    }

    @AfterAll
    static void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
