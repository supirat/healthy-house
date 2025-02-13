export function getImageUrl(path) {
  return new URL(`${path.replace("@", "/src")}`, import.meta.url).href;
}
