const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800">About Us</h2>
      <div className="mt-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <p className="text-gray-600 leading-relaxed">
            NeuroTech was founded by a team of neurologists and data scientists
            with a shared passion for advancing brain health. Our mission is to
            provide clinicians with the most accurate and reliable EEG analysis
            to improve patient outcomes.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are committed to the highest standards of clinical excellence and
            are proud to be a trusted partner for healthcare professionals.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Medical Team"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
