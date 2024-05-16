import { useLocation, useParams } from "react-router-dom";
import listingData from '../data/listing.json';
import { useState } from "react";
import { GENERAL_MARGIN } from "../constant/them.style";

export default function Select() {
    let { name } = useParams();
    let { state } = useLocation();
    const [selectedMemory, setSelectedMemory] = useState("8");
    const [selectedStorage, setSelectedStorage] = useState("512");
    const [selectedPower, setSelectedPower] = useState("70");

    const product = listingData.find(product => product.key === name);
    const variant = product?.variation.find(v => v.colour === state.colour);
    let image = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764";
    if (variant?.colour === "Silver") {
        image = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-silver-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381686";
    }
    document.title = `${product?.size} MacBook Pro - ${variant?.colour} - Apple (MY)`;

    function onClickMemory(memory: string) {
        setSelectedMemory(memory);
    }

    function onClickStorage(storage: string) {
        setSelectedStorage(storage);
    }

    function onClickPower(power: string) {
        setSelectedPower(power);
    }

    return (
        <div id="select" className={`${GENERAL_MARGIN} text-zinc-500 md:flex my-20`}>
            <div>
                <div className="sticky top-0 mr-10">
                    <img width="386" height="233" src={image} />
                    <p className="text-center my-6 text-sky-500">View gallery</p>
                    <div className="hidden md:block flex justify-between my-4">
                        <div className="flex flex-col items-center">
                            <svg viewBox="0 0 35 35" role="img" aria-hidden="true" width="35px" height="35px">
                                <path fill="none" d="M0 0h35v35H0z"></path>
                                <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                                </path>
                            </svg>
                            <p>Free delivery</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <svg viewBox="0 0 35 35" role="img" aria-hidden="true" width="35px" height="35px">
                                <path fill="none" d="M0 0h35v35H0z"></path>
                                <path d="M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z" fill="none"></path>
                                <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                                </path>
                                <path d="M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z">
                                </path>
                            </svg>
                            <p>Free and easy returns</p>
                        </div>
                    </div>
                    <div className="my-4 hidden md:block">
                        <p className="text-center">Have questions about buying a Mac?</p>
                        <p className="text-center mb-6 text-sky-500">Chat with a Mac Specialist</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-semibold">Customise your {product?.size} Macbook Pro - {variant?.colour}</h1>
                <ul className="border-b border-slate-900/10 mb-6">
                    {product?.specs.map((spec, specIndex) => {
                        return (<li key={"spec" + specIndex}>
                            <p className="font-normal text-sm my-4">{spec}</p>
                        </li>)
                    })}
                </ul>
                <section className="border-b border-slate-900/10 mb-6">
                    <p className="font-semibold text-sm">Add a trade-in</p>
                    <p className="text-sm mb-2">Get credit towards a new Mac when you trade in your eligible computer. Or recycle it for free.**</p>
                    <p className="text-sm mb-6 text-sky-500">Get started</p>
                </section>
                <section className="my-4">
                    <div className="flex flex-col">
                        <p className="font-semibold text-sm">Memory</p>
                        <p className="text-sm mb-6 text-sky-500">How much memory is right for you?</p>
                        <button onClick={() => onClickMemory("8")} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedMemory === "8" ? "border-cyan-600 border-2" : ""}`}><span>8GB unified memory</span><span></span></button>
                        <button onClick={() => onClickMemory("16")} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedMemory === "16" ? "border-cyan-600 border-2" : ""}`}><span>16GB unified memory</span><span>+ RM 800.00</span></button>
                        <button onClick={() => onClickMemory("24")} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedMemory === "24" ? "border-cyan-600 border-2" : ""}`}><span>24GB unified memory</span><span>+ RM 1600.00</span></button>
                    </div>
                    <div className="flex flex-col">
                        <p>Storage</p>
                        <p className="text-sm mb-6 text-sky-500">How much storage is right for you?</p>
                        <button onClick={() => onClickStorage("512")} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedStorage === "512" ? "border-cyan-600 border-2" : ""}`}><span>512GB SSD storage</span><span></span></button>
                        <button onClick={() => onClickStorage("1")} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedStorage === "1" ? "border-cyan-600 border-2" : ""}`}><span>1TB SSD storage</span><span>+ RM 800.00</span></button>
                        <button onClick={() => onClickStorage("2")} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedStorage === "2" ? "border-cyan-600 border-2" : ""}`}><span>2TB SSD storage</span><span>+ RM 2400.00</span></button>
                    </div>
                    <div className="flex flex-col">
                        <p>Power Adapter</p>
                        <p className="text-sm mb-6 text-sky-500">Which power adapter is right for you?</p>
                        <button onClick={() => onClickPower("70")} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedPower === "70" ? "border-cyan-600 border-2" : ""}`}><span>70W USB-C Power Adapter</span><span></span></button>
                        <button onClick={() => onClickPower("96")} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedPower === "96" ? "border-cyan-600 border-2" : ""}`}><span>96W USB-C Power Adapter</span><span>+ RM 80.00</span></button>
                    </div>
                    <div>
                        <p>Keyboard Language</p>
                        <p className="text-sm mb-6 text-sky-500">Learn more</p>
                        <select>
                            <option value="065-CGTQ">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - US English</option>
                            <option value="CH065-CGTQ">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - Chinese (Pinyin)</option>
                            <option value="TA065-CGTQ">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - Chinese (Zhuyin)</option>
                            <option value="AB065-CGTQ">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - Arabic</option>
                            <option value="J065-CGTQ">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - Japanese</option>
                        </select>
                    </div>
                </section>
                <div className="bg-gray-100 p-10">
                    <p className="font-semibold text-sm">Need a moment?</p>
                    <p className="text-sm">Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>
                    <button className="flex flex-row text-cyan-400" type="button"><span><svg className="stroke-cyan-400" width="21" height="21"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.8 4.25a1.202 1.202 0 0 1 1.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 0 0-1.524 0L7 16.269V5.45a1.202 1.202 0 0 1 1.2-1.2h4.6m0-1H8.2A2.2 2.2 0 0 0 6 5.45v11.588a.768.768 0 0 0 .166.522.573.573 0 0 0 .455.19.644.644 0 0 0 .38-.128 5.008 5.008 0 0 0 .524-.467l2.916-2.885a.084.084 0 0 1 .118 0l2.916 2.886a6.364 6.364 0 0 0 .52.463.628.628 0 0 0 .384.131.573.573 0 0 0 .456-.19.768.768 0 0 0 .165-.522V5.45a2.2 2.2 0 0 0-2.2-2.2Z"></path></svg></span><span>Save for later</span></button>
                </div>

                <div className="my-4 block md:hidden ">
                    <p className="text-center">Have questions about buying a Mac?</p>
                    <p className="text-center mb-6 text-sky-500">Chat with a Mac Specialist</p>
                </div>
                <div className="block md:hidden md:flex justify-between my-4">
                    <div className="flex flex-col items-center">
                        <svg viewBox="0 0 35 35" role="img" aria-hidden="true" width="35px" height="35px">
                            <path fill="none" d="M0 0h35v35H0z"></path>
                            <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                            </path>
                        </svg>
                        <p>Free delivery</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg viewBox="0 0 35 35" role="img" aria-hidden="true" width="35px" height="35px">
                            <path fill="none" d="M0 0h35v35H0z"></path>
                            <path d="M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z" fill="none"></path>
                            <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                            </path>
                            <path d="M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z">
                            </path>
                        </svg>
                        <p>Free and easy returns</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
