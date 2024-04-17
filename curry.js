const curry = (fn) => {
    const arity = fn.length;

    const curried = (...args) => {
        if (args.length >= arity) {
            return fn(...args);
        } else {
            return (...moreArgs) => curried(...args, ...moreArgs);
        }
    };

    return curried;
};

const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3, 6)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
