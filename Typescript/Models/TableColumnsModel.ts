/**
 * Default class to handle the creation of a jQuery datatable
 * 
 * @class TableColumnsModel
 */
class TableColumnsModel { 
    private readonly _columns: IColumns[];
    private readonly _columnsDefaults: DataTables.ColumnDefsSettings[];

    /**
     * Creates an instance of TableColumnsModel.
     * @memberof TableColumnsModel
     */
    constructor() {
        this._columns = new Array();
        this._columnsDefaults = new Array();
    }

    /**
     * add a column to the table body
     * 
     * @param {string} columnName 
     * @returns {TableColumnsModel} 
     * @memberof TableColumnsModel
     */
    public addColumnName(columnName: string): TableColumnsModel {
        this._columns.push({ "data": columnName });
        return this;
    }

    
    /**
     * Add a column with some custom content.
     * 
     * @param {DataTables.ColumnDefsSettings} def 
     * @returns {TableColumnsModel} 
     * @memberof TableColumnsModel
     */
    public addColumnDefaults(def: DataTables.ColumnDefsSettings): TableColumnsModel {
        this._columnsDefaults.push(def);
        return this;
    }

    /**
     * get all columns added
     * 
     * @returns {IColumns[]} 
     * @memberof TableColumnsModel
     */
    public getColumns(): IColumns[] {
        return this._columns;
    }

    /**
     * get all columns with custom content.
     * 
     * @returns {DataTables.ColumnDefsSettings[]} 
     * @memberof TableColumnsModel
     */
    public getColumnDefs(): DataTables.ColumnDefsSettings[] {
        return this._columnsDefaults;
    }
    
}