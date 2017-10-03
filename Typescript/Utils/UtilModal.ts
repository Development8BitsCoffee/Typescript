class UtilModal{
 
    /**
     * Gets the Common Modal created in the layout html
     * 
     * @private
     * @static
     * @returns {JQuery} 
     * @memberof ModalUtil
     */
    private static getModalObject() :JQuery {
        return $(Properties.modalId);
    }

    /**
     * Close the modal
     * 
     * @static
     * @memberof ModalUtil
     */
    public static closeModal():void{
        var modal = UtilModal.getModalObject();
        modal.modal("hide");
    }


    /**
     * Loads the given URL into a modal
     * The modal must be created in the layout html
     * 
     * @static
     * @param {IModalOptions} options 
     * @returns {JQuery}
     * @memberof ModalUtil
     */
    public static openModal(options: IModalOptions): JQuery{
        var url = Callbacker.resolveUrl(options.url);
        
                var modal = UtilModal.getModalObject();
                var modalBody = modal.find(".modal-body");
                var saveButton = $(`${Properties.modalSaveBtnId}`);

                modal.find('.modal-title').text(options.title);
                modal.off();

                saveButton.off();

                if(options.onSave == null){
                    saveButton.hide();
                }else{
                    saveButton.on("click", options.onSave);
                }

                UtilLoader.startLoadWindow("Carregando");

                modalBody.load(url, () => {
                    UtilLoader.endLoadWindow();    
                    modal.on("show.bs.modal",options.onOpen)    
                            .on("shown.bs.modal", options.afterOpen)
                            .on("hide.bs.modal", options.onClose)
                            .on("hidden.bs.modal", options.afterClose)
                        .modal({
                            show: true,
                            keyboard: false,
                            backdrop: 'static'
                    });
                });

                return modalBody;
    }

}