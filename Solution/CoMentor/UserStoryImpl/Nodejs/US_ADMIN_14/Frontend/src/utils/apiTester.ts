/**
 * Testing Utilities for API Testing
 */

export interface TestResult {
  name: string;
  passed: boolean;
  message: string;
  responseTime?: number;
  responseData?: any;
}

/**
 * Simulates API test scenarios
 */
export class RolesApiTester {
  private baseUrl: string;
  private results: TestResult[] = [];

  constructor(baseUrl: string = 'http://localhost:3898') {
    this.baseUrl = baseUrl;
  }

  /**
   * Test 1: Update with single role
   */
  async testSingleRole(): Promise<TestResult> {
    const startTime = performance.now();
    try {
      const response = await fetch(
        `${this.baseUrl}/api/roles/updateUserRoles`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: 'test_user_001',
            role_ids: [1],
          }),
        }
      );
      const data = await response.json();
      const responseTime = performance.now() - startTime;

      const result: TestResult = {
        name: 'Single Role Update',
        passed: response.ok,
        message: response.ok ? 'Success' : `Server error: ${response.status}`,
        responseTime,
        responseData: data,
      };

      this.results.push(result);
      return result;
    } catch (error) {
      const result: TestResult = {
        name: 'Single Role Update',
        passed: false,
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        responseTime: performance.now() - startTime,
      };

      this.results.push(result);
      return result;
    }
  }

  /**
   * Test 2: Update with multiple roles
   */
  async testMultipleRoles(): Promise<TestResult> {
    const startTime = performance.now();
    try {
      const response = await fetch(
        `${this.baseUrl}/api/roles/updateUserRoles`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: 'test_user_002',
            role_ids: [1, 2, 3, 4, 5],
          }),
        }
      );
      const data = await response.json();
      const responseTime = performance.now() - startTime;

      const result: TestResult = {
        name: 'Multiple Roles Update',
        passed: response.ok,
        message: response.ok ? 'Success' : `Server error: ${response.status}`,
        responseTime,
        responseData: data,
      };

      this.results.push(result);
      return result;
    } catch (error) {
      const result: TestResult = {
        name: 'Multiple Roles Update',
        passed: false,
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        responseTime: performance.now() - startTime,
      };

      this.results.push(result);
      return result;
    }
  }

  /**
   * Test 3: Connection test
   */
  async testConnection(): Promise<TestResult> {
    const startTime = performance.now();
    try {
      const response = await fetch(`${this.baseUrl}/api/roles/updateUserRoles`, {
        method: 'OPTIONS',
      });
      const responseTime = performance.now() - startTime;

      const result: TestResult = {
        name: 'Connection Test',
        passed: response.ok || response.status === 405, // 405 is OK for OPTIONS
        message:
          response.ok || response.status === 405
            ? 'Server is reachable'
            : `Connection failed: ${response.status}`,
        responseTime,
      };

      this.results.push(result);
      return result;
    } catch (error) {
      const result: TestResult = {
        name: 'Connection Test',
        passed: false,
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        responseTime: performance.now() - startTime,
      };

      this.results.push(result);
      return result;
    }
  }

  /**
   * Run all tests
   */
  async runAllTests(): Promise<TestResult[]> {
    console.log('Starting API Tests...');
    await this.testConnection();
    await this.testSingleRole();
    await this.testMultipleRoles();
    return this.results;
  }

  /**
   * Get test summary
   */
  getSummary() {
    const total = this.results.length;
    const passed = this.results.filter((r) => r.passed).length;
    const failed = total - passed;
    const totalTime = this.results.reduce((sum, r) => sum + (r.responseTime || 0), 0);

    return {
      totalTests: total,
      passed,
      failed,
      successRate: total > 0 ? ((passed / total) * 100).toFixed(2) + '%' : '0%',
      totalTime: totalTime.toFixed(2) + 'ms',
      averageTime:
        total > 0 ? (totalTime / total).toFixed(2) + 'ms' : '0ms',
      results: this.results,
    };
  }

  /**
   * Print results to console
   */
  printResults() {
    const summary = this.getSummary();
    console.log('\n========== Test Results ==========');
    console.log(`Total Tests: ${summary.totalTests}`);
    console.log(`Passed: ${summary.passed}`);
    console.log(`Failed: ${summary.failed}`);
    console.log(`Success Rate: ${summary.successRate}`);
    console.log(`Total Time: ${summary.totalTime}`);
    console.log(`Average Time: ${summary.averageTime}`);
    console.log('\n--- Detailed Results ---');
    summary.results.forEach((result, index) => {
      console.log(
        `\n${index + 1}. ${result.name}`,
        result.passed ? '✅ PASSED' : '❌ FAILED'
      );
      console.log(`   Message: ${result.message}`);
      if (result.responseTime) {
        console.log(`   Response Time: ${result.responseTime.toFixed(2)}ms`);
      }
      if (result.responseData) {
        console.log(`   Response Data:`, result.responseData);
      }
    });
    console.log('\n===================================\n');
  }
}

// Usage in browser console:
// const tester = new RolesApiTester();
// tester.runAllTests().then(() => tester.printResults());
