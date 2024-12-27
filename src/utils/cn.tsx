import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...rest: (string | Record<string, boolean>)[]) {
  return twMerge(clsx(...rest));
}
