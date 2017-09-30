class TableColumnsModel { 
    private readonly _columns: IColumns[];
    private readonly _columnsDefaults: DataTables.ColumnDefsSettings[];

    constructor() {
        this._columns = new Array();
        this._columnsDefaults = new Array();
    }

    public addColumnName(columnName: string): TableColumnsModel {
        this._columns.push({ "data": columnName });
        return this;
    }

    public addColumnDefaults(def: DataTables.ColumnDefsSettings): TableColumnsModel {
        this._columnsDefaults.push(def);
        return this;
    }

    public getColumns(): IColumns[] {
        return this._columns;
    }

    public getColumnDefs(): DataTables.ColumnDefsSettings[] {
        return this._columnsDefaults;
    }
    
}