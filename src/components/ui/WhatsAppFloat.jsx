// src/components/ui/WhatsAppFloat.jsx
import React from "react";
import whatsappImg from "../../assets/whatsapp.png"; // ajuste o caminho/nome

export default function WhatsAppFloat() {
  const phone = "5511988765337";
  const text = encodeURIComponent("Olá! Vim pelo site do Manda Café");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed z-[9999] bottom-4 right-4"
    >
      <img
        src={whatsappImg}
        alt="WhatsApp"
        className="
          w-16 sm:w-18 md:w-20
          h-auto
          drop-shadow-lg
          transition-transform duration-300
          hover:scale-110
          active:scale-105
          select-none
        "
        draggable="false"
      />
    </a>
  );
}
