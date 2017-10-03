interface ICallerProperties extends ICallerMethods{
    /**
     * Data to be sent to the server
     * 
     * @type {*}
     * @memberof ICallerProperties
     */
    data?: any;

    /**
     * Tells if the call will be async or not.
     * Sync calls should be avoided.
     * 
     * @type {boolean}
     * @memberof ICallerProperties
     */
    async?: boolean;

    /**
     * Defines the METHOD, such as POST, PUT, GET...
     * 
     * @type {string}
     * @memberof ICallerProperties
     */
    method?: string;

    /**
     * Tells the content type of the call, such as "Application/json"
     * 
     * @type {string}
     * @memberof ICallerProperties
     */
    contentType?: string;
}