/**
 * Specifies the contract of an IValidator class
 * 
 * @interface IValidator
 * @template T 
 */
interface IValidator<T>{
    /**
     * validates the given object
     * 
     * @param {T} objectToValidate 
     * @returns {boolean} 
     * @memberof IValidator
     */
    validate(objectToValidate: T): boolean;
}