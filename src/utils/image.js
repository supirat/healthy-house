export function getImageUrl(path) {
  return new URL(path.replace("@/", "/"), import.meta.url).href;
}
