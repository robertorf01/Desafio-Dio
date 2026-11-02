import { DioAccount } from "./DioAccount.ts"

export class SpecialAccount extends DioAccount {
    deposit(amount: number): void {
        if (amount <= 0) {
            super.deposit(amount)
            return
        }

        super.deposit(amount + 10)
    }
}
