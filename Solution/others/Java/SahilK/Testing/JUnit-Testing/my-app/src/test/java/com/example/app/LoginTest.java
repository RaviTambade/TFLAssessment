package com.example.app;

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
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginTest {
    private static WebDriver webDriver;

    @BeforeAll
    static void setup() {
        WebDriverManager.chromedriver().setup();
        webDriver = new ChromeDriver();
        webDriver.manage().window().maximize();
        webDriver.get("http://127.0.0.1:5500/src/webUI/login.html");
    }

    @Test
    void testLogin() {
        WebElement username = webDriver.findElement(By.id("username"));
        WebElement password = webDriver.findElement(By.id("password"));
        WebElement button   = webDriver.findElement(By.id("login"));
        //WebElement msg= webDriver.findElement(By.id("message"));


        try {
            Thread.sleep(2000);
            
        } catch (Exception e) {
            
        }
        username.sendKeys("sahilbajkamble@gmail.com");
        try {
            Thread.sleep(2000);
            
        } catch (Exception e) {
            
        }
        password.sendKeys("sahilkamble@11");
        try {
            Thread.sleep(2000);
            
        } catch (Exception e) {
            
        }

        String enteredUser=username.getAttribute("value");
        String enteredPass=password.getAttribute("value");

        button.click();
        WebDriverWait wait = new WebDriverWait(webDriver, Duration.ofSeconds(5));
        WebElement message = wait.until(
            ExpectedConditions.visibilityOfElementLocated(By.id("message"))
        );

        if(enteredUser.equals("sahilbajkamble@gmail.com")&&enteredPass.equals("sahilkamble@11"))
        {
            message.sendKeys("Login Sucessful");
            try {
            Thread.sleep(2000);
            
        } catch (Exception e) {
            
        }
        }

        assertTrue(message.getAttribute("value").contains("Login Sucessful"));
    }

    @AfterAll
    static void exit() {
        if (webDriver != null) {
            webDriver.quit();
        }
    }
}
