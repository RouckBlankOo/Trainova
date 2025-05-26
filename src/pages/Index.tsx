import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Users,
  Target,
  TrendingUp,
  Calendar,
  Video,
  Heart,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    {
      icon: Video,
      title: "Live Coaching",
      description:
        "Real-time personal training sessions with certified coaches",
      color: "bg-gradient-to-br from-[#2F4157] to-[#223043]",
    },
    {
      icon: Target,
      title: "Personalized Programs",
      description: "Customized workout plans tailored to your fitness goals",
      color: "bg-gradient-to-br from-[#2F4157] to-[#223043]",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Comprehensive analytics to monitor your fitness journey",
      color: "bg-gradient-to-br from-[#2F4157] to-[#223043]",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded fitness enthusiasts worldwide",
      color: "bg-gradient-to-br from-[#2F4157] to-[#223043]",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Flexible booking system for sessions that fit your lifestyle",
      color: "bg-gradient-to-br from-[#2F4157] to-[#223043]",
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Unlock badges and rewards as you reach your milestones",
      color: "bg-gradient-to-br from-[#2F4157] to-[#223043]",
    },
  ];

  const stats = [
    { number: "0K+", label: "Active Users" },
    { number: "0+", label: "Expert Coaches" },
    { number: "0+", label: "Workouts Completed" },
    { number: "0%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-[#2F4157]">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F4157]/80 to-[#223043]/80"></div>
        <div className="relative container mx-auto px-6 py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-6 bg-[#223043] text-white border-[#2F4157] hover:bg-[#2F4157] transition-all duration-300">
              🚀 The Future of Fitness is Here
            </Badge>
            <motion.h1
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#FFFFFFFF] to-[#636D7CFF] bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Your All-in-One
              <br />
              <span className="bg-[#CAD0D6FF] bg-clip-text text-transparent">
                Fitness Platform
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-[#A7B4C2] mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Transform your fitness journey with live coaching, personalized
              programs, and comprehensive tracking. Everything you need in one
              powerful platform.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button size="lg" asChild>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Your Journey
                </motion.button>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Watch Demo
                </motion.button>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* App Interface Mockup */}
        <div className="relative flex justify-center mt-12 mb-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2F4157] to-[#223043] rounded-3xl blur-3xl opacity-20 scale-110"></div>
            <div className="relative z-10 w-full max-w-4xl bg-[#223043] rounded-2xl shadow-2xl p-8 border border-[#2F4157]">
              <div className="grid md:grid-cols-3 gap-6">
                {[Video, TrendingUp, Target].map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gradient-to-br from-[#2F4157] to-[#223043] rounded-xl p-6 border border-[#2F4157]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="h-8 w-8 text-white mb-3" />
                    <h3 className="font-semibold text-white mb-2">
                      {["Live Sessions", "Analytics", "Goals"][idx]}
                    </h3>
                    <p className="text-sm text-[#A7B4C2]">
                      {
                        [
                          "Real-time coaching interface",
                          "Track your progress",
                          "Personalized targets",
                        ][idx]
                      }
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2F4157] to-[#223043] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-[#A7B4C2] text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Everything You Need,
            <br />
            <span className="bg-gradient-to-r from-[#FFFFFFFF] to-[#636D7CFF] bg-clip-text text-transparent">
              All in One Place
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-[#A7B4C2] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our comprehensive platform brings together cutting-edge technology
            and expert guidance to revolutionize your fitness experience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#223043] border-[#2F4157] hover:border-[#A7B4C2] transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 8, scale: 1.1 }}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#A7B4C2] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Coaching Highlight */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F4157] to-[#223043] rounded-3xl"></div>
          <div className="relative bg-[#223043]/80 border border-[#2F4157] rounded-3xl p-12 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-[#2F4157] to-[#223043] text-white border-0">
                  <Heart className="mr-2 h-4 w-4" />
                  Live Coaching
                </Badge>
                <h3 className="text-4xl font-bold text-white mb-6">
                  Train with World-Class
                  <br />
                  <span className="bg-gradient-to-r from-[#2F4157] to-[#223043] bg-clip-text text-transparent">
                    Certified Coaches
                  </span>
                </h3>
                <p className="text-[#A7B4C2] text-lg mb-8 leading-relaxed">
                  Experience personalized training sessions with our expert
                  coaches. Get real-time feedback, motivation, and customized
                  workouts that adapt to your progress and goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-[#A7B4C2]">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#2F4157] to-[#223043] rounded-full mr-4"></div>
                    Real-time form corrections and feedback
                  </div>
                  <div className="flex items-center text-[#A7B4C2]">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#2F4157] to-[#223043] rounded-full mr-4"></div>
                    Personalized workout modifications
                  </div>
                  <div className="flex items-center text-[#A7B4C2]">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#2F4157] to-[#223043] rounded-full mr-4"></div>
                    24/7 availability across time zones
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-[#2F4157] to-[#223043] rounded-3xl flex items-center justify-center border border-[#2F4157]">
                  <Video className="h-24 w-24 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-[#EEEFF0FF] to-[#687383FF] bg-clip-text text-transparent">
              Your Fitness Journey?
            </span>
          </h2>
          <p className="text-xl text-[#A7B4C2] mb-12 max-w-2xl mx-auto">
            Join thousands of users who have already discovered the power of our
            comprehensive fitness platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-lg bg-[#223043] hover:bg-[#2F4157] text-white font-semibold text-lg shadow transition-colors w-64 justify-center"
            >
              <img
                src="/assets/PlayStore.png"
                alt="Play Store"
                className="w-7 h-7"
                style={{ objectFit: "contain" }}
              />
              Download on Play Store
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-lg bg-[#223043] hover:bg-[#2F4157] text-white font-semibold text-lg shadow transition-colors w-64 justify-center"
            >
              <img
                src="/assets/AppStore.png"
                alt="App Store"
                className="w-7 h-7"
                style={{ objectFit: "contain" }}
              />
              Download on App Store
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#223043] bg-[#2F4157]">
        <div className="container mx-auto px-6 py-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-[#2F4157] to-[#223043] bg-clip-text text-transparent mb-4">
              Trainova
            </div>
            <p className="text-[#A7B4C2] mb-6">
              The ultimate fitness platform for your health and wellness
              journey.
            </p>
            <div className="text-[#A7B4C2] text-sm">
              © 2025 Trainova. All rights reserved.
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
