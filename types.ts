
export enum JobStatus {
  APPLIED = 'Applied',
  INTERVIEWING = 'Interviewing',
  OFFER = 'Offer',
  REJECTED = 'Rejected',
  WISH_LIST = 'Wish List'
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface Note {
  id: string;
  content: string;
  createdAt: number;
}

export interface HistoryRecord {
  id: string;
  oldStatus: JobStatus;
  newStatus: JobStatus;
  changeDate: number;
}

export interface JobApplication {
  id: string;
  jobTitle: string;
  companyName: string;
  location: string;
  salary?: string;
  status: JobStatus;
  dateApplied: string;
  interviewDate?: string;
  url?: string;
  description?: string;
  notes: Note[];
  contacts: Contact[];
  history: HistoryRecord[];
  createdAt: number;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
}
