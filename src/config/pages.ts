import pages from "./pages.json";

export type PageKey = keyof typeof pages;
export { pages };

export function pageHref(key: PageKey, hash = ""): string {
  return `${import.meta.env.BASE_URL}${pages[key].path.slice(1)}${hash}`;
}

export function currentPage(): PageKey | null {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = window.location.pathname;
  const relativePath = base && path.startsWith(`${base}/`) ? path.slice(base.length) : path;
  const normalized = relativePath.replace(/\/index\.html$/, "/").replace(/\/?$/, "/");
  return (Object.keys(pages) as PageKey[]).find((key) => pages[key].path === normalized) ?? null;
}
