import casaevents from "../assets/casaevents.jpg";

function Events() {
  const thumbs = [casaevents, casaevents, casaevents, casaevents, casaevents];

  return (
    <div className="w-full overflow-x-hidden">
      {/* =========================
          SEÇÃO ORIGINAL (mantida)
         ========================= */}
      <section
        className="w-full min-h-screen flex items-center"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="w-full px-6 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                EVENTOS
              </p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h1 className="font-lobster mt-8 text-4xl font-light leading-tight text-[#b08b4a] md:text-5xl lg:text-6xl">
                Que tal planejar juntos cada detalhe do seu evento?
              </h1>

              <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
                <a
                  href="#festas"
                  className="font-bold underline underline-offset-4 hover:opacity-70"
                >
                  Manda Festas
                </a>
                {" • "}
                <a
                  href="#poucos"
                  className="font-bold underline underline-offset-4 hover:opacity-70"
                >
                  Manda pra poucos
                </a>
                {" • "}
                <a
                  href="#filmar"
                  className="font-bold underline underline-offset-4 hover:opacity-70"
                >
                  Manda Filmar
                </a>
              </p>

              <a
                href="#"
                className="mt-10 inline-block text-sm text-[#b08b4a] hover:opacity-80"
              >
                veja mais
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end">
              <img
                src={casaevents}
                alt="Sala privativa"
                className="h-[300px] w-full max-w-xl object-cover md:h-[380px] lg:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          NOVA SEÇÃO (estilo da foto)
          FUNDO #c8a35a + FONTES BRANCAS
         ========================= */}
      <section className="w-full bg-[#c8a35a] text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-14 md:py-20">
          {/* topo: imagem grande + texto */}
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-start">
            {/* imagem grande à esquerda */}
            <div className="overflow-hidden bg-white/10">
              <img
                src={casaevents}
                alt="Eventos - imagem principal"
                className="h-[520px] w-full object-cover md:h-[560px] lg:h-[600px]"
              />
            </div>

            {/* conteúdo à direita */}
            <div className="pt-2 md:pt-6">
              <h2 className="text-2xl font-medium text-white">Eventos</h2>

              <p className="mt-5 text-sm leading-relaxed text-white/90">
                O D.O.M. tem um espaço privativo para pequenos grupos no
                Mezanino, andar superior do restaurante. Sejam eventos sociais
                ou corporativos, no almoço ou jantar, dispomos de uma mesa
                principal compartilhada que comporta até 14 lugares e a
                possibilidade de montar uma segunda mesa lateral com até seis
                pessoas – totalizando 20 lugares.
                <br />
                <br />É um espaço exclusivo e totalmente privativo que permite
                cenografia discreta.
              </p>

              <div className="mt-6 h-px w-14 bg-white/80" />

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="font-semibold text-white">
                    Almoço (12h às 15h):
                  </p>
                  <p className="mt-1 text-sm text-white/90">
                    Menu executivo ou Degustação
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Jantar (19h às 23h):
                  </p>
                  <p className="mt-1 text-sm text-white/90">Menu Degustação</p>
                </div>
              </div>

              <p className="mt-5 text-[11px] italic text-white/80">
                (atendemos restrições e alergias alimentares, mas não preparamos
                menus personalizados)
              </p>

              <a
                href="#cardapio"
                className="mt-6 inline-block text-sm text-white underline underline-offset-4 hover:opacity-90"
              >
                cardápio
              </a>
            </div>
          </div>

          {/* faixa de miniaturas */}
          <div className="mt-12 border-t border-white/20 pt-6">
            <div className="relative overflow-hidden">
              {/* setas decorativas (sem slider real) */}
              <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden md:grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
                aria-label="Anterior"
              >
                ‹
              </button>

              <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {thumbs.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="shrink-0 overflow-hidden bg-white/10 outline-none hover:opacity-90"
                    aria-label={`Thumb ${idx + 1}`}
                  >
                    <img
                      src={t}
                      alt={`Miniatura ${idx + 1}`}
                      className="h-24 w-44 object-cover md:h-28 md:w-52"
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
                aria-label="Próximo"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
