interface ISelect2Options{
    /**
     * Field in the data class that will be used as the Value for the select Option
     * 
     * @type {string}
     * @memberof ISelect2Options
     */
    value: string;

    /**
     * Field in the data class that will be used as the Text for the select Option
     * 
     * @type {string}
     * @memberof ISelect2Options
     */
    text: string;

    /**
     * If the select already have a value selected, this will set automatically
     * 
     * @type {*}
     * @memberof ISelect2Options
     */
    selectedId?: any;

    /**
     * Use this array to set defalt data-{field}="{field.value}"
     * 
     * @type {string[]}
     * @memberof ISelect2Options
     */
    customDataField?:string[];

    /**
     * Trigger the change event on the select, default is false.
     * 
     * @type {boolean}
     * @memberof ISelect2Options
     */
    trigger?: boolean;
}