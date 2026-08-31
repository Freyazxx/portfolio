import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col justify-center px-6 md:px-10">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
        Lost in
        <br />
        translation<span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-md text-base text-muted-strong">
        This page doesn&apos;t exist — but the rest of the story does.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
      >
        Back home
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
