// Fallback for using MaterialIcons on Android and web.
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

// Define solo los íconos que necesitas
const ICON_MAPPING: Record<
  string,
  ComponentProps<typeof MaterialIcons>["name"]
> = {
  // Íconos existentes
  "house.fill": "home",
  house: "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",

  // Íconos para candidatos
  person: "person",
  "person.fill": "person",
  "person.2": "people",
  "person.2.fill": "people",
  "person.3": "group",
  "person.3.fill": "group",
  people: "people",
  "people.fill": "people",

  // Íconos para resultados
  "chart.bar": "bar-chart",
  "chart.bar.fill": "bar-chart",
  "chart.pie": "pie-chart",
  "chart.pie.fill": "pie-chart",
  "chart.line.uptrend.xyaxis": "trending-up",
  "list.bullet.rectangle": "list",
  "square.grid.2x2": "grid-view",

  // Íconos para noticias
  doc: "description",
  "doc.fill": "description",
  "doc.text": "article",
  "doc.text.fill": "article",
  newspaper: "newspaper",
  "newspaper.fill": "newspaper",
  "text.bubble": "chat-bubble",
  "text.bubble.fill": "chat-bubble",
  "info.circle": "info",
  book: "menu-book",
  "book.fill": "menu-book",
};

export type IconSymbolName = keyof typeof ICON_MAPPING;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const iconName = ICON_MAPPING[name];

  if (!iconName) {
    console.warn(
      `Icon "${name}" not found in mapping. Available icons:`,
      Object.keys(ICON_MAPPING)
    );
    return null;
  }

  return (
    <MaterialIcons color={color} size={size} name={iconName} style={style} />
  );
}
