import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-gradient flex items-center justify-center">
                <Brain className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-display font-bold text-xl">MedQCM</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Votre partenaire d'excellence en médecine, alimenté par l'IA.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Plateforme</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Fonctionnalités</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Tarifs</a></li>
              <li><a href="#ranking" className="hover:text-primary-foreground transition-colors">Classement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Années</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>1ère — 2ème Année</li>
              <li>3ème — 4ème Année</li>
              <li>5ème — 6ème Année</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>contact@medqcm.dz</li>
              <li>+213 555 123 456</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          © 2026 MedQCM. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
