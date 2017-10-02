/** Represents commom actions made to the server.*/
interface IService{    
    
        /** Get all records */
        getAll(methods: ICallerMethods): void;
    
        /** Get All active records*/
        getActives(methods: ICallerMethods): void;
    
        /** Get all records based on a filter */
        getByFilter(filter: string, methods: ICallerMethods): void;
    
        /** Get one record from the server, based on it's Id */
        getById(id: any, methods: ICallerMethods): void;
    
        /** Get pageable records*/
        getDatatablePage(from: number, to: number, methods: ICallerMethods): void;
        
        /** Creates an object*/
        create(source: any, methods: ICallerMethods): void;
    
        /** Updates an object*/
        update(source: any, methods: ICallerMethods): void;
    
        /** Deletes an object based in it's id*/
        delete(id: any, methods: ICallerMethods): void;
    
        /** Activates an object based in it's id*/
        activate(id: any, methods: ICallerMethods): void;
    
        /** Inactivates an object based in it's id*/
        inactivate(id: any, methods: ICallerMethods): void;
    }