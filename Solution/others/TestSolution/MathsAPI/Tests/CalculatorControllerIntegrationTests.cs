// Tests/CalculatorControllerIntegrationTests.cs
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using NUnit.Framework;

namespace MathsAPI.Tests
{
    [TestFixture]
    public class CalculatorControllerIntegrationTests
    {
        private HttpClient _client;
        private WebApplicationFactory<Program> _factory;

        [SetUp]
        public void SetUp()
        {
            _factory = new WebApplicationFactory<Startup>();
            _client = _factory.CreateClient();
        }

        [TearDown]
        public void TearDown()
        {
            _client.Dispose();
            _factory.Dispose();
        }

        [TestCase("/api/calculator/add?a=5&b=3", 8)]
        [TestCase("/api/calculator/subtract?a=5&b=3", 2)]
        public async Task Calculator_EndpointsReturnCorrectResult(string url, int expectedResult)
        {
            // Act
            var response = await _client.GetAsync(url);
            response.EnsureSuccessStatusCode();
            var responseString = await response.Content.ReadAsStringAsync();
            var result = Convert.ToInt32(responseString);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }
    }
}
