class Select2Tests{
    /**
     * Set the example select2 control to a loading state
     * 
     * @static
     * @memberof Select2Testst
     */
    public static TestSelect2Control(): void{
        var control = $("#loader_select2");
        UtilLoader.startLoadSelect2(control);
        setTimeout(() => {
            UtilLoader.endLoadSelect2(control);
        }, TestsProperties.waitSeconds);
    }
}

$(() => {
    
    $("#loaders_select2_button").on("click",Select2Tests.TestSelect2Control);
});