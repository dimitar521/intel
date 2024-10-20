export abstract class CreateAccount<TBankName, TBankID> {
    constructor(public bankName: TBankName, public bankID: TBankID) {}
}