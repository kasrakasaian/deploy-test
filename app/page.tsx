"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      hero: {
        title: "Advanced Brain Signal Analysis",
        subtitle:
          "Cutting-edge EEG analysis and neurological insights for healthcare professionals worldwide",
        requestConsultation: "Request Consultation",
        learnMore: "Learn More",
      },
      features: {
        title: "Why Choose NeuroTech",
        subtitle:
          "We provide unparalleled accuracy and reliability in brain signal analysis",
        fdaCompliant: "FDA Compliant",
        fdaDesc:
          "Clinical-grade equipment meeting all regulatory standards for medical device compliance and patient safety protocols",
        expertAnalysis: "Expert Analysis",
        expertDesc:
          "Board-certified neurologists and data scientists with decades of combined experience in neurological diagnostics",
        precision: "Precision Technology",
        precisionDesc:
          "Advanced signal processing algorithms and machine learning models for accurate pattern recognition",
      },
      services: {
        title: "Our Services",
        subtitle:
          "Comprehensive EEG analysis solutions for medical professionals",
        eegTitle: "EEG Interpretation",
        eegDesc:
          "Our expert neurologists provide comprehensive analysis of electroencephalogram data, identifying patterns, anomalies, and potential indicators of neurological conditions with unmatched precision.",
        insightsTitle: "Neurological Insights",
        insightsDesc:
          "Advanced analytics and machine learning algorithms extract meaningful insights from complex brain signal data, supporting research and treatment of various neurological disorders.",
      },
      technology: {
        title: "State-of-the-Art Technology",
        subtitle:
          "Our cutting-edge hardware and software solutions ensure the highest quality data acquisition and analysis, meeting the demanding requirements of modern healthcare.",
        electrodes: "High-Density Electrode Arrays",
        electrodesDesc:
          "Advanced multi-channel recording systems for comprehensive brain activity mapping",
        signal: "Low-Noise Signal Amplification",
        signalDesc:
          "Superior signal quality with minimal interference for accurate data collection",
        portable: "Portable and Stationary Options",
        portableDesc:
          "Flexible solutions for various clinical environments and patient needs",
        accuracy: "Accuracy Rate",
        accuracyDesc:
          "Industry-leading precision in EEG signal analysis and pattern recognition",
      },
      about: {
        title: "About NeuroTech",
        description:
          "Founded by a team of world-renowned neurologists and data scientists, NeuroTech represents the pinnacle of neurological analysis technology. Our mission is to advance brain health through innovative analysis solutions.",
        experience: "Years Experience",
        patients: "Patients Analyzed",
        partners: "Healthcare Partners",
      },
      contact: {
        title: "Get Started Today",
        subtitle:
          "Ready to revolutionize your neurological analysis capabilities? Contact our team of experts for a personalized consultation.",
        contactInfo: "Contact Information",
        email: "Email",
        phone: "Phone",
        responseTime: "Response Time",
        responseValue: "Within 24 hours",
        schedule: "Schedule Consultation",
        scheduleDesc:
          "Our specialists are ready to discuss your specific requirements and demonstrate how our technology can enhance your practice.",
        requestFree: "Request Free Consultation",
      },
    },
    fa: {
      hero: {
        title: "تحلیل پیشرفته سیگنال‌های مغز",
        subtitle:
          "تحلیل EEG پیشرفته و بینش‌های عصبی برای متخصصان بهداشت در سراسر جهان",
        requestConsultation: "درخواست مشاوره",
        learnMore: "بیشتر بدانید",
      },
      features: {
        title: "چرا نیوروتک را انتخاب کنید",
        subtitle:
          "ما دقت و قابلیت اطمینان بی‌نظیری در تحلیل سیگنال‌های مغز ارائه می‌دهیم",
        fdaCompliant: "تایید FDA",
        fdaDesc:
          "تجهیزات درجه بالینی که تمام استانداردهای نظارتی برای انطباق دستگاه‌های پزشکی و پروتکل‌های ایمنی بیمار را رعایت می‌کند",
        expertAnalysis: "تحلیل متخصص",
        expertDesc:
          "متخصصان اعصاب و دانشمندان داده با دهه‌ها تجربه ترکیبی در تشخیص‌های عصبی",
        precision: "فناوری دقیق",
        precisionDesc:
          "الگوریتم‌های پردازش سیگنال پیشرفته و مدل‌های یادگیری ماشین برای تشخیص دقیق الگو",
      },
      services: {
        title: "خدمات ما",
        subtitle: "راه‌حل‌های جامع تحلیل EEG برای متخصصان پزشکی",
        eegTitle: "تفسیر EEG",
        eegDesc:
          "متخصصان اعصاب ما تحلیل جامعی از داده‌های الکتروانسفالوگرام ارائه می‌دهند و الگوها، ناهنجاری‌ها و شاخص‌های بالقوه شرایط عصبی را با دقت بی‌نظیر شناسایی می‌کنند.",
        insightsTitle: "بینش‌های عصبی",
        insightsDesc:
          "تجزیه و تحلیل پیشرفته و الگوریتم‌های یادگیری ماشین بینش‌های معناداری از داده‌های پیچیده سیگنال مغز استخراج می‌کنند.",
      },
      technology: {
        title: "فناوری پیشرفته",
        subtitle:
          "راه‌حل‌های سخت‌افزاری و نرم‌افزاری پیشرفته ما بالاترین کیفیت جمع‌آوری و تحلیل داده را تضمین می‌کند.",
        electrodes: "آرایه‌های الکترود با چگالی بالا",
        electrodesDesc:
          "سیستم‌های ضبط چند کاناله پیشرفته برای نقشه‌برداری جامع فعالیت مغز",
        signal: "تقویت سیگنال کم نویز",
        signalDesc: "کیفیت سیگنال برتر با حداقل تداخل برای جمع‌آوری دقیق داده",
        portable: "گزینه‌های قابل حمل و ثابت",
        portableDesc:
          "راه‌حل‌های انعطاف‌پذیر برای محیط‌های بالینی مختلف و نیازهای بیمار",
        accuracy: "نرخ دقت",
        accuracyDesc: "دقت پیشرو در صنعت در تحلیل سیگنال EEG و تشخیص الگو",
      },
      about: {
        title: "درباره نیوروتک",
        description:
          "نیوروتک که توسط تیمی از متخصصان اعصاب و دانشمندان داده مشهور جهان تأسیس شده است، نماینده اوج فناوری تحلیل عصبی است. مأموریت ما پیشبرد سلامت مغز از طریق راه‌حل‌های تحلیلی نوآورانه است.",
        experience: "سال تجربه",
        patients: "بیمار تحلیل شده",
        partners: "شرکای بهداشتی",
      },
      contact: {
        title: "همین امروز شروع کنید",
        subtitle:
          "آماده انقلاب در قابلیت‌های تحلیل عصبی خود هستید؟ با تیم متخصصان ما برای مشاوره شخصی تماس بگیرید.",
        contactInfo: "اطلاعات تماس",
        email: "ایمیل",
        phone: "تلفن",
        responseTime: "زمان پاسخ",
        responseValue: "ظرف ۲۴ ساعت",
        schedule: "زمان‌بندی مشاوره",
        scheduleDesc:
          "متخصصان ما آماده بحث در مورد نیازهای خاص شما و نمایش اینکه چگونه فناوری ما می‌تواند عملکرد شما را بهبود بخشد، هستند.",
        requestFree: "درخواست مشاوره رایگان",
      },
    },
  };

  const t = translations[language as keyof typeof translations];
  const isRTL = language === "fa";

  return (
    <div
      className={`min-h-screen flex flex-col ${isRTL ? "font-persian" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header language={language} setLanguage={setLanguage} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-7xl md:text-8xl font-bold text-blue-900 mb-8 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-blue-800 text-white font-semibold py-5 px-10 rounded-xl hover:bg-blue-700 transition-all shadow-xl text-lg">
                  {t.hero.requestConsultation}
                </button>
                <button className="border-2 border-blue-800 text-blue-800 font-semibold py-5 px-10 rounded-xl hover:bg-blue-800 hover:text-white transition-all text-lg">
                  {t.hero.learnMore}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {t.features.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.features.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-8 rounded-2xl bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t.features.fdaCompliant}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t.features.fdaDesc}
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t.features.expertAnalysis}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t.features.expertDesc}
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t.features.precision}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t.features.precisionDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {t.services.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-blue-800 mb-6">
                  {t.services.eegTitle}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {t.services.eegDesc}
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Seizure pattern identification</li>
                  <li>• Sleep disorder analysis</li>
                  <li>• Cognitive assessment support</li>
                  <li>• Real-time monitoring solutions</li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-blue-800 mb-6">
                  {t.services.insightsTitle}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {t.services.insightsDesc}
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Predictive analytics</li>
                  <li>• Trend analysis</li>
                  <li>• Comparative studies</li>
                  <li>• Clinical decision support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">
                  {t.technology.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t.technology.subtitle}
                </p>
                <div className="space-y-6">
                  <div
                    className={`border-l-4 border-blue-800 ${
                      isRTL ? "border-l-0 border-r-4 pr-6" : "pl-6"
                    }`}
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {t.technology.electrodes}
                    </h4>
                    <p className="text-gray-600">
                      {t.technology.electrodesDesc}
                    </p>
                  </div>
                  <div
                    className={`border-l-4 border-blue-800 ${
                      isRTL ? "border-l-0 border-r-4 pr-6" : "pl-6"
                    }`}
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {t.technology.signal}
                    </h4>
                    <p className="text-gray-600">{t.technology.signalDesc}</p>
                  </div>
                  <div
                    className={`border-l-4 border-blue-800 ${
                      isRTL ? "border-l-0 border-r-4 pr-6" : "pl-6"
                    }`}
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {t.technology.portable}
                    </h4>
                    <p className="text-gray-600">{t.technology.portableDesc}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 text-center">
                <div className="text-6xl font-bold text-blue-800 mb-4">
                  99.7%
                </div>
                <div className="text-xl text-blue-700 mb-6">
                  {t.technology.accuracy}
                </div>
                <p className="text-blue-600">{t.technology.accuracyDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8">{t.about.title}</h2>
              <p className="text-xl mb-12 leading-relaxed text-gray-300">
                {t.about.description}
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-300">{t.about.experience}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    10,000+
                  </div>
                  <div className="text-gray-300">{t.about.patients}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    500+
                  </div>
                  <div className="text-gray-300">{t.about.partners}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                {t.contact.title}
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                {t.contact.subtitle}
              </p>
              <div className="bg-white p-12 rounded-2xl shadow-xl">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t.contact.contactInfo}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-gray-700">
                          {t.contact.email}
                        </div>
                        <div className="text-blue-800 text-lg">
                          contact@neurotech.com
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">
                          {t.contact.phone}
                        </div>
                        <div className="text-blue-800 text-lg">
                          1-800-NEURO-TECH
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">
                          {t.contact.responseTime}
                        </div>
                        <div className="text-gray-600">
                          {t.contact.responseValue}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t.contact.schedule}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t.contact.scheduleDesc}
                    </p>
                    <button className="w-full bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors text-lg">
                      {t.contact.requestFree}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
