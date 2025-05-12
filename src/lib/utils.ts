import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const images = {
  heroBackground: "/banner.jpeg",
  design: "/promo.jpeg",
  videoThumbnail: "https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&h=720&q=80"
};
