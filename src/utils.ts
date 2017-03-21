export default function toPairs<T>(ob: {[k: string]: T}): [string, T][] {

    function m(k: string): [string, T] {
        return [k, ob[k]];
    }

    return Object.keys(ob).map(m);

}
