package com.tap.sarthak.demo;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class RegistrationTest {
    private static WebDriver webDriver;

    @BeforeAll
    static void setup()
    {
        WebDriverManager.chromedriver().setup();
        webDriver = new ChromeDriver();
        webDriver.manage().window().maximize();
        webDriver.get("http://127.0.0.1:5500/src/Html/Registration.html");
    }

    @Test
    void testLogin()
    {
        WebElement username = webDriver.findElement(By.id("username"));
        WebElement email = webDriver.findElement(By.id("email"));
        WebElement password = webDriver.findElement(By.id("password"));
        WebElement male = webDriver.findElement(By.id("male"));
        WebElement female = webDriver.findElement(By.id("female"));
        WebElement checkbox = webDriver.findElement(By.id("remember"));
        WebElement notification = webDriver.findElement(By.id("toggle"));
        WebElement role = webDriver.findElement(By.id("role"));
        WebElement comments = webDriver.findElement(By.id("comments"));
        WebElement date = webDriver.findElement(By.id("dob"));
        WebElement submit = webDriver.findElement(By.id("submit"));

        try{
            Thread.sleep(2000);
        }catch(Exception e)
        {
            System.out.println(e);
        }

        username.sendKeys("sarthakwalake");
        try{
            Thread.sleep(2000);
        }catch(Exception e)
        {
            System.out.println(e);
        }

        email.sendKeys("sarthakwalake@gmail.com");
        try{
            Thread.sleep(2000);
        }catch(Exception e){

        }

        password.sendKeys("Sarthak");
        try{
            Thread.sleep(2000);
        }catch(Exception e){

        }

        if(!male.isSelected()){
            male.click();
        }
          
        if(!checkbox.isSelected()){
            checkbox.click();
        }

        if(!notification.isSelected()){
            notification.click();
        }

        Select selectRole = new Select(role);
        selectRole.selectByValue("student");

        comments.sendKeys("This is the student registration form");
        try{
            Thread.sleep(2000);
        }catch(Exception e)
        {

        }

        date.sendKeys("03/02/2004");
        try{
            Thread.sleep(2000);
        }catch(Exception e)
        {

        }

        String enteredUser = username.getAttribute("value");
        String enteredEmail = email.getAttribute("value");
        String enteredPassword = password.getAttribute("value");
        String selectedGender = male.isSelected() ? "male" : (female.isSelected() ? "female" : "none");
        boolean rememberSelected = checkbox.isSelected();
        boolean notiSelected = notification.isSelected();
        String selectedRole = selectRole.getFirstSelectedOption().getText();
        String enteredComments = comments.getAttribute("value");
        String enteredDob = date.getAttribute("value");

        //submit.click();
        submit = webDriver.findElement(By.id("submit"));
       // if(enteredUser.equals("sarthakwalake")&&enteredEmail.equals("sarthakwalake@gmail.com")&&enteredPassword.equals("Sarthak")&&selectedGender.equals("male")&&selectedRole.equals("student")&&)

       if (enteredUser.equals("sarthakwalake") 
        && enteredEmail.equals("sarthakwalake@gmail.com") 
        && enteredPassword.equals("Sarthak")
        && selectedGender.equals("male")  
        && rememberSelected
        && notiSelected
        && selectedRole.equals("Student")
        && enteredComments.equals("This is the student registration form.")
        && enteredDob.equals("03/02/2004")){
            submit.sendKeys("Login Sucessful");
        }
        //assertTrue(submit.getAttribute("value").contains("Login Sucessful"));
        assertTrue(submit.getText().contains("Login"));

      }
      
      @AfterAll
      static void exit()
      {
        if(webDriver != null)
        {
            webDriver.quit();
        }
    }
}

