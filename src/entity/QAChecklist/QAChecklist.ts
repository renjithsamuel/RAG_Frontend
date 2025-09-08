export interface IChecklistItem {
  id: string;
  description: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  category: string;
  isCompleted?: boolean;
  notes?: string;
}

export interface ITestScenario {
  title: string;
  steps: string[];
  expectedResult: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
}

export interface IQAChecklist {
  ticketId: string;
  functionalTests: IChecklistItem[];
  securityTests: IChecklistItem[];
  performanceTests: IChecklistItem[];
  usabilityTests: IChecklistItem[];
  testScenarios: ITestScenario[];
  browserCompatibility: string[];
  deviceCompatibility: string[];
  estimatedTestingHours: number;
}

export class QAChecklist implements IQAChecklist {
  readonly ticketId: string;
  readonly functionalTests: IChecklistItem[];
  readonly securityTests: IChecklistItem[];
  readonly performanceTests: IChecklistItem[];
  readonly usabilityTests: IChecklistItem[];
  readonly testScenarios: ITestScenario[];
  readonly browserCompatibility: string[];
  readonly deviceCompatibility: string[];
  readonly estimatedTestingHours: number;

  constructor(checklist: IQAChecklist) {
    this.ticketId = checklist.ticketId;
    this.functionalTests = checklist.functionalTests;
    this.securityTests = checklist.securityTests;
    this.performanceTests = checklist.performanceTests;
    this.usabilityTests = checklist.usabilityTests;
    this.testScenarios = checklist.testScenarios;
    this.browserCompatibility = checklist.browserCompatibility;
    this.deviceCompatibility = checklist.deviceCompatibility;
    this.estimatedTestingHours = checklist.estimatedTestingHours;
  }
}
