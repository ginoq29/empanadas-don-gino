import { motion } from "framer-motion";
import { Heart, Star, Users } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ValueCard from "@/components/ui/ValueCard";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 bg-kraft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="Nuestra Filosofía" 
            subtitle="La visión gourmet detrás de cada empanada" 
          />
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-10 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.div className="lg:w-1/2" variants={fadeIn}>
            <img 
  src="/src/assets/about-hero.png" 
  alt="Empanadas en horno artesanal" 
  className="rounded-lg shadow-xl w-full h-auto object-cover" 
  style={{ aspectRatio: '4 / 3' }} 
/>

          </motion.div>
          
          <motion.div className="lg:w-1/2" variants={fadeIn}>
            <h3 className="font-playfair text-2xl text-primary mb-4">Del sabor común a la excelencia</h3>
            <p className="text-dark-brown font-lato mb-4">
              Don Gino no nació para repetir recetas. Nació para elevarlas. Nuestro propósito es transformar un clásico popular como la empanada en una experiencia gourmet digna de exigentes paladares. 
            </p>
            <p className="text-dark-brown font-lato mb-6">
              Cada variedad ha sido diseñada con precisión: rellenos de autor, ingredientes seleccionados y técnicas que respetan la cocina tradicional, pero con visión contemporánea y carácter exclusivo.
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                alt="Fundador" 
                className="w-16 h-16 rounded-full object-cover border-2 border-gold"
              />
              <div className="ml-4">
                <p className="font-dancing text-xl text-accent">Empanadas Don Gino</p>
                <p className="text-dark-brown font-lato text-sm"></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Valores */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={fadeIn}>
            <ValueCard 
              icon={Heart} 
              title="Pasión" 
              description="Cocinamos con entrega absoluta. Cada box lleva nuestra identidad y exigencia." 
            />
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <ValueCard 
              icon={Star} 
              title="Calidad" 
              description="Solo usamos ingredientes frescos, nobles y seleccionados. Nada de estándar." 
            />
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <ValueCard 
              icon={Users} 
              title="Carácter" 
              description="Ofrecemos algo distinto. Nuestra cocina tiene personalidad, visión y orgullo." 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
