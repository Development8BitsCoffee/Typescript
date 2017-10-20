interface IModalOptions{
    /**
     * The modal Title
     * 
     * @type {string}
     * @memberof IModalOptions
     */
    title: string;

    /**
     * The URL that will be loaded into the modal body
     * 
     * @type {string}
     * @memberof IModalOptions
     */
    url: string;
    
    /**
     * Bind a save method to the Modal save button
     * 
     * @memberof IModalOptions
     */
    onSave?:() =>void;

    /**
     * Bind a method to "modal-bs-show"
     * 
     * @memberof IModalOptions
     */
    onOpen?: () => void;

    /**
     * Bind a method to "modal-bs-shown"
     * 
     * @memberof IModalOptions
     */
    afterOpen?: () => void;

    /**
     * Bind a method to "modal-bs-hide"
     * 
     * @memberof IModalOptions
     */
    onClose?: () => void;

    /**
     * Bind a method to "modal-bs-hidden"
     * 
     * @memberof IModalOptions
     */
    afterClose?: () =>void;

    /**
     * Custom Buttons
     * 
     * @memberof IModalOptions
     */
    buttons?: JQuery[];

}