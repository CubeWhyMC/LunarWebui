import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer.tsx";

export default function LoginPage() {
    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData);
        console.log(formJson);
        /*todo: send login request*/
        navigate('/dashboard');
    }

    return (
        <>
            <h1 className={"text-primary text-3xl w-full text-center"}>LunarCN Login Page</h1>
            <form method="post" onSubmit={handleLogin} className={"grid grid-cols-1 gap-1 w-auto place-items-center "}>
                <label className={"input border-accent-content"}>
                    <FontAwesomeIcon icon={faUser}/>
                    <input type={"text"} required placeholder={"Username"}/>
                </label>
                <label className={"input border-accent-content"}>
                    <FontAwesomeIcon icon={faKey}/>
                    <input type={"password"} required placeholder={"Password"}/>
                </label>
                <div className={"grid grid-cols-2 gap-1 w-auto place-items-center"}>
                    <button type={"submit"} className={"btn btn-primary w-fit border-accent-content"}>Login</button>
                    <button type={"button"} className={"btn btn-secondary w-fit border-accent-content"}
                            onClick={() => navigate("/register")}>Register
                    </button>
                </div>
            </form>
            <Footer/>

        </>
    )
}