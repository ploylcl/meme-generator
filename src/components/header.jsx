import React from "react";

export default function Header() {


    return (
        <div className="flex flex-row justify-between font-bold items-center text-3xl bg-slate-950 align-middle p-10">
            <div className=" flex flex-row items-center">
                <img src="../public/img/Troll Face.png" />
                <h1 className="text-6xl ml-5 text-white">MEME GENERATOR</h1>
            </div>

            <div className=" text-white">
                <h1>react project </h1>
            </div>

        </div>
    )
}