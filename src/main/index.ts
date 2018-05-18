
import {Validation, ValidationItem, ValidationType} from "./model/validation";
import validate from "./validate/index";
import transform from "./transform";

function validateAndTransform (validation: Validation, model: object): object {
    validate(validation, model);
    return transform(validation, model);
}

export {
    Validation, ValidationType, ValidationItem, validate, transform, validateAndTransform
};
