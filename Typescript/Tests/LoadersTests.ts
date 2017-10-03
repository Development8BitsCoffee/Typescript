class LoadersTests {
    private static readonly waitSeconds : number = 2500;

    public static TestWindowLoading(): void {
        UtilLoader.startLoadWindow();
        setTimeout(() => {
            UtilLoader.endLoadWindow();
        }, LoadersTests.waitSeconds);
    }

    public static TestWindowLoadingRandomMessage(): void {
        var number = Math.floor((Math.random() * 5) + 1);
        var message = "";

        switch (number) {
            case 1:
                message = "ALLOW ME TO BREAK THE ICE";
                break;
            case 2:
                message = "GET TO THE CHOPPER!";
                break;
            case 3:
                message = "DO IT. DO IT NOW!”";
                break;
            case 4:
                message = "SEE YOU AT THE PARTY, RICHTER!”";
                break;
            case 5:
                message = "WHO IS YOUR DADDY, AND WHAT DOES HE DO?”";
                break;
            default:
                message = "I’LL BE BACK";
                break;
        }

        UtilLoader.startLoadWindow(message);
        setTimeout(() => {
            UtilLoader.endLoadWindow();
        }, LoadersTests.waitSeconds);
    }

    public static TestSelect2Control(): void{
        var control = $("#loader_select2");
        UtilLoader.startLoadSelect2(control);
        setTimeout(() => {
            UtilLoader.endLoadSelect2(control);
        }, LoadersTests.waitSeconds);
    }
}

$(() => {
    $("#loaders_window").on("click", LoadersTests.TestWindowLoading);
    $("#loaders_window_message").on("click", LoadersTests.TestWindowLoadingRandomMessage);
    $("#loaders_select2_button").on("click",LoadersTests.TestSelect2Control);
});