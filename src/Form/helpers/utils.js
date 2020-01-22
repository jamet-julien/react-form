export const mergeInitObject = (init, data) =>
    Object.keys(init).reduce(
        (g, c) => ({ ...g, [c]: data[c] ? data[c] : init[c] }),
        {}
    );
