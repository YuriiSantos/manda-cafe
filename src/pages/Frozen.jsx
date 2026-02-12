import casaevents from "../assets/casaevents.jpg";

function Frozen() {
  return (
    <div
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: "#fffcf8" }}
    >
      {/* =========================
          HERO (layout diferente)
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-14 md:pt-20 pb-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            {/* texto */}
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                CONGELADOS
              </p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h1 className="font-lobster mt-8 text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#b08b4a]">
                O Manda no seu tempo.
              </h1>

              <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
                Prontos para aquecer, servir e aproveitar — com o mesmo cuidado
                da nossa cozinha. Ideais para ter em casa, receber bem ou
                facilitar a rotina sem abrir mão do sabor.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#como-funciona"
                  className="inline-flex items-center rounded-full bg-[#b08b4a] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  como funciona
                </a>
                <a
                  href="#itens"
                  className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-6 py-2.5 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white"
                >
                  ver opções
                </a>
              </div>

              <p className="mt-6 text-[12px] text-neutral-500">
                *Consulte disponibilidade e prazos. Atendemos restrições e
                alergias sempre que possível.
              </p>
            </div>

            {/* imagem */}
            <div className="lg:pt-2">
              <div className="overflow-hidden bg-black/5">
                <img
                  src={casaevents}
                  alt="Congelados do Manda"
                  className="h-[320px] w-full object-cover md:h-[420px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          COMO FUNCIONA (cards)
         ========================= */}
      <section
        id="como-funciona"
        className="w-full"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
            COMO FUNCIONA
          </p>
          <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

          <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
            Simples, prático e gostoso.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border border-black/10 bg-white/40 p-6">
              <p className="text-sm tracking-[0.22em] text-[#b08b4a]">01</p>
              <h3 className="font-lobster mt-3 text-2xl font-light text-[#b08b4a]">
                Escolha
              </h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700">
                Selecione os congelados disponíveis do dia/semana e monte seu
                pedido.
              </p>
            </div>

            <div className="border border-black/10 bg-white/40 p-6">
              <p className="text-sm tracking-[0.22em] text-[#b08b4a]">02</p>
              <h3 className="font-lobster mt-3 text-2xl font-light text-[#b08b4a]">
                Retire ou receba
              </h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700">
                Combine a retirada ou entrega. Tudo embalado com cuidado e
                instruções claras.
              </p>
            </div>

            <div className="border border-black/10 bg-white/40 p-6">
              <p className="text-sm tracking-[0.22em] text-[#b08b4a]">03</p>
              <h3 className="font-lobster mt-3 text-2xl font-light text-[#b08b4a]">
                Finalize em casa
              </h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700">
                É só aquecer e finalizar. Perfeito para refeições rápidas ou
                receber amigos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          OPÇÕES (layout diferente: lista + imagem)
         ========================= */}
      <section
        id="itens"
        className="w-full"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* lista */}
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">OPÇÕES</p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
                Congelados para o dia a dia
              </h2>

              <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
                Alguns exemplos do que pode aparecer por aqui (varia por
                disponibilidade):
              </p>

              <div className="mt-8 border border-black/10 bg-white/40 p-6">
                {/* Dia a dia */}
                <div>
                  <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                    DIA A DIA
                  </p>

                  <ul className="mt-3 space-y-3 text-sm md:text-base text-neutral-700 list-disc list-inside">
                    <li>Banoffe R$32</li>
                    <li>Torta de Limão R$24</li>
                    <li>Torta de Maracujá R$26</li>
                  </ul>
                </div>

                {/* divisor */}
                <div className="mt-6 h-px w-full bg-black/10" />

                {/* Encomendas */}
                <div className="mt-6">
                  <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                    ENCOMENDAS
                  </p>

                  <ul className="mt-3 space-y-3 text-sm md:text-base text-neutral-700 list-disc list-inside">
                    <li>
                      <span className="font-medium text-neutral-900">
                        Banoffe Média
                      </span>{" "}
                      <span className="text-neutral-700">
                        (≈2,0 kg • serve 15–20 pessoas)
                      </span>{" "}
                      —{" "}
                      <span className="font-medium text-neutral-900">
                        R$190
                      </span>
                    </li>

                    <li>
                      <span className="font-medium text-neutral-900">
                        Banoffe Grande
                      </span>{" "}
                      <span className="text-neutral-700">
                        (≈3,0 kg • serve 25–30 pessoas)
                      </span>{" "}
                      —{" "}
                      <span className="font-medium text-neutral-900">
                        R$280
                      </span>
                    </li>
                  </ul>

                  <p className="mt-4 text-xs md:text-sm text-neutral-600">
                    <span className="font-semibold text-neutral-900">
                      Obs.:
                    </span>{" "}
                    pesos e rendimento são aproximados e podem variar levemente.
                  </p>
                </div>

                <div className="mt-6 h-px w-14 bg-[#b08b4a]/60" />

                <p className="mt-6 text-sm md:text-base text-neutral-700">
                  <span className="font-semibold text-neutral-900">Dica:</span>{" "}
                  mantenha um “kit Manda” no freezer para emergências gostosas.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-full max-w-2xl overflow-hidden bg-black/5">
                <img
                  src={casaevents}
                  alt="Congelados - imagem"
                  className="h-[320px] w-full object-cover md:h-[420px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-16 md:pb-24">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <div className="border border-black/10 bg-white/40 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-lobster text-3xl md:text-4xl font-light text-[#b08b4a]">
                Quer pedir congelados?
              </h2>
              <p className="mt-3 text-neutral-700 text-sm md:text-base leading-relaxed">
                Chame no WhatsApp e a gente te manda as opções e prazos da
                semana.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/551198877842"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-[#b08b4a] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                pedir no WhatsApp
              </a>

              <a
                href="/contato"
                className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-6 py-2.5 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white"
              >
                contato
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Frozen;
