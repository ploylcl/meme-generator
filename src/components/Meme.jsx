import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage(e) {
        e.preventDefault(); // Use a capital "D" in "preventDefault"
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(e) {
        const { name, value } = e.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <div className=" flex flex-col">
            <form className="p-10 grid gap-17 ">
                <div className=" flex flex-row justify-center ">
                    <label>

                        <input className="border-solid border-2 border-sky-500 p-5 pl-20 pr-20 mr-5 "
                            type="text"
                            placeholder="Top text"

                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                    </label>
                    <label>

                        <input className="border-solid border-2 border-sky-500 p-5  pl-20 pr-20 ml-5"
                            type="text"
                            placeholder="Bottom text"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange} />
                    </label>
                </div>
                <div className=" flex justify-center pt-10">

                    <button
                        className="border-solid border-2  p-5 bg-black text-white hover:border-double border-black  hover:bg-white hover:text-black  pl-20 pr-20 "
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
            </form>
            <div className="w-100 flex justify-center">
                <img src={meme.randomImage} className="relative" />
                <h2 className="absolute text-3xl font-bold text-white mt-5">{meme.topText}</h2>
                <h2 className=" absolute text-3xl font-bold mt-48 text-white">{meme.bottomText}</h2>
            </div>

        </div>
    )
}