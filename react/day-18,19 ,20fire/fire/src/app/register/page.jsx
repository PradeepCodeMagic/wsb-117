"use client"
import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../FireConfig.js"
import { useRouter } from 'next/navigation';

export default function page() {
    let routes=useRouter()

    let userRegister = (e) => {
       

        e.preventDefault()
        let userObj = {
            name: e.target.uname.value,
            email: e.target.uemail.value,
            password: e.target.upassword.value,
        }
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, userObj.email , userObj.password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("done....")
                routes.push("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });




    }
    return (
        <div>
            <div class="min-h-screen flex items-center justify-center bg-blue-400">

                <div class="bg-white p-16 rounded shadow-2xl w-2/3">

                    <h2 class="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>

                    <form class="space-y-5" onSubmit={userRegister} >

                        <div>
                            <label class="block mb-1 font-bold text-gray-500">Name</label>
                            <input type="text" name='uname' class="w-full border-2 border-gray-200 text-black p-3 rounded outline-none focus:border-purple-500" />
                        </div>

                        <div>
                            <label class="block mb-1 font-bold text-gray-500">Email</label>
                            <input type="email" name='uemail' class="w-full border-2 border-gray-200  text-black p-3 rounded outline-none focus:border-purple-500" />
                        </div>

                        <div>
                            <label class="block mb-1 font-bold text-gray-500">Password</label>
                            <input type="password" name='upassword' class="w-full border-2 border-gray-200   text-black p-3 rounded outline-none focus:border-purple-500" />
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" id="agree" />
                            <label for="agree" class="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
                        </div>

                        <button class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>

                    </form>

                </div>

            </div>
        </div>
    )
}
