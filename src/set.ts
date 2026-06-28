import { redis } from "@skalfa/skalfa-redis";

export async function set(key: string, value: any, expired: number): Promise<void> {
  const ttl = expired ?? 60; 
  await redis.set(key, JSON.stringify(value), "EX", ttl);
}
