
import React from 'react';
import { JobStatus } from './types';

export const STATUS_COLORS: Record<JobStatus, string> = {
  [JobStatus.APPLIED]: 'bg-blue-100 text-blue-800 border-blue-200',
  [JobStatus.INTERVIEWING]: 'bg-purple-100 text-purple-800 border-purple-200',
  [JobStatus.OFFER]: 'bg-green-100 text-green-800 border-green-200',
  [JobStatus.REJECTED]: 'bg-red-100 text-red-800 border-red-200',
  [JobStatus.WISH_LIST]: 'bg-gray-100 text-gray-800 border-gray-200',
};

export const STATUS_ICONS: Record<JobStatus, React.ReactNode> = {
  [JobStatus.APPLIED]: <i className="fas fa-paper-plane mr-2"></i>,
  [JobStatus.INTERVIEWING]: <i className="fas fa-comments mr-2"></i>,
  [JobStatus.OFFER]: <i className="fas fa-trophy mr-2"></i>,
  [JobStatus.REJECTED]: <i className="fas fa-times-circle mr-2"></i>,
  [JobStatus.WISH_LIST]: <i className="fas fa-star mr-2"></i>,
};
