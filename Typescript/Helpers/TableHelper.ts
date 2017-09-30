class TableHelper {

    public static renderDateFormat = (data, type, row) => {
        return moment(data).format("DD/MM/YYYY (HH:mm)");
    }

    public static drawDataTable(initTable: string | JQuery, data: any[],
        columns: TableColumnsModel,
        options: IDataTable = {}): void {
        var tableId: any = null; 

        if (typeof initTable === "string") {
            tableId = $(`#${initTable}`);
        } else {
            tableId = initTable.attr("id")
        }

        if ($.fn.DataTable.isDataTable($(`#${tableId}`))) {
            var table = $(`#${tableId}`).DataTable();
            table.clear();
            table.rows.add(data);
            table.draw(true);
        } else {
            $(`#${tableId}`).DataTable({
                destroy: true,
                data: data,
                "columns": columns.getColumns(),
                columnDefs: columns.getColumnDefs(),
                pageLength: options.pageLength
            });
        }
    }
}