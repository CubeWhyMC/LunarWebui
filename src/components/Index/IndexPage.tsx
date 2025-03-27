import {useNavigate} from "react-router-dom";
import Footer from "../Footer/Footer.tsx";

export default function IndexPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className={"grid grid-cols-1 gap-1"}>
                <h1 className={"text-primary text-3xl"}>LunarWebUI Index Page</h1>
                <div className={"grid grid-cols-2 w-fit"}>
                    <button onClick={() => navigate("/login")} className="btn btn-primary w-fit border-accent-content">login</button>
                    <button onClick={() => navigate("/register")} className="btn btn-primary w-fit border-accent-content">register</button>
                </div>
                <span className={"h-screen"}/>
                <Footer/>
            </div>
        </>
    )
}