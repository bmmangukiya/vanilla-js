function get(object, path) {
    const keys = path.replace(/\[|\]/g, ".").split(".").filter(item => item);

    let value = object;
    for (const key of keys) {
        if (value.hasOwnProperty(key)) {
            value = value[key];
        } else {
            return undefined;
        }
    }

    return value;
}

// Test cases
console.log(get({ developer: "Software Engineer" }, "developer")); // => 'Software Engineer'
console.log(get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName")); // =>'Cruz'
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]")); // => 0
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]")); // => null


