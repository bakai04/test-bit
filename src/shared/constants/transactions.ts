export enum TRANSACTION_TYPE_ENUM {
    WRITE_OFF = "WRITE_OFF",
    REPLENISH = "REPLENISH",
}

export interface ITRANSACTION_TYPE {
    [TRANSACTION_TYPE_ENUM.WRITE_OFF]: string;
    [TRANSACTION_TYPE_ENUM.REPLENISH]: string;
}

export const TRANSACTION_TYPE = {
    [TRANSACTION_TYPE_ENUM.WRITE_OFF]: "Списание",
    [TRANSACTION_TYPE_ENUM.REPLENISH]: "Пополнение",
};
