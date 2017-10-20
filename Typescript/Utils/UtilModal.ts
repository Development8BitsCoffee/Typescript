class UtilModal {
    
        /**
         * Gets the Common Modal created in the layout html
         * 
         * @private
         * @static
         * @returns {JQuery} 
         * @memberof ModalUtil
         */
        private static getModalObject(): JQuery {
            return $(Properties.modalId);
        }
    
        /**
         * Close the modal
         * 
         * @static
         * @memberof ModalUtil
         */
        public static closeModal(): void {
            var modal = $("#awe_wait_for_it_some_modal");
            modal.modal("hide");
        }
    
        /**
         * Loads the given URL into a dynamic modal
         * 
         * @static
         * @param {IModalOptions} options 
         * @returns {JQuery}
         * @memberof ModalUtil
         */
        public static openModal(options: IModalOptions): JQuery {
            var url = Callbacker.resolveUrl(options.url);
    
            var modal = $(`<div id="awe_wait_for_it_some_modal" class="modal fade" tabindex="-1" 
                            role="dialog" data-keyboard="false" 
                            data-backdrop="static">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                     <div class="modal-header">
                                        <a type="button" class="pull-right" 
                                        data-dismiss="modal" aria-label="Close">
                                            <i class="color-white fa fa-times fa-3x"></i>
                                        </a>
                                        <h4 class="modal-title">${options.title}</h4>
                                    </div>
                                
                                <div class="modal-body modal-body--scroll">
                                </div>
                            </div>
                        </div>
                        </div>`);
    
            var modalBody = modal.find(".modal-body");
            var modalContent = modal.find(".modal-content");
            var modalFooter = $(`<div class="modal-footer text-center"></div>`);
            modalContent.append(modalFooter);
    
            modal.find('.modal-title').text(options.title);
            modal.off();
    
            if (options.buttons != undefined && options.buttons.length > 0) {
                $.Enumerable.From(options.buttons)
                    .ForEach((btn: JQuery) => {
                        modalFooter.append(btn);
                    });
            } else {
                var saveBtn = $(`<button class="btn btn-success">
                                <i class="fa fa-check fa-2x valign-sub"></i> Gravar
                            </button>`).on("click", options.onSave);
    
    
                modalFooter.append(saveBtn);
                modalFooter.append(`<button data-dismiss="modal" data-buttonid="Cancel" class="btn btn-default">
                                <i class="fa fa-times fa-2x valign-sub"></i> Cancelar
                            </button>`);
            }
    
            UtilLoader.startLoadWindow();
            modalBody.load(url, () => {
                UtilLoader.endLoadWindow();
                modal.on("show.bs.modal", options.onOpen)
                    .on("shown.bs.modal", options.afterOpen)
                    .on("hide.bs.modal", options.onClose)
                    .on("hidden.bs.modal", () => {
                        if (options.afterClose != undefined) {
                            options.afterClose();
                        }
                        modal.remove();
                    })
                    .modal({
                        show: true,
                        keyboard: false,
                        backdrop: 'static'
                    });
            });
    
            return modalBody;
        }
    
    }