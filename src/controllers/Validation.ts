export class Validation{
    existsOrError(value: string, msg: string){ //Se o valor existir ele passa na validação
        if(!value) throw msg
        if(typeof value !== 'string') throw msg
    }

    notExistsOrError(value: string, msg: string){
        try{
            this.existsOrError(value, msg)
        }catch(msg){
            return
        }
        throw msg
    }

    equalsOrError(valueA:string, valueB:string, msg:string){
        if(valueA !== valueB) throw msg
    }
}