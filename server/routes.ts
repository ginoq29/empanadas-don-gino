import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here you would normally save the contact message to your database
      // or send it via email. For this example, we'll just return success.
      console.log('Contact form submission:', validatedData);
      
      res.status(200).json({ success: true, message: 'Mensaje recibido' });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ success: false, message: 'Error en el formulario' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
