class UtilLoader{ 

    /**
     * Start a window loading
     * 
     * @static
     * @memberof Loader
     */
    public static startLoadWindow(message?: string): void{
        var loadingDiv = `<div class='loadingmodal'>
                                <div class='text-center'>
                                    <i class="${Properties.loadingIcon} fa-5x"> </i>
                                <br>
                                <span>${message != null ? message : ""}</span>
                                </div>
                          </div>`;
        $(loadingDiv).insertAfter("body");
        $("body").addClass("loading");
    }

    /**
     * Removes the loading from the window
     * 
     * @static
     * @memberof Loader
     */
    public static endLoadWindow(): void{
        $("body").removeClass("loading");
        var l = $("div.loadingmodal");
        l.fadeOut("slow", () => {
            l.remove();
        });
    }

    /**
     * Initializes a JQuery datatable loading
     * @param table
     * @param loadText
     */
    public static startLoadTable(table: string | JQuery, loadText?:string): void {
        if (typeof table === "string") {
            table = $(`#${table}`);
        }
        if (loadText == null) {
            loadText = "";
        }

        var tableId = table.attr("id");
        var loaderId = `loading_${tableId}`;
        if($(`#${loaderId}`).length > 0){ return; }

        var tableWrapper = table.closest("div:not(.dt-wrapper):not(.dataTables_wrapper)");

        tableWrapper.fadeOut();
        $(`<div id="${loaderId}" class='text-center'>
                <i class='${Properties.loadingIcon} fa-5x'></i><br/>
                <span>${loadText}</span>
           </div>`).insertBefore(tableWrapper);
    }

    /**
     * Removes the loading from a JQuery datatable
     * @param table
     */
    public static endLoadTable(table: string | JQuery): void {
        if (typeof table === "string") {
            table = $(`#${table}`);
        }
        var tableId = table.attr("id");

        $(`#loading_${tableId}`).remove();
        var tableWrapper = table.closest("div:not(.dt-wrapper):not(.dataTables_wrapper)");
        
        tableWrapper.fadeIn('slow');
    }

    /**
     * Initializes a Select2 loading
     * 
     * @static
     * @param {(string | JQuery)} select 
     * @memberof Loader
     */
    public static startLoadSelect2(select: string | JQuery): void {
        if (typeof select === "string") {
            select = $(`#${select}`);
        }

        var selectId = select.attr("id");
        var loaderId = `loading_${selectId}`;
        if($(`i[name='${loaderId}']`).length > 0) {return;}

        select.prop("disabled", true);
        $(`<i name='${loaderId}' class='${Properties.loadingIcon} text-primary'></i>`).insertBefore(select)
    }

    /**
     * Removes the loading from a Select2
     * 
     * @static
     * @param {(string | JQuery)} select 
     * @memberof Loader
     */
    public static endLoadSelect2(select: string | JQuery): void {
        if (typeof select === "string") {
            select = $(`#${select}`);
        }

        select.prop("disabled", false);
        var selectId = select.attr("id");
        var loader = $(`i[name='loading_${selectId}']`);
        loader.fadeOut({
            complete: () => {
                loader.remove();
            }
        });
    }
}