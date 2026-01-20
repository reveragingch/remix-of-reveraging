import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";

interface GlossaryTermProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

export const GlossaryTerm = ({ term, definition, children }: GlossaryTermProps) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const triggerContent = (
    <span className="border-b-2 border-dashed border-primary/50 cursor-help hover:border-primary transition-colors">
      {children}
    </span>
  );

  const definitionContent = (
    <>
      <p className="font-semibold text-foreground mb-1">{term}</p>
      <p className="text-muted-foreground">{definition}</p>
    </>
  );

  // On mobile, use Popover (click-to-open)
  if (isMobile) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {triggerContent}
        </PopoverTrigger>
        <PopoverContent 
          side="top" 
          className="max-w-sm p-4 text-sm leading-relaxed"
        >
          {definitionContent}
        </PopoverContent>
      </Popover>
    );
  }

  // On desktop, use Tooltip (hover)
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          {triggerContent}
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="max-w-sm p-4 text-sm leading-relaxed"
        >
          {definitionContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
