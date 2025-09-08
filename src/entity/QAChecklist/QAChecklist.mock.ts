import { QAChecklist } from "./QAChecklist";

export const mockQAChecklists: { [ticketId: string]: QAChecklist } = {
  "PROJ-123": new QAChecklist({
    ticketId: "PROJ-123",
    functionalTests: [
      {
        id: "func-1",
        description: "Verify successful user registration with valid email and password",
        priority: "Critical",
        category: "Registration"
      },
      {
        id: "func-2", 
        description: "Verify login functionality with valid credentials returns JWT token",
        priority: "Critical",
        category: "Authentication"
      },
      {
        id: "func-3",
        description: "Verify login failure with invalid credentials shows appropriate error",
        priority: "High",
        category: "Authentication"
      },
      {
        id: "func-4",
        description: "Verify logout functionality clears session and invalidates token",
        priority: "High",
        category: "Authentication"
      },
      {
        id: "func-5",
        description: "Verify password reset functionality sends email and allows reset",
        priority: "Medium",
        category: "Password Management"
      },
      {
        id: "func-6",
        description: "Verify JWT token expiration after 24 hours",
        priority: "High",
        category: "Token Management"
      }
    ],
    securityTests: [
      {
        id: "sec-1",
        description: "Verify passwords are properly hashed and not stored in plain text",
        priority: "Critical",
        category: "Data Security"
      },
      {
        id: "sec-2",
        description: "Test SQL injection protection on login endpoints",
        priority: "Critical", 
        category: "Input Validation"
      },
      {
        id: "sec-3",
        description: "Verify rate limiting prevents brute force attacks on login",
        priority: "High",
        category: "Rate Limiting"
      },
      {
        id: "sec-4",
        description: "Test HTTPS enforcement for all authentication endpoints",
        priority: "Critical",
        category: "Transport Security"
      },
      {
        id: "sec-5",
        description: "Verify XSS protection in user input fields",
        priority: "High",
        category: "Input Validation"
      },
      {
        id: "sec-6",
        description: "Test JWT token signature validation",
        priority: "Critical",
        category: "Token Security"
      }
    ],
    performanceTests: [
      {
        id: "perf-1",
        description: "Login response time should be under 2 seconds",
        priority: "High",
        category: "Response Time"
      },
      {
        id: "perf-2",
        description: "Registration process should complete within 3 seconds",
        priority: "Medium",
        category: "Response Time"
      },
      {
        id: "perf-3",
        description: "System should handle 100 concurrent login attempts",
        priority: "Medium",
        category: "Load Testing"
      },
      {
        id: "perf-4",
        description: "JWT token generation should not exceed 100ms",
        priority: "Low",
        category: "Token Performance"
      }
    ],
    usabilityTests: [
      {
        id: "ui-1",
        description: "Login form provides clear feedback for loading states",
        priority: "Medium",
        category: "User Feedback"
      },
      {
        id: "ui-2",
        description: "Error messages are user-friendly and actionable",
        priority: "High",
        category: "Error Handling"
      },
      {
        id: "ui-3",
        description: "Password strength indicator works correctly",
        priority: "Low",
        category: "User Guidance"
      },
      {
        id: "ui-4",
        description: "Mobile responsiveness works on all screen sizes",
        priority: "Medium",
        category: "Responsive Design"
      },
      {
        id: "ui-5",
        description: "Accessibility standards are met (WCAG 2.1 AA)",
        priority: "Medium",
        category: "Accessibility"
      }
    ],
    testScenarios: [
      {
        title: "Complete User Registration Flow",
        steps: [
          "Navigate to registration page",
          "Enter valid email address",
          "Enter strong password meeting requirements",
          "Confirm password matches",
          "Click register button",
          "Verify email confirmation sent",
          "Click email confirmation link",
          "Verify account is activated"
        ],
        expectedResult: "User successfully registers and can login with new credentials",
        priority: "Critical"
      },
      {
        title: "Role-based Access Control",
        steps: [
          "Login as regular user",
          "Attempt to access admin-only endpoint",
          "Verify access is denied",
          "Login as admin user", 
          "Access same admin endpoint",
          "Verify access is granted"
        ],
        expectedResult: "Only admin users can access admin endpoints",
        priority: "High"
      }
    ],
    browserCompatibility: [
      "Chrome 90+",
      "Firefox 88+", 
      "Safari 14+",
      "Edge 90+"
    ],
    deviceCompatibility: [
      "Desktop (1920x1080)",
      "Laptop (1366x768)",
      "Tablet (768x1024)",
      "Mobile (375x667)"
    ],
    estimatedTestingHours: 24
  }),

  "PROJ-124": new QAChecklist({
    ticketId: "PROJ-124", 
    functionalTests: [
      {
        id: "func-1",
        description: "Verify dashboard loads without memory leaks",
        priority: "Critical",
        category: "Memory Management"
      },
      {
        id: "func-2",
        description: "Verify dashboard components unmount properly",
        priority: "High", 
        category: "Component Lifecycle"
      },
      {
        id: "func-3",
        description: "Test extended dashboard usage (30+ minutes) for memory stability",
        priority: "Critical",
        category: "Memory Management"
      }
    ],
    securityTests: [
      {
        id: "sec-1",
        description: "Verify no sensitive data remains in memory after logout",
        priority: "High",
        category: "Data Security"
      }
    ],
    performanceTests: [
      {
        id: "perf-1", 
        description: "Memory usage should remain stable over extended periods",
        priority: "Critical",
        category: "Memory Performance"
      },
      {
        id: "perf-2",
        description: "Dashboard rendering performance should not degrade over time",
        priority: "High",
        category: "Rendering Performance"
      },
      {
        id: "perf-3",
        description: "Verify no DOM elements accumulate unnecessarily",
        priority: "Medium",
        category: "DOM Management"
      }
    ],
    usabilityTests: [
      {
        id: "ui-1",
        description: "Dashboard remains responsive during heavy data loads",
        priority: "High",
        category: "User Experience"
      }
    ],
    testScenarios: [
      {
        title: "Extended Dashboard Usage Test",
        steps: [
          "Open dashboard in browser",
          "Monitor memory usage in DevTools", 
          "Navigate between dashboard sections for 30 minutes",
          "Refresh data multiple times",
          "Check memory usage remains stable"
        ],
        expectedResult: "Memory usage should not continuously increase",
        priority: "Critical"
      }
    ],
    browserCompatibility: [
      "Chrome 90+",
      "Firefox 88+",
      "Safari 14+"
    ],
    deviceCompatibility: [
      "Desktop (1920x1080)",
      "Laptop (1366x768)"
    ],
    estimatedTestingHours: 12
  }),

  "PROJ-125": new QAChecklist({
    ticketId: "PROJ-125",
    functionalTests: [
      {
        id: "func-1",
        description: "Verify all unit tests pass in CI/CD pipeline",
        priority: "Critical",
        category: "Test Execution"
      },
      {
        id: "func-2",
        description: "Verify test coverage reports are generated correctly",
        priority: "High",
        category: "Coverage Reporting"
      },
      {
        id: "func-3", 
        description: "Verify payment service functions are properly tested",
        priority: "Critical",
        category: "Payment Testing"
      }
    ],
    securityTests: [
      {
        id: "sec-1",
        description: "Verify payment security tests cover all critical flows",
        priority: "Critical",
        category: "Payment Security"
      }
    ],
    performanceTests: [
      {
        id: "perf-1",
        description: "Unit test suite should complete within 5 minutes",
        priority: "Medium", 
        category: "Test Performance"
      }
    ],
    usabilityTests: [
      {
        id: "ui-1",
        description: "Test reports should be easily readable by developers",
        priority: "Low",
        category: "Developer Experience"
      }
    ],
    testScenarios: [
      {
        title: "Payment Service Test Coverage Validation",
        steps: [
          "Run payment service unit tests",
          "Generate coverage report",
          "Verify coverage meets 80% threshold",
          "Check all critical payment paths are tested",
          "Validate error scenarios are covered"
        ],
        expectedResult: "Payment service achieves 80%+ test coverage with all critical paths tested",
        priority: "Critical"
      }
    ],
    browserCompatibility: ["N/A - Backend Testing"],
    deviceCompatibility: ["N/A - Backend Testing"],
    estimatedTestingHours: 8
  })
};
