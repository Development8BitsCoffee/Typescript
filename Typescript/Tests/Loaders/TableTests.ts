class TableTests{
    public static TestTableLoading():void{
        UtilLoader.startLoadTable($("#table"), "Loading table");

        setTimeout(() =>{
            UtilLoader.endLoadTable($("#table"));
        }, TestsProperties.waitSeconds);
    }
}

$(() => {
    $("#btn_table_refresh").on("click",TableTests.TestTableLoading);
});