import COM_DMButton from './COM_DMButton';
import { Link } from 'react-router-dom';

const COM_NavBar = () => {

    return (

        <header className="bg-bestColor4 sticky top-0 z-50 p-0 dark:bg-gray-800 dark:text-white flex items-center justify-between  border dark:border-gray-800">
            <div className="container mx-auto">
                <div className="flex items-center place-content-evenly">
                    <div className="p-2 hover:border rounded-lg dark:border-gray-600">
                        <a href="/" className="items-center gap-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </a>
                    </div>

                    <div className="box p-2 flex-1">
                        
                        <div className="box-wrapper">

                            <div className="dark:bg-gray-600 dark:text-white bg-white rounded-full flex items-center w-6/7 p-3 shadow-sm border dark:border-gray-600 border-gray-200 ">
                                
                                <button className="outline-none focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-bestColor7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                                

                                <input type="search" name="" id="search-navbar" placeholder="Búsqueda" className="pl-4 text-sm outline-none focus:outline-none bg-transparent w-full" />

                                

                                <div className="select">
                                    <select name="" id=""  className="dark:bg-gray-600 dark:text-white text-sm outline-none focus:outline-none bg-transparent">
                                        <option value="0" defaultValue={0}>Todo</option>
                                        <option value="1">Categoria 1</option>
                                        <option value="2">Categoria 2</option>
                                        <option value="3">Categoria 3</option>
                                    </select>
                                </div>

                            </div>

                        </div>
                    </div>

                    
                    <div className="hover:border rounded-lg dark:border-gray-600 py-3 px-3">
                        <Link className="text-black" rel="stylesheet" href="">Arriendos</Link>
                    </div>

                    <div className="hover:border rounded-lg dark:border-gray-600 py-3 px-3">
                        <Link className="text-black" rel="stylesheet" href="">Turismo</Link>
                    </div>

                    <div className="hover:border rounded-lg dark:border-gray-600 py-3 px-3">
                        <Link className="text-black" rel="stylesheet" href="">Servicios</Link>
                    </div>

                    <div className="">
                        <COM_DMButton></COM_DMButton>
                    </div>
                    
                    <Link to={'/Login'} className="hover:border rounded-lg dark:border-gray-600 py-3 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Link>

                </div>

            </div>

        </header>

    );
};

export default COM_NavBar;