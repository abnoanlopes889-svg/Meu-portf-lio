import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre_mim" className="py-20 px-[4%] bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Foto de Perfil */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-75 h-75 md:w-95 md:h-95 rounded-2xl overflow-hidden border-2 border-[#00ffd5]/40 shadow-[0_0_25px_rgba(0,255,213,0.15)]">
            <Image
              src="/img/abner.jpeg"
              alt="foto de perfil do meu portfólio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Minha História / Trajetória */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            MINHA <span className="text-[#00ffd5]">TRAJETÓRIA.</span>
          </h2>

          <div className="space-y-4 text-gray-300 text-base leading-relaxed">
            <p>
              Olá, bem meu nome é{" "}
              <strong className="text-[#00ffd5]">Abnoan Lopes</strong>, tenho 22
              anos e sou um desenvolvedor web apaixonado por tecnologia e
              inovação. Desde cedo, sempre fui fascinado pelo mundo digital e pela
              capacidade que a programação tem de transformar ideias em realidade.
              Ao longo dos anos, venho aprimorando minhas habilidades em
              desenvolvimento web, explorando diferentes linguagens e frameworks
              para criar experiências digitais envolventes e funcionais.
            </p>

            <p>
              Atualmente estou cursando o 5º semestre de TSI (Tecnólogo em
              Sistemas para Internet)[cite: 1], onde tenho aprofundado meus conhecimentos
              em programação, banco de dados e desenvolvimento de aplicações web[cite: 1].
              Além disso, estou sempre em busca de novos desafios e oportunidades
              para expandir meu conhecimento e contribuir para projetos
              inovadores.
            </p>

            <p>
              Meu foco no momento é me aperfeiçoar nos meus conhecimentos atuais e
              aprender novas tecnologias que possam agregar valor aos meus
              projetos. Estou sempre aberto a colaborações e parcerias, buscando
              crescer profissionalmente e contribuir para o desenvolvimento de
              novas soluções digitais. Acredito que a tecnologia tem o poder de
              transformar vidas e estou comprometido em fazer parte dessa
              transformação, criando experiências digitais que impactem
              positivamente as pessoas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full border border-[#00ffd5] text-[#00ffd5] hover:bg-[#00ffd5] hover:text-black font-semibold transition-all"
            >
              Meu GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full border border-gray-700 text-white hover:border-[#00ffd5] hover:text-[#00ffd5] font-semibold transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
