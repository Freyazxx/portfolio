/**
 * Language primitives — pure, no React, importable from server or client.
 */

export type Lang = "en" | "zh";

/** A value that exists in both English and Chinese. */
export type Localized<T = string> = { en: T; zh: T };

/** Shorthand to build a Localized value. */
export function L<T>(en: T, zh: T): Localized<T> {
  return { en, zh };
}

/** Pick the value for a given language. */
export function pick<T>(lang: Lang, value: Localized<T>): T {
  return lang === "zh" ? value.zh : value.en;
}
