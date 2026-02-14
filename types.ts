
export enum ApplicationStatus {
  SENT = 'Envoyée',
  VIEWED = 'Vue',
  ACCEPTED = 'Acceptée',
  REJECTED = 'Refusée'
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'CDI' | 'CDD' | 'Freelance' | 'Stage';
  postedAt: string;
  description: string;
  category: string;
  isPremium?: boolean;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  title: string;
  location: string;
  skills: string[];
  experience: number;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  status: ApplicationStatus;
  appliedDate: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'CV' | 'Entretien' | 'Formation';
  image: string;
}
