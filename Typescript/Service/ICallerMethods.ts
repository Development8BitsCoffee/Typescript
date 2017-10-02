interface IAjaxMethods {
    beforeSend?(jqXHR: JQueryXHR, settings: JQueryAjaxSettings): any;
    success? (data: any, textStatus: string, jqXHR: JQueryXHR): any;
    error?(jqXHR: JQueryXHR, textStatus: string, errorThrown: string);
    complete?(jqXHR: JQueryXHR, textStatus: string): any;
}