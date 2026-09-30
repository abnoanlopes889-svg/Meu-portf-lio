import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Importa todos os componentes organizados aqui */}
      <AboutSection />
      <SkillsSection />
    </main>
  );
}
