import { Link, Navigate, useParams } from "react-router-dom";
import PlacesFormPage from "./PlacesFormPage";
import AccountNav from "../AccountNav";

export default function PlacesPage() {
    /* action defined in app.jsx Router section */
    const { action } = useParams();

    /* 
        Redirect when form finished 
    if (redirectToPlacesList && action !== 'new') {
        return <Navigate to={'/account/places'} />
    }*/

    return (
        <div className="">
            <AccountNav></AccountNav>

            {/*
            Button to initiate form 'add new place',
            if action is not new then shows button,
            if it's new then the button is hidden and form is shown.*/}

            <div className="text-center">
                list of all added places
                <br />
                <Link className="inline-flex gap-1 bg-bestColor7-100 hover:bg-bestColor7-200 text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    Añadir nuevo lugar
                </Link>
            </div>

        </div>
    );
}