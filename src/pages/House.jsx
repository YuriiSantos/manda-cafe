import videocasa from "../assets/house/video-casa.mp4";
import fotoartcasa from "../assets/house/casamandaarte.png";
import rafafoto from "../assets/house/rafa.jpg";
import mayara from "../assets/house/mayara.jpg";
import imigrantes from "../assets/house/imigrantes.png";
import antonio from "../assets/house/antonio.png";
import josefina from "../assets/house/josefina.png";
import tataravo from "../assets/house/tataravo.png";
import josefina2 from "../assets/house/josefina2.png";
import familia from "../assets/house/familia.png";
import adelia from "../assets/house/adelia.png";
import ap from "../assets/house/ap.png";
import nelson from "../assets/house/nelson.png";
import casa1 from "../assets/house/casa1.png";
import vo from "../assets/house/vo_fabio.png";
import festa from "../assets/house/festa.png";

import marilda from "../assets/house/marilda.png";
import izelte from "../assets/house/izelte.png";
import marildaM from "../assets/house/marilda_marinheiros.png";

import casamento1 from "../assets/house/casamento1.png";
import casamento2 from "../assets/house/casamento2.png";
import casamento3 from "../assets/house/casamento3.png";
import casamento4 from "../assets/house/casamento4.png";

import cristina from "../assets/house/cristina.png";

import marilda_cris from "../assets/house/marilda_cristina.png";
import adelia_cris from "../assets/house/adelia_cristina.png";
import josefina_cris from "../assets/house/josefina_cristina.png";

import filhos1 from "../assets/house/filhos1.png";
import filhos2 from "../assets/house/filhos2.png";

import marilda_representante from "../assets/house/marilda_representante.png";
import marilda_gerente from "../assets/house/marilda_gerente.png";
import marilda_monte from "../assets/house/marilda_monte.png";

import raphael from "../assets/house/raphael.png";
import raphael_oito from "../assets/house/raphael_oito.png";

import cacto from "../assets/house/cacto.png";

import decora1 from "../assets/house/decora1.png";
import logo from "../assets/house/logo.png";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Modal ──────────────────────────────────────────────────────────────── */
function VideoModal({ src, onClose }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimer = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  /* lock scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ESC fecha */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* acompanha fullscreen */
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  /* auto-hide controls */
  const showCtrl = useCallback(() => {
    setShowControls(true);
    clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 2500);
  }, []);

  useEffect(() => {
    showCtrl();
    return () => clearTimeout(controlsTimer.current);
  }, [showCtrl]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      showCtrl();
    } else {
      v.pause();
      setPlaying(false);
      setShowControls(true);
      clearTimeout(controlsTimer.current);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setCurrentTime(v.currentTime);
    setProgress((v.currentTime / v.duration) * 100);
  };

  const onLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (e.clientX - rect.left) / rect.width),
    );
    if (videoRef.current)
      videoRef.current.currentTime = ratio * videoRef.current.duration;
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Erro ao alternar tela cheia:", error);
    }
  };

  const fmt = (s) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    /* Backdrop */
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Player container */}
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={showCtrl}
        style={{
          position: "relative",
          height: isFullscreen ? "100vh" : "min(92vh, calc(96vw * 16/9))",
          width: isFullscreen ? "100vw" : "min(96vw, calc(92vh * 9/16))",
          background: "#000",
          borderRadius: isFullscreen ? 0 : 14,
          overflow: "hidden",
          boxShadow: isFullscreen ? "none" : "0 24px 72px rgba(0,0,0,0.65)",
          flexShrink: 0,
        }}
      >
        {/* Vídeo */}
        <video
          ref={videoRef}
          src={src}
          autoPlay
          playsInline
          preload="auto"
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={() => {
            setPlaying(false);
            setShowControls(true);
          }}
          onClick={togglePlay}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: isFullscreen ? "contain" : "cover",
            cursor: "pointer",
            display: "block",
            background: "#000",
          }}
        />

        {/* Overlay de controles */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: showControls ? 1 : 0,
            pointerEvents: showControls ? "auto" : "none",
            transition: "opacity 0.25s ease",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 22%, transparent 62%, rgba(0,0,0,0.52) 100%)",
          }}
        >
          {/* Topo: fechar */}
          <div
            style={{ display: "flex", justifyContent: "flex-end", padding: 12 }}
          >
            <button
              onClick={onClose}
              aria-label="Fechar"
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.4)",
                border: "none",
                color: "#fff",
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
          </div>

          {/* Centro: play grande */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pausar" : "Reproduzir"}
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(4px)",
                border: "1.5px solid rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {playing ? (
                <svg viewBox="0 0 24 24" fill="white" width={20} height={20}>
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="white" width={20} height={20}>
                  <path d="M8 5.5v13l10-6.5-10-6.5Z" />
                </svg>
              )}
            </button>
          </div>

          {/* Rodapé: barra + controles */}
          <div style={{ padding: "0 12px 12px" }}>
            {/* Barra de progresso */}
            <div
              onClick={seek}
              style={{
                height: 3,
                background: "rgba(255,255,255,0.28)",
                borderRadius: 9999,
                cursor: "pointer",
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "#fff",
                  borderRadius: 9999,
                  position: "relative",
                  transition: "width 0.1s linear",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: -4,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                />
              </div>
            </div>

            {/* Linha de botões */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* Play/pause pequeno */}
              <button
                onClick={togglePlay}
                style={btn}
                aria-label={playing ? "Pausar" : "Reproduzir"}
              >
                {playing ? (
                  <svg viewBox="0 0 24 24" fill="white" width={15} height={15}>
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="white" width={15} height={15}>
                    <path d="M8 5.5v13l10-6.5-10-6.5Z" />
                  </svg>
                )}
              </button>

              {/* Mute */}
              <button
                onClick={toggleMute}
                style={btn}
                aria-label={muted ? "Ativar som" : "Silenciar"}
              >
                {muted ? (
                  <svg viewBox="0 0 24 24" fill="white" width={15} height={15}>
                    <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                    <line
                      x1="22"
                      y1="9"
                      x2="16"
                      y2="15"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <line
                      x1="16"
                      y1="9"
                      x2="22"
                      y2="15"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="white" width={15} height={15}>
                    <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                    <path
                      d="M15.54 8.46a5 5 0 0 1 0 7.07"
                      stroke="white"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>

              {/* Tempo */}
              <span
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.65rem",
                  marginLeft: "auto",
                  fontVariantNumeric: "tabular-nums",
                  letterSpacing: "0.03em",
                }}
              >
                {fmt(currentTime)} / {fmt(duration)}
              </span>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                style={btn}
                aria-label="Tela cheia"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                  width={15}
                  height={15}
                  strokeLinecap="round"
                >
                  <path d="M3 8V5h3M21 8V5h-3M3 16v3h3M21 16v3h-3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const btn = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  color: "#fff",
};

/* ─── Thumbnail ──────────────────────────────────────────────────────────── */
function VideoThumb({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 380,
        borderRadius: 16,
        overflow: "hidden",
        border: "none",
        padding: 0,
        cursor: "pointer",
        boxShadow: "0 16px 48px rgba(0,0,0,0.13)",
        background: "#000",
        display: "block",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 22px 60px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.13)";
      }}
    >
      {/* Play icon */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(4px)",
            border: "1.5px solid rgba(255,255,255,0.38)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg viewBox="0 0 24 24" fill="white" width={20} height={20}>
            <path d="M8 5.5v13l10-6.5-10-6.5Z" />
          </svg>
        </div>
      </div>
      <div style={{ aspectRatio: "9/16", width: "100%" }}>
        <video
          src={videocasa}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          muted
          playsInline
          preload="metadata"
          tabIndex={-1}
        />
      </div>
    </button>
  );
}

/* ─── House ──────────────────────────────────────────────────────────────── */
function House() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: "#fffcf8" }}
    >
      {/* A CASA */}
      <section style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">
          {/* HEADER */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="text-sm tracking-[0.28em] uppercase text-[#b08b4a]">
              A CASA
            </p>
            <div className="mx-auto mt-4 h-[2px] w-14 bg-[#b08b4a]" />
            <h1 className="font-lobster mt-8 text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#b08b4a]">
              O Manda Café: Celebre Sonhos, Crie Memórias
            </h1>
          </div>

          {/* BLOCO 1 */}
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  A CASA faz parte do conjunto de 40 imóveis tombados no bairro
                  de Perdizes, em São Paulo. O Manda Café - Bistrô é um
                  restaurante e espaço para eventos que mistura história,
                  aconchego e sofisticação. Instalado em um patrimônio
                  arquitetônico de 1940, a casa tem uma fachada inspirada nos
                  palacetes da Avenida Paulista do século XIX, trazendo um
                  charme único. Dentro, cultivamos as raízes de um Mandacaru, um
                  cacto de aproximadamente 70 anos, o que simboliza a tradição e
                  a longevidade que o Manda preserva com tanto carinho.
                </p>

                <div className="mt-8 border-l-2 border-[#b08b4a]/40 pl-5">
                  <p className="text-sm md:text-base text-neutral-700">
                    História:{" "}
                    <a
                      href="https://www.acropole.fau.usp.br/edicao/81"
                      className="text-[#8f6d34] underline underline-offset-4 hover:text-[#b08b4a] transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Revista Acrópole
                    </a>
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">Página 295</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <VideoThumb
                  onClick={() => setOpenVideo(true)}
                  label="Abrir vídeo"
                />
              </div>
            </div>
          </div>

          {/* BLOCO 2 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center order-1">
              <img
                src={fotoartcasa}
                alt="Manda Café"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>

            <div className="order-2 w-full">
              <div className="mx-auto max-w-2xl">
                <p className="text-base md:text-lg leading-8 text-neutral-700 text-justify">
                  O Manda Café - Bistrô nasceu como uma cafeteria, com um ou
                  dois pratos à la carte. Com o tempo, a procura dos nossos
                  vizinhos por uma comida simples, caseira, mas refinada, nos
                  inspirou a expandir. Aos poucos, ampliamos o cardápio,
                  aprimoramos receitas, e o Manda Café ganhou alma de bistrô: um
                  espaço onde o sabor abraça, e cada detalhe é pensado para você
                  relaxar e se sentir bem.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 3 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full order-2 md:order-1">
              <div className="mx-auto max-w-2xl">
                <p className="text-base md:text-lg leading-8 text-neutral-700 text-justify">
                  Raphael Cury, idealizador do Manda Café, nos conta: “Achando
                  que faltava felicidade na cidade de São Paulo, me peguei
                  pensando o que eu poderia fazer com isso. Resolvi empreender
                  no Manda, um lugar para comida, arte, improviso, bar e café,
                  além de pouco protocolar. Tive duas grandes locomotivas para
                  me impulsionar nessa empreitada: primeiro, a aposentadoria da
                  minha avó — a casa é dela —, que sempre foi muito ativa e
                  trabalhava com o público diretamente em loja de shopping, e
                  ficou muito abatida ao se ver em casa sem rotina nenhuma de
                  trabalho; segundo, a falta de uma vaga no mercado com o meu
                  perfil não tão burocratizado. Tudo isso, envolto em um
                  ambiente familiar, estava aí a receita para o nosso desafio de
                  transformar o Manda em ponto de referência do acolhimento.”
                </p>
              </div>
            </div>

            <div className="flex justify-center order-1 md:order-2">
              <img
                src={rafafoto}
                alt="Raphael Cury no Manda Café"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>
          </div>

          {/* BLOCO 4 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <img
                src={mayara}
                alt="Mayara Dornas no Manda Café"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>

            <div className="w-full">
              <div className="mx-auto max-w-2xl">
                <p className="text-base md:text-lg leading-8 text-neutral-700 text-justify">
                  Com as portas abertas em 2019, o Manda enfrentou a pandemia
                  com resistência e sensibilidade. Após esse momento traumático,
                  nossos clientes passaram a desejar um espaço para reencontrar
                  os seus e festejar a vida. Foi assim que percebemos que somos
                  um lugar capaz de acolher eventos especiais, seja um
                  aniversário intimista, confraternizações, um happy hour entre
                  amigos, um jantar personalizado ou ações artísticas, como
                  exposições, apresentações e lançamento de livros.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-neutral-700 text-justify">
                  Foi assim que decidimos dar um passo adiante e abrir a casa
                  para eventos em um ambiente totalmente único, sem a aparência
                  de buffets engessados e pré-embalados. Aqui, escolhemos o
                  sutil, o familiar e o autêntico, deixando cada evento especial
                  como deve ser. Nada como aquela casa de avó.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO FINAL */}
          <div className="mx-auto mt-20 max-w-5xl border-t border-[#b08b4a]/20 pt-12">
            <p className="text-base md:text-lg leading-8 text-neutral-700 text-justify">
              “Nosso objetivo é criar um espaço onde as pessoas possam construir
              memórias. Como boa mineira que sou, abrimos as portas da nossa
              casa para receber festas e atrações artísticas que nos permitam
              divertir, sermos nós mesmos e estarmos rodeados de pessoas que nos
              fazem bem. Esses elementos juntos criam um ambiente leve, repleto
              de energia positiva e boas risadas, pois queremos que o Manda
              respire amor, alegria e arte, e que essa energia envolva a todos.
              Escolher o Manda para fazer seu evento significa escolher uma casa
              com personalidade, intimista e acolhedora, e que acima de tudo irá
              abraçar suas ideias, construindo uma experiência afetiva que será
              lembrada com carinho e brilho nos olhos”, explica Mayara Dornas,
              diretora de eventos da casa.
            </p>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" style={{ backgroundColor: "#fffcf8" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
          <div className="mb-12 h-px w-full bg-[#b08b4a]/25" />

          {/* HEADER */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm tracking-[0.28em] uppercase text-[#b08b4a]">
              NOSSA HISTÓRIA
            </p>
            <div className="mx-auto mt-4 h-[2px] w-14 bg-[#b08b4a]" />
            <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
              A história
            </h2>
          </div>

          {/* BLOCO 1 */}
          <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Tudo começa com a imigração de Antônio Maria Duque (o avô da
                  vó) e Josefina Tadine (A avó da vó ou a Vovó Pepa) imigrantes
                  no Brasil, vindos de Portugal e Itália, fugindo da guerra e da
                  crise econômica e política da Europa no final do século XIX e
                  início do século XX em busca de novas oportunidades.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={imigrantes}
                alt="Contexto da imigração da família"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>
          </div>

          {/* BLOCO 2 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center order-1">
              <img
                src={antonio}
                alt="Retrato de Antônio Maria Duque e Josefina"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>

            <div className="order-2 w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Antônio Maria Duque nasceu entre 01/08/1894, (não acreditei
                  que o moço é de 1800… passada.. fiz as contas baseada no
                  nascimento do vô Fábio.) o imigrante português veio sozinho
                  para o Brasil.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  (Perguntei sobre os pais dele pra vó, e ela conta que não
                  lembra do avô falar de sua família, era caladão.. e
                  detalhe…veio entre os 14-17 anos… Senhorrr! Sabemos que Duque
                  teve algum letramento, aqui no Brasil ou em Portugal, mas
                  sabia ler e escrever pelo que a Marildinha (nossa vó) conta e
                  por sua trajetória.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 3 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full order-2 md:order-1">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Josefina Tadine Duque, ela italiana, analfabeta, abanava café
                  na itália, com a família durante a GRANDE IMIGRAÇÃO, que
                  ocorreu entre 1880 e 1930, os italianos formaram uma grande
                  parte dos imigrantes, especialmente em São Paulo (café) e Rio
                  Grande do Sul (colônias).
                </p>
              </div>
            </div>

            <div className="flex justify-center order-1 md:order-2">
              <img
                src={josefina}
                alt="Família em São Paulo e contexto da Joalheria Duque"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>
          </div>

          {/* BLOCO 4 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <img
                src={tataravo}
                alt="Fachada histórica da casa"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>

            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Não se tem registro dos pais da nossa tataravó Josefina apenas
                  uma foto de seu irmão.(Achei a foto meio cinematográfica e
                  resolvi compartilhar com vocês. Rsrsrs...)
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 5 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full order-2 md:order-1">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Não temos registro da chegada de Josefina. E acredita-se que
                  Duque chegou no Brasil entre 1904-1915. Com muita
                  probabilidade de sua chegada ter ocorrido em 1915, mesmo ano
                  da fundação da a CASA DUQUE, loja especializada nas vendas de
                  produtos Philips, Electrolux, relógios de parede, pratarias,
                  cristais e jóias. Ambos se instalaram em Rio Preto e se
                  casaram em 1920.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  “Antonio Maria Duque Comerciante, primeiro tesoureiro da
                  Associação Comercial, Industrial e Agrícola de Rio Preto
                  (ACIA, atual ACIRP) de 21 de janeiro de 1923 a 10 de janeiro
                  de 1926; segundo tesoureiro de 8 de janeiro de 1928 a 11 de
                  janeiro de 1930; vice-presidente de 11 de janeiro de 1931 a 12
                  de fevereiro de 1932; e membro do Conselho Administrativo de
                  10 de janeiro de 1926 a 8 de janeiro de 1928 e de 12 de
                  fevereiro de 1931 a 12 de fevereiro de 1933.” FONTE.{" "}
                  <a
                    href="https://rmriopreto.com.br/antonio-maria-duque/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Antonio Maria Duque – RM Rio Preto
                  </a>
                </p>
              </div>
            </div>

            <div className="flex justify-center order-1 md:order-2">
              <img
                src={josefina2}
                alt="Marilda, casamento e registros familiares"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>
          </div>

          {/* BLOCO 6 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <img
                src={familia}
                alt="Raphael, infância e memórias da casa"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>

            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Josefina e Antônio Maria tiveram 5 filhos: Miguel, Carlos,
                  Adélia, Mercedes e Nelson.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  Foto: Adélia , Mercedes, Josefina e Antônio Maria Em 1936/1937
                </p>
              </div>
            </div>
          </div>
          {/* BLOCO 7 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Em 1936/1937 Adélia se casa com Mario Abrigato em Rio Preto e
                  tem dois filhos: Marinaldo Abrigato (1938) e Marilda Abrigato
                  nascida em 29/03/1940, atual dona da casa tombada, lar do
                  Manda Café Bistrô. Coincidências da vida, Marilda nasceu no
                  mesmo ano que é construída a casa que décadas depois se
                  tornaria o Manda.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={adelia}
                alt="Raphael, infância e memórias da casa"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>
          </div>

          {/* BLOCO 8 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <img
                src={ap}
                alt="Raphael, infância e memórias da casa"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>
            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  No final da década de 30 os negócios na Casa Duque em Rio
                  Preto perderam força, mesmo com os filhos ajudando nos
                  negócios da família. Então em 1943 , Antônio Maria Duque
                  decide se deslocar para São Paulo capital em busca de novas
                  oportunidades e leva seu filho caçula, Nelson Duque com 18
                  anos (futuro tio da avó Marilda), fortalecendo sua trajetória
                  e se tornando o braço direito de Antônio Maria Duque.
                </p>
                <p className="text-base md:text-lg leading-8 text-justify">
                  Ao chegar em Sampa, Duque resolve focar em apenas uma coisa,
                  vender jóias, e funda a JOALHERIA DUQUE, uma pequena fábrica
                  de jóias no centro de São Paulo, que se tornaria o sustento da
                  família. No entanto,só consegue se estabelecer em 1946, ano
                  que Josefina chega em São Paulo acompanhada de sua filha
                  Adélia, marido e filhos.
                </p>
                <p className="text-base md:text-lg leading-8 text-justify">
                  Em Rio Preto os núcleos familiares moravam em casas separadas,
                  mas em São Paulo se adaptaram em um apartamento no bairro Dom
                  Pedro II na rua Hércules Florence nº41. Dividindo o espaço com
                  três núcleos famíliares, Duque e Josefina, Adélia, o marido e
                  dois filhos e Nelson, a esposa e dois filhos.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 9 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Nelson passou a liderar a empresa e expandi-la em âmbito
                  internacional até se instalar na Zona Franca de Manaus que
                  passaria a se chamar Jóias Duque. ( Ô gente… e não é que
                  Nelsinho foi um moço importante? Foi presidente do Palmeiras..
                  rsrsrs… kd esses QI? rsrsrs…)
                </p>
                <p className="text-base md:text-lg leading-8 text-justify">
                  “Nelson Tadini Duque, ou simplesmente Nelson Duque, que morreu
                  em 1998, aos 73 anos, foi presidente do Palmeiras entre 1985 e
                  1988, período em que o clube alviverde teve como melhor
                  resultado o vice-campeonato paulista de 1986, ocasião em que a
                  equipe perdeu a final para a Inter de Limeira. Durante sua
                  gestão foi construído o Ginásio Adalberto Mendes e iniciadas
                  as obras da Academia de Futebol”. Fonte:{" "}
                  <a
                    href="https://terceirotempo.uol.com.br/que-fim-levou/nelson-duque"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Nelson Duque - Que fim levou? - Terceiro Tempo
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={nelson}
                alt="Raphael, infância e memórias da casa"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>
          </div>
          {/* BLOCO 10 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <img
                src={casa1}
                alt="Raphael, infância e memórias da casa"
                className="h-auto w-full max-w-xl rounded-sm object-contain"
              />
            </div>
            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Os negócios passaram a trazer um retorno financeiro mais
                  estável, e a família se mudou em 1948 para o sobrado na Dona
                  Germanie Buchard 374 ( Foi demolida com outras casinhas lindas
                  em 2021 para virar prédio… tristeza!! ).
                </p>
                <p className="text-base md:text-lg leading-8 text-justify">
                  Em 1950 a filha Mercedes também se muda para São Paulo, em um
                  sobrado na Dr. Costa Júnior com seus filhos Fábio e Izelte
                  (Nossos queridinhos.. vô e vó primos, frequentam bastante o
                  Manda).
                </p>
                <p className="text-base md:text-lg leading-8 text-justify">
                  Ainda em 1950, Nelson compra um sobrado na Germaine (casinha
                  demolida para os grandes prédios) e em 1953 Duque compra a A
                  CASA na R. Dona Germaine Burchard, 458 e se muda com Josefina,
                  sua filha Adélia com o marido e os dois filhos.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm tracking-[0.28em] uppercase text-[#b08b4a]">
                MEMÓRIAS DA CASA
              </p>
              <div className="mx-auto mt-4 h-[2px] w-14 bg-[#b08b4a]" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <figure className="group overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={casa1}
                    alt="Frente da Casa 1956"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-t border-[#b08b4a]/20 px-5 py-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#b08b4a]">
                    Frente da Casa
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">1956</p>
                </figcaption>
              </figure>

              <figure className="group overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={vo}
                    alt="Vô Fábio com 4 anos de idade"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-t border-[#b08b4a]/20 px-5 py-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#b08b4a]">
                    Vô Fábio
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Com 4 anos de idade
                  </p>
                </figcaption>
              </figure>

              <figure className="group overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={festa}
                    alt="Festa de 60 Anos Antônio Maria Duque"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-t border-[#b08b4a]/20 px-5 py-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#b08b4a]">
                    Festa de 60 Anos
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Antônio Maria Duque
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* BLOCO 11 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full order-2 md:order-1">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Marilda morou com o avô por muitos anos e desenvolveu uma
                  relação próxima, mas em 1958 ganha uma viagem de Duque, mas em
                  troca ela não se casaria com o sujeito amado da casa da
                  frente. Marildinha não pensou duas vezes e foi conhecer a
                  Europa e ver um pouco do mundo… (mal sabia ela que seria a
                  primeira e última viagem dela para o continente europeu, eu
                  considero moça a frente do seu tempo.)
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  Conversando com ela, este rapaz foi o grande amor de sua vida,
                  mas compreende que foi um amor jovem, mas ela não se arrepende
                  de sua escolha.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  No navio foram batizadas ao passar pela linha do Equador e na
                  segunda foto ela sentou ao lado dos pescadores, e conta que
                  todos riam.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="grid gap-5 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={marilda}
                      alt="Vó Marilda"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-neutral-600">
                    Vó Marilda
                  </figcaption>
                </figure>

                <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={izelte}
                      alt="Vó Izelte"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-neutral-600">
                    Vó Izelte
                  </figcaption>
                </figure>

                <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:col-span-2">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={marildaM}
                      alt="Marilda com Marinheiros"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-neutral-600">
                    Marilda com Marinheiros
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* BLOCO 12 */}
          <div className="mx-auto mt-20">
            <div className="mb-10 text-center">
              <div className="mx-auto mt-4 h-[2px] w-14 bg-[#b08b4a]" />
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Em 1965 Marilda se casa com Amaury Fagundes Carvalho, (e
                  adivinhem onde ela se casa? Aqui… a casa é toda decorada e
                  recebe sua festa de casamento)
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src={casamento1}
                  alt="Foto do casamento"
                  className="h-72 w-full rounded-sm object-cover shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                />
                <img
                  src={casamento2}
                  alt="Foto do casamento"
                  className="h-72 w-full rounded-sm object-cover shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                />
                <img
                  src={casamento3}
                  alt="Foto do casamento"
                  className="h-72 w-full rounded-sm object-cover shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                />
                <img
                  src={casamento4}
                  alt="Foto do casamento"
                  className="h-72 w-full rounded-sm object-cover shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                />
              </div>
            </div>
          </div>

          {/* BLOCO 13 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <div className="relative w-full max-w-xl">
                <img
                  src={cristina}
                  alt="Cristina"
                  className="h-auto w-full rounded-sm object-contain shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                />
                <div className="absolute -bottom-5 left-5 right-5 bg-[#fffcf8]/95 px-5 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.12)]">
                  <p className="text-sm tracking-[0.18em] uppercase text-[#b08b4a]">
                    Cristina
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  No mesmo ano o casal retorna para a cidade natal de ambos, Rio
                  Preto. O motivo era o trabalho de Amaury, vendedor de óleo de
                  carro e viajante. Marilda engravida em 1967 e retorna para a
                  casa de sua avó, assim Josefina e sua mãe lhe deram suporte
                  durante toda a maternidade, sua primeira gravides foi de risco
                  e passou meses de repouso, no entanto o parto é um sucesso e
                  sua primeira filha nasce, Cristina.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 14 */}
          <div className="mx-auto mt-20 max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={marilda_cris}
                    alt="Marilda e Cristina"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-neutral-600">
                  Marilda e Cristina
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={adelia_cris}
                    alt="Adélia e Cristina"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-neutral-600">
                  Adélia e Cristina
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={josefina_cris}
                    alt="Josefina e Cristina"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-neutral-600">
                  Josefina e Cristina
                </figcaption>
              </figure>
            </div>
          </div>

          {/* BLOCO 15 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full order-2 md:order-1">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Ainda em 1967 Marilda se muda para o bairro Moema, pois o
                  marido Amaury abre um posto de gasolina na Rua Canários no
                  bairro, atividade que passa a ser o sustento da família.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  Em 1967 morre nosso tataravô, Antônio Maria Duque, por motivo
                  de infarto, e em 1970 morre nosso bisavô, Mário Abrigato por
                  acidente de trânsito.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  Neste cenário, as matriarcas Josefina e Adélia se tornam
                  viúvas, e Marilda retorna em 1971 para a Germaine com seu
                  marido e três filhos, seu objetivo maior era cuidar e dar
                  suporte emocional para a mãe e avó.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  Após a morte de Mário, Adélia entra em depressão profunda e
                  sofre um infarto em 1974.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  O posto de gasolina gerido por Amauri, quebra, e ele passa a
                  trabalhar para o tio de Marilda, Nelson, na joalheria Duque.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <img
                src={nelson}
                alt="Família no Parque da Água Branca"
                className="h-auto w-full max-w-xl rounded-sm object-contain shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>

          {/* BLOCO 16 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-start gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full">
              <div className="mx-auto max-w-xl">
                <img
                  src={filhos1}
                  alt="Filhos no Parque da Água Branca"
                  className="h-auto w-full rounded-sm object-contain shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                />

                <div className="mt-10 text-neutral-700">
                  <p className="text-base md:text-lg leading-8 text-justify">
                    Marilda vivia um momento extremamente delicado: criava três
                    filhos — Maria Cristina (1967), Marcelo (1968) e Daniela
                    (1970) — contando com o apoio da avó, ao mesmo tempo em que
                    também era seu amparo emocional, enquanto o marido se
                    reinseriu no trabalho. Diante da necessidade de contribuir
                    financeiramente, deu início à sua trajetória profissional
                    fora de casa como sacoleira de joias na Joias Duque. Mais
                    tarde, assumiu a gerência de uma loja de sapatos, onde
                    permaneceu por seis anos. Em seguida, retornou à Joias Duque
                    — então com a fábrica já instalada em Manaus —, passando a
                    atuar como representante comercial em São Paulo, função que
                    desempenhou por uma década.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center">
              <img
                src={filhos2}
                alt="Filhos no Parque da Água Branca"
                className="h-auto max-h-[760px] w-auto max-w-full rounded-sm object-contain shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>

          {/* BLOCO 17 */}
          <div className="mx-auto mt-20 max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-sm bg-[#fffcf8]">
                  <img
                    src={marilda_representante}
                    alt="Marilda representante das Joias Duque"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-neutral-600">
                  Marilda representante das Joias Duque
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-sm bg-[#fffcf8]">
                  <img
                    src={marilda_gerente}
                    alt="Marilda gerente da loja de sapatos e bolsas"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-neutral-600">
                  Marilda gerente da loja de sapatos e bolsas
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-sm bg-[#fffcf8]">
                  <img
                    src={marilda_monte}
                    alt="Marilda na Monte Cristo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-neutral-600">
                  Marilda na Monte Cristo
                </figcaption>
              </figure>
            </div>
          </div>

          {/* BLOCO 18 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="w-full order-2 md:order-1">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Em 1987 Daniela, filha caçula de Marilda engravida e em 1988
                  nasce Raphael, o único neto de Marilda e criador do Manda Café
                  Bistrô.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="grid gap-5 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                  <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-sm bg-[#fffcf8]">
                    <img
                      src={raphael}
                      alt="Aniversário de 1 anos do Raphael"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm text-neutral-600">
                    Aniversário de 1 anos do Raphael
                  </figcaption>
                </figure>

                <figure className="overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                  <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-sm bg-[#fffcf8]">
                    <img
                      src={raphael_oito}
                      alt="Festa de Natal aos 8 anos de Raphael"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm text-neutral-600">
                    Festa de Natal aos 8 anos de Raphael
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* BLOCO 19 */}
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <img
                src={cacto}
                alt="Cacto"
                className="h-auto w-full max-w-xl rounded-sm object-contain shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              />
            </div>

            <div className="w-full">
              <div className="mx-auto max-w-2xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Em 2000, Marilda iniciou seus trabalhos para a MONTE CRISTO
                  JOALHEIROS e foi dispensada em 2018, após 18 anos de trabalho
                  a loja fechou e seu desligamento foi inevitável aos 78 anos.
                  Raphael aos 22 anos inicia um processo de burnout e volta a
                  morar na casa em que nasceu. Descobre respiro na arte para se
                  expressar e passou a pintar quadros e plantar mudas no cacto,
                  se encontrando com sua espiritualidade e essência.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 20 */}
          <div className="mx-auto mt-20 max-w-6xl">
            <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-16">
              <div className="w-full">
                <div className="mx-auto max-w-2xl text-neutral-700">
                  <p className="text-base md:text-lg leading-8 text-justify">
                    Durante três anos, sua amiga Fernanda Motta morou na edícula
                    da casa,FOTO FERNANDA + SITE uma artista extremamente
                    sensível e criativa, ela seria uma grande inspiração para as
                    pinturas que Raphael faria… e futuramente se tornaria a
                    designer gráfica do Manda Café Bistrô. (Te amamos Fê!).
                  </p>

                  <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                    Mas em 2018 tudo muda, quando em uma conversa com a vó
                    Marilda, ela desabafa, se abrindo e sendo clara, “estou mal
                    meu neto”. Depois de anos trabalhando e em movimento até
                    seus 78 anos, era natural que a mudança repentina lhe
                    deixasse baqueada. Raphael como uma fênix, sai da sua bat
                    garagem, ao retornar para casa de sua avó, ele adaptou a
                    garagem.. rsrsrs.. esta que se tornaria o garaloft.
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                <img
                  src={decora1}
                  alt="Decora GNT"
                  className="h-auto w-full rounded-sm object-contain shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                />

                <div className="border-l-2 border-[#b08b4a]/40 pl-5">
                  <p className="text-sm md:text-base text-neutral-700">
                    Assista o episódio DECORA - GNT
                  </p>
                  <a
                    href="http://bit.ly/3Qlkfv5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm md:text-base text-blue-600 underline underline-offset-4 hover:text-blue-800"
                  >
                    DECORA - GNT | Vídeos e Filmes no Vimeo
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-20 grid items-center gap-10 md:grid-cols-2 lg:gap-16">
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <img
                    src={logo}
                    alt="Logo Manda Café"
                    className="h-auto w-full rounded-sm object-contain shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                  />

                  <p className="mt-4 text-center text-xs uppercase tracking-[0.24em] text-[#b08b4a]">
                    LOGO MANDA CAFÉ
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="mx-auto max-w-2xl text-neutral-700">
                  <p className="text-base md:text-lg leading-8 text-justify">
                    E assim desenvolve todo o plano para criar o Manda Café e
                    trazer vida e brilho nos olhos, para sua vó e pra si mesmo.
                  </p>

                  <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                    Em 2019 inicia as obras na casa para a criação do Manda
                    Café, tudo pronto para abrir as portas, com sete
                    funcionários treinados, seria sim o novo grande
                    empreendimento da família.
                  </p>

                  <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                    Abriram a casa e o espaço sempre elogiado, vó Marilda e
                    Raphael revitalizam e o sorriso no rosto ganha espaço! E a
                    turbulência da pandemia aparece atormentando uma nação
                    inteira. ( É… a vida é mesmo um jogo desafiador!)
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-20 grid items-start gap-10 md:grid-cols-2 lg:gap-16">
              <div className="w-full order-2 md:order-1">
                <div className="mx-auto max-w-2xl text-neutral-700">
                  <p className="text-base md:text-lg leading-8 text-justify">
                    Neste mesmo ano o Manda não consegue manter sua equipe
                    inicial, e reduz drasticamente para apenas os integrantes da
                    família. Raphael na administração e como garçom, Daniela
                    assumindo a cozinha, Vó Marilda nos detalhes de reposição e
                    arrumação do espaço e Tia Cristina na decoração, se tornando
                    um lugar que sobreviveu através da persistência.
                  </p>

                  <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                    Em 2023 surge a parceria entre Raphael e Mayara Dornas, e
                    inauguram o Manda Bar, com o sonho de fazer desse espaço uma
                    casa que movimente a energia da alegria, do amor, da
                    transformação, da arte e do teatro. Dornas é atriz e com o
                    desejo do encontro é que o espaço passa a ganhar formato de
                    “eventos particulares” e “ocasiões especiais”, oferecendo ao
                    público um espaço exclusivo e um menu personalizado.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-20 max-w-5xl border-t border-[#b08b4a]/20 pt-12">
              <div className="mx-auto max-w-3xl text-neutral-700">
                <p className="text-base md:text-lg leading-8 text-justify">
                  Atualmente seguimos com mais parceiros na equipe do Manda, no
                  entanto, ainda somos uma estrutura pequena e gerida pela
                  família, e é neste momento que o Bistrô entra em cena e
                  passamos a ser nominados como MANDA CAFÉ BISTRÔ.
                </p>

                <p className="mt-6 text-base md:text-lg leading-8 text-justify">
                  Criamos este site como um registro histórico da família e como
                  agradecimento aos nossos ancestrais que se foram e aos
                  familiares que ainda estão conosco. Valorizar histórias é
                  fundamental para entendermos de onde viemos e para onde
                  queremos caminhar.
                </p>
              </div>
            </div>
          </div>

          {/* FECHAMENTO VISUAL */}
          <div className="mx-auto mt-24 max-w-5xl border-y border-[#b08b4a]/20 py-12 text-center">
            <p className="font-lobster text-3xl md:text-4xl text-[#b08b4a]">
              Muito obrigada à você que chegou até aqui!!! Esperamos te conhecer
              em breve, para que possamos trocar e contar histórias.
            </p>
          </div>
        </div>
      </section>

      {openVideo && (
        <VideoModal src={videocasa} onClose={() => setOpenVideo(false)} />
      )}
    </div>
  );
}

export default House;
