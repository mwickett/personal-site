import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import SocialLinks from "@/components/SocialLinks";
import ProjectLinks from "@/components/ProjectLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Header
          imageSrc="/img/mike-wickett.jpg"
          imageAlt="Mike Wickett"
          name="Mike Wickett"
          description="Product and Growth leader focused on developer tools and web technologies that make the internet a better place."
        />

        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard
              title="👋 About Me"
              content="I'm curious about everything and love to learn new things. When I'm not doing family things with my wife and daughter, or working, then you'll find me climbing rocks 🧗‍♂️, reading 📚 or cooking 🍳."
            />
            <InfoCard
              title="🔍 Current Focus"
              content="I'm doing Product + Growth work at Clerk where we're building an incredible user management platform to empower developers and builders to do amazing things."
            />
            <InfoCard
              title="⏳ Previously..."
              content="I started as frontend engineer on the Web Engineering team at HashiCorp and was leading the team as Director of Engineering before I left in 2024."
            />
            <InfoCard
              title="🛠️ Side projects"
              content="I'm working on Blitzer (link below) in my spare time, and having a lot of fun with it. I also love to play music, mainly bass and trumpet."
            />
          </div>
        </section>

        <footer className="flex flex-col items-start gap-8">
          <SocialLinks />
          <ProjectLinks />
        </footer>
      </div>
    </div>
  );
}
