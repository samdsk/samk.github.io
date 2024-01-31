/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Contact from "../components/Contact.js"

export default function HomeSection() {
    return (
        <>
            <section id="home" className="min-h-screen mb-10 w-screen flex flex-col items-center">
                <div className="flex flex-col justify-center mx-auto w-10/12 lg:w-2/3">
                    <div className='p-5'>
                        <div className="my-2 ">
                            <h4 className="toUpAnimation anim-delay-200ms text-sm text-blue-500">Hello World! I am</h4>
                            <h1 className="toUpAnimation anim-delay-500ms text-4xl font-sans  font-bold w-full sm:text-5xl md:text-6xl">Sam. K.</h1>
                            <h4 className="toUpAnimation anim-delay-700ms text-xl font-bold sm:text-2xl md:text-3xl text-blue-800 w-auto ">I love exploring 🔍 and learning 📖 new things</h4>
                        </div>
                        <div className="text-sm toUpAnimation anim-delay-1000ms mt-2">
                            <p className="w-auto sm:w-3/4 ">
                                I’m a software developer from Italy 🇮🇹. I’m keen on back-end development 💻. 
                            </p>
                        </div>
                        <div className="text-sm toUpAnimation anim-delay-1000ms mt-2">
                            <p className="w-auto sm:w-3/4 ">
                                When I don’t code I like to hike 🥾, stargaze 🔭 and play video games 🎮. 
                            </p>
                        </div>
                        <div className='mt-5'>
                            <h3>Here is a list of technologies that I've been working with recently</h3>
                            <div className='flex flex-row space-x-10'>
                                <ul role="list" className="marker:text-sky-400 list-outside list-disc ml-10">
                                    <li className='hover:text-cyan-300'>Java | Spring</li>
                                    <li className='hover:text-cyan-300'>JUnit | Mockito</li>
                                    <li className='hover:text-cyan-300'>PostgresSQL | MongoDB</li>                            
                                    <li className='hover:text-cyan-300'>Erlang</li>
                                    <li className='hover:text-cyan-300'>Python</li>
                                </ul>
                                <ul role="list" className="marker:text-sky-400 list-outside list-disc ml-10">       
                                    <li className='hover:text-cyan-300'>Node JS | Express JS</li>
                                    <li className='hover:text-cyan-300'>NextJS | React | Tailwind</li>                      
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}