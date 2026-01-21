import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters")
});
export const FooterContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: formData
      });
      if (error) throw error;
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="w-full max-w-md mx-auto">
      <h3 className="font-semibold text-foreground mb-4 text-center text-xl">
        Get in Touch
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`} />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>

        <div>
          <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`} />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <Textarea name="message" placeholder="Your Message" rows={3} value={formData.message} onChange={handleChange} className={`bg-background/50 ${errors.message ? "border-destructive" : ""}`} />
          {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
        </div>

        <Button type="submit" className="w-full" size="sm" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>;
};