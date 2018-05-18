
export type ValidationType =
    "integer" |
    "number" |
    "float" |
    "string" |
    "character" |
    "boolean";

export interface ValidationItem {
    type?: ValidationType;
    optional?: boolean;
    min?: number;
    max?: number;
    children?: Validation;
}

export interface Validation {
    [key: string]: ValidationItem;
}
