export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/src/assets/hero-empanadas-don-gino.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center text-white px-6">
          <img
            src="/src/assets/dongino.png"
            alt="Logo Don Gino"
            className="mx-auto mb-6 max-w-[250px] md:max-w-[300px]"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <a
              href="/menu"
              className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-full font-lato transition"
            >
              Ver Menú
            </a>
            <a
              href="https://wa.me/51TU_NUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-full font-lato transition"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="bg-kraft text-dark-brown py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10">
            Nuestra esencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold font-lato mb-2">Recetas Gourmets</h3>
              <p className="text-gray-700 font-lato">
                Empanadas Premiun hechas a mano con técnicas tradicionales y mucho sabor.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold font-lato mb-2">Envío a Domicilio</h3>
              <p className="text-gray-700 font-lato">
                Nuestras empanadas llegan hasta tu puerta, con la calidez y el cuidado que mereces.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold font-lato mb-2">Ingredientes Selectos</h3>
              <p className="text-gray-700 font-lato">
                Solo usamos insumos frescos, naturales y de calidad premium.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
