import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WEBAPI_NODE_URL = "http://192.168.1.149:3000/api";
export const WEBAPI_JAVA_URL = "http://192.168.1.149:8080/api";
export const WEBAPI_DOTNET_URL = "http://192.168.1.149:5201/api";
