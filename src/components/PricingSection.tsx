import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

// Example coaches data
const coaches = [
  {
    name: "Amin ammar",
    description: "Certified personal trainer with 10+ years experience",
    features: [
      "1-on-1 personal coaching",
      "Custom meal planning",
      "Progress tracking",
      "Community access",
      "Live video sessions",
    ],
    image: "/assets/coach-alex.png",
  },
  {
    name: "Mariem brahem",
    description: "Nutrition expert & strength coach",
    features: [
      "Personalized nutrition plans",
      "Strength & conditioning",
      "Weekly check-ins",
      "Goal setting",
      "Community support",
    ],
    image: "/assets/coach-maria.png",
  },
  {
    name: "Anis Mrad",
    description: "Elite fitness coach for advanced athletes",
    features: [
      "Advanced analytics",
      "Exclusive masterclasses",
      "Priority support",
      "Custom workouts",
      "Premium community access",
    ],
    image: "/assets/coach-chris.png",
  },
];

const PricingSection = () => {
  const [selectedCoach, setSelectedCoach] = useState(0);

  const coach = coaches[selectedCoach];

  return (
    <section id="pricing" className="py-20 bg-[#223043]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-[#FFFFFFFF] to-[#707E92FF] bg-clip-text text-transparent">
              {" "}
              Coach
            </span>
          </h2>
          <p className="text-xl text-[#A7B4C2] max-w-2xl mx-auto">
            Select a coach to see their personalized plan and features. Pricing
            will be determined based on your needs and the coach you choose
            inside the app.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
          {coaches.map((c, idx) => (
            <button
              key={c.name}
              onClick={() => setSelectedCoach(idx)}
              className={`flex flex-col items-center px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                selectedCoach === idx
                  ? "border-[#2F4157] bg-[#2F4157] text-white"
                  : "border-[#223043] bg-[#223043] text-[#A7B4C2] hover:border-[#2F4157]"
              }`}
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-16 h-16 rounded-full mb-3 object-cover"
              />
              <span className="font-semibold">{c.name}</span>
              <span className="text-sm">{c.description}</span>
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.3,
          }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Card className="relative border-2 border-[#2F4157] shadow-xl bg-[#223043]">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {coach.name}'s Plan
                </h3>
                <div className="mb-4">
                  <span className="text-xl font-semibold text-[#A7B4C2]">
                    Pricing will be shown in the app
                  </span>
                </div>
                <p className="text-[#A7B4C2]">{coach.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {coach.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-[#A7B4C2]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" variant="default">
                Choose {coach.name}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-[#A7B4C2] mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-[#A7B4C2]">
            Cancel anytime. Upgrade or change your coach as needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
