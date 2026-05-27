"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Sparkles, Leaf, Star, CheckCircle, CalendarDays } from "lucide-react";

const services = [
  {
    title: "Facial Services",
    items: [
      ["Signature Facial", "$85", "Customized relaxing facial including cleanse, exfoliation, mask, massage & finishing products."],
      ["Dermaplane Facial", "$100", "Dermaplaning with a customized facial for smooth, glowing skin."],
      ["Microneedling", "$180", "Face only treatment for skin renewal and texture support."],
      ["Microneedling Package", "$500", "3 sessions. Best for acne scars, texture & fine lines."],
    ],
  },
  {
    title: "Brow Services",
    items: [
      ["Brow Wax", "$20", "Clean shaping for a polished look."],
      ["Brow Tint", "$20", "Soft color enhancement for fuller-looking brows."],
      ["Brow Wax + Tint", "$35", "Shape and color in one appointment."],
      ["Brow Lamination", "$65", "Smooth, lifted, fuller-looking brows."],
      ["Brow Lamination + Tint", "$75", "Lift plus color for a soft glam finish."],
      ["Brow Lamination + Wax + Tint", "$85", "The full brow transformation."],
    ],
  },
  {
    title: "Lash Services",
    items: [
      ["Korean Lash Lift", "$70", "A lifted, natural lash look without extensions."],
      ["Korean Lash Lift + Tint", "$80", "Lifted lashes with darker definition."],
    ],
  },
];

function LogoMark() {
  return (
    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-amber-300/60 bg-gradient-to-br from-[#8a654e] to-[#4a2d1f] shadow-2xl shadow-amber-900/30">
      <div className="absolute inset-2 rounded-[1.6rem] border border-amber-200/30" />
      <Leaf className="absolute left-4 top-9 h-7 w-7 -rotate-12 text-amber-200" />
      <span className="font-serif text-6xl leading-none text-amber-100 drop-shadow">A</span>
      <Sparkles className="absolute right-4 top-5 h-5 w-5 text-amber-200" />
    </div>
  );
}

export default function AnnisaAestheticsWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2b1b14] text-[#fff5e8]">
      <section className="relative min-h-screen px-5 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#8a5f3f55,transparent_40%),linear-gradient(135deg,#2b1b14,#4b3022_45%,#21130e)]" />
        <div className="absolute -left-28 top-20 h-[480px] w-[480px] rounded-full border border-amber-300/20" />
        <div className="absolute -right-32 bottom-8 h-[520px] w-[520px] rounded-full border border-amber-300/20" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <nav className="flex items-center justify-between rounded-full border border-amber-200/15 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-200 text-xl font-bold text-[#3b2418]">A</div>
              <div>
                <p className="font-serif text-xl tracking-[0.18em] text-amber-100">ANNISA</p>
                <p className="text-xs uppercase tracking-[0.28em] text-amber-100/65">Skin Care & Facials</p>
              </div>
            </div>
            <a href="tel:4799739267" className="hidden rounded-full bg-amber-200 px-5 py-3 text-sm font-semibold text-[#3b2418] shadow-lg shadow-black/20 sm:inline-flex">Call / Text</a>
          </nav>

          <div className="grid min-h-[78vh] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-white/5 px-4 py-2 text-sm text-amber-100/90">
                <Star className="h-4 w-4 fill-amber-200 text-amber-200" /> Reveal Your Natural Glow
              </div>
              <h1 className="font-serif text-6xl leading-[0.95] tracking-wide text-amber-100 sm:text-7xl lg:text-8xl">Annisa</h1>
              <h2 className="mt-4 text-2xl font-light uppercase tracking-[0.38em] text-amber-100/80 sm:text-3xl">Skin Care & Facials</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#f7e7d6]/80">Luxury facials, brow services, and Korean lash lifts designed to make every client feel fresh, confident, and naturally beautiful. Annisa provides private at-home beauty appointments in a clean, comfortable home studio setting.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="tel:4799739267" className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-200 px-7 py-4 text-base font-bold text-[#3b2418] shadow-xl shadow-black/30 transition hover:scale-[1.02]">
                  <Phone className="h-5 w-5" /> (479) 973-9267
                </a>
                <a href="https://instagram.com/annisa_aesthetics" className="inline-flex items-center justify-center gap-3 rounded-full border border-amber-200/30 bg-white/5 px-7 py-4 text-base font-semibold text-amber-100 backdrop-blur transition hover:bg-white/10">
                  @annisa_aesthetics
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative">
              <div className="rounded-[3rem] border border-amber-200/20 bg-gradient-to-br from-[#6f4b37]/90 to-[#2f1d15]/90 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <LogoMark />
                <div className="mt-8 text-center">
                  <p className="font-serif text-5xl tracking-[0.25em] text-amber-100">ANNISA</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.5em] text-amber-100/70">Beauty Menu</p>
                </div>
                <div className="mt-8 space-y-4">
                  {["Signature facials", "Dermaplaning glow", "Brow lamination", "Korean lash lift"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/6 p-4">
                      <CheckCircle className="h-5 w-5 text-amber-200" />
                      <span className="text-lg text-[#fff4e6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3e2d0] px-5 py-20 text-[#2c1a12] sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#8c6549]">Services</p>
          <h2 className="mt-3 font-serif text-5xl text-[#3b2418]">Price List</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6f4b37]">Clean, simple pricing with premium care. Book through phone or Instagram.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-7">
          {services.map((section) => (
            <div key={section.title} className="rounded-[2rem] border border-[#caa06e]/35 bg-[#fff8ef] p-6 shadow-xl shadow-[#8b5d3c]/10">
              <h3 className="mb-5 rounded-full bg-gradient-to-r from-[#d9b06d] to-[#fff0c5] py-3 text-center font-serif text-3xl tracking-[0.18em] text-[#4a2d1f]">{section.title}</h3>
              <div className="divide-y divide-[#d9b06d]/35">
                {section.items.map(([name, price, desc]) => (
                  <div key={name} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div className="text-left">
                      <p className="text-xl font-extrabold uppercase tracking-wide text-[#3b2418]">{name}</p>
                      <p className="mt-1 text-[#6f4b37]">{desc}</p>
                    </div>
                    <p className="text-left font-serif text-3xl font-bold text-[#7a522f] sm:text-right">{price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#8a5f3f55,transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl rounded-[3rem] border border-amber-200/20 bg-white/5 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-12">
          <CalendarDays className="mx-auto h-12 w-12 text-amber-200" />
          <h2 className="mt-5 font-serif text-5xl text-amber-100">Book Your Glow</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#f7e7d6]/80">Call, text, or message on Instagram to ask about availability and appointments. Services are provided from a private home studio for a calm and personalized experience.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:4799739267" className="rounded-full bg-amber-200 px-8 py-4 text-lg font-bold text-[#3b2418]">Call / Text: (479) 973-9267</a>
            <a href="https://instagram.com/annisa_aesthetics" className="rounded-full border border-amber-200/30 px-8 py-4 text-lg font-bold text-amber-100">Instagram</a>
          </div>
        </div>
      </section>
    </main>
  );
}
