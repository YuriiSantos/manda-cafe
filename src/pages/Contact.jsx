import { useState } from "react";
import { contatoImagem } from "../datas/contatoImagem";

function ContactImage({ image, index }) {
  const [loaded, setLoaded] = useState(false);

  const hasDimensions = image.width && image.height;

  return (
    <div
      className="relative w-full max-w-2xl overflow-hidden bg-black/5"
      style={
        hasDimensions
          ? {
              aspectRatio: `${image.width} / ${image.height}`,
            }
          : undefined
      }
    >
      {!loaded && (
        <div className="absolute inset-0 bg-[#efe7da] animate-pulse" />
      )}

      <img
        src={image.url}
        alt={image.alt}
        loading={index < 8 ? "eager" : "lazy"}
        decoding="async"
        width={image.width}
        height={image.height}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition-all duration-500 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        }`}
      />
    </div>
  );
}

function Contact() {
  const casaImagem = contatoImagem[0];

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: "#fffcf8" }}
    >
      {/* =========================
          SEÇÃO 1 — CONTATO (texto + foto)
         ========================= */}
      <section className="w-full" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-16 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                CONTATO
              </p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h1 className="font-lobster mt-8 text-4xl font-light leading-tight text-[#b08b4a] md:text-5xl lg:text-6xl">
                Vamos conversar?
              </h1>

              <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
                Entre em contato com a gente — estamos aqui para ajudar. <br />{" "}
                Se preferir, chame no WhatsApp ou envie um e-mail e retornamos o
                mais rápido possível.
              </p>

              <div className="mt-10 space-y-4 text-neutral-700">
                <p className="text-sm md:text-base">
                  <span className="block text-neutral-900">Instagram</span>
                  <a
                    href="https://www.instagram.com/mandacafe_/"
                    className="font-semibold underline underline-offset-4 hover:opacity-80"
                    style={{ color: "#b08b4a" }}
                  >
                    @mandacafe_
                  </a>
                </p>

                <p className="text-sm md:text-base">
                  <span className="block text-neutral-900">WhatsApp</span>
                  <a
                    href="https://wa.me/5511988765337"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline underline-offset-4 hover:opacity-80"
                    style={{ color: "#b08b4a" }}
                  >
                    +55 11 988765337
                  </a>
                </p>

                <p className="text-sm md:text-base">
                  <span className="block text-neutral-900">E-mail</span>
                  <a
                    href="mailto:mandacafe.foradacasinha@gmail.com"
                    className="font-semibold underline underline-offset-4 hover:opacity-80"
                    style={{ color: "#b08b4a" }}
                  >
                    mandacafe.foradacasinha@gmail.com
                  </a>
                </p>

                <p className="text-sm md:text-base">
                  <span className="block text-neutral-900">Local</span>
                  São Paulo - SP
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#mapa"
                  className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-5 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white"
                >
                  ver mapa
                </a>

                <a
                  href="https://wa.me/5511988765337"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#b08b4a] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  chamar no WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end">
              <ContactImage image={casaImagem} index={0} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SEÇÃO 2 — MAPA (Google Maps interativo)
         ========================= */}
      <section
        id="mapa"
        className="w-full"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-14 md:px-16 md:pb-20">
          <div className="mb-10 h-px w-full bg-[#b08b4a]/25" />

          <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
            LOCALIZAÇÃO
          </p>
          <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

          <h2 className="font-lobster mt-8 text-3xl font-light leading-tight text-[#b08b4a] md:text-4xl lg:text-5xl">
            Como chegar
          </h2>

          <div className="mt-10 overflow-hidden bg-black/5">
            <iframe
              title="Mapa - Manda Café"
              className="h-[380px] w-full md:h-[460px] lg:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=R.%20Dona%20Germaine%20Burchard,%20458%20-%20%C3%81gua%20Branca,%20S%C3%A3o%20Paulo%20-%20SP,%2005002-062&output=embed"
            />
          </div>

          <div className="mt-6">
            <a
              href="https://maps.app.goo.gl/74wBgsey5Y3nM8SH7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold underline underline-offset-4 hover:opacity-80"
              style={{ color: "#b08b4a" }}
            >
              abrir no Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
