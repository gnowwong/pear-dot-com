import { useState } from "react";
import { IProductListing } from "../models/product-listing";
import { Link } from "react-router-dom";


function Product({ product }: { product: IProductListing }) {
    const [selectedColour, setSelectedColour] = useState<string>("Space Grey");
    const variation = product.variation.find(v => v.colour === selectedColour);

    const renderColourFilter = () => {
        return (
            <div className="flex flex-col">
                <label className="text-sm text-slate-400">{selectedColour}</label>
                <div >
                    {
                        ["https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-m3-max-pro-spaceblack-cto-hero-202310_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1697913361051",
                            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-m3-max-pro-silver-cto-hero-202310_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1697913360972"
                        ].map((colour, colourindex) => {
                            let indexColour = ["Space Grey", "Silver"];
                            let disabled = false;
                            let style = "border rounded-full border-gray-300";
                            if (colourindex === 1 && selectedColour === "Silver") {
                                style = style.replace("border-gray-300", "border-indigo-600");
                                style += " border-2";
                                disabled = true;
                            }

                            if (colourindex === 0 && selectedColour === "Space Grey") {
                                style = style.replace("border-gray-300", "border-indigo-600");
                                style += " border-2";
                                disabled = true;
                            }

                            return <button
                                onClick={() => setSelectedColour(indexColour[colourindex])}
                                disabled={disabled}
                                className="m-2"
                                key={"colour" + colourindex}>
                                <img className={style} width="32" height="32" alt="" src={colour} />
                            </button>
                        })
                    }
                </div>
            </div>
        )
    }

    const renderChip = (): JSX.Element | undefined => {
        const chips = ["M3", "M3 Pro", "M3 Max"];
        const chipCatalogues = ["https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-icon-202310?wid=102&amp;hei=102&amp;fmt=png-alpha&amp;.v=1697039562647", "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-pro-icon-202310?wid=102&amp;hei=102&amp;fmt=png-alpha&amp;.v=1697039562659", "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-max-icon-202310?wid=102&amp;hei=102&amp;fmt=png-alpha&amp;.v=1697039562691"];
        const chipIndex = chips.findIndex(x => x === product.chip);

        return <img src={chipCatalogues[chipIndex]} alt="Apple M3 chip" width="51" height="51" />;
    }

    return (<div className="bg-gray-100 rounded-md p-4">
        <img width="452" height="420" src={variation?.image} />
        {renderColourFilter()}
        {renderChip()}
        <h2 className="my-2">
            {product.productbundle.map((x, index) => <p key={"product-bundle" + index} className="font-semibold text-lg">{x}<br /></p>)}
        </h2>
        <ul>
            {product.specs.map((x, index) => <p key={"product-spec" + index} className="text-sm">{x}</p>)}
        </ul>
        <div>
            <span className="font-semibold text-lg">{product.price[0].price}</span>
            <div>or</div>
            <span className="font-semibold text-lg">{product.price[1].price}/mo. for 24 <br />mo.*</span>
        </div>
        <div>
            <p>Add a trade-in</p>
            <p>Get credit towards a new Mac when you trade in your eligible computer. Or recycle it for free.**</p>
        </div>
        <Link to={"/macbook-pro/select/" + product.key} state={{ colour: selectedColour }}><div className="items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Select</div></Link>

        <div>
            <p className="font-semibold">Need a moment?</p>
            <p>Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>
            <button className="flex flex-row text-blue-500" type="button"><span className="text-blue-400"><svg width="21" height="21"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.8 4.25a1.202 1.202 0 0 1 1.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 0 0-1.524 0L7 16.269V5.45a1.202 1.202 0 0 1 1.2-1.2h4.6m0-1H8.2A2.2 2.2 0 0 0 6 5.45v11.588a.768.768 0 0 0 .166.522.573.573 0 0 0 .455.19.644.644 0 0 0 .38-.128 5.008 5.008 0 0 0 .524-.467l2.916-2.885a.084.084 0 0 1 .118 0l2.916 2.886a6.364 6.364 0 0 0 .52.463.628.628 0 0 0 .384.131.573.573 0 0 0 .456-.19.768.768 0 0 0 .165-.522V5.45a2.2 2.2 0 0 0-2.2-2.2Z"></path></svg></span><span>Save for later</span></button>
        </div>

        <div className="flex my-5">
            <span className="mr-2">
                <svg viewBox="0 0 25 25" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path fill="#1d1d1f" d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"></path></svg>
            </span>
            <div>
                <span className="font-semibold">Delivery:</span>
                <ul>
                    <li >
                        <span>In Stock</span>
                    </li>
                    <li >
                        <span>Free Shipping</span>
                    </li>
                </ul>
                <button type="button"><span>Get delivery dates</span>
                </button>
            </div>
        </div>
    </div>)
}

export default Product;