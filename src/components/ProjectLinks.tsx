import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ProjectLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="https://blitzer.fun"
        className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
      >
        <span className="text-sm text-slate-300 group-hover:text-white">
          Blitzer
        </span>
        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
      </Link>
    </div>
  );
}