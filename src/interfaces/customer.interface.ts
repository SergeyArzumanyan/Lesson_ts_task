export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    balance: number;
    badCreditHistoryCount: number;
    updateBalance(amount: number): void;
}