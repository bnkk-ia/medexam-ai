import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

const topStudents = [
  { rank: 1, name: "Dr. A. Benmoussa", year: "6ème Année", score: 98.5, quizzes: 342 },
  { rank: 2, name: "Dr. S. Khelifi", year: "5ème Année", score: 97.2, quizzes: 310 },
  { rank: 3, name: "Dr. M. Boudjemaa", year: "6ème Année", score: 96.8, quizzes: 298 },
  { rank: 4, name: "Dr. F. Zerrouki", year: "4ème Année", score: 95.1, quizzes: 275 },
  { rank: 5, name: "Dr. L. Hamidi", year: "3ème Année", score: 94.7, quizzes: 260 },
];

const rankColors: Record<number, string> = {
  1: "text-gold",
  2: "text-silver",
  3: "text-bronze",
};

const RankingSection = () => {
  return (
    <section id="ranking" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Classement</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Top Étudiants
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Les meilleurs étudiants de la plateforme. Travaillez dur pour rejoindre le classement !
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {topStudents.map((student, i) => (
            <motion.div
              key={student.rank}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-4 p-5 rounded-xl mb-3 border border-border/50 bg-card shadow-card hover:shadow-card-hover transition-all ${
                student.rank <= 3 ? "border-accent/20" : ""
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg ${
                student.rank <= 3 ? "bg-accent/10" : "bg-muted"
              } ${rankColors[student.rank] || "text-muted-foreground"}`}>
                {student.rank <= 3 ? (
                  student.rank === 1 ? <Trophy className="w-5 h-5" /> : <Medal className="w-5 h-5" />
                ) : (
                  student.rank
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-display font-semibold text-foreground truncate">{student.name}</div>
                <div className="text-xs text-muted-foreground">{student.year} · {student.quizzes} QCMs</div>
              </div>

              <div className="text-right">
                <div className="font-display font-bold text-lg text-foreground">{student.score}%</div>
                <div className="text-xs text-muted-foreground">Moyenne</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
