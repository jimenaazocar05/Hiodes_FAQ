import { useState, useMemo } from "react";
import { HelpCircle } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import FaqCard from "@/components/FaqCard";
import { faqItems, categories } from "@/data/faqData";

const Index = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return faqItems.filter((item) => {
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden py-20 px-4" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-[10%] w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 right-[15%] w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium">
            <HelpCircle className="w-4 h-4" />
            Centro de Ayuda
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            ¿Cómo podemos ayudarte?
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Encuentra respuestas rápidas con nuestros videos tutoriales paso a paso
          </p>
          <div className="pt-2">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {filtered.length > 0 ? (
          <div className="grid gap-4">
            {filtered.map((item, i) => (
              <FaqCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-3">
            <p className="text-xl font-display font-semibold text-foreground">
              No se encontraron resultados
            </p>
            <p className="text-muted-foreground">
              Intenta con otras palabras clave o selecciona otra categoría
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
