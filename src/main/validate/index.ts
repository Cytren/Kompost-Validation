
import {Validation, ValidationItem} from "../model/validation";
import ValidationError from "../model/validation-error";
import validateType from "./type";
import validateBounds from "./bounds";

export default function validate (rules: Validation, model: any) {

    const process = (key: string, item: ValidationItem, model: any, fullKey: string) => {
        if (!model) {
            throw new ValidationError({
                key: fullKey,
                error: "Required property is missing."
            });
        }

        if (item.children) {
            Object.entries(item.children).forEach(([subKey, value]) => {
                process(subKey, value, model[key], `${fullKey}.${subKey}`);
            });

            return;
        }

        if (item.optional && !model[key]) { return; }

        validateType(item.type, fullKey, model[key]);
        validateBounds(item.type, item, fullKey, model[key]);
    };

    Object.entries(rules)
        .forEach(([key, value]) => process(key, value, model, key));
}
