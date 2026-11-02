export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
        this.balance = 0
    }
    getName = (): string => {
        return this.name
    }

    deposit(amount: number): void {
        if (!this.validateStatus()) {
            return
        }

        if (amount <= 0) {
            console.log('O valor do depósito deve ser positivo')
            return
        }

        this.balance += amount
        console.log(`Depósito realizado: ${amount}`)
    }

    withdraw = (amount: number): void => {
        if (!this.validateStatus()) {
            return
        }

        if (amount <= 0) {
            console.log('O valor do saque deve ser positivo')
            return
        }

        if (this.balance > amount) {
            this.balance -= amount
            console.log(`Saque realizado: ${amount}`)
            return
        }

        console.log('Saldo insuficiente')
    }
    getBalance = (): void => {
        console.log(this.balance)
    }

    protected validateStatus = (): boolean => {
        if (this.status === true) {
            console.log('Conta ativa')
            return true
        } else {
            console.log('Conta inativa')
            return false
        }
    }

    protected addBalance(amount: number): void {
        this.balance += amount
    }

}