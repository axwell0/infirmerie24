
import { useState, useEffect } from "react";
import { 
  Ambulance, 
  Bed, 
  Hospital, 
  Syringe, 
  User, 
  Users, 
  Clock, 
  MapPin, 
  PhoneCall,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CallButton from "@/components/CallButton";
import ServiceCard from "@/components/ServiceCard";
import EquipmentCard from "@/components/EquipmentCard";
import FeatureItem from "@/components/FeatureItem";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    quote: "Service rapide et professionnel. L'équipe d'Infirmerie24 a pris soin de ma mère comme si c'était la leur.",
    name: "Sophie M.",
    location: "La Marsa"
  },
  {
    quote: "Grâce à leur service de location, j'ai pu bénéficier d'un lit médicalisé dans l'urgence. Très reconnaissant.",
    name: "Ahmed K.",
    location: "Ariana"
  },
  {
    quote: "Une équipe dévouée et compétente. Disponibles jour et nuit pour répondre à nos besoins.",
    name: "Leila B.",
    location: "Les Berges du Lac"
  }
];

const Index = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-medical-light-gray">
      {/* Header */}
      <header className="bg-white py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/4f9b66b0-a4e6-4e8d-bc3c-0782a09752f8.png" 
              alt="Infirmerie24 Logo" 
              className="h-12 mr-2" 
            />
            <span className="font-bold text-medical-dark-blue text-xl hidden sm:inline">Infirmerie24</span>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue/5 w-[150px]" asChild>
              <a href="#services">Nos services</a>
            </Button>
            <CallButton phoneNumber="25 167 131" label="Appeler maintenant" className="w-[150px]" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-medical-light-green/10 to-medical-blue/10 pt-12 pb-16 border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className={`md:w-2/5 mb-10 md:mb-0 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Votre infirmier(e)s pour vos soins à Domicile 🚑
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-8">
                Soins infirmiers & location de matériel médical
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CallButton
                  phoneNumber="25 167 131"
                  label="Appeler maintenant"
                  large
                  className="w-full sm:w-auto"
                />
                <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue/5 w-full sm:w-auto" asChild>
                  <a href="#services">Nos services</a>
                </Button>
              </div>
            </div>
            <div className="md:w-3/5 flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/home-healthcare-flat-composition-with-nurse-visiting-elderly-patient-taking-care-medical-treatment_1284-62098.jpg?w=1060&t=st=1747358722~exp=1747359322~hmac=13fd93908717fe38c9910821a4e7fe0624cbc5a1e8e7347f702c407ca8d78085"
                alt="Soins infirmiers à domicile"
                className={`max-w-full h-auto rounded-lg shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 delay-300`}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,64L1380,64C1320,64,1200,64,1080,64C960,64,840,64,720,64C600,64,480,64,360,64C240,64,120,64,60,64L0,64Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Nos Services" 
            subtitle="Des soins professionnels adaptés à vos besoins"
            centered 
            className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Hospital} 
              title="Hospitalisation à domicile" 
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} animate-delay-100`}
            />
            <ServiceCard 
              icon={Ambulance} 
              title="Infirmier·ère de réanimation" 
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} animate-delay-200`}
            />
            <ServiceCard 
              icon={User} 
              title="Infirmier·ère généraliste" 
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} animate-delay-300`}
            />
            <ServiceCard 
              icon={Users} 
              title="Aide-soignant·e" 
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} animate-delay-400`}
            />
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-gradient-to-br from-medical-light-green/5 to-medical-blue/5">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Matériel Médical en Location" 
            subtitle="Équipement professionnel disponible pour vos besoins"
            centered 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <EquipmentCard icon={Bed} title="Lit médicalisé" />
            <EquipmentCard icon={Briefcase} title="Concentrateur d'oxygène (10–5 L)" />
            <EquipmentCard icon={Hospital} title="Aspirateur de mucosités" />
            <EquipmentCard icon={Syringe} title="Nébuliseur" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Pourquoi Choisir Infirmerie24 ?" 
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureItem 
              icon={Clock} 
              title="Disponible 24 h/24 – 7 j/7" 
            />
            <FeatureItem 
              icon={Users} 
              title="Équipe diplômée et expérimentée" 
            />
            <FeatureItem 
              icon={Briefcase} 
              title="Matériel certifié" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-medical-light-green/10 to-medical-blue/10">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Témoignages" 
            subtitle="Ce que disent nos patients"
            centered 
          />
          
          <div className="max-w-xl mx-auto">
            <div className="transition-opacity duration-500" key={activeTestimonialIndex}>
              <TestimonialCard 
                quote={testimonials[activeTestimonialIndex].quote}
                name={testimonials[activeTestimonialIndex].name}
                location={testimonials[activeTestimonialIndex].location}
              />
            </div>
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    activeTestimonialIndex === index ? 'bg-medical-blue' : 'bg-gray-300'
                  } transition-colors`}
                  onClick={() => setActiveTestimonialIndex(index)}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Contact & Localisation" 
            centered 
          />
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 flex flex-col items-center text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                Besoin d'assistance médicale? Contactez-nous
              </h3>
              <CallButton
                phoneNumber="25 167 131"
                label="25 167 131"
                large
                className="mb-6"
              />
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="h-5 w-5 text-medical-blue" />
                <span>Grand Tunis, Tunisie</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-medical-blue" />
                <span>Disponible 24 h/24, 7 j/7</span>
              </div>
            </div>
            <div className="md:w-1/2 h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102240.69815047057!2d10.094883590358954!3d36.794862037205005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1716135790374!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Tunis Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-dark-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/4f9b66b0-a4e6-4e8d-bc3c-0782a09752f8.png" 
                  alt="Infirmerie24 Logo" 
                  className="h-10 mr-2 bg-white rounded-full p-1" 
                />
                <span className="font-bold text-xl">Infirmerie24</span>
              </div>
              <p className="text-gray-300 mb-4">
                Votre partenaire de santé à domicile disponible 24h/24 et 7j/7 dans le Grand Tunis.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-medical-light-green transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-medical-light-green transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.207-1.504.344-1.857.182-.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-medical-light-green">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-gray-300 hover:text-white">Hospitalisation à domicile</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-white">Soins infirmiers</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-white">Location d'équipement</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-white">Aide-soignant·e</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Infirmerie24. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
