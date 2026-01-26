export type Project = {
  title: string;
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
