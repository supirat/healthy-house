export function getImageUrl(path) {
  const decodedPath = decodeURIComponent(path);
  return new URL(`${decodedPath.replace("@/", "/src/")}`, import.meta.url).href;
}
