export function makeKey(type: string, prefix: string, query: any): string {
  const keyParts = typeof query === "object" ? JSON.stringify(query) : String(query);
  return `${type}:${prefix}:${Buffer.from(keyParts).toString("base64")}`;
}
