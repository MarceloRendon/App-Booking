import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);

    let { subpage } = useParams();
    {/*console.log(subpage);*/ }
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className="">
            <AccountNav></AccountNav>

            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto dark:text-white">
                    Iniciada sesión como el usuario {user.name} ({user.email}) <br />
                    <button onClick={logout} className="bg-bestColor7-100 hover:bg-bestColor7-200 text-white font-bold mt-2 py-2 px-4 rounded-full">Cerrar sesión</button>
                </div>
            )}

            {subpage === 'places' && (
                <PlacesPage></PlacesPage>
            )}

        </div>
    );
}