import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";
import { parseISO } from "date-fns";

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formateDate = (date: string) => {
  const providedDate = parseISO(date);
  const timeAgo = formatDistanceToNow(providedDate);
  return `${timeAgo} ago`;
};

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
