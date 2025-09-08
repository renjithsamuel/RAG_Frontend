export interface ICodeSnippet {
  title: string;
  language: string;
  code: string;
}

export interface IRepository {
  name: string;
  url: string;
  description: string;
  branch?: string;
}

export interface IConfluencePage {
  title: string;
  url: string;
  description: string;
  lastUpdated?: string;
}

export interface IDeveloperManual {
  ticketId: string;
  overview: string;
  technicalRequirements: string[];
  acceptanceCriteria: string[];
  codeSnippets: ICodeSnippet[];
  repositories: IRepository[];
  confluencePages: IConfluencePage[];
  dependencies: string[];
  estimatedHours: number;
  complexity: 'Low' | 'Medium' | 'High';
}

export class DeveloperManual implements IDeveloperManual {
  readonly ticketId: string;
  readonly overview: string;
  readonly technicalRequirements: string[];
  readonly acceptanceCriteria: string[];
  readonly codeSnippets: ICodeSnippet[];
  readonly repositories: IRepository[];
  readonly confluencePages: IConfluencePage[];
  readonly dependencies: string[];
  readonly estimatedHours: number;
  readonly complexity: 'Low' | 'Medium' | 'High';

  constructor(manual: IDeveloperManual) {
    this.ticketId = manual.ticketId;
    this.overview = manual.overview;
    this.technicalRequirements = manual.technicalRequirements;
    this.acceptanceCriteria = manual.acceptanceCriteria;
    this.codeSnippets = manual.codeSnippets;
    this.repositories = manual.repositories;
    this.confluencePages = manual.confluencePages;
    this.dependencies = manual.dependencies;
    this.estimatedHours = manual.estimatedHours;
    this.complexity = manual.complexity;
  }
}
