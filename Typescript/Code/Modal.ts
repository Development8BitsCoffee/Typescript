class Modal{

    public static openModal(options: IModalOptions): void{
        var url = Callbacker.resolveUrl(options.url);
        
                var modal = $(Properties.modalId);
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

                Loader.startLoadWindow("Carregando");

                modalBody.load(url, () => {
                    Loader.endLoadWindow();    
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
    }

}