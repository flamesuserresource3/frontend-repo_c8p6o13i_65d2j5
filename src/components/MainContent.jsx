import React from 'react';
import { Tooth, Droplets, Thermometer, User, HeartPulse, Shield, Video, FileText, Calendar, CreditCard } from 'lucide-react';

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <h2 className="text-2xl font-semibold tracking-tight text-black [font-family:'Comfortaa',Inter,_sans-serif] md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-black/70">{subtitle}</p>
      )}
    </div>
  );
}

function Specialty({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-white shadow-md">
        <Icon className="h-10 w-10 text-black" />
      </div>
      <span className="text-sm text-black/80">{label}</span>
    </div>
  );
}

function FeatureItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4">
      <div className="mt-1 rounded-md bg-black/5 p-2 text-black">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-black">{title}</h4>
        <p className="text-sm text-black/70">{desc}</p>
      </div>
    </div>
  );
}

function DoctorCard({ name, specialization, location, gender, available }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="mb-1 flex items-center justify-between">
        <div className="font-semibold text-black">{name}</div>
        {available && (
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">Available</span>
        )}
      </div>
      <div className="text-sm text-black/80">{specialization}</div>
      <div className="mt-1 text-sm text-black/60">{location} • {gender}</div>
    </div>
  );
}

export default function MainContent() {
  const specialties = [
    { icon: Tooth, label: 'Dental pain' },
    { icon: Droplets, label: 'Skin issues' },
    { icon: Thermometer, label: 'Cold, cough or fever' },
    { icon: User, label: 'Child not feeling well' },
    { icon: HeartPulse, label: 'Depression or anxiety' },
  ];

  const features = [
    { icon: Shield, title: 'Verified Doctors', desc: 'Licensed and vetted professionals only.' },
    { icon: Video, title: 'Video Consultations', desc: 'Secure, HD video calls from anywhere.' },
    { icon: FileText, title: 'Digital Records', desc: 'Prescriptions and history in one place.' },
    { icon: Calendar, title: 'Flexible Scheduling', desc: 'Book at times that fit your day.' },
    { icon: Shield, title: 'Secure & Private', desc: 'Industry-grade encryption across the stack.' },
    { icon: CreditCard, title: 'Secure Payments', desc: 'Safe, fast, and compliant billing.' },
  ];

  const doctors = [
    { name: 'Dr. Aisha Kapoor', specialization: 'Dermatologist', location: 'Mumbai, MH', gender: 'Female', available: true },
    { name: 'Dr. Rohan Mehta', specialization: 'Pediatrician', location: 'Delhi, DL', gender: 'Male', available: true },
    { name: 'Dr. Neha Sharma', specialization: 'Psychiatrist', location: 'Bengaluru, KA', gender: 'Female', available: false },
  ];

  return (
    <main className="w-full bg-[#F8F8F8]">
      {/* Specialties */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading
          title="Consult Top Doctors for Any Health Concern"
          subtitle="Private online consultations with verified doctors in all specialties."
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {specialties.map((s) => (
            <Specialty key={s.label} icon={s.icon} label={s.label} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading title="Why Choose Appoint'd?" />
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <FeatureItem key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </section>

      {/* Featured Doctors */}
      <section id="doctors" className="mx-auto max-w-7xl px-4 py-12">
        <h3 className="mb-6 text-xl font-semibold text-black [font-family:'Comfortaa',Inter,_sans-serif]">Featured Doctors</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {doctors.map((d) => (
            <DoctorCard key={d.name} {...d} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-black">For Patients</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li><a href="#" className="hover:text-black">Find Doctors</a></li>
              <li><a href="#" className="hover:text-black">Book Appointment</a></li>
              <li><a href="#" className="hover:text-black">Consult Online</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-black">For Doctors</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li><a href="#" className="hover:text-black">Join Appoint'd</a></li>
              <li><a href="#" className="hover:text-black">Doctor Dashboard</a></li>
              <li><a href="#" className="hover:text-black">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-black">Support</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li><a href="#" className="hover:text-black">Help Center</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms of Service</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-between">
            <div>
              <div className="mb-1 text-2xl font-semibold tracking-tight [font-family:'Comfortaa',Inter,_sans-serif]">appoint'd</div>
              <p className="text-sm text-black/70">AI-driven care that puts privacy first.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-black/10 py-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
            <div className="mb-1 text-xl font-semibold tracking-tight [font-family:'Comfortaa',Inter,_sans-serif]">appoint'd</div>
            <p className="text-xs text-black/60">© 2025 appoint'd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
