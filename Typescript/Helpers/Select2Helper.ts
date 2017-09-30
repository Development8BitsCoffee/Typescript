class Select2Helper{
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
}