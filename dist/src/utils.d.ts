export default function toPairs<T>(ob: {
    [k: string]: T;
}): [string, T][];
