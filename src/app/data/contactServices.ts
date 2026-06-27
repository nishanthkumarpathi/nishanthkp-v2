export interface ContactService {
  icon:
    | 'shield'
    | 'eye'
    | 'settings'
    | 'activity'
    | 'zap'
    | 'gitBranch'
    | 'database'
    | 'cloud'
    | 'dollarSign';
  title: string;
  description: string;
}

export const contactServices: ContactService[] = [
  {
    icon: 'shield',
    title: 'Cyber Security Engineering',
    description: 'Network security, IAM, and intrusion detection systems',
  },
  {
    icon: 'eye',
    title: 'Data Privacy Engineering',
    description: 'GDPR/CCPA compliance, data masking, and privacy by design',
  },
  {
    icon: 'settings',
    title: 'Cloud Automation Engineering',
    description: 'IaC (Terraform/Ansible), CI/CD pipelines, and provisioning',
  },
  {
    icon: 'activity',
    title: 'Site Reliability Engineering',
    description: 'SLIs/SLOs, error budgeting, and performance monitoring',
  },
  {
    icon: 'zap',
    title: 'Chaos Engineering',
    description: 'Fault injection, resilience testing, and game days',
  },
  {
    icon: 'gitBranch',
    title: 'DevSecOps',
    description: 'SAST/DAST, container scanning, and security gates',
  },
  {
    icon: 'database',
    title: 'DataSecOps',
    description: 'Data classification, DLP, and encryption at rest/transit',
  },
  {
    icon: 'cloud',
    title: 'CloudNativeOps',
    description: 'Kubernetes, service mesh, and serverless security',
  },
  {
    icon: 'dollarSign',
    title: 'FinOps',
    description: 'Cost optimization, budget tracking, and resource tagging',
  },
];
