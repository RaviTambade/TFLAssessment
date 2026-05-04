import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WEBAPI_NODE_URL = "http://localhost:3000/api";
export const WEBAPI_JAVA_URL = "http://localhost:8080/api";
export const WEBAPI_DOTNET_URL = "http://localhost:5201/api";
