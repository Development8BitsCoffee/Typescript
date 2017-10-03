class UtilSelect2{
    
    /**
     * Create one or more data attribute for the select2 option
     * 
     * @private
     * @static
     * @param {*} item 
     * @param {ISelect2Options} options 
     * @returns {string} 
     * @memberof Select2Util
     */
    private static createCustomDataAttribute(item: any, options: ISelect2Options) : string{
        var dataFields = "";
        Enumerable.From(options.customDataField)
        .ForEach((dataField: any,index:number) => {
            dataFields += `data-${options.customDataField[index]}="${item[dataField]}"`;
        });

        return dataFields;
    }

    /**
     * Get a custom data attribute selected from a Select2 Control
     * 
     * @static
     * @param {(string | JQuery)} select 
     * @param {string} data 
     * @returns {string} 
     * @memberof Select2Util
     */
    public static getCustomData(select: string | JQuery, data: string): string {
        try {
            if (typeof select === "string") {
                select = $(`#${select}`);
            }

            return $(select.select2("data")[0].element).data(data.toLowerCase());
        } catch (exception) {
            return "";
        }
    }


    /**
     * 
     * 
     * @static
     * @param {JQuery} select2 
     * @param {any[]} data 
     * @param {ISelect2Options} options 
     * @returns {JQuery} 
     * @memberof Select2Util
     */
    public static fillSelect(select2:JQuery, data: any[], options: ISelect2Options):JQuery{
        options = $.extend({},{
            trigger: false,
            customDataField: []
        }, options);

        select2.empty();

        if (data == null || data.length <= 0) {
            return;
        }

        //Iterate from the data that will be populate into the Select2 control
        Enumerable.From(data)
            .ForEach((item: any) => {
                var dataFields = UtilSelect2.createCustomDataAttribute(item, options); 
                select2.append(`<option ${dataFields} value="${item[options.value]}">${item[options.text]}</option>`);
            });

        if (options.selectedId != undefined) {
            select2.select2("val", options.selectedId, options.trigger);
        }
        return select2;
    }
}