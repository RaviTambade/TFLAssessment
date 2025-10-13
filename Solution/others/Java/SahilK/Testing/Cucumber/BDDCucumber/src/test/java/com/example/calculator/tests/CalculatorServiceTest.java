package com.example.calculator.tests;
import org.mockito.Mockito;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.example.maths.repository.MathRepository;
import com.example.maths.service.CalculatorServiceImpl;
import static org.mockito.Mockito.*;
import static org.testng.Assert.assertEquals;

public class CalculatorServiceTest {
 private MathRepository mathRepository;
    private CalculatorServiceImpl calculatorService;

    @BeforeMethod
    public void setup() {
        // Mock the MathRepository
        mathRepository = Mockito.mock(MathRepository.class);

        // Inject mock into CalculatorService
        calculatorService = new CalculatorServiceImpl(mathRepository);
    }

    @Test
    public void testDoubleNumber() {
        // Arrange: define behavior of mock
        when(mathRepository.getNumber()).thenReturn(5);

        // Act
        int result = calculatorService.doubleNumber();

        // Assert
        assertEquals(result, 10);

        // Verify that getNumber() was called exactly once
        verify(mathRepository, times(1)).getNumber();
    }
}