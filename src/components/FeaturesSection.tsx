import { motion } from "framer-motion";
import { Brain, BarChart3, Trophy, BookOpen, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Adaptative",
    description: "L'algorithme identifie vos lacunes et propose des QCMs personnalisés pour maximiser votre progression.",
  },
  {
    icon: BarChart3,
    title: "Suivi Détaillé",
    description: "Tableaux de bord complets avec statistiques par matière, module et performance dans le temps.",
  },
  {
    icon: Trophy,
    title: "Classement en Temps Réel",
    description: "Comparez-vous aux autres étudiants de votre promotion avec un classement mis à jour en continu.",
  },
  {
    icon: BookOpen,
    title: "Banque de QCMs",
    description: "Plus de 10 000 questions couvrant toutes les matières de la 1ère à la 6ème année de médecine.",
  },
  {
    icon: Clock,
    title: "Mode Examen",
    description: "Simulez les conditions réelles d'examen avec un chronomètre et une notation automatique.",
  },
  {
    icon: Shield,
    title: "Corrections Détaillées",
    description: "Chaque question est accompagnée d'une explication détaillée rédigée par des professeurs.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Fonctionnalités</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Tout pour réussir vos examens
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une plateforme complète conçue par des médecins, pour les futurs médecins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent-gradient group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
