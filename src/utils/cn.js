import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes and handle conditional classes.
 * @param {...(string|object|array<string|object>)} inputs - Class names to merge.
 * @returns {string} The merged and resolved class names.
 */
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
