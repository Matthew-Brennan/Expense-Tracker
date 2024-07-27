"use client";
import {useRef} from 'react';
import addTransaction from "@/app/actions/addTransaction";
import {toast} from 'react-toastify';

const AddTransaction = () => {
    const fromRef = useRef<HTMLFormElement>(null);
    const clientAction = async (formData: FormData) => {
        const {data, error} = await addTransaction(formData);

        if (error){
            toast.error(error);
        }else{
            toast.success('Transaction Added');
            fromRef.current?.reset();
        }
    };

    return (
    <>
    <h3>Add transaction</h3>
    <form ref={fromRef} action={clientAction}>
        <div className="form-contorl">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" name="text" placeholder="Enter Text..."/>
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br />(negative = expense, positive = income)</label>
            <input type="number" name="amount" id="amount" step='0.01' placeholder="Enter Amount..."/>
        </div>
        <div>
            <button className="btn">Add Transaction</button>
        </div>
    </form>
    </>
    );
}
 
export default AddTransaction
