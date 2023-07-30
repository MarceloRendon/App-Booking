import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function AccountPage(){
    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);
    
    let {subpage} = useParams();
    {/*console.log(subpage);*/}
    if(subpage === undefined){
        subpage = 'profile';
    }

    async function logout(){
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if(!ready){
        return 'Loading...';
    }

    if(ready && !user && !redirect){
        return <Navigate to={'/login'}/>
    }


    function linkClasses(type=null){
        let classes = 'py-2 px-6';
        if(type === subpage){
            classes += ' py-2 px-6 bg-bestColor7-100 hover:bg-bestColor7-200 text-white rounded-full';
        }
        return classes;
    }

    if(redirect){
        return <Navigate to={redirect}/>
    }

    return(
        <div className="">
            <nav className="w-full dark:text-white flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to={'/account'}>Mi perfil</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>Mis reservas</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>Mis acomodaciones</Link>
            </nav>

            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto dark:text-white">
                    Iniciada sesión como el usuario {user.name} ({user.email}) <br/>
                    <button onClick={logout} className="bg-bestColor7-100 hover:bg-bestColor7-200 text-white font-bold mt-2 py-2 px-4 rounded-full">Cerrar sesión</button>
                </div>
            )}

        </div>
    );
}