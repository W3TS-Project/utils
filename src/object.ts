export abstract class ObjectOptions {
    static entries<T extends Object>(obj: { [key: string]: T }): [string, T][] {
        let result: [string, T][] = []
        for (const key of Object.keys(obj)) {
            result.push([key, obj[key]])
        }
        return result
    }

    static values<T extends Object>(obj: { [key: string]: T }): T[] {
        let result = []
        for (const key of Object.keys(obj)) {
            result.push(obj[key])
        }
        return result
    }
}
