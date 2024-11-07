import Link from 'next/link';
import { Github, Twitter, Mail, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
      <Link
        href="https://x.com/mwickett"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-300 hover:text-blue-400 transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </Link>
      <Link
        href="https://github.com/mwickett"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-300 hover:text-blue-400 transition-colors"
      >
        <Github className="w-6 h-6" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/michael-wickett/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-300 hover:text-blue-400 transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </Link>
      <Link
        href="mailto:mike@wickett.ca"
        className="text-slate-300 hover:text-blue-400 transition-colors"
      >
        <Mail className="w-6 h-6" />
      </Link>
    </div>
  );
}