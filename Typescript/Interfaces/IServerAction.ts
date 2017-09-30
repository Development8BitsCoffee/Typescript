/** Represents commom actions made to the server.*/
interface IServerAction{    
    
        /** Get all records */
        getAll(methods: IAjaxMethods): void;
    
        /** Get All active records*/
        getActives(methods: IAjaxMethods): void;
    
        /** Get all records based on a filter */
        getByFilter(filter: string, methods: IAjaxMethods): void;
    
        /** Get one record from the server, based on it's Id */
        getById(id: any, methods: IAjaxMethods): void;
    
        /** Get pageable records*/
        getDatatablePage(from: number, to: number, methods: IAjaxMethods): void;
        
        /** Creates an object*/
        create(source: any, methods: IAjaxMethods): void;
    
        /** Updates an object*/
        update(source: any, methods: IAjaxMethods): void;
    
        /** Deletes an object based in it's id*/
        delete(id: any, methods: IAjaxMethods): void;
    
        /** Activates an object based in it's id*/
        activate(id: any, methods: IAjaxMethods): void;
    
        /** Inactivates an object based in it's id*/
        inactivate(id: any, methods: IAjaxMethods): void;
    }