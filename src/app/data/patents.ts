export interface Patent {
  title: string;
  type: string;
  description: string;
  status: string;
  link: string;
}

export const patents: Patent[] = [
  {
    title: 'OAuth and OpenID Connect Security Framework',
    type: 'Patent Application',
    description:
      'Innovative security framework for enhancing OAuth 2.0 and OpenID Connect implementations with additional security layers and threat mitigation strategies.',
    status: 'Published',
    link: '#',
  },
];
