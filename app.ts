import { CompanyAccount } from "./class/CompanyAccount.ts"
import { PeapleAccount } from "./class/PeapleAccount.ts"
import { SpecialAccount } from "./class/SpecialAccount.ts"


const peapleAccount: PeapleAccount = new PeapleAccount(123456789, 'Roberto Santos', 12345)
peapleAccount.deposit(100)
peapleAccount.withdraw(30)

console.log(peapleAccount.getName())
console.log(peapleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('RM Ltda', 67890)
companyAccount.deposit(100)
companyAccount.getLoan(500)
console.log(companyAccount.getBalance())

const specialAccount: SpecialAccount = new SpecialAccount('Special Account', 24680)
specialAccount.deposit(100)
console.log(specialAccount.getBalance())