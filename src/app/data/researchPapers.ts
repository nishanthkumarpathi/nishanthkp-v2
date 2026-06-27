export interface Author {
  name: string;
  profileUrl?: string;
}

export interface ResearchPaper {
  /** URL-safe identifier derived from the title; used for deep-linking. */
  slug: string;
  title: string;
  type: string;
  publisher: string;
  description: string;
  link: string;
  doiLink?: string;
  year: string;
  /**
   * ISO date (YYYY-MM-DD) used only for sorting. When the exact day is
   * unknown, the 1st of the month is used as an approximation.
   */
  sortDate: string;
  fullContent?: string;
  certificates?: string[];
  images?: string[];
  authors: Author[];
}

/**
 * Source list, ordered OLDEST -> NEWEST.
 *
 * Add new papers by APPENDING to the END of this array — existing entries
 * never need to be reordered or renumbered. The exported `researchPapers`
 * below is automatically sorted newest-first for display, so storage order
 * is independent of how the site renders them.
 */
const researchPapersOldestFirst: Omit<ResearchPaper, 'slug'>[] = [
  {
    title: 'Securing a SaaS Application on AWS Cloud',
    type: 'Book Chapter / Journal Article',
    publisher: 'Springer, Singapore / IJCIS',
    description:
      'This paper details an approach to securing a Software-as-a-Service (SaaS) application deployed on AWS Cloud, covering security controls and best practices across the cloud stack.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-2602-2_55',
    doiLink: 'https://doi.org/10.1007/978-981-99-2602-2_55',
    year: '2023',
    sortDate: '2023-10-13',
    fullContent:
      'Published on 13th Oct 2023 as a book chapter in Innovations in Computational Intelligence and Computer Vision (pp. 723–734), Springer, Singapore (DOI: 10.1007/978-981-99-2602-2_55). Also published in Sep 2023 in the International Journal of Computer and Information System (IJCIS), 4(3):121–128 (DOI: 10.29040/ijcis.v4i3.81). This paper details an approach to securing a Software-as-a-Service (SaaS) application deployed on AWS Cloud.',
    authors: [
      { name: 'Siddhartha Sourav Panda' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Shinu Abhi',
        profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/',
      },
    ],
  },
  {
    title: 'AccessFlex: Flexible Attribute Based Access Control Scheme for Sharing Access Privileges in Cloud Storage',
    type: 'Conference Paper',
    publisher: 'IEEE',
    description:
      'AccessFlex proposes a flexible Attribute-Based Access Control (ABAC) scheme for securely sharing access privileges in cloud storage environments.',
    link: 'https://ieeexplore.ieee.org/document/10698339',
    doiLink: 'https://doi.org/10.1109/ICECET61485.2024.10698339',
    year: '2024',
    sortDate: '2024-07-01',
    fullContent:
      'Published in July 2024 in the 2024 International Conference on Electrical, Computer and Energy Technologies (ICECET). AccessFlex proposes a flexible Attribute-Based Access Control (ABAC) scheme for securely sharing access privileges in cloud storage environments.',
    authors: [
      { name: 'Bharath S' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Shinu Abhi',
        profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/',
      },
      {
        name: 'Rashmi Agarwal',
        profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/',
      },
    ],
  },
  {
    title: 'Enhancing BYOD Security: A Risk Assessment Framework for Corporate Resources',
    type: 'Research Paper',
    publisher: 'Springer Journal',
    description:
      'This paper proposes a comprehensive risk assessment framework to enhance Bring Your Own Device (BYOD) security, safeguarding corporate resources while maintaining user flexibility.',
    link: 'https://doi.org/10.1007/978-981-97-6588-1_36',
    year: '2024',
    sortDate: '2024-10-23',
    fullContent:
      'Published on 23rd Oct 2024. This paper proposes a comprehensive risk assessment framework to enhance Bring Your Own Device (BYOD) security, safeguarding corporate resources while maintaining user flexibility.',
    authors: [
      {
        name: 'A. N. Datta',
        profileUrl: 'https://www.linkedin.com/in/datta-aluru-narayana-994396117/',
      },
      {
        name: 'Shinu Abhi',
        profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/',
      },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
    ],
  },
  {
    title: 'PDF Guard - Advanced Malicious PDF Detection Tool',
    type: 'Conference Paper',
    publisher: 'AIP Publishing',
    description:
      'PDF Guard is an advanced malicious PDF detection tool designed to identify and mitigate threats embedded within PDF documents.',
    link: 'https://doi.org/10.1063/5.0247140',
    year: '2025',
    sortDate: '2025-02-28',
    fullContent:
      'Published on 28th Feb 2025 in the International Conference on Innovative Approaches in Engineering & Technology (AIP Conference Proceedings, Vol. 3237, Issue 1, Art. No. 030051), AIP Publishing.',
    authors: [
      { name: 'Mohd Arshi' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Rashmi Agarwal',
        profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/',
      },
    ],
  },
  {
    title: 'Automating MLOps Pipelines with GitHub Actions and Azure: A Case Study on Diabetes Prediction',
    type: 'Conference Paper',
    publisher: 'IEEE',
    description:
      'This case study demonstrates the automation of end-to-end MLOps pipelines using GitHub Actions and Microsoft Azure, applied to a diabetes prediction model to enable continuous integration, training, and deployment of machine learning workflows.',
    link: 'https://ieeexplore.ieee.org/document/11108664',
    doiLink: 'https://doi.org/10.1109/ETCC65847.2025.11108664',
    year: '2025',
    sortDate: '2025-06-01',
    fullContent:
      'Published in June 2025 in the 2025 International Conference on Emerging Technologies in Computing and Communication (ETCC). This case study demonstrates the automation of end-to-end MLOps pipelines using GitHub Actions and Microsoft Azure, applied to a diabetes prediction model to enable continuous integration, training, and deployment of machine learning workflows.',
    authors: [
      { name: 'Lokesh Kumar Chikkala' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Shinu Abhi',
        profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/',
      },
    ],
  },
  {
    title: 'Enhancing Healthcare Data Privacy with Zero Knowledge Proof on AWS',
    type: 'Conference Paper',
    publisher: 'IEEE',
    description:
      'This paper presents an approach to enhancing healthcare data privacy using Zero Knowledge Proof (ZKP) techniques deployed on AWS, enabling verification of sensitive medical data without revealing the underlying information.',
    link: 'https://ieeexplore.ieee.org/document/11108626',
    doiLink: 'https://doi.org/10.1109/ETCC65847.2025.11108626',
    year: '2025',
    sortDate: '2025-06-01',
    fullContent:
      'Published in June 2025 in the 2025 International Conference on Emerging Technologies in Computing and Communication (ETCC). This paper presents an approach to enhancing healthcare data privacy using Zero Knowledge Proof (ZKP) techniques deployed on AWS, enabling verification of sensitive medical data without revealing the underlying information.',
    authors: [
      { name: 'Bhatt Vinayak Vishwanath' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Shinu Abhi',
        profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/',
      },
    ],
  },
  {
    title: 'Automated IoT Security Configuration Audit Framework in AWS Cloud for Real-Time Threat Detection',
    type: 'Conference Paper',
    publisher: 'IEEE',
    description:
      'An automated security configuration audit framework for IoT ecosystems on AWS Cloud, designed to enable real-time threat detection and mitigation through continuous monitoring.',
    link: 'https://ieeexplore.ieee.org/document/11108388',
    doiLink: 'https://doi.org/10.1109/ETCC65847.2025.11108388',
    year: '2025',
    sortDate: '2025-08-12',
    fullContent:
      'Published on 12th Aug 2025 in the 2025 International Conference on Emerging Technologies in Computing and Communication (ETCC). An automated security configuration audit framework for IoT ecosystems on AWS Cloud, designed to enable real-time threat detection and mitigation through continuous monitoring.',
    authors: [
      {
        name: 'Rahul Mohan',
        profileUrl: 'https://www.linkedin.com/in/rahul-mohan-909a6695/',
      },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Rashmi Agarwal',
        profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/',
      },
    ],
  },
  {
    title: 'A Framework for Automating Compliance as Code Using AWS Config and Ansible',
    type: 'Conference Paper',
    publisher: 'Springer, Singapore',
    description:
      'This research presents an automated "Compliance as Code" framework utilizing AWS Config and Ansible to streamline regulatory adherence and security governance in cloud environments.',
    link: 'https://doi.org/10.1007/978-981-96-6254-8_43',
    year: '2025',
    sortDate: '2025-10-01',
    fullContent:
      'Published on 1st Oct 2025 (pp. 581–593), Springer, Singapore. This research presents an automated "Compliance as Code" framework utilizing AWS Config and Ansible to streamline regulatory adherence and security governance in cloud environments.',
    authors: [
      {
        name: 'Lokendra Sondhiya',
        profileUrl: 'https://www.linkedin.com/in/lokendrasondhiya/',
      },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Rashmi Agarwal',
        profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/',
      },
    ],
  },
  {
    title: 'Cyber Resilience for Containerized Workloads: A NIST-Based Approach to Incident Management and Recovery',
    type: 'Conference Paper',
    publisher: 'Springer, Singapore',
    description:
      'This paper proposes a robust incident management and recovery framework for containerized workloads based on NIST standards, ensuring enhanced cyber resilience in dynamic cloud-native environments.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-95-0681-1_3',
    doiLink: 'https://doi.org/10.1007/978-981-95-0681-1_3',
    year: '2025',
    sortDate: '2025-12-02',
    fullContent:
      'Published on 2nd Dec 2025 in the Proceedings of Fifth Emerging Trends and Technologies on Intelligent Systems (pp. 24–34), Springer, Singapore. This paper proposes a robust incident management and recovery framework for containerized workloads based on NIST standards, ensuring enhanced cyber resilience in dynamic cloud-native environments.',
    authors: [
      {
        name: 'Saritha Nagaraju',
        profileUrl: 'https://www.linkedin.com/in/saritha82/',
      },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Rashmi Agarwal',
        profileUrl: 'https://www.linkedin.com/in/rashmi-agarwal-phd-4190a57/',
      },
    ],
  },
  {
    title: 'Proactive Cybersecurity Risk Assessment and Implementation in ICS Protocols for Operational Technology',
    type: 'Conference Paper',
    publisher: 'Springer, Singapore',
    description:
      'This study introduces a proactive cybersecurity risk assessment methodology tailored for Industrial Control Systems (ICS) protocols, aiming to secure Operational Technology (OT) infrastructure against evolving threats.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-95-2872-1_43',
    doiLink: 'https://doi.org/10.1007/978-981-95-2872-1_43',
    year: '2026',
    sortDate: '2026-01-06',
    fullContent:
      'Published on 6th Jan 2026 (pp. 599–610), Springer, Singapore. This study introduces a proactive cybersecurity risk assessment methodology tailored for Industrial Control Systems (ICS) protocols, aiming to secure Operational Technology (OT) infrastructure against evolving threats.',
    authors: [
      { name: 'B. Marimuthu' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Shinu Abhi',
        profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/',
      },
    ],
  },
  {
    title: 'LLM Assisted SecOps: A Cognitive Assistant Framework for Cybersecurity Analysts',
    type: 'Conference Paper',
    publisher: 'IEEE',
    description:
      'This paper introduces an LLM-assisted Security Operations (SecOps) framework that functions as a cognitive assistant for cybersecurity analysts, augmenting threat detection, triage, and incident response through generative AI.',
    link: 'https://ieeexplore.ieee.org/document/11497779',
    doiLink: 'https://doi.org/10.1109/NQComp68334.2026.11497779',
    year: '2026',
    sortDate: '2026-05-05',
    fullContent:
      'Published on 5th May 2026 in the 2026 International Conference on Next-Gen Quantum and Advanced Computing: Algorithms, Security, and Beyond (NQComp). This paper introduces an LLM-assisted Security Operations (SecOps) framework that functions as a cognitive assistant for cybersecurity analysts, augmenting threat detection, triage, and incident response through generative AI.',
    authors: [
      { name: 'Harsh Dineshbhai Bakori' },
      { name: 'Nishanth Kumar Pathi', profileUrl: 'https://nishanthkp.com' },
      {
        name: 'Shinu Abhi',
        profileUrl: 'https://www.linkedin.com/in/shinu-abhi-phd-711a339/',
      },
    ],
  },
];

/** Convert a paper title into a stable, URL-safe slug for deep-linking. */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Display list — newest first. Derived by sorting the source array by
 * `sortDate` descending (so the UI order never depends on how the source
 * array is maintained) and attaching a generated `slug` to each paper.
 */
export const researchPapers: ResearchPaper[] = [...researchPapersOldestFirst]
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
  .map((paper) => ({ ...paper, slug: slugify(paper.title) }));

/** Find a paper by its slug, or return undefined if none matches. */
export function getPaperBySlug(slug: string): ResearchPaper | undefined {
  return researchPapers.find((paper) => paper.slug === slug);
}
