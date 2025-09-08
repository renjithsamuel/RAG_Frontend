export interface IJiraTicket {
  id: string;
  title: string;
  status: string;
  priority: string;
  assignee: string;
  description: string;
  type: string;
  storyPoints: number;
  sprint: string;
  created: string;
  updated: string;
  labels: string[];
  components: string[];
  reporter: string;
}

export class JiraTicket implements IJiraTicket {
  readonly id: string;
  readonly title: string;
  readonly status: string;
  readonly priority: string;
  readonly assignee: string;
  readonly description: string;
  readonly type: string;
  readonly storyPoints: number;
  readonly sprint: string;
  readonly created: string;
  readonly updated: string;
  readonly labels: string[];
  readonly components: string[];
  readonly reporter: string;

  constructor(ticket: IJiraTicket) {
    this.id = ticket.id;
    this.title = ticket.title;
    this.status = ticket.status;
    this.priority = ticket.priority;
    this.assignee = ticket.assignee;
    this.description = ticket.description;
    this.type = ticket.type;
    this.storyPoints = ticket.storyPoints;
    this.sprint = ticket.sprint;
    this.created = ticket.created;
    this.updated = ticket.updated;
    this.labels = ticket.labels;
    this.components = ticket.components;
    this.reporter = ticket.reporter;
  }
}
