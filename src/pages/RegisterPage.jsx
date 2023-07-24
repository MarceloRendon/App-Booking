import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function registerUser(ev){
        ev.preventDefault();
        axios.post('/register', {
            name,
            email,
            password,
        });
    }

    return (
    <div className="mt-32 grow flex items-center justify-around">

        <div className=" mb-64">
            <h1 className="text-4xl text-center mb-4">Regístrate</h1>
            
            <form className="max-w-md mx-auto" onSubmit={registerUser}>
                <input type="text" 
                    placeholder="Nombre" 
                    value={name}    
                    onChange = {ev => setName(ev.target.value)} />
                <input type="email" 
                    placeholder="mail@mail.com" 
                    value={email} 
                    onChange = {ev => setEmail(ev.target.value)}/>
                <input type="password" 
                    placeholder="contraseña" 
                    value={password} 
                    onChange = {ev => setPassword(ev.target.value)}/>
                <button className="buttonLogin mt-2 dark:text-white bg-gray-800 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:border-gray-700">Registrar</button>
                <div className="text-center py-2 text-gray-500 dark:text-white">
                    ¿Ya tienes cuenta? <Link className="underline text-black dark:text-gray-500" to={'/login'}>Ingresa aquí</Link>
                </div>
            </form>
        </div>

    </div>
    );
}