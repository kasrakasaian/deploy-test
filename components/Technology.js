const Technology = () => (
  <section id="technology" className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Our Technology
      </h2>
      <div className="mt-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="EEG Hardware"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold text-blue-800">
            Clinical-Grade Equipment
          </h3>
          <p className="mt-4 text-gray-600">
            We utilize state-of-the-art, FDA-cleared EEG hardware to ensure the
            highest quality data acquisition. Our systems are designed for
            reliability and precision in clinical settings.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✓ High-density electrode arrays</li>
            <li>✓ Low-noise signal amplification</li>
            <li>✓ Portable and stationary options</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Technology;
