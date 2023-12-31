import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);
    async function loginUser(ev) {
        ev.preventDefault();
        try{
            const {data} = await axios.post('/login', {
                email,
                password
            });
            setUser(data);
            //alert('Login exitoso');
            setRedirect(true);
        }catch(e){
            alert('El inicio de sesión ha fallado.');
        }
    }

    if(redirect){
        return <Navigate to={'/'}/>
    }

    return (
        <div className="mt-32 grow flex items-center justify-around">

            <div className=" mb-64">
                <h1 className="text-4xl text-center mb-16 dark:text-white">Inicio de sesión</h1>

                <form className="max-w-md mx-auto" onSubmit={loginUser}>
                    <input type="email"
                        placeholder="mail@mail.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="buttonLogin mt-2 dark:text-white hover:bg-bestColor7 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:border-gray-700">Iniciar sesión</button>
                    <div className="text-center py-2 text-gray-500 dark:text-white">
                        ¿No tienes cuenta aún? <Link className="underline text-black dark:text-gray-500" to={'/register'}>Regístrate aquí</Link>
                    </div>
                </form>
            </div>

        </div>
    );
}