'use server';

import { text } from "stream/consumers";

interface TransactionData{
    text: string;
    amount: number;
}

//return either the transaction data or an error string
interface TransactionResult{
    data?: TransactionData
    error?: string
}

async function addTransaction(formData: FormData):
Promise<TransactionResult>{
    const textValue = formData.get('text');
    const amountValue = formData.get('amount');

    //check input values
    if(!textValue || textValue === '' || !amountValue){
        return {error: 'Text or Amount is missing'};
    }

    //ensure text is a string
    const text: string = textValue.toString();
    const amount: number = parseFloat(amountValue.toString());

    const transactionData: TransactionData = {
        text,
        amount
    };

    return{data: transactionData};
}

export default addTransaction
