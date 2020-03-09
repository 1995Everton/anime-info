export function getFunctionFactory(
    service: { [x: string]: any; },
    document: Document,
    name: string) {

        if(name in service){
            return service[name](document,service)
        }else{
            return null;
        }
    
};

export function getKeyValue(service: { [x: string]: any; },key: string) {
    if(key in service){
        return service[key];
    }else{
        return null;
    }
   
};
