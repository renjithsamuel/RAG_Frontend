import { DeveloperManual } from "./DeveloperManual";

export const mockDeveloperManuals: { [ticketId: string]: DeveloperManual } = {
  "PROJ-123": new DeveloperManual({
    ticketId: "PROJ-123",
    overview: "This ticket requires implementing a secure user authentication system with JWT tokens and role-based access control. The system should handle user registration, login, logout, and provide middleware for protecting routes based on user roles.",
    technicalRequirements: [
      "Implement JWT token generation and validation using jsonwebtoken library",
      "Create user registration endpoint with email validation and password hashing",
      "Set up bcrypt for secure password hashing with salt rounds",
      "Implement role-based middleware for route protection",
      "Add session management with refresh token functionality",
      "Create logout endpoint that invalidates tokens",
      "Implement password reset functionality via email",
      "Add rate limiting for authentication endpoints",
    ],
    acceptanceCriteria: [
      "User can register with email and password",
      "User can login with valid credentials and receive JWT token",
      "Passwords are securely hashed and stored",
      "JWT tokens expire after 24 hours",
      "Refresh tokens allow extending session without re-login",
      "Protected routes require valid JWT token",
      "Different user roles have appropriate access levels",
      "Failed login attempts are rate limited",
    ],
    codeSnippets: [
      {
        title: "JWT Token Generation",
        language: "typescript",
        code: `import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const generateTokens = (user: User) => {
  const accessToken = jwt.sign(
    { 
      id: user.id, 
      email: user.email, 
      role: user.role 
    },
    process.env.JWT_SECRET!,
    { expiresIn: '24h' }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.REFRESH_SECRET!,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
};`
      },
      {
        title: "Role-based Middleware",
        language: "typescript",
        code: `import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ error: 'No token provided' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
      
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Insufficient permissions' });
      }

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
};`
      },
      {
        title: "Password Hashing Utility",
        language: "typescript",
        code: `import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

export class PasswordUtils {
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
  }

  static async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  static validatePasswordStrength(password: string): boolean {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }
}`
      }
    ],
    repositories: [
      {
        name: "auth-service",
        url: "https://bitbucket.org/company/auth-service",
        description: "Main authentication service repository containing JWT implementation",
        branch: "feature/jwt-auth"
      },
      {
        name: "shared-middleware", 
        url: "https://bitbucket.org/company/shared-middleware",
        description: "Shared middleware library for role validation across services",
        branch: "main"
      },
      {
        name: "user-management",
        url: "https://bitbucket.org/company/user-management", 
        description: "User model and database management utilities",
        branch: "develop"
      }
    ],
    confluencePages: [
      {
        title: "Authentication Architecture Overview",
        url: "https://company.atlassian.net/wiki/spaces/PROJ/pages/123/Auth+Architecture",
        description: "System design and architecture documentation for authentication flow",
        lastUpdated: "2024-01-15"
      },
      {
        title: "Security Best Practices",
        url: "https://company.atlassian.net/wiki/spaces/PROJ/pages/456/Security+Guidelines", 
        description: "Company security guidelines and standards for authentication",
        lastUpdated: "2024-01-10"
      },
      {
        title: "JWT Token Management",
        url: "https://company.atlassian.net/wiki/spaces/PROJ/pages/789/JWT+Management",
        description: "Best practices for JWT token generation, validation, and refresh",
        lastUpdated: "2024-01-12"
      }
    ],
    dependencies: [
      "jsonwebtoken@^9.0.0",
      "bcrypt@^5.1.0", 
      "@types/bcrypt@^5.0.0",
      "express-rate-limit@^6.7.0",
      "nodemailer@^6.9.0"
    ],
    estimatedHours: 32,
    complexity: "High"
  }),

  "PROJ-124": new DeveloperManual({
    ticketId: "PROJ-124",
    overview: "Investigate and fix memory leak in the dashboard component that's causing performance degradation. The issue appears to be related to event listeners and subscriptions not being properly cleaned up in React components.",
    technicalRequirements: [
      "Profile the dashboard component to identify memory leak sources",
      "Audit all useEffect hooks for proper cleanup functions",
      "Check for unremoved event listeners on window/document objects", 
      "Verify all subscriptions and intervals are cleared on unmount",
      "Implement proper cleanup in custom hooks",
      "Add memory monitoring in development environment",
      "Optimize component re-renders to prevent memory buildup"
    ],
    acceptanceCriteria: [
      "Memory usage remains stable after extended dashboard usage",
      "No memory leaks detected in Chrome DevTools profiler",
      "All event listeners are removed on component unmount",
      "Subscriptions and timers are properly cleaned up",
      "Dashboard performance improves measurably"
    ],
    codeSnippets: [
      {
        title: "Proper useEffect Cleanup",
        language: "typescript",
        code: `import { useEffect, useRef } from 'react';

export const DashboardComponent = () => {
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Set up interval for real-time updates
    intervalRef.current = setInterval(() => {
      fetchDashboardData();
    }, 5000);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Handle window resize
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>Dashboard Content</div>;
};`
      }
    ],
    repositories: [
      {
        name: "frontend-dashboard",
        url: "https://bitbucket.org/company/frontend-dashboard",
        description: "Main dashboard application repository",
        branch: "bugfix/memory-leak"
      }
    ],
    confluencePages: [
      {
        title: "React Memory Management Guidelines",
        url: "https://company.atlassian.net/wiki/spaces/PROJ/pages/321/React+Memory",
        description: "Best practices for preventing memory leaks in React applications"
      }
    ],
    dependencies: [
      "react-devtools-profiler@^4.28.0"
    ],
    estimatedHours: 16,
    complexity: "Medium"
  }),

  "PROJ-125": new DeveloperManual({
    ticketId: "PROJ-125", 
    overview: "Increase unit test coverage for the payment service module to meet the 80% coverage requirement. Focus on testing edge cases, error handling scenarios, and critical payment flows.",
    technicalRequirements: [
      "Write unit tests for all payment processing functions",
      "Mock external payment gateway integrations",
      "Test error handling for failed payments",
      "Cover edge cases like partial payments and refunds",
      "Add tests for payment validation logic",
      "Test concurrent payment scenarios",
      "Verify security measures in payment flow"
    ],
    acceptanceCriteria: [
      "Test coverage reaches minimum 80% for payment service",
      "All critical payment flows are tested",
      "Error scenarios are properly covered",
      "Tests run reliably in CI/CD pipeline",
      "Mock data covers realistic payment scenarios"
    ],
    codeSnippets: [
      {
        title: "Payment Service Unit Test Example",
        language: "typescript", 
        code: `import { PaymentService } from '../PaymentService';
import { PaymentGateway } from '../PaymentGateway';

jest.mock('../PaymentGateway');

describe('PaymentService', () => {
  let paymentService: PaymentService;
  let mockGateway: jest.Mocked<PaymentGateway>;

  beforeEach(() => {
    mockGateway = new PaymentGateway() as jest.Mocked<PaymentGateway>;
    paymentService = new PaymentService(mockGateway);
  });

  it('should process payment successfully', async () => {
    const paymentData = {
      amount: 100.00,
      currency: 'USD',
      cardToken: 'test-token'
    };

    mockGateway.processPayment.mockResolvedValue({
      success: true,
      transactionId: 'txn-123'
    });

    const result = await paymentService.processPayment(paymentData);

    expect(result.success).toBe(true);
    expect(result.transactionId).toBe('txn-123');
    expect(mockGateway.processPayment).toHaveBeenCalledWith(paymentData);
  });

  it('should handle payment failures gracefully', async () => {
    const paymentData = {
      amount: 100.00,
      currency: 'USD', 
      cardToken: 'invalid-token'
    };

    mockGateway.processPayment.mockRejectedValue(
      new Error('Payment gateway error')
    );

    const result = await paymentService.processPayment(paymentData);

    expect(result.success).toBe(false);
    expect(result.error).toContain('Payment gateway error');
  });
});`
      }
    ],
    repositories: [
      {
        name: "payment-service",
        url: "https://bitbucket.org/company/payment-service",
        description: "Core payment processing service",
        branch: "feature/unit-tests"
      }
    ],
    confluencePages: [
      {
        title: "Testing Standards",
        url: "https://company.atlassian.net/wiki/spaces/PROJ/pages/654/Testing+Standards",
        description: "Company standards for unit testing and coverage requirements"
      }
    ],
    dependencies: [
      "jest@^29.0.0",
      "@types/jest@^29.0.0",
      "jest-coverage-threshold@^29.0.0"
    ],
    estimatedHours: 12,
    complexity: "Low"
  })
};
