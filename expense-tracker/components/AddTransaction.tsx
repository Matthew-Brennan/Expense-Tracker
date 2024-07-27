"use client";

const AddTransaction = () => {
    const clientAction = async (formData: FormData) => {
        console.log(formData.get('text'), formData.get('amount'));
    };

    return (
    <>
    <h3>Add transaction</h3>
    <form action={clientAction}>
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
