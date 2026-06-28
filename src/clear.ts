import { redis } from "@skalfa/skalfa-redis";

export async function clear(type: string, prefix: string): Promise<void> {
  const keyPrefix = `${type}:${prefix}:*`
  const keys = await redis.keys(keyPrefix)
  if (keys.length) await redis.del(keys)
}
