function isType(type) {
    return function (value) {
        return Object.prototype.toString.call(value) === `[object ${type}]`;
    };
}

export const variableTypeUtil = {
    isNumber: isType('Number'),
    isString: isType('String'),
    isBoolean: isType('Boolean'),
    isNull: isType('Null'),
    isUndefined: isType('Undefined'),
    isSymbol: isType('Symbol'),
    isFunction: isType('Function'),
    isObject: isType('Object'),
    isArray: isType('Array'),
    isPromise: isType('Promise')
};