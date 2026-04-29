import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Linkedin, Facebook, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "../hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    reset();
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in learning more about your courses.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Start Learning</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community of passionate learners and take the next step in your educational journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    {...register("phone", { required: "Phone number is required" })}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    placeholder="Tell us about your learning goals..."
                    rows={4}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>

              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">📧 Email</h3>
                <p className="text-muted-foreground">
                  ravi.tambade@transflower.in
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">📞 Phone</h3>
                <p className="text-muted-foreground">
                  +91 98817 35801
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">🌐 Follow Us</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/ravitambade/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/transflowerlearning" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@ravitambade-transflower" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-hero rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Tap Your Potential
                </h3>
                <p className="text-lg text-primary font-semibold">
                  @ Transflower Learning
                </p>
                <p className="text-muted-foreground mt-2">
                  Mentor at your Service
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;