import { cn } from "@/lib/utils";
import { Home, List, LucideIcon, Plus, Search } from "lucide-react";

interface SidebarProps {
  setCurrentContent: (Content: string) => void;
  currentContent: string;
}

export function Sidebar({ currentContent, setCurrentContent }: SidebarProps) {
  const items: { title: string; icon: LucideIcon }[] = [
    {
      title: "Search",
      icon: Search,
    },
    {
      title: "Home",
      icon: Home,
    },
    {
      title: "Movies",
      icon: List,
    },
    {
      title: "Add",
      icon: Plus,
    },
  ];

  return (
    <div className="flex flex-col gap-15 h-screen w-25 justify-center items-center">
      {items.map((k, i) => (
        <span
          key={i}
          className={cn(
            "cursor-pointer text-neutral-400 hover:text-neutral-100 transition-colors",
          )}
        >
          <k.icon size={30} />
        </span>
      ))}
    </div>
  );
}
