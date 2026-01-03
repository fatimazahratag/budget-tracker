import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import styles from "./CurrencySwitch.module.css";

export default function CurrencySwitch({ currency, onChange }) {
  return (
    <div className={styles.center}>
      <ToggleGroup
        type="single"
        value={currency}
        onValueChange={onChange}
        className={styles.glass}
      >
        <ToggleGroupItem value="MAD">MAD</ToggleGroupItem>
        <ToggleGroupItem value="$">$</ToggleGroupItem>
        <ToggleGroupItem value="€">€</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}