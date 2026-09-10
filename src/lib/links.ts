export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export const newTabRel = "noopener noreferrer";
