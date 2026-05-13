import logo from "../assets/congelados/logo.png";
import congeladosReceitaManda from "../assets/congelados/congelados.jpg";
import encomendaBanoffee from "../assets/congelados/banoffee.jpg";

function Frozen() {
  return (
    <div
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: "#fffcf8" }}
    >
      {/* =========================
          CONGELADOS
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                CONGELADOS
              </p>

              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h1 className="font-lobster mt-8 text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#b08b4a]">
                MANDA PRA CASA
              </h1>

              <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg text-justify">
                O Manda Café apelidou carinhosamente seus congelados de "Manda
                pra Casa". Um cardápio de congelados deliciosos, com aquele
                capricho que você já conhece, perfeito para o dia a dia ou
                ocasiões especiais. Escolha seus favoritos, encomende e leve o
                Manda pra casa! Peça o cardápio.
              </p>

              <p className="mt-8 text-[12px] text-neutral-500">
                *Consulte disponibilidade e prazos. Atendemos restrições e
                alergias sempre que possível.
              </p>
            </div>

            <div className="flex justify-center lg:justify-center lg:pt-2">
              <img
                src={logo}
                alt="Logo"
                className="h-auto w-32 md:w-40 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ENCOMENDAS
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <p className="text-sm tracking-[0.25em] text-[#b08b4a]">ENCOMENDAS</p>

          <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

          <p className="mt-8 text-[12px] text-neutral-500">
            *Consulte disponibilidade e prazos. Atendemos restrições e alergias
            sempre que possível.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border border-black/10 bg-white/40 p-6">
              <p className="text-sm tracking-[0.22em] text-[#b08b4a]">01</p>

              <h3 className="font-lobster mt-3 text-2xl font-light text-[#b08b4a]">
                Chame no Zap ou por telefone
              </h3>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700">
                Vamos te atender e apresentar o cardápio disponível e os valores
                e iniciar a produção do seu pedido.
              </p>
            </div>

            <div className="border border-black/10 bg-white/40 p-6">
              <p className="text-sm tracking-[0.22em] text-[#b08b4a]">02</p>

              <h3 className="font-lobster mt-3 text-2xl font-light text-[#b08b4a]">
                Retire na loja
              </h3>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700">
                Vamos marcar o dia e horário para você retirar. Na retirada
                vamos te contar o passo a passo de como servir em casa.
              </p>
            </div>

            <div className="border border-black/10 bg-white/40 p-6">
              <p className="text-sm tracking-[0.22em] text-[#b08b4a]">03</p>

              <h3 className="font-lobster mt-3 text-2xl font-light text-[#b08b4a]">
                Finalize em casa
              </h3>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700">
                Depois de realizar o passo a passo, é só aproveitar. Gostoso,
                rápido e fácil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          OPÇÕES
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="flex flex-col">
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">OPÇÕES</p>

              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
                Congelados
              </h2>

              <div className="mt-8 flex-1 border border-black/10 bg-white/40 p-6 md:p-7">
                <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                  RECEITAS DO MANDA - Individuais ≅ 240g
                </p>

                <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-700">
                  Ideais para um jantar ou almoço rápido em casa
                </p>

                <div className="mt-6">
                  <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                    Strogonoffs
                  </p>

                  <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                    <li>Strogonoff de Frango</li>
                    <li>Strogonoff de Mignon</li>
                    <li>Strogonoff de Cogumelos</li>
                  </ul>

                  <p className="mt-5 text-sm md:text-base leading-relaxed text-neutral-700">
                    Sugestão de acompanhamentos: Arroz branco e batata palha.
                  </p>
                </div>

                <div className="my-6 h-px w-full bg-black/10" />

                <div>
                  <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                    Outras opções
                  </p>

                  <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                    <li>Moqueca de Pupunha</li>
                    <li>Kibe de Carne</li>
                    <li>Kibe de Abóbora</li>
                  </ul>

                  <p className="mt-5 text-sm md:text-base leading-relaxed text-neutral-700">
                    Sugestão de acompanhamentos: Arroz branco e salada.
                  </p>
                </div>

                <div className="my-6 h-px w-full bg-black/10" />

                <div>
                  <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                    Doces Individuais
                  </p>

                  <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-700">
                    Opções práticas para finalizar a refeição com aquele doce
                    especial.
                  </p>

                  <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                    <li>Banoffee</li>
                    <li>Torta de Limão</li>
                    <li>Torta de Maracujá</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:pt-[96px]">
              <p className="mb-3 text-xs md:text-sm text-neutral-500">
                Foto congelados Receita Manda
              </p>

              <div className="flex-1 overflow-hidden bg-black/5">
                <img
                  src={congeladosReceitaManda}
                  alt="Foto congelados Receita Manda"
                  className="h-[420px] w-full object-cover transition-transform duration-700 ease-out hover:scale-110 md:h-[560px] lg:h-full lg:min-h-[690px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          DOCES PARA EVENTOS
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
              <p className="mb-3 text-xs md:text-sm text-neutral-500">
                Foto congelados Encomenda Banoffee:
              </p>

              <div className="overflow-hidden bg-black/5">
                <img
                  src={encomendaBanoffee}
                  alt="Foto congelados Encomenda Banoffee"
                  className="h-[320px] w-full object-cover transition-transform duration-700 ease-out hover:scale-110 md:h-[420px] lg:h-[520px]"
                />
              </div>
            </div>

            <div className="lg:pt-10">
              <h2 className="font-lobster text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
                Doces para eventos e almoços/jantares em família
              </h2>

              <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-700">
                Pedidos com no mínimo 2 dias de antecedência
              </p>

              <div className="mt-8 border border-black/10 bg-white/40 p-6">
                <p className="font-medium text-neutral-900">Banoffee Grande</p>

                <p className="mt-1 text-sm md:text-base leading-relaxed text-neutral-700">
                  ≅3,0kg (serve 20 à 25 pessoas)
                </p>

                <p className="mt-6 font-medium text-neutral-900">
                  Banoffee Média
                </p>

                <p className="mt-1 text-sm md:text-base leading-relaxed text-neutral-700">
                  ≅2,0kg (serve 12 à 15 pessoas)
                </p>

                <div className="mt-6 h-px w-full bg-black/10" />

                <p className="mt-6 text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                  MANDA STRUDEL
                </p>

                <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                  <li>Grande ≅ 800g</li>
                  <li>Pequeno ≅ 500g</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOLHADOS
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-black/10 bg-white/40 p-6">
              <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                FOLHADOS SALGADOS
              </p>

              <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                <li>Frango com Catupiry</li>
                <li>Frango</li>
                <li>Palmito</li>
              </ul>
            </div>

            <div className="border border-black/10 bg-white/40 p-6">
              <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                FOLHADOS DOCES
              </p>

              <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                <li>Banana</li>
                <li>Maçã</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHATSAPP
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-16 md:pb-24">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <div className="border border-black/10 bg-white/40 p-8 md:p-10">
            <h2 className="font-lobster text-3xl md:text-4xl font-light text-[#b08b4a]">
              Quer pedir congelados?
            </h2>

            <p className="mt-3 text-neutral-700 text-sm md:text-base leading-relaxed">
              Chame no WhatsApp e a gente te manda as opções e os prazos da
              semana.
            </p>

            <a
              href="https://wa.me/5511988765337"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-[#b08b4a] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              pedir no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Frozen;
