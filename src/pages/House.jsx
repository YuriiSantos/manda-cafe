import casaevents from "../assets/casaevents.jpg";
import pdfCasa from "../assets/pdfs/manda-cafe-a-casa.pdf";
import pdfHistoria from "../assets/pdfs/manda-cafe-historia-completa.pdf";

function House() {
  return (
    <div
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: "#fffcf8" }}
    >
      {/* =========================
          HERO
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-14 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">A CASA</p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h1 className="font-lobster mt-8 text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#b08b4a]">
                A história do Manda Café
              </h1>

              <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
                Um bistrô com alma de casa. Um lugar para encontros leves, mesas
                compartilhadas, cafés demorados e comida que acolhe.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#historia"
                  className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-5 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white"
                >
                  conhecer a história
                </a>

                <a
                  href="#valores"
                  className="inline-flex items-center rounded-full bg-[#b08b4a] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  nossos valores
                </a>
              </div>

              {/* 🔥 PDF DISFARÇADO */}
              <div className="mt-6">
                <a
                  href={pdfCasa}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="h-px w-10 bg-[#b08b4a] transition-all duration-300 group-hover:w-14" />
                  <span className="text-sm text-[#b08b4a] opacity-80 group-hover:opacity-100 transition">
                    ver a história completa
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end">
              <div className="w-full max-w-2xl overflow-hidden bg-black/5">
                <img
                  src={casaevents}
                  alt="Manda Café - a casa"
                  className="h-[320px] w-full object-cover md:h-[420px] lg:h-[480px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          HISTÓRIA (texto + imagem)
         ========================= */}
      <section
        id="historia"
        className="w-full"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* LEFT TEXT */}
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                NOSSA HISTÓRIA
              </p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
                De um sonho para uma casa viva
              </h2>

              <div className="mt-8 space-y-6 text-neutral-700">
                <p className="text-sm md:text-base leading-relaxed">
                  O Manda Café nasceu do desejo de criar um espaço onde as
                  pessoas se sintam em casa — com comida afetiva, ingredientes
                  bem escolhidos e uma atmosfera que convida a ficar.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Aqui, cada detalhe importa: a mesa posta, o cheiro do café, o
                  cuidado no atendimento e o tempo desacelerado. É um lugar para
                  celebrar o cotidiano e também os momentos especiais.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Nossa casa se transforma junto com quem entra: encontros,
                  risadas, aniversários, pequenas comemorações e histórias que
                  viram lembrança boa.
                </p>
              </div>

              {/* 🔥 PDF HISTÓRIA DISFARÇADO */}
              <div className="mt-6">
                <a
                  href={pdfHistoria}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="h-px w-10 bg-[#b08b4a] transition-all duration-300 group-hover:w-14" />
                  <span className="text-sm text-[#b08b4a] opacity-80 group-hover:opacity-100 transition">
                    ler a narrativa completa
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end">
              <div className="w-full max-w-2xl overflow-hidden bg-black/5">
                <img
                  src={casaevents}
                  alt="Manda Café - ambiente"
                  className="h-[360px] w-full object-cover md:h-[460px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          VALORES (cards)
         ========================= */}
      <section
        id="valores"
        className="w-full"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
            O QUE GUIA A GENTE
          </p>
          <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

          <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
            Valores do Manda
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Afeto",
                text: "Cozinhar é cuidar. A gente acredita em comida que acolhe, que abraça e fica na memória.",
              },
              {
                title: "Qualidade",
                text: "Ingredientes bem escolhidos, preparo cuidadoso e atenção a cada detalhe do começo ao fim.",
              },
              {
                title: "Encontro",
                text: "Um lugar para estar junto — celebrar o cotidiano, conversar sem pressa e criar histórias.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="border border-black/10 bg-white/40 p-6"
              >
                <h3 className="font-lobster text-2xl font-light text-[#b08b4a]">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-700">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= EXPERIÊNCIA ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-14 md:pb-20">
          <div className="h-px w-full bg-[#b08b4a]/25 mb-10" />

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-start order-2 md:order-1">
              <div className="w-full max-w-2xl overflow-hidden bg-black/5">
                <img
                  src={casaevents}
                  alt="Manda Café - detalhes"
                  className="h-[320px] w-full object-cover md:h-[420px] lg:h-[480px]"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                A EXPERIÊNCIA
              </p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
                Uma casa para ficar
              </h2>

              <div className="mt-8 space-y-6 text-neutral-700">
                <p>
                  Aqui, você encontra um ambiente acolhedor, uma equipe atenta e
                  uma cozinha que mistura carinho e cuidado em cada prato.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/events"
                  className="inline-flex items-center rounded-full bg-[#b08b4a] px-5 py-2 text-sm font-semibold text-white"
                >
                  ver eventos
                </a>
                <a
                  href="/cardapio"
                  className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-5 py-2 text-sm font-semibold text-[#b08b4a]"
                >
                  ver cardápio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-16 pb-16 md:pb-24 text-center">
          <h2 className="font-lobster text-3xl md:text-4xl text-[#b08b4a]">
            Vem viver o Manda
          </h2>

          <div className="mt-8 flex justify-center gap-3">
            <a
              href="/manda-cafe/contact"
              className="inline-flex items-center rounded-full bg-[#b08b4a] px-6 py-2.5 text-sm font-semibold text-white"
            >
              contato
            </a>
            <a
              href="https://wa.me/551198877842"
              className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-6 py-2.5 text-sm font-semibold text-[#b08b4a]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default House;
