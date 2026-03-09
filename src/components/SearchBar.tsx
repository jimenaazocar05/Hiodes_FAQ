import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-primary" />
      </div>
      <input
        type="text"
        placeholder="Buscar pregunta, tema o palabra clave..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground shadow-[var(--shadow-search)] focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow text-base font-sans"
      />
    </div>
  );
};

export default SearchBar;
