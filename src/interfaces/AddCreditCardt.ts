export interface ICardData {
    cardDescribe: string;
    cardNumber: number | null;
    cardFlag:string; // maybe not
    cardIssue:string;
    cardAccount:string;
}

export interface ICardInvoice {
    dayClose:string | null
    dayExpiration:string | null
}


export interface ICreditCardData {
    cardData?: ICardData;
    cardInvoice?: ICardInvoice;
}