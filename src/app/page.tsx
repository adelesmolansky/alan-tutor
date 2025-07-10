import ContactForm from '../components/ContactForm';
import Services from '../components/Services';
import About from '../components/About';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expert Tutoring with
              <span className="text-indigo-600 block">Alan Smolansky</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              USC student with 3+ years of tutoring experience. Specializing in
              SAT prep, chess, and academic subjects. Available for in-person
              and virtual sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="#services"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and I&apos;ll get back to you within 24
              hours to discuss your tutoring needs.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Alan Smolansky</h3>
              <p className="text-gray-300">
                Professional tutor helping students excel in academics and test
                preparation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300 mb-2">Email: asmolansky@usc.edu</p>
              <p className="text-gray-300">Location: USC Campus & Virtual</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Payment Methods</h4>
              <div className="flex gap-2">
                <span className="bg-green-600 px-3 py-1 rounded text-sm">
                  Venmo
                </span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">
                  Zelle
                </span>
                <span className="bg-green-500 px-3 py-1 rounded text-sm">
                  Cash
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Alan Smolansky Tutoring. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
