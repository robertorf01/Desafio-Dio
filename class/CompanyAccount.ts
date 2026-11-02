import { DioAccount } from "./DioAccount.ts"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (amount: number): void => {
        if (!this.validateStatus()) {
            return
        }

        if (amount <= 0) {
            console.log('O valor do empréstimo deve ser positivo')
            return
        }

        this.addBalance(amount)
        console.log(`Empréstimo realizado: ${amount}`)
    }
}