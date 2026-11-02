import { DioAccount } from "./DioAccount.ts"
 
 export class PeapleAccount extends DioAccount {
         private readonly doc_id: number

        constructor(doc_id: number, name: string, accountNumber: number){
            super(name, accountNumber)
            this.doc_id = doc_id
        }
    }