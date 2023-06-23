import React from "react";
import MemesData from "../MemesData"

export default function Meme() {
    const [MemeImage, setMemeImage] = React.useState(
        {
            url: "https://i.imgflip.com/1ur9b0.jpg",
            topText: "",
            bottomText: ""
        })
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * 100)
        const newurl = MemesData.data.memes[randomNumber].url
        setMemeImage(
            oldState => ({
                ...oldState,
                url: newurl
            }));
    }
    function handle_inp(event) {
        const { name, value } = event.target
        setMemeImage(oldState => ({
            ...oldState,
            [name]: value
        }));
    }
    return (
        <main>
            <div className="form--container">
                <input type="text" id="text--1" value={MemeImage.topText} onChange={handle_inp} name="topText" className="form--inputs" placeholder="Top-Text" />
                <input type="text" id="text--2" value={MemeImage.bottomText} onChange={handle_inp} name="bottomText" className="form--inputs" placeholder="Bottom-Text" />
            </div>
            <div className="button--wrapper">
            <button
                className="form--button"
                onClick={getMemeImage}
            >
                Generate a New Meme😁
            </button></div>
            <div className="meme--container">
                <div className="meme--wrapper">
                    <h2 className="top-text top">{MemeImage.topText}</h2>
                    <img src={MemeImage.url} className="meme--img" />
                    <h2 className="bottom-text bottom">{MemeImage.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}