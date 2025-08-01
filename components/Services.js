const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Our Services
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-800">
            EEG Interpretation
          </h3>
          <p className="mt-4 text-gray-600">
            Our team of neurological experts provides in-depth analysis of EEG
            data to identify patterns and anomalies, delivering accurate and
            actionable reports for clinicians.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-800">
            Neurological Insights
          </h3>
          <p className="mt-4 text-gray-600">
            We leverage advanced algorithms and machine learning to extract
            meaningful insights from brain signals, supporting research and
            treatment of neurological disorders.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
