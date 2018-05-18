
import {Validation} from "../model/validation";

export default function transform (validation: Validation, model: object) {

    const process = (validation: Validation, model: object): object => {
        const result = {};

        Object.entries(validation).forEach(([key, validationItem]) => {
            if (validationItem.children) {
                result[key] = process(validationItem.children, model[key]);
            } else {
                const value = model[key];
                result[key] = value;

                switch (validationItem.type) {
                    case "integer":
                        if (typeof value === "string") {
                            result[key] = parseInt(value);
                        }
                        break;

                    case "number":
                    case "float":
                        if (typeof value === "string") {
                            result[key] = parseFloat(value);
                        }
                        break;

                    case "boolean":
                        if (typeof value === "string") {
                            result[key] = ["true", "1"].includes(value.toLowerCase());
                        } else if (typeof value === "number") {
                            result[key] = !!value;
                        }

                        break;
                }
            }
        });

        return result;
    };

    return process(validation, model);
}
