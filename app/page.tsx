import Image from "next/image";
import { profile, links } from "@/data/links";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col items-center px-5 py-10 bg-neutral-950 text-neutral-100">
      {/* Avatar + Nome */}
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={96}
        height={96}
        priority
        className="rounded-full ring-2 ring-neutral-700"
      />
      <h1 className="mt-4 text-xl font-semibold">{profile.name}</h1>
      <p className="mt-1 text-sm text-neutral-400 text-center">
        {profile.bio}
      </p>

      {/* Links */}
      <nav className="mt-8 w-full max-w-sm flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="w-full text-center rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm font-medium transition active:scale-[0.98] hover:bg-neutral-800 hover:border-neutral-700"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <footer className="mt-auto pt-10 text-xs text-neutral-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}