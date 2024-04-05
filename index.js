// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (const key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

// myMap function
function myMap(collection, callback) {
    const newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        }
    } else {
        for (const key in collection) {
            newArray.push(callback(collection[key]));
        }
    }
    return newArray;
}

// myReduce function
function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (!acc) {
        acc = collection[0];
        startIdx = 1;
    }
    if (Array.isArray(collection)) {
        for (let i = startIdx; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else {
        for (const key in collection) {
            acc = callback(acc, collection[key], collection);
        }
    }
    return acc;
}

// myFind function
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else {
        for (const key in collection) {
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    }
}

// myFilter function
function myFilter(collection, predicate) {
    const newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                newArray.push(collection[i]);
            }
        }
    } else {
        for (const key in collection) {
            if (predicate(collection[key])) {
                newArray.push(collection[key]);
            }
        }
    }
    return newArray;
}

// mySize function
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        let count = 0;
        for (const key in collection) {
            count++;
        }
        return count;
    }
}

// myFirst function
function myFirst(array, n = 1) {
    return array.slice(0, n);
}

// myLast function
// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (const key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

// myMap function
function myMap(collection, callback) {
    const newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        }
    } else {
        for (const key in collection) {
            newArray.push(callback(collection[key]));
        }
    }
    return newArray;
}

// myReduce function
function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (!acc) {
        acc = collection[0];
        startIdx = 1;
    }
    if (Array.isArray(collection)) {
        for (let i = startIdx; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else {
        for (const key in collection) {
            acc = callback(acc, collection[key], collection);
        }
    }
    return acc;
}

// myFind function
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else {
        for (const key in collection) {
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    }
}

// myFilter function
function myFilter(collection, predicate) {
    const newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                newArray.push(collection[i]);
            }
        }
    } else {
        for (const key in collection) {
            if (predicate(collection[key])) {
                newArray.push(collection[key]);
            }
        }
    }
    return newArray;
}

// mySize function
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        let count = 0;
        for (const key in collection) {
            count++;
        }
        return count;
    }
}

// myFirst function
function myFirst(array, n = 1) {
    return array.slice(0, n);
}

// myLast function
// myLast function
function myLast(collection, n = 1) {
    if (Array.isArray(collection)) {
        if (n === 1) {
            return collection[collection.length - 1];
        } else {
            return collection.slice(-n);
        }
    } else {
        const values = Object.values(collection);
        if (n === 1) {
            return values[values.length - 1];
        } else {
            return values.slice(-n);
        }
    }
}


// mySortBy function (optional, not implemented here)
function mySortBy(array, callback) {
    // Implementation is optional and not provided here
}


// mySortBy function (optional, not implemented here)
function mySortBy(array, callback) {
    // Implementation is optional and not provided here
}
