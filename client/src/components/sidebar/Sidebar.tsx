import { Button } from "../ui/button";

import { ChevronLeft, ChevronRight, PencilRulerIcon } from "lucide-react";
import { SwitchTheme } from "../switch-theme";
import { useState } from "react";
import { useTheme } from "../theme-provider";

export function Sidebar({ className }: { className?: string }) {
  const [hidden, setHidden] = useState(false);

  const { theme } = useTheme();

  const handleSidebarVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  return (
    <div
      className={`${
        hidden ? "w-3" : "w-[200px]"
      } transition-transform duration-300 ease-in-out  pb-10 flex flex-col justify-between border-r relative
    ${className}`}
    >
      <div className="absolute h-5 w-5 right-[-20px]">
        <Button
          variant="secondary"
          className="px-2 m-0 rounded-none"
          onClick={handleSidebarVisibility}
        >
          {hidden ? (
            <ChevronRight size={14} className="p-0 m-0" />
          ) : (
            <ChevronLeft size={14} className="p-0 m-0" />
          )}
        </Button>
      </div>
      {hidden ? (
        ""
      ) : (
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <figure className="m-0 p-0 w-full flex items-center justify-center">
              <img
                src={theme == "light" ? "lightlogo.png" : "darklogo.png"}
                alt="logo"
                className="h-16 w-40 object-cover"
              />
            </figure>
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Create
            </h2>
            <div className="space-y-1">
              <Button
                variant="secondary"
                className="w-full justify-start gap-2"
              >
                <PencilRulerIcon size={18} strokeWidth={1.5} />
                Pen
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Collection
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Library
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                Your Work
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Pinned
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Following
              </Button>
            </div>
          </div>
          <div className="px-6">
            <SwitchTheme />
          </div>
        </div>
      )}
    </div>
  );
}
