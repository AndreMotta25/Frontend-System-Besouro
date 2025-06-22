
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/UI/hover-card";

interface HoverCardProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function HoverCardLayout({ children, trigger, open, onOpenChange }: HoverCardProps) {
  return (
    <HoverCard open={open} onOpenChange={onOpenChange}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent className="w-80">{children}</HoverCardContent>
    </HoverCard>
  );
}
