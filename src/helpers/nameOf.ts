export const nameOf = <T, K extends keyof T>(data: T, key: K) => {
    return data[key] ? data[key] : null;
}