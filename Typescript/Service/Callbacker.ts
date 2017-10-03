class Callbacker{

    public static readonly baseUrl:string = $("#appUrl").val();
    private action: string;

    constructor(url: string){
        this.action = Callbacker.resolveUrl(url);
    }

    private resolveOptions(options: ICallerProperties): ICallerProperties{
        return $.extend({}, {
            contentType: "application/json",
            method: "GET",
            async: true,
            error: (xhr, textStatus, errorThrown) => {
                if (xhr.responseJSON != null) {
                    toastr.error(xhr.responseJSON.ResponsePhrase);
                }
                else {
                    toastr.error("Não foi possível completar a sua requisição");
                    console.error(xhr);
                }
            }
        }, options);
    }

    public static resolveUrl(action: string): string {
        var url: string = Callbacker.baseUrl;
        if (!(url.indexOf('/', this.length - '/'.length) !== -1))
            url = url + "/"; 
        return `${url}${action}`;
    } 

    public send(options: ICallerProperties): void{
        options = this.resolveOptions(options);

        $.ajax({
            url: this.action,
            async: options.async,
            beforeSend: options.beforeSend,
            success: options.success,
            error: options.error,
            complete: options.complete,
            method: options.method,
            contentType: options.contentType,
            data: options.method != "GET" ? JSON.stringify(options.data) : options.data
        });
    }
}