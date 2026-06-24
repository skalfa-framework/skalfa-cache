export declare const cache: {
    makeKey(type: string, prefix: string, query: any): string;
    get<T>(key: string): Promise<T | null>;
    set(key: string, value: any, expired: number): Promise<void>;
    clear(type: string, prefix: string): Promise<void>;
};
