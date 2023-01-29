import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import completed from '../Pages/Completetasks';
import axios from "axios";


function Header() {
    return (
        <div>
            <div className="pb-5 flex flex-row flex-wrap items-center  text-white border-solid border border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-60">
                <img className="h-20 w-40 mt-5 ml-5" src="https://i.ibb.co/4psPYms/nonprofitlogo.png" />
                <a href="/" className="mt-auto mb-auto mr-5 ml-3">Tasks</a>
                



                <form>
                    <label for="default-search" className="mb-2 text-sm font-medium text-white-900 sr-only text-white ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg aria-hidden="true" className="w-5aaaaaaaa h-5 text-white-500 text-white-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                        bg-gray-700 
                        border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Tasks" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Search</button>
                    </div>
                </form>


                <div className='flex items-center ml-auto mr-5 '>
                    <div className="border w-fit rounded-xl m-5 shadow-sm  border border-gray-300 rounded-lg bg-gray-50">
                        <button className="px-4 py-2 rounded-l-xl text-black bg-blue-700  transition rounded-lg" onClick={handleCreate}  >Create Task</button>
                    </div>
                </div>
        



            </div>




        </div>

    );



}

async function handleCreate(event) {
    let button = await Swal.fire({


        title: "Create Task",
        html: `
        <form className="">
    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
    <br>
    <input id="message" rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Company Name"></input>
        <br>
        <br>
    <label for="rep" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Representative Name</label>
    <br>
    <input id="rep" rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Rep Name"></input>
        <br>
        <br>
    <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
    <br>
    <input id="title" rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Task Title"></input>
        <br>
        <br>
    
    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
    <br>
    <input className="large-input" id="description" rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Task Description"></input>

   
    </div>
   
</form>`,
confirmButtonText: 'Submit Task',
showCloseButton: true
});

axios.post('http://localhost:5000/createTask', {
    title: Swal.getPopup().querySelector('#title').value,
    message: Swal.getPopup().querySelector('#message').value,
    representative: Swal.getPopup().querySelector('#rep').value,
    description: Swal.getPopup().querySelector('#description').value,
});

}


export default Header;