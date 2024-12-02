export const pipe = (...funcs: any[]) => (initialValue: any) => {
    return funcs.reduce((value, func) => func(value), initialValue);
};