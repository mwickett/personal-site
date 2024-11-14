import Image from "next/image";

type HeaderProps = {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
};

export default function Header({
  imageSrc,
  imageAlt,
  name,
  description,
}: HeaderProps) {
  return (
    <header className="mb-16">
      <div className="relative w-32 h-32 mb-8">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          className="rounded-2xl shadow-2xl object-cover"
          priority
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
      </div>
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        {name}
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
        {description}
      </p>
    </header>
  );
}
