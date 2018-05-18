
import {ValidationType} from "../model/validation";
import ValidationError from "../model/validation-error";

function typeError (key: string, expectedType: string) {
    throw new ValidationError({
        key, expectedType
    });
}

export default function validateType (type: ValidationType, key: string, value: any) {
    switch (type) {

        case "integer":
            if (typeof value === "string") {
                try {
                    parseInt(value);
                } catch (e) {}
            } else if (typeof value !== "number" || !Number.isInteger(value)) {
                typeError(key, "integer");
            }

            break;

        case "number":
        case "float":
            if (typeof value === "string") {
                try {
                    parseFloat(value);
                } catch (e) {}
            } else if (typeof value !== "number") {
                typeError(key, "number");
            }

            break;

        case "string":
            if (typeof value !== "string") {
                typeError(key, "string");
            }
            break;

        case "character":
            if (typeof value !== "string" || value.length !== 1) {
                typeError(key, "character");
            }
            break;

        case "boolean":
            if (typeof value === "string") {
                if (["true", "false", "1", "0"].includes(value.toLowerCase())) {
                    break;
                }
            } else if (typeof value === "number") {
                if (value === 0 || value === 1) {
                    break;
                }
            } else if (typeof value !== "boolean") {
                typeError(key, "boolean");
            }
            break;

        default:
            break;

    }
}
