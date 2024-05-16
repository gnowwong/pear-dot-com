import { useLocation, useParams } from "react-router-dom";
import listingData from '../data/listing.json';
import { useState } from "react";
import { GENERAL_MARGIN } from "../constant/them.style";

export default function Select() {
    let { name } = useParams();
    let { state } = useLocation();

    const product = listingData.find(product => product.key === name);
    const variant = product?.variation.find(v => v.colour === state.colour);
    let image = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764";
    if (variant?.colour === "Silver") {
        image = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-silver-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381686";
    }
    document.title = `${product?.size} MacBook Pro - ${variant?.colour} - Apple (MY)`;

    const [selectedMemory, setSelectedMemory] = useState(0);
    const [selectedStorage, setSelectedStorage] = useState(0);
    const [selectedPower, setSelectedPower] = useState(0);
    const [selectedChipset, setSelectedChipset] = useState(0);

    function onClickChipset(chipset: number) {
        setSelectedChipset(chipset);
    }

    function onClickMemory(memory: number) {
        setSelectedMemory(memory);
    }

    function onClickStorage(storage: number) {
        setSelectedStorage(storage);
    }

    function onClickPower(power: number) {
        setSelectedPower(power);
    }

    const price = +((product?.price[0]?.price?.replace("RM", "") ?? "0").replace(",", ""));
    const totalPrice = price +
        +((product?.memory ?? [])[selectedMemory].price ?? "0") +
        +((product?.chipset ?? [])[selectedChipset]?.price ?? "0") +
        +((product?.powerAdapter ?? [])[selectedPower]?.price ?? "0") +
        +((product?.storage ?? [])[selectedStorage]?.price ?? "0")
        ;
    const installmentPrice = (totalPrice / 24).toFixed(2);

    return (
        <>

            <div id="select" className={`${GENERAL_MARGIN} text-zinc-500 md:flex my-20`}>
                <div>
                    <div className="sticky top-0 mr-10">
                        <img width="386" height="233" src={image} />
                        <p className="text-center my-6 text-blue-500">View gallery</p>
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
                            <p className="text-center mb-6 text-blue-500">Chat with a Mac Specialist</p>
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
                        <p className="text-sm mb-6 text-blue-500">Get started</p>
                    </section>
                    <section className="my-4">
                        {!!product?.chipset && <div className="flex flex-col">
                            <p>Chip (Processor)</p>
                            <p className="text-sm mb-6 text-blue-500">Which chip is right for you?</p>
                            {product?.chipset?.map((pa, paIndex) =>
                                <button disabled={!pa.inStock} key={"chipset" + paIndex} onClick={() => onClickChipset(paIndex)} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedChipset === paIndex ? "border-blue-600 border-2" : ""}`}><span className={`${pa.inStock ? "" : "text-gray-300"}`}>{pa.label}</span><span className={`${pa.inStock ? "" : "text-gray-300"}`}>+ RM {pa.price.toFixed(2)}</span></button>
                            )}
                        </div>}
                        {!!product?.memory && <div className="flex flex-col">
                            <p>Storage</p>
                            <p className="text-sm mb-6 text-blue-500">How much memory is right for you?</p>
                            {product?.memory?.map((pa, paIndex) =>
                                <button disabled={!pa.inStock} key={"memory" + paIndex} onClick={() => onClickMemory(paIndex)} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedMemory === paIndex ? "border-blue-600 border-2" : ""}`}><span className={`${pa.inStock ? "" : "text-gray-300"}`}>{pa.label}</span><span className={`${pa.inStock ? "" : "text-gray-300"}`}>+ RM {pa.price.toFixed(2)}</span></button>
                            )}
                        </div>}
                        {!!product?.storage && <div className="flex flex-col">
                            <p>Storage</p>
                            <p className="text-sm mb-6 text-blue-500">How much storage is right for you?</p>
                            {product?.storage?.map((pa, paIndex) =>
                                <button disabled={!pa.inStock} key={"storage" + paIndex} onClick={() => onClickStorage(paIndex)} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedStorage === paIndex ? "border-blue-600 border-2" : ""}`}><span className={`${pa.inStock ? "" : "text-gray-300"}`}>{pa.label}</span><span className={`${pa.inStock ? "" : "text-gray-300"}`}>+ RM {pa.price.toFixed(2)}</span></button>
                            )}
                        </div>}
                        {!!product?.powerAdapter && <div className="flex flex-col">
                            <p>Power Adapter</p>
                            <p className="text-sm mb-6 text-blue-500">Which power adapter is right for you?</p>
                            {product?.powerAdapter?.map((pa, paIndex) =>
                                <button disabled={!pa.inStock} key={"power" + paIndex} onClick={() => onClickPower(paIndex)} className={`border p-5 font-semibold rounded-lg mb-4 flex justify-between ${selectedPower === paIndex ? "border-blue-600 border-2" : ""}`}><span className={`${pa.inStock ? "" : "text-gray-300"}`}>{pa.label}</span><span className={`${pa.inStock ? "" : "text-gray-300"}`}>+ RM {pa.price.toFixed(2)}</span></button>
                            )}
                        </div>}
                        <div>
                            <p>Keyboard Language</p>
                            <p className="text-sm mb-6 text-blue-500">Learn more</p>
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
                        <button className="flex flex-row text-blue-500" type="button"><span className="text-blue-400"><svg width="35" height="35"><path fill="none" d="M0 0h35v35H0z"></path><path d="M21.952 6.433a2.157 2.157 0 0 1 1.567.481A2.228 2.228 0 0 1 24 8.516v19.866a.709.709 0 0 1-.018.178.7.7 0 0 1-.058-.013 8.985 8.985 0 0 1-.757-.674l-4.866-4.901a1.111 1.111 0 0 0-1.602 0l-4.857 4.891a7.25 7.25 0 0 1-.754.676.145.145 0 0 1-.053.028h-.015a.681.681 0 0 1-.02-.185V8.516a2.228 2.228 0 0 1 .48-1.602 2.158 2.158 0 0 1 1.568-.48h8.904m0-1h-8.904a3.077 3.077 0 0 0-2.278.776A3.144 3.144 0 0 0 10 8.516v19.866a1.276 1.276 0 0 0 .276.868.956.956 0 0 0 .76.317 1.073 1.073 0 0 0 .632-.213 8.377 8.377 0 0 0 .874-.776l4.866-4.9a.115.115 0 0 1 .184 0l4.866 4.9a10.454 10.454 0 0 0 .868.77 1.048 1.048 0 0 0 .639.219.956.956 0 0 0 .76-.317 1.276 1.276 0 0 0 .275-.868V8.516a3.144 3.144 0 0 0-.77-2.306 3.077 3.077 0 0 0-2.278-.776Z"></path></svg></span><span>Save for later</span></button>
                    </div>

                    <div className="my-4 block md:hidden ">
                        <p className="text-center">Have questions about buying a Mac?</p>
                        <p className="text-center mb-6 text-blue-500">Chat with a Mac Specialist</p>
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
            {
                product?.inStock ?
                    <div className={`hidden lg:grid fixed left-0 bottom-0 bg-gray-100 max-h-[300px] border border-t z-10 border-slate-900/10 grid-cols-1 md:grid-cols-2 p-4 text-zinc-500 w-full `}>
                        <div className="grid grid grid-cols-1 md:grid-cols-2 items-center">
                            <div className="flex justify-end mr-4 h-full">
                                <svg viewBox="0 0 25 25" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path fill="#1d1d1f" d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"></path></svg>
                            </div>
                            <div>
                                <p>Ships:</p>
                                <p>3–5 business days</p>
                                <p>Free Shipping</p>
                                <p className="underline underline-offset-4 text-blue-500">Get delivery dates</p>
                            </div>
                        </div>
                        <div className="grid grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <p className="font-semibold text-xl text-black text-end">RM {totalPrice} or <br /> RM {installmentPrice}/mo. for 24 mo.*</p>
                                <p className="underline underline-offset-4 text-blue-500 text-end">Explore monthly installments options {">"}</p>
                            </div>
                            <div className="grid grid grid-cols-1 md:grid-cols-2">
                                <div className="flex items-start justify-center">
                                    <button className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to bag</button>
                                </div>
                                <span className="text-blue-500"><svg className="fill-current" width="35" height="35"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.8 4.25a1.202 1.202 0 0 1 1.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 0 0-1.524 0L7 16.269V5.45a1.202 1.202 0 0 1 1.2-1.2h4.6m0-1H8.2A2.2 2.2 0 0 0 6 5.45v11.588a.768.768 0 0 0 .166.522.573.573 0 0 0 .455.19.644.644 0 0 0 .38-.128 5.008 5.008 0 0 0 .524-.467l2.916-2.885a.084.084 0 0 1 .118 0l2.916 2.886a6.364 6.364 0 0 0 .52.463.628.628 0 0 0 .384.131.573.573 0 0 0 .456-.19.768.768 0 0 0 .165-.522V5.45a2.2 2.2 0 0 0-2.2-2.2Z"></path></svg></span>
                            </div>

                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    );
}
