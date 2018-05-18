
import {Validation, ValidationItem, ValidationType} from "./model/validation";
import ValidationError from "./model/validation-error";
import validate from "./validate/index";
import transform from "./transform";

function validateAndTransform (validation: Validation, model: object): object {
    validate(validation, model);
    return transform(validation, model);
}

export {
    Validation, ValidationType, ValidationItem,
    validate, transform, validateAndTransform,
    ValidationError
};
