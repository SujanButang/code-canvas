import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "./theme-provider";

export function SwitchTheme() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        checked={theme == "dark" ? true : false}
        onCheckedChange={() =>
          theme == "dark" ? setTheme("light") : setTheme("dark")
        }
      />
      <Label htmlFor="airplane-mode">Dark Mode</Label>
    </div>
  );
}
