import { redis } from "@skalfa/skalfa-redis";
export const cache = {
    // =============================>
    // ## Cache: Make key of cache database
    // =============================>
    makeKey(type, prefix, query) {
        const keyParts = typeof query === "object" ? JSON.stringify(query) : String(query);
        return `${type}:${prefix}:${Buffer.from(keyParts).toString("base64")}`;
    },
    // =============================>
    // ## Cache: Get cache with key
    // =============================>
    async get(key) {
        const cached = await redis.get(key);
        if (!cached)
            return null;
        try {
            return JSON.parse(cached);
        }
        catch {
            return null;
        }
    },
    // =============================>
    // ## Cache: Set cache record
    // =============================>
    async set(key, value, expired) {
        const ttl = expired ?? 60;
        await redis.set(key, JSON.stringify(value), "EX", ttl);
    },
    // =============================>
    // ## Cache: Set cache record
    // =============================>
    async clear(type, prefix) {
        const keyPrefix = `${type}:${prefix}:*`;
        const keys = await redis.keys(keyPrefix);
        if (keys.length)
            await redis.del(keys);
    }
};
//# sourceMappingURL=index.js.map