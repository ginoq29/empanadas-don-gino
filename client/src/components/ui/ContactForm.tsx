import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos, te responderemos pronto.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="name" className="block text-dark-brown font-lato mb-2">Nombre</Label>
              <FormControl>
                <Input 
                  id="name"
                  {...field} 
                  className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="email" className="block text-dark-brown font-lato mb-2">Correo electrónico</Label>
              <FormControl>
                <Input 
                  id="email"
                  type="email"
                  {...field} 
                  className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="message" className="block text-dark-brown font-lato mb-2">Mensaje</Label>
              <FormControl>
                <Textarea 
                  id="message"
                  rows={4}
                  {...field} 
                  className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-md shadow-md transition duration-300 font-lato"
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </Form>
  );
}
