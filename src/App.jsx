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

// استيراد الصور من مجلد assets
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import logo from './assets/logo.jpg';

// تعريف المتغيرات بالصور المستوردة
const PROJECT_IMG_1 = img1;
const PROJECT_IMG_2 = img2;
const PROJECT_IMG_3 = img3;
const PROJECT_IMG_4 = img4;
const LOGO_SRC = logo;

const PHONE_DISPLAY = "01279734467";
const PHONE_TEL = "+201279734467";
const WHATSAPP_LINK = "https://wa.me/201279734467";

/* -------------------------------------------------------------
   Signature element: "Slats" — echoes the louvre/blind blades
------------------------------------------------------------- */
function Slats({ className = "", tone = "brand" }) {
  const gradients = {
    brand: [
      "linear-gradient(100deg,#083F5C 0%,#0B6FA0 45%,#17A6D6 100%)",
      "linear-gradient(100deg,#062A40 0%,#083F5C 60%,#0B6FA0 100%)",
      "linear-gradient(100deg,#041D2E 0%,#062A40 55%,#083F5C 100%)",
    ],
    metal: [
      "linear-gradient(100deg,#4A5A63 0%,#8B98A0 45%,#D7DEE2 100%)",
      "linear-gradient(100deg,#3A4850 0%,#5A6A73 55%,#8B98A0 100%)",
      "linear-gradient(100deg,#2A3840 0%,#4A5A63 55%,#6E7B83 100%)",
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
    <div className="flex items-center gap-3 mb-3 justify-center">
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

/* FrameCard مع تحسينات */
function FrameCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative">
      <div
        className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg,#083F5C,#0B6FA0,#17A6D6)",
          boxShadow: "0 0 30px rgba(8,63,92,0.3)",
        }}
      />
      <div className="relative bg-white border border-[#D7E2E8] rounded-lg p-7 h-full flex flex-col items-center text-center gap-4 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
        {/* corner joinery marks */}
        <span className="absolute top-0 right-0 w-4 h-4 border-t-3 border-r-3 border-[#083F5C] opacity-70" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-3 border-l-3 border-[#083F5C] opacity-70" />
        
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
          style={{ background: "linear-gradient(135deg,#062A40,#0B6FA0)" }}
        >
          <Icon size={28} color="#FFFFFF" strokeWidth={1.8} />
        </div>
        
        <h3
          className="text-xl font-bold text-[#062A40] mt-2"
          style={{ fontFamily: "Cairo, sans-serif" }}
        >
          {title}
        </h3>
        
        <p className="text-[#4A5A63] leading-7 text-[15px]">
          {desc}
        </p>
        
        <Slats className="w-20 mt-auto pt-2" tone="metal" />
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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

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
      <div 
        className={`fixed bottom-8 left-6 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <div className="absolute inset-0 rounded-full animate-ping-slow">
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
              isPulsing ? 'bg-green-400/60 scale-150' : 'bg-green-400/30 scale-100'
            }`}
            style={{ animationDuration: '2s' }}
          />
        </div>

        <div className="absolute inset-0 rounded-full">
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-1000 delay-300 ${
              isPulsing ? 'bg-green-400/40 scale-125' : 'bg-green-400/20 scale-100'
            }`}
          />
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
          style={{
            boxShadow: '0 10px 40px rgba(37, 211, 102, 0.4)',
          }}
        >
          <div className="relative">
            <MessageCircle 
              size={28} 
              className={`transition-transform duration-300 group-hover:rotate-12 ${
                isPulsing ? 'animate-bounce' : ''
              }`}
            />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white" />
          </div>

          <div className="flex flex-col items-start">
            <span className="text-xs font-light opacity-90">تواصل معنا</span>
            <span className="text-sm font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
              واتساب مباشر
            </span>
          </div>

          <ChevronUp 
            size={16} 
            className={`transition-transform duration-300 group-hover:-translate-y-1 ${
              isPulsing ? 'animate-bounce' : ''
            }`}
          />
        </a>

        <div 
          className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-[#062A40] text-white px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ fontFamily: "Cairo, sans-serif" }}
        >
          💬 احجز استشارتك المجانية
        </div>
      </div>

      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
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

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#services", label: "منتجاتنا" },
    { href: "#why", label: "ليه إحنا" },
    { href: "#gallery", label: "أعمالنا" },
    { href: "#contact", label: "اتصل بنا" },
  ];

  const services = [
    {
      icon: PanelsTopLeft,
      title: "الشتر الألوماتيك",
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
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #EAF6FB;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg,#083F5C,#0B6FA0);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #062A40;
        }
      `}</style>

      {/* زر الواتساب العائم */}
      <FloatingWhatsApp />

      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#062A40]/95 backdrop-blur shadow-[0_4px_30px_rgba(6,42,64,0.3)]" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, '#home')} 
            className="flex items-center gap-3"
          >
            <img src={LOGO_SRC} alt="جيرمان إيجيبت" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleSmoothScroll(e, l.href)}
                className="text-[15px] font-bold text-white hover:text-[#7FE3FF] transition-all duration-300 hover:scale-105 relative group"
                style={{ fontFamily: "Cairo, sans-serif" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7FE3FF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "#25D366", fontFamily: "Cairo, sans-serif" }}
            >
              <MessageCircle size={18} />
              واتساب
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "linear-gradient(120deg,#083F5C,#0B6FA0)", fontFamily: "Cairo, sans-serif" }}
            >
              <Phone size={18} />
              {PHONE_DISPLAY}
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="فتح القائمة"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#062A40] border-t border-[#0B6FA0]/30 px-5 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleSmoothScroll(e, l.href)}
                className="text-white font-bold hover:text-[#7FE3FF] transition-colors"
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
                className="flex-1 text-center py-2.5 rounded-lg text-white font-bold text-sm"
                style={{ background: "#25D366" }}
              >
                واتساب
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex-1 text-center py-2.5 rounded-lg text-white font-bold text-sm"
                style={{ background: "#083F5C" }}
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
          style={{ background: "radial-gradient(circle,#17A6D6 0%,transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full -z-10 opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle,#083F5C 0%,transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur border border-[#D7E2E8] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0B6FA0] animate-pulse" />
              <span className="text-xs font-bold text-[#083F5C]" style={{ fontFamily: "Cairo, sans-serif" }}>
                خامة ألمانية · تصنيع وتركيب في مصر
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-black text-[#062A40] leading-[1.3] mb-6"
              style={{ fontFamily: "Cairo, sans-serif" }}
            >
              شتر وأبواب ونوافذ UPVC
              <br />
              تحمي بيتك بلمسة{" "}
              <span className="bg-gradient-to-l from-[#083F5C] to-[#0B6FA0] bg-clip-text text-transparent">
                ألمانية
              </span>
            </h1>
            <p className="text-[#4A5A63] text-lg leading-9 mb-8 max-w-xl mx-auto md:mx-0">
              جيرمان إيجيبت لتصنيع وتوريد وتركيب الشتر الألوماتيك ونوافذ وأبواب الـUPVC والألومنيوم،
              بخامات مطابقة للمواصفات الألمانية وضمان حقيقي بعد التركيب.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "#25D366", fontFamily: "Cairo, sans-serif" }}
              >
                <MessageCircle size={20} />
                اطلب عرض سعر واتساب
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold border-2 border-[#083F5C] text-[#083F5C] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#083F5C] hover:text-white"
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
                  <div className="text-3xl font-black text-[#062A40]" style={{ fontFamily: "Cairo, sans-serif" }}>
                    {num}
                  </div>
                  <div className="text-xs text-[#6E8894] font-bold mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-lg bg-white border-[6px] border-[#062A40] shadow-[0_30px_60px_rgba(6,42,64,0.25)]">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="border border-[#062A40]/60 m-1.5 rounded-sm"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(11,111,160,0.15) 0%, rgba(6,42,64,0.05) 60%)",
                    }}
                  />
                ))}
              </div>
              <div className="absolute -bottom-6 -left-8 bg-white p-3 rounded-lg shadow-[0_15px_35px_rgba(6,42,64,0.15)] border border-[#E3ECEF]">
                <Slats className="w-24" tone="brand" />
              </div>
              <div className="absolute -top-5 -right-5 bg-[#062A40] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg" style={{ fontFamily: "Cairo, sans-serif" }}>
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
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <SectionEyebrow>منتجاتنا</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-[#062A40]" style={{ fontFamily: "Cairo, sans-serif" }}>
              حلول متكاملة للنوافذ والأبواب والشتر
            </h2>
            <p className="text-[#4A5A63] mt-4 text-lg">
              نوفر لك أحدث الحلول في عالم النوافذ والأبواب بجودة ألمانية مضمونة
            </p>
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
              <h2 className="text-3xl md:text-4xl font-black text-[#062A40] mb-6" style={{ fontFamily: "Cairo, sans-serif" }}>
                جودة ألمانية، تنفيذ مصري، ضمان حقيقي
              </h2>
              <p className="text-[#4A5A63] leading-8 mb-8">
                من أول المعاينة والتصميم، لحد التصنيع والتركيب والمتابعة بعد التسليم، بنتعامل مع كل مشروع
                بمعايير جودة صارمة عشان نضمن لك عزل ممتاز وعمر افتراضي طويل.
              </p>
              <div className="space-y-4">
                {["معاينة ومقاس مجاني في موقعك", "أسعار تنافسية بدون وسطاء", "تسليم في الميعاد المتفق عليه"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-6 h-6 rounded-full bg-[#083F5C]/10 flex items-center justify-center group-hover:bg-[#083F5C] transition-colors duration-300">
                        <CheckCircle2 size={16} className="text-[#083F5C] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-[#062A40] font-medium group-hover:text-[#083F5C] transition-colors">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {whyUs.map((w) => (
                <div key={w.title} className="bg-white border border-[#D7E2E8] rounded-lg p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0B6FA0] group">
                  <div
                    className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg,#062A40,#0B6FA0)" }}
                  >
                    <w.icon size={22} color="#fff" strokeWidth={1.8} />
                  </div>
                  <h4 className="font-bold text-[#062A40] mb-2 text-lg" style={{ fontFamily: "Cairo, sans-serif" }}>
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
          style={{ background: "radial-gradient(circle,#17A6D6 0%,transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-16 w-96 h-96 rounded-full -z-10 opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle,#083F5C 0%,transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <SectionEyebrow>معرض أعمالنا</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-[#062A40]" style={{ fontFamily: "Cairo, sans-serif" }}>
              مشاريع حقيقية نفذناها لعملائنا
            </h2>
            <p className="text-[#4A5A63] leading-8 mt-4 max-w-lg mx-auto">
              كل صورة من موقع تنفيذ فعلي، تقدر تتواصل معانا مباشرة على الواتساب لو عجبك تصميم معيّن
              وعايز نفس الفكرة في بيتك.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
            {gallery.map((g, i) => {
              const waMsg = encodeURIComponent(`مرحبًا جيرمان إيجيبت، شفت "${g.title}" في معرض الأعمال وحابب أستفسر عنه.`);
              const gradients = [
                "linear-gradient(135deg,#083F5C,#0B6FA0)",
                "linear-gradient(135deg,#062A40,#083F5C)",
                "linear-gradient(135deg,#0B6FA0,#17A6D6)",
                "linear-gradient(135deg,#041D2E,#083F5C)",
              ];
              return (
                <div
                  key={g.title}
                  className="group bg-white rounded-xl overflow-hidden border border-[#D7E2E8] shadow-[0_10px_30px_rgba(6,42,64,0.06)] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(6,42,64,0.15)] hover:border-[#0B6FA0]"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={g.img}
                      alt={g.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-20 opacity-90"
                      style={{ background: "linear-gradient(0deg, rgba(6,42,64,0.7) 0%, transparent 100%)" }}
                    />
                    <span
                      className="absolute top-4 right-4 text-[11px] font-bold text-white px-3 py-1.5 rounded-full shadow-lg"
                      style={{ background: gradients[i % gradients.length], fontFamily: "Cairo, sans-serif" }}
                    >
                      {g.tag}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3
                      className="font-bold text-[#062A40] text-[15px] leading-7 text-center"
                      style={{ fontFamily: "Cairo, sans-serif" }}
                    >
                      {g.title}
                    </h3>
                    <p className="text-[#6E8894] text-[13px] leading-6 flex-1 text-center">{g.desc}</p>
                    <a
                      href={`${WHATSAPP_LINK}?text=${waMsg}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 mt-2 py-2.5 rounded-lg text-white text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
      <section id="contact" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#062A40" }}>
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
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "#25D366", fontFamily: "Cairo, sans-serif" }}
              >
                <MessageCircle size={20} />
                راسلنا على واتساب
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white font-bold border-2 border-white/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                style={{ fontFamily: "Cairo, sans-serif" }}
              >
                <Phone size={20} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur transition-all duration-300 hover:bg-white/10">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 shrink-0 transition-all duration-300 group-hover:bg-[#0B6FA0] group-hover:scale-110">
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
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 shrink-0 transition-all duration-300 group-hover:bg-[#0B6FA0] group-hover:scale-110">
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
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 shrink-0 transition-all duration-300 group-hover:bg-[#0B6FA0] group-hover:scale-110">
                  <Clock size={20} color="#7FE3FF" />
                </div>
                <div>
                  <div className="text-white font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
                    مواعيد العمل
                  </div>
                  <div className="text-[#AFC6D0] text-sm mt-1">السبت – الخميس، 9 صباحًا – 8 مساءً</div>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 shrink-0 transition-all duration-300 group-hover:bg-[#0B6FA0] group-hover:scale-110">
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
      <footer className="py-10 bg-[#041D2E]">
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
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#25D366] transition-all duration-300 hover:scale-110"
            >
              <MessageCircle size={18} color="#7FE3FF" className="transition-colors duration-300 group-hover:text-white" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#0B6FA0] transition-all duration-300 hover:scale-110"
            >
              <Phone size={18} color="#7FE3FF" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}