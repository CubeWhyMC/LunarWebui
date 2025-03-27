import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import Footer from "../Footer/Footer.tsx";

export default function RegisterPage() {
    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function handleRegister(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData);
        console.log(formJson);
        /*todo: send register request*/
        navigate("/dashboard");
    }

    return (
        <>
            <h1 className={"text-center text-primary w-full text-3xl"}>Register Page</h1>
            <form className={"place-items-center grid grid-cols-1 w-auto gap-1"} method={"post"} onSubmit={handleRegister}>
                <label className={"input border-accent-content"}><FontAwesomeIcon icon={faUser}/><input type={"text"} required
                                                                                  placeholder={"Username"}/></label>
                <label className={"input border-accent-content"}><FontAwesomeIcon icon={faKey}/><input type={"password"} required
                                                                                 placeholder={"Password"}/></label>
                <div className={"grid grid-cols-2 gap-1 w-auto place-items-center"}>
                    <button className={"btn btn-primary w-fit border-accent-content hover:btn-secondary"} type={"submit"}>Register
                    </button>
                    <button className={"btn btn-primary w-fit border-accent-content hover:btn-secondary"}
                            onClick={() => navigate("/login")}>Login
                    </button>
                </div>
            </form>
            <Footer/>

        </>
    )
}