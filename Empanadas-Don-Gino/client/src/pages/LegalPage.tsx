import SectionTitle from "@/components/ui/SectionTitle";

export default function LegalPage() {
  return (
    <section className="py-16 bg-white text-dark-brown px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Información Legal"
          subtitle="Conoce nuestras políticas y condiciones de servicio"
        />

        {/* Términos y Condiciones */}
        <div className="mt-12">
          <h2 className="text-2xl font-playfair font-semibold mb-4">Términos y Condiciones</h2>
          <p className="mb-4 font-lato leading-relaxed">
            Al realizar un pedido en Empanadas Don Gino, el cliente acepta los siguientes términos:
          </p>
          <ul className="list-disc list-inside space-y-2 font-lato">
            <li>Los pedidos se realizan únicamente por WhatsApp.</li>
            <li>El servicio está disponible para reparto en Lima Metropolitana.</li>
            <li>Los precios pueden cambiar sin previo aviso.</li>
            <li>No se aceptan devoluciones, salvo error comprobable por nuestra parte.</li>
            <li>Los productos se entregan dentro del horario establecido y en las condiciones acordadas.</li>
          </ul>
        </div>

        {/* Política de Privacidad */}
        <div className="mt-12">
          <h2 className="text-2xl font-playfair font-semibold mb-4">Política de Privacidad</h2>
          <p className="mb-4 font-lato leading-relaxed">
            Empanadas Don Gino solo recopila la información necesaria para procesar pedidos a través de WhatsApp o correo electrónico. 
            No se almacenan datos en bases automatizadas ni se comparten con terceros. 
            Toda comunicación es voluntaria y limitada a la atención del pedido solicitado por el cliente.
          </p>
        </div>

        {/* Política de Entregas y Cambios */}
<div className="mt-12">
  <h2 className="text-2xl font-playfair font-semibold mb-4">Política de Entregas y Cambios</h2>
  <ul className="list-disc list-inside space-y-2 font-lato">
    <li><strong>Días de entrega:</strong> Lunes a sábado.</li>
    <li><strong>Horarios de entrega:</strong>
      <ul className="list-inside ml-6 list-disc">
        <li>Mañanas: de 9:00 a.m. a 12:00 m</li>
        <li>Tardes: de 3:00 p.m. a 6:00 p.m.</li>
      </ul>
    </li>
    <li><strong>Cobertura:</strong> Zonas habilitadas de Lima Metropolitana.</li>
    <li><strong>Ausencia del cliente:</strong> Si el cliente no se encuentra en el lugar de entrega, esta se reprogramará con un recargo adicional.</li>
    <li><strong>Cambios en el pedido:</strong> No se aceptan modificaciones en los sabores una vez confirmado el pedido.</li>
    <li><strong>Productos con observaciones:</strong> Si un producto llega en mal estado, el cliente deberá comunicarse el mismo día para su evaluación y posible reposición.</li>
  </ul>
</div>


        {/* Libro de Reclamaciones */}
        <div className="mt-12">
          <h2 className="text-2xl font-playfair font-semibold mb-4">Libro de Reclamaciones</h2>
          <p className="mb-4 font-lato leading-relaxed">
            En cumplimiento con la normativa vigente, Empanadas Don Gino pone a disposición de sus clientes un Libro de Reclamaciones virtual. 
            Puedes registrar tu queja o reclamo llenando el siguiente formulario:
          </p>
          <a
            href="https://forms.gle/xTHU7A3nM8E8xCT8A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-md font-lato transition"
          >
            Acceder al Libro de Reclamaciones
          </a>
        </div>
      </div>
    </section>
  );
}
