package com.example.catalog.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

import java.util.List;

public class ProductUITest {

    WebDriver driver;

    @BeforeClass
    public void setup() {
        driver = new ChromeDriver();
    }

    @Test
    public void testProductCatalogPage() {
        driver.get("http://localhost:9090/index.html");
        List<WebElement> products = driver.findElements(By.tagName("li"));
        Assert.assertTrue(products.size() > 0, "Products should be listed");
     //  Assert.assertTrue(false, "Products should be listed");
    }

    @AfterClass
    public void teardown() {
        // driver.quit();
    }
}