import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@Trainova.com",
      description: "Get help within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "+216 71 123 456",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "Jasmins Street, Sousse City, Tunisia",
      description: "Visit our main office",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available in app",
      description: "Instant support 24/7",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#2F4157]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Get In
            <span className="bg-gradient-to-r from-[#FFFFFFFF] to-[#636D7CFF] bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </h2>
          <p className="text-xl text-[#A7B4C2] max-w-2xl mx-auto">
            Have questions about Trainova? We're here to help you on your
            fitness journey. Reach out to our friendly support team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              viewport={{ once: true }}
            >
              <Card className="border-[#223043] hover:border-[#2F4157] transition-all duration-300 bg-[#223043]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2F4157] to-[#223043] rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-[#A7B4C2] font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-[#A7B4C2] text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Card className="border-[#223043] bg-[#223043]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-[#2F4157] text-white placeholder-[#A7B4C2] border border-[#223043] focus:outline-none focus:ring-2 focus:ring-[#2F4157]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md bg-[#2F4157] text-white placeholder-[#A7B4C2] border border-[#223043] focus:outline-none focus:ring-2 focus:ring-[#2F4157]"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-[#2F4157] text-white placeholder-[#A7B4C2] border border-[#223043] focus:outline-none focus:ring-2 focus:ring-[#2F4157]"
                />
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
