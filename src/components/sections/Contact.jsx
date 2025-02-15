import React, { useState } from "react";
import emailjs from 'emailjs-com';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSumbit = (e) => {
        e.preventDefault()
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""});
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."))
    };

    return <section id="contact" className='min-h-screen w-full relative bg-gradient-to-r from-yellow-600 to-amber-400 flex items-center justify-center text-center flex-col gap-10 text-white p-52'>

            <div className="px-4 w-200">

                <h2 className="text-8xl ">Get in Touch</h2>

                <form className="space-y-6" onSubmit={handleSumbit}>
                    <div className="relative">
                        <input type="text" id="name" value={formData.name} name="name" placeholder="Name..." required 
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                    </div>

                    <div className="relative">
                        <input type="email" id="email" value={formData.email} name="email" placeholder="example@gmail.com" required 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                    </div>

                    <div className="relative">
                        <textarea id="message" value={formData.message} name="message" rows={5} placeholder="Your Message Here..." required
                        onChange={(e) => setFormData({...formData, message: e.target.value})} 
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>

                </form>
            </div>

    </section>
}