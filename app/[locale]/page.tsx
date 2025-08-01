import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-7xl md:text-8xl font-bold text-blue-900 mb-8 leading-tight">
                Advanced Brain Signal Analysis
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed">
                Cutting-edge EEG analysis and neurological insights for
                healthcare professionals worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-blue-800 text-white font-semibold py-5 px-10 rounded-xl hover:bg-blue-700 transition-all shadow-xl text-lg">
                  Request Consultation
                </button>
                <button className="border-2 border-blue-800 text-blue-800 font-semibold py-5 px-10 rounded-xl hover:bg-blue-800 hover:text-white transition-all text-lg">
                  Learn More
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
                Why Choose NeuroTech
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide unparalleled accuracy and reliability in brain signal
                analysis
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-8 rounded-2xl bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  FDA Compliant
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Clinical-grade equipment meeting all regulatory standards for
                  medical device compliance and patient safety protocols
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Expert Analysis
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Board-certified neurologists and data scientists with decades
                  of combined experience in neurological diagnostics
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Precision Technology
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Advanced signal processing algorithms and machine learning
                  models for accurate pattern recognition
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
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive EEG analysis solutions for medical professionals
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-blue-800 mb-6">
                  EEG Interpretation
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Our expert neurologists provide comprehensive analysis of
                  electroencephalogram data, identifying patterns, anomalies,
                  and potential indicators of neurological conditions with
                  unmatched precision.
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
                  Neurological Insights
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Advanced analytics and machine learning algorithms extract
                  meaningful insights from complex brain signal data, supporting
                  research and treatment of various neurological disorders.
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
                  State-of-the-Art Technology
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our cutting-edge hardware and software solutions ensure the
                  highest quality data acquisition and analysis, meeting the
                  demanding requirements of modern healthcare.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-800 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      High-Density Electrode Arrays
                    </h4>
                    <p className="text-gray-600">
                      Advanced multi-channel recording systems for comprehensive
                      brain activity mapping
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-800 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Low-Noise Signal Amplification
                    </h4>
                    <p className="text-gray-600">
                      Superior signal quality with minimal interference for
                      accurate data collection
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-800 pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Portable and Stationary Options
                    </h4>
                    <p className="text-gray-600">
                      Flexible solutions for various clinical environments and
                      patient needs
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 text-center">
                <div className="text-6xl font-bold text-blue-800 mb-4">
                  99.7%
                </div>
                <div className="text-xl text-blue-700 mb-6">Accuracy Rate</div>
                <p className="text-blue-600">
                  Industry-leading precision in EEG signal analysis and pattern
                  recognition
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8">About NeuroTech</h2>
              <p className="text-xl mb-12 leading-relaxed text-gray-300">
                Founded by a team of world-renowned neurologists and data
                scientists, NeuroTech represents the pinnacle of neurological
                analysis technology. Our mission is to advance brain health
                through innovative analysis solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    10,000+
                  </div>
                  <div className="text-gray-300">Patients Analyzed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    500+
                  </div>
                  <div className="text-gray-300">Healthcare Partners</div>
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
                Get Started Today
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Ready to revolutionize your neurological analysis capabilities?
                Contact our team of experts for a personalized consultation.
              </p>
              <div className="bg-white p-12 rounded-2xl shadow-xl">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-gray-700">Email</div>
                        <div className="text-blue-800 text-lg">
                          contact@neurotech.com
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">Phone</div>
                        <div className="text-blue-800 text-lg">
                          1-800-NEURO-TECH
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">
                          Response Time
                        </div>
                        <div className="text-gray-600">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Schedule Consultation
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Our specialists are ready to discuss your specific
                      requirements and demonstrate how our technology can
                      enhance your practice.
                    </p>
                    <button className="w-full bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors text-lg">
                      Request Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
