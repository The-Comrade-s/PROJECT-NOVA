import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

/**
 * Placeholder destinations — replace with the project's real profiles
 * before deploying. Kept in one file so that's a single edit.
 */
export const SOCIAL_LINKS = [
  { id: "github", label: "GitHub", href: "https://github.com", icon: FiGithub },
  { id: "twitter", label: "Twitter", href: "https://twitter.com", icon: FiTwitter },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
  { id: "email", label: "Email", href: "mailto:hello@example.com", icon: FiMail },
];

export const LEGAL_LINKS = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
  { id: "terms", label: "Terms of Service", href: "/terms" },
];
