import logo from "../assets/congelados/logo.png";
import congeladosReceitaManda from "../assets/congelados/congelados.jpg";
import congelados1 from "../assets/congelados/congelados1.jpg";
import congelados2 from "../assets/congelados/congelados2.jpg";
import congelados3 from "../assets/congelados/congelados3.jpg";
import congelados4 from "../assets/congelados/congelados4.jpg";
import congelados5 from "../assets/congelados/congelados5.jpg";
import congelados6 from "../assets/congelados/congelados6.jpg";
import congelados7 from "../assets/congelados/congelados7.jpg";
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
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-14 md:pt-20 pb-14 md:pb-03">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                CONGELADOS
              </p>

              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h1 className="font-lobster mt-8 text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#b08b4a]">
                Manda Pra Casa
              </h1>

              <p className="mt-8 max-w-2xl mx-auto text-sm leading-relaxed text-neutral-700 text-justify hyphens-auto">
                O Manda Café apelidou carinhosamente seus congelados de "Manda
                pra Casa". Um cardápio de congelados deliciosos, com aquele
                capricho que você já conhece, perfeito para o dia a dia ou
                ocasiões especiais. Escolha seus favoritos, encomende e leve o
                Manda pra casa!
              </p>
              <p className="mt-1 max-w-2xl mx-auto text-sm leading-relaxed text-neutral-700 text-justify hyphens-auto">
                Peça o cardápio.
              </p>
            </div>

            <div className="flex justify-center lg:justify-center lg:pt-2">
              <div
                className="overflow-hidden p-2"
                style={{ backgroundColor: "#fffcf8" }}
              >
                <img
                  src={congelados2}
                  alt="congelados"
                  className="h-[500px] w-[500px] max-w-full object-contain transition-transform duration-700 ease-out hover:scale-110 md:h-[620px] md:w-[620px] lg:h-[680px] lg:w-[680px]"
                />
              </div>
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

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden border border-black/10 bg-white/40">
              <div className="h-80 md:h-96 w-full overflow-hidden bg-[#fffcf8] flex items-center justify-center p-4">
                <img
                  src={congelados4}
                  alt="Chame no Zap"
                  className="max-h-full w-auto max-w-full object-contain transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm tracking-[0.22em] text-[#b08b4a]">01</p>

                <h3 className="font-lobster mt-3 text-2xl font-light text-[#b08b4a]">
                  Chame no Zap
                </h3>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700">
                  Vamos te atender, apresentar o cardápio disponível e os
                  valores, ao seu sinal iniciamos a produção do pedido desejado.
                </p>
              </div>
            </div>

            <div className="overflow-hidden border border-black/10 bg-white/40">
              <div className="h-80 md:h-96 w-full overflow-hidden bg-[#fffcf8] flex items-center justify-center p-4">
                <img
                  src={congelados5}
                  alt="Retire na loja"
                  className="max-h-full w-auto max-w-full object-contain transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm tracking-[0.22em] text-[#b08b4a]">02</p>

                <h3 className="font-lobster mt-3 text-2xl font-light text-[#b08b4a]">
                  Retire na loja
                </h3>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700">
                  Vamos marcar o dia e horário para você retirar seu pedido. Na
                  retirada te contamos o passo a passo de como servir em casa.
                </p>
              </div>
            </div>

            <div className="overflow-hidden border border-black/10 bg-white/40">
              <div className="h-80 md:h-96 w-full overflow-hidden bg-[#fffcf8] flex items-center justify-center p-4">
                <img
                  src={congelados7}
                  alt="Finalize em casa"
                  className="max-h-full w-auto max-w-full object-contain transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              <div className="p-6">
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

                  <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                    <li>Banoffee</li>
                    <li>Torta de Limão</li>
                    <li>Torta de Maracujá</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:pt-[96px]">
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
          DOCES E STRUDEL
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
            <div
              className="overflow-hidden"
              style={{ backgroundColor: "#fffcf8" }}
            >
              <img
                src={encomendaBanoffee}
                alt="Foto congelados Encomenda Banoffee"
                className="h-[380px] w-full object-cover transition-transform duration-700 ease-out hover:scale-110 md:h-[500px] lg:h-[620px]"
              />
            </div>

            <div>
              <h2 className="font-lobster text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
                Sobremesa para final de semana
              </h2>

              <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-700">
                Pedidos com no mínimo 2 dias de antecedência
              </p>

              <div className="mt-8 border border-black/10 bg-white/40 p-6 md:p-7">
                <div>
                  <p className="font-medium text-neutral-900">
                    Banoffee Grande
                  </p>

                  <p className="mt-1 text-sm md:text-base leading-relaxed text-neutral-700">
                    ≅3,0kg (serve 20 à 25 pessoas)
                  </p>

                  <p className="mt-6 font-medium text-neutral-900">
                    Banoffee Média
                  </p>

                  <p className="mt-1 text-sm md:text-base leading-relaxed text-neutral-700">
                    ≅2,0kg (serve 12 à 15 pessoas)
                  </p>
                </div>

                <div className="my-7 h-px w-full bg-black/10" />

                <div>
                  <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                    MANDA STRUDEL
                  </p>

                  <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-700">
                    Opções de folhados doces e salgados para encomenda.
                  </p>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="border border-black/10 bg-[#fffcf8]/70 p-5">
                      <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                        FOLHADOS SALGADOS
                      </p>

                      <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                        <li>Frango com Catupiry</li>
                        <li>Frango</li>
                        <li>Palmito</li>
                      </ul>
                    </div>

                    <div className="border border-black/10 bg-[#fffcf8]/70 p-5">
                      <p className="text-xs md:text-sm font-semibold tracking-wide text-neutral-900">
                        FOLHADOS DOCES
                      </p>

                      <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                        <li>Banana</li>
                        <li>Maçã</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full bg-black/10" />

                  <ul className="mt-4 space-y-3 text-sm md:text-base text-neutral-700 list-disc pl-5">
                    <li>Grande ≅ 800g</li>
                    <li>Pequeno ≅ 500g</li>
                  </ul>
                </div>
              </div>
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

          <div className="overflow-hidden border border-black/10 bg-white/40">
            <div className="grid gap-0 lg:grid-cols-[1fr_1fr] items-stretch">
              <div
                className="flex items-center justify-center p-2 md:p-4"
                style={{ backgroundColor: "#fffcf8" }}
              >
                <div
                  className="h-[500px] w-full overflow-hidden md:h-[640px] lg:h-[760px]"
                  style={{ backgroundColor: "#fffcf8" }}
                >
                  <img
                    src={congelados6}
                    alt="Foto para pedido de congelados no WhatsApp"
                    className="h-full w-full object-contain transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center px-8 py-10 text-center md:px-12 lg:px-16">
                <div className="max-w-md">
                  <h2 className="font-lobster text-3xl md:text-4xl font-light text-[#b08b4a]">
                    Quer pedir congelados?
                  </h2>

                  <p className="mt-4 text-neutral-700 text-sm md:text-base leading-relaxed">
                    Chame no WhatsApp e a gente te manda as opções e os prazos
                    da semana.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Frozen;
