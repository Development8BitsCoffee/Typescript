interface IModalOptions{
    title: string;
    url: string;
    
    onSave?:() =>void;
    onOpen?: () => void;
    afterOpen?: () => void;
    onClose?: () => void;
    afterClose?: () =>void;
    

}