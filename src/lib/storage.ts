'use client';

type StorageType = typeof localStorage;

class StorageClient {
    private storageClient?: StorageType = undefined;

    constructor(storageClient?: StorageType) {
        this.storageClient = storageClient || localStorage;
    }

    public save<ValueType>(key: string, value: ValueType) {
        if (!this.storageClient || !key || !value) return;

        this.storageClient.setItem(key, JSON.stringify(value));
    }

    public get<ValueType>(key: string): ValueType | undefined {
        if (!this.storageClient || !key.trim()) return undefined;

        const rawValue = this.storageClient.getItem(key);
        return this.safeParse<ValueType>(rawValue);
    }

    public remove(key: string) {
        if (!this.storageClient || !key) return;

        this.storageClient.remove(key);
    }

    private safeParse<T>(data: string | null): T | undefined {
        try {
            return data ? JSON.parse(data) as T : undefined;
        } catch (error) {
            return undefined;
        }
    }
}

export enum StorageKeys {
    EXTRA_HOURS = 'EXTRA_HOURS',
}

export default StorageClient;