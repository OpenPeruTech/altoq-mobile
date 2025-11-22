"use client";

import React from "react";

import { Typography } from "@/components/atoms";
import { useCountdown } from "@/hooks";
import { cn } from "@/lib/utils";

export interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  showLabels?: boolean;
}

/**
 * CountdownTimer Component (Molecule)
 * Displays a countdown timer with days, hours, minutes, and seconds
 */
export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  className,
  showLabels = true,
}) => {
  const { days, hours, minutes, seconds, total } = useCountdown(targetDate);

  if (total <= 0) {
    return (
      <div className={cn("text-center", className)}>
        <Typography variant="h3" color="primary">
          ¡El día ha llegado!
        </Typography>
      </div>
    );
  }

  const timeUnits = [
    { value: days, label: "Días" },
    { value: hours, label: "Horas" },
    { value: minutes, label: "Minutos" },
    { value: seconds, label: "Segundos" },
  ];

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 md:gap-6",
        className
      )}
    >
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600 shadow-lg md:h-20 md:w-20 lg:h-24 lg:w-24">
              <Typography
                variant="h2"
                className="font-bold text-white md:text-4xl lg:text-5xl"
              >
                {String(unit.value).padStart(2, "0")}
              </Typography>
            </div>
            {showLabels && (
              <Typography
                variant="small"
                className="mt-2 text-neutral-600"
                weight="medium"
              >
                {unit.label}
              </Typography>
            )}
          </div>
          {index < timeUnits.length - 1 && (
            <Typography
              variant="h2"
              className="hidden text-primary-600 md:block"
              weight="bold"
            >
              :
            </Typography>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
