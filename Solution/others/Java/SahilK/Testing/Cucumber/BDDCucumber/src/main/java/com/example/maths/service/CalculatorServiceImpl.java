package com.example.maths.service;
import com.example.maths.repository.MathRepository;

public class CalculatorServiceImpl implements CalculatorService
{
    private MathRepository mathRepository;

    public CalculatorServiceImpl(MathRepository mathRepository) {
        this.mathRepository = mathRepository;
    }

    public int doubleNumber() {
        int number = mathRepository.getNumber();
        return number * 2;
    }
}