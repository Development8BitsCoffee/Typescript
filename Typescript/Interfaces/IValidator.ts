interface IValidator<T>{
    validate(objectToValidate: T): boolean;
}