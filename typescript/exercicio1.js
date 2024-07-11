"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    else if (typeof value === "string") {
        return Number(value);
    }
    else {
        throw "value deve ser um número ou string";
    }
}
console.log(toNumber("oi"));
