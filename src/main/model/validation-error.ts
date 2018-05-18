
export default class ValidationError extends Error {

    constructor (readonly value: any) {
        super("Validation Error");
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
