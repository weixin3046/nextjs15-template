export type Locale = (typeof locales)[number];

export const locales = ["en_US", "zh_CN"] as const;
export const defaultLocale: Locale = "zh_CN";
