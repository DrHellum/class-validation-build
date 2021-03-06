import { IsEmailOptions, IsFQDNOptions, IsURLOptions, IsCurrencyOptions } from "../validation/ValidationTypeOptions";
import { ValidationOptions } from "./ValidationOptions";
/**
 * Registers custom validator class.
 */
export declare function ValidatorConstraint(options?: {
    name?: string;
    async?: boolean;
}): (target: Function) => void;
/**
 * Performs validation based on the given custom validation class.
 * Validation class must be decorated with ValidatorConstraint decorator.
 */
export declare function Validate(constraintClass: Function, validationOptions?: ValidationOptions): Function;
export declare function Validate(constraintClass: Function, constraints?: any[], validationOptions?: ValidationOptions): Function;
/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
export declare function ValidateNested(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
export declare function ValidateIf(condition: (object: any, value: any) => boolean, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if given value is defined (!== undefined, !== null).
 */
export declare function IsDefined(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the value match ("===") the comparison.
 */
export declare function Equals(comparison: any, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the value does not match ("!==") the comparison.
 */
export declare function NotEquals(comparison: any, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
export declare function IsEmpty(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
export declare function IsNotEmpty(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if value is in a array of allowed values.
 */
export declare function IsIn(values: any[], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if value is not in a array of disallowed values.
 */
export declare function IsNotIn(values: any[], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if a value is a boolean.
 */
export declare function IsBoolean(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if a value is a date.
 */
export declare function IsDate(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if a value is a number.
 */
export declare function IsNumber(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the value is an integer number.
 */
export declare function IsInt(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if a value is a string.
 */
export declare function IsString(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if a value is an array.
 */
export declare function IsArray(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if a value is a number enum.
 */
export declare function IsEnum(entity: Object, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the value is a number that's divisible by another.
 */
export declare function IsDivisibleBy(num: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the value is a positive number.
 */
export declare function IsPositive(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the value is a negative number.
 */
export declare function IsNegative(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the given number is greater than given number.
 */
export declare function Min(min: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the given number is less than given number.
 */
export declare function Max(max: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the value is a date that's after the specified date.
 */
export declare function MinDate(date: Date, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the value is a date that's before the specified date.
 */
export declare function MaxDate(date: Date, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if a string is a boolean.
 */
export declare function IsBooleanString(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a number.
 */
export declare function IsNumberString(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string contains the seed.
 */
export declare function Contains(seed: string, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string does not contain the seed.
 */
export declare function NotContains(seed: string, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string contains only letters (a-zA-Z).
 */
export declare function IsAlpha(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string contains only letters and numbers.
 */
export declare function IsAlphanumeric(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string contains ASCII chars only.
 */
export declare function IsAscii(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if a string is base64 encoded.
 */
export declare function IsBase64(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string's length (in bytes) falls in a range.
 */
export declare function IsByteLength(min: number, max?: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a credit card.
 */
export declare function IsCreditCard(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a valid currency amount.
 */
export declare function IsCurrency(options?: IsCurrencyOptions, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is an email.
 */
export declare function IsEmail(options?: IsEmailOptions, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 */
export declare function IsFQDN(options?: IsFQDNOptions, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string contains any full-width chars.
 */
export declare function IsFullWidth(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string contains any half-width chars.
 */
export declare function IsHalfWidth(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string contains a mixture of full and half-width chars.
 */
export declare function IsVariableWidth(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a hexadecimal color.
 */
export declare function IsHexColor(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a hexadecimal number.
 */
export declare function IsHexadecimal(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is an IP (version 4 or 6).
 */
export declare function IsIP(version?: "4" | "6", validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is an ISBN (version 10 or 13).
 */
export declare function IsISBN(version?: "10" | "13", validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is an ISIN (stock/security identifier).
 */
export declare function IsISIN(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a valid ISO 8601 date.
 */
export declare function IsISO8601(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 */
export declare function IsJSON(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is lowercase.
 */
export declare function IsLowercase(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a mobile phone number (locale is one of ['zh-CN', 'zh-TW', 'en-ZA', 'en-AU', 'en-HK',
 * 'pt-PT', 'fr-FR', 'el-GR', 'en-GB', 'en-US', 'en-ZM', 'ru-RU', 'nb-NO', 'nn-NO', 'vi-VN', 'en-NZ']).
 */
export declare function IsMobilePhone(locale: string, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 */
export declare function IsMongoId(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string contains one or more multibyte chars.
 */
export declare function IsMultibyte(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string contains any surrogate pairs chars.
 */
export declare function IsSurrogatePair(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is an url.
 */
export declare function IsUrl(options?: IsURLOptions, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 */
export declare function IsUUID(version?: "3" | "4" | "5", validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string is uppercase.
 */
export declare function IsUppercase(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 */
export declare function Length(min: number, max?: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 */
export declare function MinLength(min: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 */
export declare function MaxLength(max: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
 */
export declare function Matches(pattern: RegExp, validationOptions?: ValidationOptions): Function;
export declare function Matches(pattern: RegExp, modifiers?: string, validationOptions?: ValidationOptions): Function;
/**
 * Checks if the string correctly represents a time in the format HH:MM
 */
export declare function IsMilitaryTime(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if array contains all values from the given array of values.
 */
export declare function ArrayContains(values: any[], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if array does not contain any of the given values.
 */
export declare function ArrayNotContains(values: any[], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if given array is not empty.
 */
export declare function ArrayNotEmpty(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if array's length is as minimal this number.
 */
export declare function ArrayMinSize(min: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if array's length is as maximal this number.
 */
export declare function ArrayMaxSize(max: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 */
export declare function ArrayUnique(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
