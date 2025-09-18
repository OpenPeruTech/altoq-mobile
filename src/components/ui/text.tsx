import { Text as RNText } from "react-native";
import { twMerge } from "tailwind-merge";

type Variant =
  | "header8xl"
  | "header7xl"
  | "header6xl"
  | "header5xl"
  | "header4xl"
  | "header3xl"
  | "header2xl"
  | "headerxl"
  | "headerlg"
  | "title2xl"
  | "titlexl"
  | "titlelg"
  | "titlemd"
  | "titlesm"
  | "titlexs"
  | "title2xs"
  | "body2xl"
  | "bodyxl"
  | "bodylg"
  | "bodymd"
  | "bodysm"
  | "bodyxs"
  | "body2xs";

interface VariantTextProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

const variantStyles: Record<Variant, string> = {
  header8xl:
    "text-[80px] leading-[88px] text-black dark:text-white  font-extraBold",
  header7xl:
    "text-[72px] leading-[79px]text-black dark:text-white  font-extraBold",
  header6xl:
    "text-[64px] leading-[71px] text-black dark:text-white  font-extraBold",
  header5xl:
    "text-[56px] leading-[62px] text-black dark:text-white  font-extraBold",
  header4xl:
    "text-[48px] leading-[53px] text-black dark:text-white  font-extraBold",
  header3xl:
    "text-[40px] leading-[44px]text-black dark:text-white   font-extraBold",
  header2xl:
    "text-[32px] leading-[36px]text-black dark:text-white  font-extraBold",
  headerxl:
    "text-[24px] leading-[27px]text-black dark:text-white  font-extraBold",
  headerlg:
    "text-[20px] leading-[22px]text-black dark:text-white   font-extraBold",

  title2xl:
    "text-[24px] leading-[26.4px] text-black dark:text-white  font-Bold",
  titlexl: "text-[20px] leading-[22px] text-black dark:text-white  font-Bold",
  titlelg: "text-[18px] leading-[19.8px] text-black dark:text-white  font-Bold",
  titlemd: "text-[16px] leading-[17.6px] text-black dark:text-white  font-Bold",
  titlesm: "text-[14px] leading-[15.4px] text-black dark:text-white  font-Bold",
  titlexs: "text-[12px] leading-[13.2px] text-black dark:text-white  font-Bold",
  title2xs: "text-[10px] leading-[11px] text-black dark:text-white  font-Bold",

  body2xl: "text-[24px] leading-[28px]text-black dark:text-white  font-medium",
  bodyxl: "text-[20px] leading-[24px]text-black dark:text-white  font-medium",
  bodylg: "text-[18px] leading-[21px]text-black dark:text-white  font-medium",
  bodymd: "text-[16px] leading-[19px]text-black dark:text-white  font-medium",
  bodysm: "text-[14px] leading-[17px]text-black dark:text-white  font-medium",
  bodyxs: "text-[12px] leading-[15px]text-black dark:text-white  font-medium",
  body2xs: "text-[10px] leading-[12px]text-black dark:text-white  font-medium",
};

export function Typography({
  variant = "header2xl",
  children,
  className,
  onPress,
}: VariantTextProps) {
  return (
    <RNText
      onPress={onPress}
      allowFontScaling={false}
      style={{ textAlignVertical: "center" }}
      className={twMerge(variantStyles[variant], className)}
    >
      {children}
    </RNText>
  );
}
