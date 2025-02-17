export function getImageUrl(path) {
  const formattedPath = path.replace("@/", "/src/").split('/').map(encodeURIComponent).join('/');
  return new URL(formattedPath, import.meta.url).href;
}
