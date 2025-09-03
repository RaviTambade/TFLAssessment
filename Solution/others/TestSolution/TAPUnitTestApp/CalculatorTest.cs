using CalculatorLib;

namespace TAPUnitTestApp;

public class CalculatorTest
{
    MathEngine math=null;
    int numaddition1;
    int numaddition2;
    int expectedResultAddition;
    
    int expectedResultSubtraction;
    int expectedResultMultiplication;


    [SetUp]
    public void Setup()
    {
        math=new  MathEngine();
        //sample data
        numaddition1=14;
        numaddition2=10;

        expectedResultAddition=24;
        expectedResultSubtraction=4;
        expectedResultMultiplication=140;
 

    }

    [Test]
    public void AdditionTest()
    {
        int actualResult=math.Addition(numaddition1,numaddition2);
        if(actualResult ==expectedResultAddition){
            Assert.Pass();
        }
        else
        {
            Assert.Fail();
        }
    }


    [Test]
    public void SubtractionTest()
    {
        int actualResult=math.Subtraction(numaddition1,numaddition2);
        if(actualResult ==expectedResultSubtraction){
            Assert.Pass();
        }
        else
        {
            Assert.Fail();
        }
    }

 

 [Test]
    public void MultiplicationTest()
    {
        int actualResult=math.Multiplication(numaddition1,numaddition2);
        if(actualResult ==expectedResultMultiplication){
            Assert.Pass();
        }
        else
        {
            Assert.Fail();
        }
    }

}