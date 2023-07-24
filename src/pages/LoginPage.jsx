import { Link } from "react-router-dom";


export default function LoginPage() {
    return (
    <div className="mt-4 grow flex items-center justify-around">

        <div className=" mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            
            <form className="max-w-md mx-auto" action="">
                <input type="email" placeholder="mail@mail.com"/>
                <input type="password" placeholder="contraseña" />
                <button className="buttonLogin">Login</button>
                <div className="text-center py-2 text-gray-500">
                    ¿No tienes cuenta aún? <Link className="underline text-black" to={'/register'}>Regístrate aquí</Link>
                </div>
            </form>
        </div>

    </div>
    );
}