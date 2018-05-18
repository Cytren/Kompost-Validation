
import {ValidationItem, ValidationType} from "../model/validation";
import ValidationError from "../model/validation-error";

function basicError (key: string, error: string) {
    throw new ValidationError({
        key, error
    });
}

export default function validateBounds (type: ValidationType, item: ValidationItem, key: string, value: any) {
    switch (type) {
        case "number":
        case "float":
        case "integer":
            if (item.min && value < item.min) {
                basicError(key, `The value must be at least ${item.min}.`);
            }

            if (item.max && value > item.max) {
                basicError(key, `The value must be no more than ${item.max}.`);
            }

            break;

        case "string":
            if (item.min && value.length < item.min) {
                basicError(key, `The value must be at least ${item.min} characters long.`);
            }

            if (item.max && value.length > item.max) {
                basicError(key, `The value must be no more than ${item.max} characters long.`);
            }

            break;
    }
}
