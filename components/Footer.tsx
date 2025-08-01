interface FooterProps {
  language: string;
}

const Footer = ({ language }: FooterProps) => {
  const isRTL = language === "fa";

  const footerTranslations = {
    en: {
      company: "NeuroTech",
      description:
        "Leading provider of advanced EEG analysis and neurological insights for healthcare professionals worldwide.",
      compliance: "FDA Compliant • Clinical Grade • Expert Analysis",
      contact: "Contact",
      legal: "Legal",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "All rights reserved.",
    },
    fa: {
      company: "نیوروتک",
      description:
        "ارائه‌دهنده پیشرو تحلیل EEG پیشرفته و بینش‌های عصبی برای متخصصان بهداشت در سراسر جهان.",
      compliance: "تایید FDA • درجه بالینی • تحلیل متخصص",
      contact: "تماس",
      legal: "قانونی",
      privacyPolicy: "سیاست حفظ حریم خصوصی",
      termsOfService: "شرایط خدمات",
      copyright: "تمام حقوق محفوظ است.",
    },
  };

  const t = footerTranslations[language as keyof typeof footerTranslations];

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold">{t.company}</span>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">{t.description}</p>
            <div className="text-sm text-blue-300">
              <p>{t.compliance}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contact}</h4>
            <div className="space-y-2 text-blue-200">
              <p>contact@neurotech.com</p>
              <p>1-800-NEURO-TECH</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.legal}</h4>
            <div className="space-y-2 text-blue-200">
              <a href="#" className="block hover:text-white transition-colors">
                {t.privacyPolicy}
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                {t.termsOfService}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} {t.company}. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
