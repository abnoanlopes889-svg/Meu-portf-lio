
const skills = [
  { name: 'React.js', category: 'Front-end', level: 'Avançado' },
  { name: 'Next.js', category: 'Framework', level: 'Intermediário' },
  { name: 'TypeScript', category: 'Linguagem', level: 'Intermediário' },
  { name: 'Tailwind CSS', category: 'Styling', level: 'Avançado' },
  { name: 'JavaScript (ES6+)', category: 'Linguagem', level: 'Avançado' },
  { name: 'HTML5 & CSS3', category: 'Web Base', level: 'Avançado' },
  { name: 'Git & GitHub', category: 'Ferramentas', level: 'Intermediário' },
  { name: 'Python', category: 'Linguagem', level: 'Básico/Intermediário' },
];

export default function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 px-[4%] bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          MINHAS <span className="text-[#00ffd5]">HABILIDADES.</span>
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
          Linguagens, frameworks e ferramentas que utilizo no meu dia a dia para construir aplicações web[cite: 1].
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#121212] p-6 rounded-xl border border-gray-800 hover:border-[#00ffd5]/60 hover:shadow-[0_0_15px_rgba(0,255,213,0.2)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#00ffd5] uppercase tracking-wider">
                  {skill.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{skill.name}</h3>
              </div>
              <p className="text-xs text-gray-400 mt-4">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
