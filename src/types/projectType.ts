export type Project = {
  title: {
    organization: string;
    service: string;
  };
  description: string;
  shortDesc: string;
  image: string;
  ref?: {
    link: string;
    show: boolean;
  };
  tech: string[];
  status?: string;

  year: number;
  role?: string;
};
