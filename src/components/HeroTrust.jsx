import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Brain, Lock } from 'lucide-react';

function TrustCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg transition-transform duration-200 hover:-translate-y-2">
      <div className="mb-3 flex items-center gap-2 text-white/90">
        <Icon className="h-5 w-5" />
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-white/80">{desc}</p>
    </div>
  );
}

export default function HeroTrust() {
  return (
    <section className="relative w-full bg-black">
      <div className="relative mx-auto h-[420px] max-w-7xl overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Overlay Content */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4">
            <div className="max-w-xl text-white">
              <h1 className="mb-3 text-3xl font-bold tracking-tight [font-family:'Comfortaa',Inter,_sans-serif] md:text-4xl">
                Your Health, Secured by Design.
              </h1>
              <p className="mb-6 max-w-lg text-white/85">
                Private, AI-assisted telemedicine with end-to-end encryption and fully verified doctors.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <TrustCard
                icon={ShieldCheck}
                title="NMC-Verified Doctors"
                desc="Every doctor is 100% verified, licensed, and vetted for expertise."
              />
              <TrustCard
                icon={Brain}
                title="AI-Powered Triage"
                desc="Our AI symptom checker guides you to the right specialist, saving you time."
              />
              <TrustCard
                icon={Lock}
                title="Secure & Private"
                desc="All consultations and records are end-to-end encrypted. Your data is yours."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
