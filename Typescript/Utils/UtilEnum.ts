class UtilEnum {
    /**
     * Get all names and values from an enum
     * 
     * @static
     * @template T 
     * @param {*} e 
     * @returns 
     * @memberof UtilEnum
     */
    static getNamesAndValues<T extends number>(e: any) {
        return UtilEnum.getNames(e).map(n => ({ name: n, value: e[n] as T }));
    }

    /**
     * Get all enum names
     * 
     * @static
     * @param {*} e 
     * @returns 
     * @memberof UtilEnum
     */
    static getNames(e: any) {
        return UtilEnum.getObjValues(e).filter(v => typeof v === "string") as string[];
    }

    /**
     * Get all enum values
     * 
     * @static
     * @template T 
     * @param {*} e 
     * @returns 
     * @memberof UtilEnum
     */
    static getValues<T extends number>(e: any) {
        return UtilEnum.getObjValues(e).filter(v => typeof v === "number") as T[];
    }

    /**
     * Get all enum values
     * 
     * @private
     * @static
     * @param {*} e 
     * @returns {((number | string)[])} 
     * @memberof UtilEnum
     */
    private static getObjValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }
}