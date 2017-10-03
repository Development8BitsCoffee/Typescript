interface ICallerMethods {
    /**
     * Bind the method to the beforeSend event for the AJAX call
     * 
     * @param {JQueryXHR} jqXHR 
     * @param {JQueryAjaxSettings} settings 
     * @returns {*} 
     * @memberof ICallerMethods
     */
    beforeSend?(jqXHR: JQueryXHR, settings: JQueryAjaxSettings): any;

    /**
     * Bind the method to the success event for the AJAX call
     * 
     * @param {*} data 
     * @param {string} textStatus 
     * @param {JQueryXHR} jqXHR 
     * @returns {*} 
     * @memberof ICallerMethods
     */
    success? (data: any, textStatus: string, jqXHR: JQueryXHR): any;

    /**
     * Bind the method to the error event for the AJAX call
     * If not specified, the caller will throw an exception 
     * using toastr and log the error on the console
     * @param {JQueryXHR} jqXHR 
     * @param {string} textStatus 
     * @param {string} errorThrown 
     * @memberof ICallerMethods
     */
    error?(jqXHR: JQueryXHR, textStatus: string, errorThrown: string);

    /**
     * Bind the method to the complete event for the AJAX call
     * 
     * @param {JQueryXHR} jqXHR 
     * @param {string} textStatus 
     * @returns {*} 
     * @memberof ICallerMethods
     */
    complete?(jqXHR: JQueryXHR, textStatus: string): any;
}