interface InfoCardProps {
  title: string;
  content: string;
}

export default function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-slate-300 leading-relaxed">{content}</p>
    </div>
  );
}