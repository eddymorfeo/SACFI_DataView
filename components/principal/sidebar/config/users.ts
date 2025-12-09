export type User = {
  name: string
  user: string
  password: string
  email: string
  avatar: string
}

export const users: User[] = [
  {
    name: "Administrador",
    user: "admin",
    password: "Sacfi.2025",
    email: "etejeda@minpublico.cl",
    avatar: "/avatars/shadcn.jpg",
  },
  {
    name: "Ricardo Yau",
    user: "ryau",
    password: "Sacfi.2025",
    email: "ryau@minpublico.cl",
    avatar: "/avatars/shadcn.jpg",
  },
  {
    name: "Miguel Fernandez",
    user: "mfernandez",
    password: "Sacfi.2025",
    email: "mfernandez@minpublico.cl",
    avatar: "/avatars/shadcn.jpg",
  },
  {
    name: "Solangen Murillo",
    user: "smurillo",
    password: "Sacfi.2025",
    email: "smurillo@minpublico.cl",
    avatar: "/avatars/shadcn.jpg",
  }
]