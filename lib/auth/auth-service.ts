import { users } from "@/components/principal/sidebar/config/users";
import type { User } from "@/components/principal/sidebar/config/users";

const STORAGE_KEY = "dataview_user";

export function login(username: string, password: string): User | null {
  const found = users.find(
    (u) => u.user === username && u.password === password
  );

  if (found) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    return found;
  }

  return null;
}

export function logout() {
  // borrar localStorage
  localStorage.removeItem("dataview_user");

  // borrar cookie
  document.cookie = "dataview_user=; path=/; max-age=0;";
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}
