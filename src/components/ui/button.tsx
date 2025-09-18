import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { Typography } from "./text";

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

interface ButtonProps {
  text: string;
  onPress: () => void;
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  buttonClassName?: string;
  textClassName?: string;
  iconright?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  variant = "primary",
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled = false,
  buttonClassName = "",
  textClassName = "",
  iconright = false,
}) => {
  const baseStyles =
    "flex-row items-center justify-center px-4 py-3 rounded-[16px] h-[50px] w-full";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-ActionPrimary",
    secondary: "bg-gray-600",
    outline: "border border-black/10",
    danger: "bg-red-600",
  };

  const textColor = variant === "outline" ? "text-ActionPrimary" : "text-white"; // Siempre blanco

  const buttonStyles = twMerge(
    baseStyles,
    variants[variant],
    disabled && "bg-desabledButton",
    buttonClassName
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      className={buttonStyles}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <View className="flex-row items-center gap-2">
          {leftIcon && <View>{leftIcon}</View>}
          <Typography
            variant="bodysm"
            className={twMerge(" font-[700] ", textColor, textClassName)}
          >
            {text}
          </Typography>
          {rightIcon && <View>{rightIcon}</View>}
        </View>
      )}
      {iconright && (
        <View className="absolute right-4">
          <FontAwesome6 name="arrow-right" color="white" size={20} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
