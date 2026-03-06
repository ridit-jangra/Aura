"use client";

import { Sidebar } from "@/components/Sidebar";
import { Home as HomeContent } from "@/components/pages/Home";
import { ScrollArea } from "@/components/ui/scroll-area";
import { JSX, useState } from "react";

export default function Home() {
  const [currentContent, setCurrentContent] = useState<string>("home");

  const contentMap: Record<string, JSX.Element> = {
    home: <HomeContent />,
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      {currentContent && (
        <div className="h-screen w-full">
          <ScrollArea className="h-full">
            {contentMap[currentContent]}
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
