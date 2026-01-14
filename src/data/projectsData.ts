import type { Project } from "../types/projectType";

export const projects: Project[] = [
  {
    title: "CAF-FIT",
    description:
      "Aplicación móvil desarrollada para la gestión de un gimnasio, con arquitectura cliente-servidor, base de datos integrada y sistema de roles y permisos para usuarios y administradores.",
    shortDesc: "App móvil para gestión de gimnasio.",
    image: "/images/projects/Caf-fit.png",
    tech: ["React Native", "Tailwind", "NodeJS", "TypeScript", "MySQL"],

    year: 2025,
    status: "Working",
  },
  {
    title: "Landing Recopilatoria",
    description:
      "Página web creada como regalo personal para mostrar dibujos y recuerdos especiales. Diseñada para exhibir ilustraciones de manera visual y cuidada, combinando diseño minimalista con un enfoque emocional y estético.",
    shortDesc: "Landing visual para ilustraciones y recuerdos.",

    image: "/images/projects/Cyac.png",
    tech: ["Astro", "HTML", "CSS"],
    link: "https://robin1238.github.io/CYAC/gallery/",
    year: 2025,
    status: "Working",
  },
  {
    title: "Pagina Web Colegio Cooperativo",
    description:
      "Sitio web institucional con servidor y CMS propio para la gestión de contenidos, diseñado con navegación intuitiva, diseño responsivo y optimización en accesibilidad y rendimiento.",
    shortDesc: "Web institucional con CMS propio.",
    image: "/images/projects/Colcop.png",
    tech: ["React", "CSS", "JS", "PHP", "Laravel"],
    link: "https://colcooperativogarzon.edu.co/",
    year: 2024,
  },
];
