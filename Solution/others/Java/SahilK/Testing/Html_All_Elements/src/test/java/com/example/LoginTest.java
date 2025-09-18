package com.example;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.Duration;

import org.junit.jupiter.api.AfterAll;
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

public class LoginTest {
    private static WebDriver driver;
    private static WebDriverWait wait;
    @BeforeAll
    static void setup(){
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://127.0.0.1:5501/src/webUI/Login.html");
        wait = new WebDriverWait(driver, Duration.ofSeconds(5));

      }

      @Test
      void testLogin(){
        WebElement username=driver.findElement(By.id("username"));
        WebElement email=driver.findElement(By.id("email"));
        WebElement password=driver.findElement(By.id("password"));
        WebElement male=driver.findElement(By.id("male"));
        WebElement female=driver.findElement(By.id("female"));
        WebElement remember=driver.findElement(By.id("remember"));
        WebElement noti=driver.findElement(By.id("toggle"));
        WebElement role=driver.findElement(By.id("role"));
        WebElement comments=driver.findElement(By.id("comments"));
        WebElement dob=driver.findElement(By.id("dob"));
        WebElement submit=driver.findElement(By.id("submit"));
        
        try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }
        username.sendKeys("Sahil11");
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }
        email.sendKeys("sahilbajkamble@gmail.com");
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }
        password.sendKeys("sahilkamble@11");
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }
        male.click();
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }
        if(!remember.isSelected()){
            remember.click();
        }
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }

        if(!noti.isSelected()){
            noti.click();
        }
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }
        Select selectRole=new Select(role);
        selectRole.selectByValue("student");
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }

        comments.sendKeys("This is a Selenium test run.");
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }
        dob.sendKeys("19-01-2004");
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }

        String enteredUsername=username.getAttribute("value");
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }
        submit.click();
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }
        WebElement message=wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("message")));
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }

        message.sendKeys("Welcome-"+enteredUsername);
         try {
             Thread.sleep(1000);
        } catch (Exception e) {
            System.out.println(e);
        }

        assertTrue(message.getAttribute("value").contains("Welcome-"+enteredUsername));
         try {
             Thread.sleep(5000);
        } catch (Exception e) {
            System.out.println(e);
        }
      }
      
       @AfterAll
      static void exit() {
        if (driver != null) {
            driver.quit();
        }
    }
    
}
