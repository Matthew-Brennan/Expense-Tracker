import { SignInButton } from "@clerk/nextjs";
import exp from "constants";

const Guest = () => {
    return (<div className="guest">
        <h1>Welcome</h1>
        <p>Please sign in to manage your expenses</p>
        <SignInButton/>
    </div>
    );
}

export default Guest