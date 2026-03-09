import { Play } from "lucide-react";
import type { FaqItem } from "@/data/faqData";

interface FaqCardProps {
  item: FaqItem;
  index: number;
}

const FaqCard = ({ item, index }: FaqCardProps) => {
  return (
    <a
      href={item.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-lg hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-primary mb-3">
            {item.category}
          </span>
          <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
            {item.question}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.answer}
          </p>
        </div>
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Play className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
      </div>
    </a>
  );
};

export default FaqCard;
