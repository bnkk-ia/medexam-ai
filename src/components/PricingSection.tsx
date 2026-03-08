import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    year: "1ère Année",
    price: "2,900",
    currency: "DA",
    period: "/an",
    popular: false,
    features: [
      "Accès aux QCMs de 1ère année",
      "Corrections détaillées",
      "Suivi de progression",
      "Classement de promotion",
      "Mode révision",
    ],
  },
  {
    year: "2ème Année",
    price: "3,500",
    currency: "DA",
    period: "/an",
    popular: false,
    features: [
      "Accès aux QCMs de 2ème année",
      "Corrections détaillées",
      "Suivi avancé par matière",
      "Classement de promotion",
      "Mode examen simulé",
    ],
  },
  {
    year: "3ème Année",
    price: "4,200",
    currency: "DA",
    period: "/an",
    popular: true,
    features: [
      "Accès aux QCMs de 3ème année",
      "IA adaptative personnalisée",
      "Analyses détaillées de performance",
      "Classement national",
      "Mode examen + chronométré",
      "Support prioritaire",
    ],
  },
  {
    year: "4ème Année",
    price: "4,500",
    currency: "DA",
    period: "/an",
    popular: false,
    features: [
      "Accès aux QCMs de 4ème année",
      "IA adaptative personnalisée",
      "Cas cliniques interactifs",
      "Classement national",
      "Mode examen + chronométré",
      "Support prioritaire",
    ],
  },
  {
    year: "5ème Année",
    price: "5,000",
    currency: "DA",
    period: "/an",
    popular: false,
    features: [
      "Accès aux QCMs de 5ème année",
      "Préparation stages hospitaliers",
      "IA adaptative avancée",
      "Classement national",
      "Tous les modes d'examen",
      "Support 24/7",
    ],
  },
  {
    year: "6ème Année",
    price: "5,500",
    currency: "DA",
    period: "/an",
    popular: false,
    features: [
      "Accès aux QCMs de 6ème année",
      "Préparation résidanat",
      "IA adaptative avancée",
      "Classement national",
      "Examens blancs illimités",
      "Support 24/7 + Tutorat",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Tarifs</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Un tarif pour chaque année
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choisissez le plan adapté à votre niveau d'études. Accès illimité aux QCMs de votre année.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-primary text-primary-foreground border-primary shadow-card-hover scale-[1.02]"
                  : "bg-card border-border/50 shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full bg-accent-gradient text-accent-foreground text-xs font-semibold">
                  <Star className="w-3 h-3" /> Le plus populaire
                </div>
              )}

              <h3 className={`font-display font-bold text-lg mb-1 ${plan.popular ? "" : "text-foreground"}`}>
                {plan.year}
              </h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl font-display font-bold ${plan.popular ? "" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.currency}{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-accent" : "text-accent"}`} />
                    <span className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-accent-gradient text-accent-foreground hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                S'inscrire
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
