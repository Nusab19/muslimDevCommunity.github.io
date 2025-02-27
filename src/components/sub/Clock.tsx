"use client";

/**
 * @file Clock.tsx
 * @author Nusab Taha
 * @email nusabtaha33@gmail.com
 * @description A responsive analog clock component.
 */

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ResponsiveTooltip from "../ui/ResponsiveTooltip";

interface ClockProps {
  size?: number;
  className?: string;
}

export default function Clock({ size = 200, className }: ClockProps) {
  // Use null as initial state to detect if we're in server or client
  const [time, setTime] = useState<Date | null>(null);

  // Clock timer effect
  useEffect(() => {
    // Set initial time only on client
    setTime(new Date());
    
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // If no time is set yet (server-side), use a fixed time to avoid hydration mismatch
  const currentTime = time || new Date(2023, 0, 1, 0, 0, 0);
  
  // Calculate rotation angles
  const seconds = currentTime.getSeconds();
  const secondsRatio = seconds / 60;
  const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentTime.getHours()) / 12;

  // Convert ratios to degrees - ensure same precision on server and client
  const secondsDegrees = Math.round(secondsRatio * 360);
  const minutesDegrees = Math.round(minutesRatio * 360 * 10) / 10;
  const hoursDegrees = Math.round(hoursRatio * 360 * 10) / 10;

  // Format time for display
  const formattedTime = currentTime.toLocaleTimeString();

  // Calculate sizes with exact precision to avoid hydration mismatches
  const hourHeight = Math.round(size * 0.25 * 10) / 10;
  const hourWidth = Math.round(size * 0.02 * 10) / 10;
  const minuteHeight = Math.round(size * 0.35 * 10) / 10;
  const minuteWidth = Math.round(size * 0.015 * 10) / 10;
  const secondHeight = Math.round(size * 0.4 * 10) / 10;
  const secondWidth = Math.round(size * 0.01 * 10) / 10;
  const centerSize = Math.round(size * 0.04 * 10) / 10;
  
  const ClockFace = (
    <div
      className={cn(
        "relative rounded-full border border-border bg-background",
        className,
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* Hour markers */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`hour-${i}`}
          className="absolute inset-0 flex items-start justify-center"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
          <div
            className="bg-foreground"
            style={{
              height: `${Math.round(size * 0.04 * 10) / 10}px`,
              marginTop: `${Math.round(size * 0.02 * 10) / 10}px`,
              width: `${Math.round(size * 0.01 * 10) / 10}px`,
            }}
          />
        </div>
      ))}

      {/* Minute markers */}
      {[...Array(60)].map((_, i) => {
        if (i % 5 === 0) return null; // Skip hour positions

        return (
          <div
            key={`minute-${i}`}
            className="absolute inset-0 flex items-start justify-center"
            style={{ transform: `rotate(${i * 6}deg)` }}
          >
            <div
              className="bg-muted-foreground"
              style={{
                height: `${Math.round(size * 0.02 * 10) / 10}px`,
                marginTop: `${Math.round(size * 0.02 * 10) / 10}px`,
                width: `${Math.round(size * 0.005 * 10) / 10}px`,
              }}
            />
          </div>
        );
      })}

      {/* Current second indicator */}
      <div
        className="absolute inset-0 flex items-start justify-center"
        style={{ transform: `rotate(${seconds * 6}deg)` }}
      >
        <div
          className="bg-blue-500"
          style={{
            height: `${Math.round(size * 0.02 * 10) / 10}px`,
            marginTop: `${Math.round(size * 0.02 * 10) / 10}px`,
            width: `${Math.round(size * 0.005 * 10) / 10}px`,
          }}
        />
      </div>

      {/* Clock center */}
      <div
        className="absolute z-10 rounded-full bg-foreground"
        style={{
          width: `${centerSize}px`,
          height: `${centerSize}px`,
          top: `calc(50% - ${centerSize / 2}px)`,
          left: `calc(50% - ${centerSize / 2}px)`,
        }}
      />

      {/* Hour hand */}
      <div
        className="absolute left-1/2 top-1/2 z-[1] origin-bottom rounded-full bg-foreground"
        style={{
          height: `${hourHeight}px`,
          width: `${hourWidth}px`,
          marginLeft: `${-hourWidth / 2}px`,
          marginTop: `${-hourHeight}px`,
          transformOrigin: `50% ${hourHeight}px`,
          transform: `rotate(${hoursDegrees}deg)`,
        }}
      />

      {/* Minute hand */}
      <div
        className="absolute left-1/2 top-1/2 z-[2] origin-bottom rounded-full bg-foreground"
        style={{
          height: `${minuteHeight}px`,
          width: `${minuteWidth}px`,
          marginLeft: `${-minuteWidth / 2}px`,
          marginTop: `${-minuteHeight}px`,
          transformOrigin: `50% ${minuteHeight}px`,
          transform: `rotate(${minutesDegrees}deg)`,
        }}
      />

      {/* Second hand */}
      <div
        className="absolute left-1/2 top-1/2 z-[3] origin-bottom rounded-full bg-blue-500"
        style={{
          height: `${secondHeight}px`,
          width: `${secondWidth}px`,
          marginLeft: `${-secondWidth / 2}px`,
          marginTop: `${-secondHeight}px`,
          transformOrigin: `50% ${secondHeight}px`,
          transform: `rotate(${secondsDegrees}deg)`,
        }}
      />
    </div>
  );

  // Only apply the tooltip on the client side
  if (!time) {
    return ClockFace;
  }

  return (
    <ResponsiveTooltip
      content={<p className="text-center font-medium">{formattedTime}</p>}
      className="w-fit py-2"
    >
      {ClockFace}
    </ResponsiveTooltip>
  );
}