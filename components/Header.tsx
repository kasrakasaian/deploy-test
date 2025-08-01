import Link from "next/link";

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const translations = {
    en: {
      contact: "Contact",
      getStarted: "Get Started",
    },
    fa: {
      contact: "تماس",
      getStarted: "شروع کنید",
    },
  };

  const t = translations[language as keyof typeof translations];
  const isRTL = language === "fa";

  return (
    <header className="bg-white shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-6 py-6">
        <div
          className={`flex items-center justify-between ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <div className="flex items-center">
            <div className="text-3xl font-bold text-blue-900">
              <Link href="/">
                <span>NeuroTech</span>
              </Link>
            </div>
          </div>
          <nav
            className={`flex items-center ${
              isRTL ? "space-x-reverse space-x-8" : "space-x-8"
            }`}
          >
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded ${
                  language === "en"
                    ? "bg-blue-800 text-white"
                    : "text-gray-600 hover:text-blue-800"
                } transition-colors`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("fa")}
                className={`px-3 py-1 rounded font-persian ${
                  language === "fa"
                    ? "bg-blue-800 text-white"
                    : "text-gray-600 hover:text-blue-800"
                } transition-colors`}
              >
                فا
              </button>
            </div>

            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              {t.contact}
            </Link>
            <button className="bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              {t.getStarted}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
