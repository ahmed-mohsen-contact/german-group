import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Layers,
  Menu,
  X,
  CheckCircle2,
  Wrench,
  Building2,
  DoorOpen,
  PanelsTopLeft,
  Sparkles,
  ChevronUp,
} from "lucide-react";

const PROJECT_IMG_1 = "./assets/img1.png"
const PROJECT_IMG_2 = "./assets/img2.png"
const PROJECT_IMG_3 = "./assets/img3.png"
const PROJECT_IMG_4 = "./assets/img4.png"

const LOGO_SRC = "./assets/logo.jng";
const PHONE_DISPLAY = "01279734467";
const PHONE_TEL = "+201279734467";
const WHATSAPP_LINK = "https://wa.me/201279734467";

/* -------------------------------------------------------------
   Signature element: "Slats" — echoes the louvre/blind blades in
   the GE mark and the physical product itself (roller shutters).
   Used as a divider, a hover accent, and hero decoration.
------------------------------------------------------------- */
function Slats({ className = "", tone = "brand" }) {
  const gradients = {
    brand: [
      "linear-gradient(100deg,#0B6FA0 0%,#17A6D6 45%,#7FE3FF 100%)",
      "linear-gradient(100deg,#0A5A85 0%,#0B6FA0 60%,#17A6D6 100%)",
      "linear-gradient(100deg,#083F5C 0%,#0A5A85 55%,#0B6FA0 100%)",
    ],
    metal: [
      "linear-gradient(100deg,#8B98A0 0%,#D7DEE2 45%,#F3F6F7 100%)",
      "linear-gradient(100deg,#6E7B83 0%,#9AA6AC 55%,#C7CFD3 100%)",
      "linear-gradient(100deg,#57646B 0%,#7B878D 55%,#A4AEB2 100%)",
    ],
  };
  const g = gradients[tone];
  return (
    <div className={`flex flex-col gap-0.75 ${className}`} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-2 md:h-2.5"
          style={{
            width: `${100 - i * 16}%`,
            background: g[i],
            clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0 100%)",
          }}
        />
      ))}
    </div>
  );
}

function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
      <Slats className="w-10" tone="brand" />
      <span
        className="text-sm tracking-wide font-bold uppercase"
        style={{ color: "#0B6FA0", fontFamily: "Cairo, sans-serif" }}
      >
        {children}
      </span>
    </div>
  );
}

/* Window-frame card: thin cross-bar border + corner joinery marks,
   echoing a real UPVC window frame / mullion. */
function FrameCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative">
      <div
        className="absolute -inset-px rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg,#17A6D6,#0B6FA0)",
        }}
      />
      <div className="relative bg-white border border-[#D7E2E8] rounded-sm p-7 h-full flex flex-col gap-4 transition-transform duration-300 group-hover:-translate-y-1">
        {/* corner joinery marks */}
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#0B6FA0]" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#0B6FA0]" />
        <div
          className="w-14 h-14 flex items-center justify-center rounded-sm"
          style={{ background: "linear-gradient(135deg,#EAF6FB,#D7EEF7)" }}
        >
          <Icon size={26} color="#0B6FA0" strokeWidth={1.8} />
        </div>
        <h3
          className="text-xl font-bold text-[#0A2E3F]"
          style={{ fontFamily: "Cairo, sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-[#4B6572] leading-8 text-[15px]" style={{ fontFamily: "Tajawal, sans-serif" }}>
          {desc}
        </p>
        <Slats className="w-16 mt-auto pt-2" tone="metal" />
      </div>
    </div>
  );
}

/* ============================================================
   FLOATING WHATSAPP BUTTON - ثابت ومتحرك
============================================================ */
function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    // إظهار/إخفاء الزر عند التمرير
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    // تأثير النبض المستمر
    const pulseInterval = setInterval(() => {
      setIsPulsing(prev => !prev);
    }, 2000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <>
      {/* زر الواتساب الثابت */}
      <div 
        className={`fixed bottom-8 left-6 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        {/* حلقة النبض الخارجية */}
        <div className="absolute inset-0 rounded-full animate-ping-slow">
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
              isPulsing ? 'bg-green-400/60 scale-150' : 'bg-green-400/30 scale-100'
            }`}
            style={{ animationDuration: '2s' }}
          />
        </div>

        {/* حلقة النبض الثانية */}
        <div className="absolute inset-0 rounded-full">
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-1000 delay-300 ${
              isPulsing ? 'bg-green-400/40 scale-125' : 'bg-green-400/20 scale-100'
            }`}
          />
        </div>

        {/* الزر الرئيسي */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
          style={{
            boxShadow: '0 10px 40px rgba(37, 211, 102, 0.4)',
          }}
        >
          {/* أيقونة الواتساب المتحركة */}
          <div className="relative">
            <MessageCircle 
              size={28} 
              className={`transition-transform duration-300 group-hover:rotate-12 ${
                isPulsing ? 'animate-bounce' : ''
              }`}
            />
            {/* نقطة الإشعار */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white" />
          </div>

          <div className="flex flex-col items-start">
            <span className="text-xs font-light opacity-90">تواصل معنا</span>
            <span className="text-sm font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
              واتساب مباشر
            </span>
          </div>

          {/* سهم صغير */}
          <ChevronUp 
            size={16} 
            className={`transition-transform duration-300 group-hover:-translate-y-1 ${
              isPulsing ? 'animate-bounce' : ''
            }`}
          />
        </a>

        {/* نص عائم صغير */}
        <div 
          className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0A2E3F] text-white px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ fontFamily: "Cairo, sans-serif" }}
        >
          💬 احجز استشارتك المجانية
        </div>
      </div>

      {/* إضافة أنماط مخصصة */}
      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float-whatsapp {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        .float-whatsapp {
          animation: float-whatsapp 2.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default function GermanEgyptSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#services", label: "منتجاتنا"  },
    { href: "#why", label: "ليه إحنا" },
    { href: "#gallery", label: "أعمالنا" },
    { href: "#contact", label: "اتصل بنا" },
  ];

  const services = [
    {
      icon: PanelsTopLeft,
      title: "الشتر (رول شتر) الألوماتيك",
      desc: "شتر ألوماتيك وميكانيكي بخامات ألمانية، عزل صوت وحرارة عالي، وتحكم كامل بالريموت أو المفتاح الحائطي.",
    },
    {
      icon: Layers,
      title: "نوافذ UPVC",
      desc: "بروفايلات UPVC أصلية بغرف عزل متعددة، زجاج دبل جلاس، وإغلاق محكم يوفر في فاتورة التكييف طول السنة.",
    },
    {
      icon: DoorOpen,
      title: "أبواب ألومنيوم وUPVC",
      desc: "أبواب رئيسية وداخلية بتصميمات عصرية، مقاومة للتآكل والصدأ، وتشطيبات تحاكي خامة الخشب أو المعدن.",
    },
    {
      icon: Building2,
      title: "واجهات زجاجية وكيرتن وول",
      desc: "تنفيذ واجهات المحلات والمباني الإدارية بالكامل، من التصميم للتركيب، بضمان استمرارية بعد التسليم.",
    },
  ];

  const whyUs = [
    { icon: ShieldCheck, title: "ضمان حقيقي", desc: "ضمان يصل حتى 10 سنوات على الخامة والتركيب." },
    { icon: Award, title: "خبرة ألمانية", desc: "خامات ومعايير تصنيع ألمانية معتمدة." },
    { icon: Wrench, title: "فريق تركيب محترف", desc: "فنيين متخصصين وتنفيذ في الميعاد المتفق عليه." },
    { icon: Sparkles, title: "خدمة ما بعد البيع", desc: "متابعة ودعم فني بعد التسليم بدون تكلفة إضافية." },
  ];

  const gallery = [
    {
      img: PROJECT_IMG_1,
      title: "نافذة UPVC مزدوجة بزخرفة زجاجية كلاسيك",
      tag: "تصميم فاخر",
      desc: "نافذتين UPVC بفتحة داخلية، بزجاج مزخرف برسومات ذهبية كلاسيك، مقاس حسب طلب العميل، مع عزل حراري وصوتي كامل.",
    },
    {
      img: PROJECT_IMG_2,
      title: "نافذة بانورامية UPVC - غرفة معيشة",
      tag: "إطلالة واسعة",
      desc: "تصميم بانورامي بفتحات علوية للتهوية وفتحتين سفليتين كبيرتين، بروفايل مقوّى يتحمل الاتساع مع إحكام غلق ممتاز.",
    },
    {
      img: PROJECT_IMG_3,
      title: "نافذة UPVC بقوس معماري - فيلا",
      tag: "لمسة معمارية",
      desc: "نافذة بقوس علوي مميز يناسب واجهات الفلل، مع فتحتين جانبيتين للتهوية وقطاع سفلي إضافي بإطلالة كاملة.",
    },
    {
      img: PROJECT_IMG_4,
      title: "باب سحاب UPVC زجاجي - فيلا بحديقة",
      tag: "باب سحاب عريض",
      desc: "باب سحاب بفتحتين عريضتين يطل على الحديقة والمسبح، خامة مقاومة للرطوبة والعوامل الجوية بحركة انزلاق سلسة.",
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#F4F8FA]" style={{ fontFamily: "Tajawal, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@300;400;500;700;900&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ================= زر الواتساب العائم ================= */}
      <FloatingWhatsApp />

      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur shadow-[0_2px_20px_rgba(10,46,63,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="جيرمان إيجيبت" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] font-bold text-[#0A2E3F] hover:text-[#0B6FA0] transition-colors"
                style={{ fontFamily: "Cairo, sans-serif" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-white text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: "#25D366", fontFamily: "Cairo, sans-serif" }}
            >
              <MessageCircle size={18} />
              واتساب
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-white text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(120deg,#0B6FA0,#17A6D6)", fontFamily: "Cairo, sans-serif" }}
            >
              <Phone size={18} />
              {PHONE_DISPLAY}
            </a>
          </div>

          <button
            className="md:hidden text-[#0A2E3F]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="فتح القائمة"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E3ECEF] px-5 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#0A2E3F] font-bold"
                style={{ fontFamily: "Cairo, sans-serif" }}
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 rounded-sm text-white font-bold text-sm"
                style={{ background: "#25D366" }}
              >
                واتساب
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex-1 text-center py-2.5 rounded-sm text-white font-bold text-sm"
                style={{ background: "#0B6FA0" }}
              >
                اتصل الآن
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg,#EAF6FB 0%,#F4F8FA 60%,#F4F8FA 100%)" }}
        />
        <div
          className="absolute -top-20 -right-24 w-96 h-96 rounded-full -z-10 opacity-35 blur-3xl"
          style={{ background: "radial-gradient(circle,#7FE3FF 0%,transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full -z-10 opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle,#0B6FA0 0%,transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-sm bg-white border border-[#D7E2E8]">
              <span className="w-2 h-2 rounded-full bg-[#17A6D6]" />
              <span className="text-xs font-bold text-[#0B6FA0]" style={{ fontFamily: "Cairo, sans-serif" }}>
                خامة ألمانية · تصنيع وتركيب في مصر
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-black text-[#0A2E3F] leading-[1.3] mb-6"
              style={{ fontFamily: "Cairo, sans-serif" }}
            >
              شتر وأبواب ونوافذ UPVC
              <br />
              تحمي بيتك بلمسة{" "}
              <span style={{ color: "#0B6FA0" }}>ألمانية</span>
            </h1>
            <p className="text-[#4B6572] text-lg leading-9 mb-8 max-w-xl mx-auto md:mx-0">
              جيرمان إيجيبت لتصنيع وتوريد وتركيب الشتر الألوماتيك ونوافذ وأبواب الـUPVC والألومنيوم،
              بخامات مطابقة للمواصفات الألمانية وضمان حقيقي بعد التركيب.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-white font-bold transition-transform hover:-translate-y-0.5"
                style={{ background: "#25D366", fontFamily: "Cairo, sans-serif" }}
              >
                <MessageCircle size={20} />
                اطلب عرض سعر واتساب
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm font-bold border-2 border-[#0B6FA0] text-[#0B6FA0] transition-transform hover:-translate-y-0.5"
                style={{ fontFamily: "Cairo, sans-serif" }}
              >
                <Phone size={20} />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 justify-center md:justify-start">
              {[
                ["+15", "سنة خبرة"],
                ["+5000", "مشروع"],
                ["10", "سنوات ضمان"],
              ].map(([num, label]) => (
                <div key={label} className="text-center md:text-right">
                  <div className="text-3xl font-black text-[#0A2E3F]" style={{ fontFamily: "Cairo, sans-serif" }}>
                    {num}
                  </div>
                  <div className="text-xs text-[#6E8894] font-bold mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual: stylized window frame with mullions + slats */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-sm bg-white border-[6px] border-[#0A2E3F] shadow-[0_30px_60px_rgba(10,46,63,0.18)]">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="border border-[#0A2E3F]/70 m-1.5 rounded-xs"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(23,166,214,0.28) 0%, rgba(10,46,63,0.06) 60%)",
                    }}
                  />
                ))}
              </div>
              <div className="absolute -bottom-6 -left-8 bg-white p-3 rounded-sm shadow-[0_15px_35px_rgba(10,46,63,0.15)] border border-[#E3ECEF]">
                <Slats className="w-24" tone="brand" />
              </div>
              <div className="absolute -top-5 -right-5 bg-[#0A2E3F] text-white px-4 py-2 rounded-sm text-xs font-bold flex items-center gap-2" style={{ fontFamily: "Cairo, sans-serif" }}>
                <ShieldCheck size={16} />
                ضمان 10 سنوات
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center md:text-right mb-14 max-w-2xl mx-auto md:mx-0">
            <SectionEyebrow>منتجاتنا</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2E3F]" style={{ fontFamily: "Cairo, sans-serif" }}>
              حلول متكاملة للنوافذ والأبواب والشتر
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <FrameCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section id="why" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg,#F4F8FA,#EAF6FB)" }} />
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <SectionEyebrow>ليه تختار جيرمان إيجيبت</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A2E3F] mb-6" style={{ fontFamily: "Cairo, sans-serif" }}>
                جودة ألمانية، تنفيذ مصري، ضمان حقيقي
              </h2>
              <p className="text-[#4B6572] leading-8 mb-8">
                من أول المعاينة والتصميم، لحد التصنيع والتركيب والمتابعة بعد التسليم، بنتعامل مع كل مشروع
                بمعايير جودة صارمة عشان نضمن لك عزل ممتاز وعمر افتراضي طويل.
              </p>
              <div className="space-y-4">
                {["معاينة ومقاس مجاني في موقعك", "أسعار تنافسية بدون وسطاء", "تسليم في الميعاد المتفق عليه"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={20} color="#0B6FA0" />
                      <span className="text-[#0A2E3F] font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {whyUs.map((w) => (
                <div key={w.title} className="bg-white border border-[#D7E2E8] rounded-sm p-6 text-center">
                  <div
                    className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-sm"
                    style={{ background: "linear-gradient(135deg,#0B6FA0,#17A6D6)" }}
                  >
                    <w.icon size={22} color="#fff" strokeWidth={1.8} />
                  </div>
                  <h4 className="font-bold text-[#0A2E3F] mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>
                    {w.title}
                  </h4>
                  <p className="text-[#6E8894] text-sm leading-6">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg,#FFFFFF 0%,#F2F9FC 45%,#E9F5FA 100%)" }}
        />
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full -z-10 opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle,#7FE3FF 0%,transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-16 w-96 h-96 rounded-full -z-10 opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle,#0B6FA0 0%,transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center md:text-right mb-14 max-w-2xl mx-auto md:mx-0">
            <SectionEyebrow>معرض أعمالنا</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2E3F]" style={{ fontFamily: "Cairo, sans-serif" }}>
              مشاريع حقيقية نفذناها لعملائنا
            </h2>
            <p className="text-[#4B6572] leading-8 mt-4 max-w-lg mx-auto md:mx-0">
              كل صورة من موقع تنفيذ فعلي، تقدر تتواصل معانا مباشرة على الواتساب لو عجبك تصميم معيّن
              وعايز نفس الفكرة في بيتك.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
            {gallery.map((g, i) => {
              const waMsg = encodeURIComponent(`مرحبًا جيرمان إيجيبت، شفت "${g.title}" في معرض الأعمال وحابب أستفسر عنه.`);
              const gradients = [
                "linear-gradient(135deg,#0B6FA0,#17A6D6)",
                "linear-gradient(135deg,#0A2E3F,#0B6FA0)",
                "linear-gradient(135deg,#17A6D6,#7FE3FF)",
                "linear-gradient(135deg,#083F5C,#17A6D6)",
              ];
              return (
                <div
                  key={g.title}
                  className="group bg-white rounded-md overflow-hidden border border-[#D7E2E8] shadow-[0_10px_30px_rgba(10,46,63,0.06)] flex flex-col transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(10,46,63,0.14)]"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={g.img}
                      alt={g.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-16 opacity-90"
                      style={{ background: "linear-gradient(0deg, rgba(10,46,63,0.55) 0%, transparent 100%)" }}
                    />
                    <span
                      className="absolute top-3 right-3 text-[11px] font-bold text-white px-3 py-1 rounded-sm"
                      style={{ background: gradients[i % gradients.length], fontFamily: "Cairo, sans-serif" }}
                    >
                      {g.tag}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3
                      className="font-bold text-[#0A2E3F] text-[15px] leading-7"
                      style={{ fontFamily: "Cairo, sans-serif" }}
                    >
                      {g.title}
                    </h3>
                    <p className="text-[#6E8894] text-[13px] leading-6 flex-1">{g.desc}</p>
                    <a
                      href={`${WHATSAPP_LINK}?text=${waMsg}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 mt-1 py-2.5 rounded-sm text-white text-sm font-bold transition-opacity hover:opacity-90"
                      style={{ background: "#25D366", fontFamily: "Cairo, sans-serif" }}
                    >
                      <MessageCircle size={16} />
                      تواصل بخصوص التصميم ده
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CONTACT / CTA ================= */}
      <section id="contact" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#0A2E3F" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div className="text-center md:text-right">
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <Slats className="w-10" tone="brand" />
              <span className="text-sm tracking-wide font-bold uppercase text-[#7FE3FF]" style={{ fontFamily: "Cairo, sans-serif" }}>
                جاهزين نبدأ مشروعك
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "Cairo, sans-serif" }}>
              احصل على معاينة ومقاس مجاني النهاردة
            </h2>
            <p className="text-[#AFC6D0] leading-8 mb-8 max-w-lg mx-auto md:mx-0">
              كلمنا على الواتساب أو اتصل بينا مباشرة، وهنبعتلك مهندس لمعاينة موقعك وتقديم عرض سعر
              مناسب بدون أي التزام.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-white font-bold transition-transform hover:-translate-y-0.5"
                style={{ background: "#25D366", fontFamily: "Cairo, sans-serif" }}
              >
                <MessageCircle size={20} />
                راسلنا على واتساب
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-white font-bold border-2 border-white/25 transition-transform hover:-translate-y-0.5"
                style={{ fontFamily: "Cairo, sans-serif" }}
              >
                <Phone size={20} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-sm p-8 backdrop-blur">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-sm bg-white/10 shrink-0">
                  <Phone size={20} color="#7FE3FF" />
                </div>
                <div>
                  <div className="text-white font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
                    اتصل بنا
                  </div>
                  <div dir="ltr" className="text-[#AFC6D0] text-sm mt-1 text-right">
                    {PHONE_DISPLAY}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-sm bg-white/10 shrink-0">
                  <MessageCircle size={20} color="#7FE3FF" />
                </div>
                <div>
                  <div className="text-white font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
                    واتساب
                  </div>
                  <div dir="ltr" className="text-[#AFC6D0] text-sm mt-1 text-right">
                    {PHONE_DISPLAY}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-sm bg-white/10 shrink-0">
                  <Clock size={20} color="#7FE3FF" />
                </div>
                <div>
                  <div className="text-white font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
                    مواعيد العمل
                  </div>
                  <div className="text-[#AFC6D0] text-sm mt-1">السبت – الخميس، 9 صباحًا – 8 مساءً</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-sm bg-white/10 shrink-0">
                  <MapPin size={20} color="#7FE3FF" />
                </div>
                <div>
                  <div className="text-white font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
                    نغطي جمهورية مصر العربية
                  </div>
                  <div className="text-[#AFC6D0] text-sm mt-1">معاينة وتركيب داخل وخارج القاهرة الكبرى</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 bg-[#071F2B]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={LOGO_SRC} alt="جيرمان إيجيبت" className="h-10 w-auto opacity-90" />
          <p className="text-[#6E8894] text-sm text-center">
            © {new Date().getFullYear()} جيرمان إيجيبت لتصنيع وتركيب الشتر و UPVC. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-white/5 hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} color="#7FE3FF" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Phone size={18} color="#7FE3FF" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}