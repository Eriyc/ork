import { Plus as LucidePlus, LucideProps } from "lucide-react-native";
import { iconWithClassName } from "./icon-with-class-name";
import { cn } from "~/lib/utils";
iconWithClassName(LucidePlus);

export const Plus = ({ className, ...props }: LucideProps) => (
  <LucidePlus className={cn("text-foreground", className)} {...props} />
);
