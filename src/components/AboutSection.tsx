import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Health First",
      description:
        "Your wellbeing is our top priority. Every feature is designed with your health and safety in mind.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Built by fitness enthusiasts, for fitness enthusiasts. We understand your journey because we're on it too.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Cutting-edge technology meets proven fitness science to deliver results that matter.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your data is secure, your privacy is protected, and your trust is earned every day.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#2F4157]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About
            <span className="bg-gradient-to-r from-[#FFFFFFFF] to-[#636D7CFF] bg-clip-text text-transparent">
              {" "}
              Trainova
            </span>
          </h2>
          <p className="text-xl text-[#A7B4C2] max-w-3xl mx-auto leading-relaxed">
            Born from the vision of making fitness accessible to everyone,
            Trainova combines the latest technology with expert knowledge to
            create a platform that truly understands your fitness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-[#A7B4C2] mb-6 leading-relaxed">
              Founded by a team of fitness professionals and tech innovators,
              Trainova was created to bridge the gap between traditional fitness
              and modern technology. We saw the need for a comprehensive
              platform that could adapt to every individual's unique fitness
              journey.
            </p>
            <p className="text-[#A7B4C2] leading-relaxed">
              Today, we're proud to serve thousands of users worldwide, helping
              them achieve their fitness goals through personalized coaching,
              comprehensive tracking, and a supportive community that celebrates
              every milestone.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2F4157] to-[#223043] rounded-2xl p-8 border border-[#223043]"
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">2020</div>
                <div className="text-[#A7B4C2]">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-[#A7B4C2]">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-[#A7B4C2]">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-[#A7B4C2]">Support</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-[#223043] hover:border-[#2F4157] transition-all duration-300 bg-[#223043]">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F4157] to-[#223043] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h4>
                  <p className="text-[#A7B4C2] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
