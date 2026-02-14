
import { Job, Article, ApplicationStatus } from './types';

export const CITIES = [
  "Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir", "Fès", "Meknès", "Oujda", "Kénitra", "Tétouan"
];

export const CATEGORIES = [
  "Informatique", "Commerce & Vente", "Comptabilité & Finance", "Marketing", "RH", "Ingénierie", "Santé", "Éducation"
];

export const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "Développeur Fullstack React/Node",
    company: "Atlas Digital Solutions",
    location: "Casablanca",
    salary: "12k - 18k MAD",
    type: "CDI",
    postedAt: "Il y a 2h",
    description: "Nous recherchons un talent pour rejoindre notre équipe agile...",
    category: "Informatique",
    isPremium: true
  },
  {
    id: "2",
    title: "Chef de Projet Marketing",
    company: "MediHub",
    location: "Rabat",
    salary: "15k - 20k MAD",
    type: "CDI",
    postedAt: "Hier",
    description: "Gérer les campagnes 360 pour nos clients nationaux...",
    category: "Marketing"
  },
  {
    id: "3",
    title: "Comptable Senior",
    company: "Cabinet Al-Fath",
    location: "Tanger",
    salary: "8k - 12k MAD",
    type: "CDD",
    postedAt: "Il y a 3 jours",
    description: "Expertise en fiscalité marocaine requise...",
    category: "Comptabilité & Finance"
  },
  {
    id: "4",
    title: "Stagiaire RH",
    company: "Oulmès",
    location: "Casablanca",
    salary: "Indemnité stage",
    type: "Stage",
    postedAt: "Aujourd'hui",
    description: "Support au recrutement et gestion administrative...",
    category: "RH",
    isPremium: true
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Comment rédiger un CV impactant en 2024",
    excerpt: "Les standards changent. Découvrez les mots-clés qui plaisent aux recruteurs marocains.",
    category: "CV",
    image: "https://picsum.photos/seed/cv/400/250"
  },
  {
    id: "2",
    title: "Réussir son entretien d'embauche",
    excerpt: "Préparer les questions classiques et gérer son stress face au jury.",
    category: "Entretien",
    image: "https://picsum.photos/seed/interview/400/250"
  },
  {
    id: "3",
    title: "Formation : Maîtriser Excel pour la gestion",
    excerpt: "Une mini-formation gratuite pour booster vos compétences en bureautique.",
    category: "Formation",
    image: "https://picsum.photos/seed/excel/400/250"
  }
];
