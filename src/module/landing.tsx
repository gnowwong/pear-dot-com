import { useEffect, useRef, useState } from 'react';
import listingData from '../data/listing.json';
import { Link, useParams } from 'react-router-dom';
import Product from '../components/product';
import { GENERAL_MARGIN } from '../constant/them.style';

export default function Listing() {
    const inchFilterRef = useRef<HTMLDivElement | null>(null);
    let { inch } = useParams();
    const [selectedChip, setSelectedChip] = useState<string>("");
    const [isSticky, setIsSticky] = useState(false);
    const productFilteredByInch = listingData
        .filter(product => product.size === inch);
    const products = productFilteredByInch
        .filter(product => selectedChip === "" || product.chip === selectedChip);
    document.title = `Buy ${inch} MacBook Pro - Apple (MY)`;

    useEffect(() => {
        setSelectedChip("");

        const handleScroll = () => {
            if (inchFilterRef.current) {
                const stickyTop = inchFilterRef.current.getBoundingClientRect().top;
                setIsSticky(stickyTop <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [inch])

    const renderChatbox = () => {
        return (
            <div className="flex items-center flex-col my-4">
                <div>
                    <svg viewBox="0 0 35 35" role="img" aria-hidden="true" width="35px" height="35px">
                        <path fill="none" d="M0 .213h35v35H0z"></path>
                        <path d="M14.4 21.048a13.284 13.284 0 01-1.344.076q-.411 0-.829-.025l-.334-.02-.279.185a15.461 15.461 0 01-4.388 2.109 16.182 16.182 0 001.365-2.054l.484-.923-.941-.446a7.127 7.127 0 01-4.384-6.276c0-4.114 4.274-7.461 9.529-7.461s9.529 3.347 9.529 7.461c0 .059-.009.116-.011.174.33-.029.664-.046 1-.046 0-.043.008-.085.008-.128 0-4.677-4.67-8.461-10.529-8.461S2.75 9 2.75 13.674a8.1 8.1 0 004.95 7.181 18.048 18.048 0 01-1.573 2.305c-.481.6-.236 1.28.613 1.28 1.17 0 3.557-1.1 5.425-2.343q.448.027.888.027c.455 0 .9-.028 1.34-.069-.011-.157-.029-.312-.029-.472 0-.183.018-.357.036-.535z"></path>
                        <path d="M32.25 21.583c0-3.749-3.745-6.782-8.443-6.782h-.1c-.351 0-.694.027-1.032.063-3.876.413-6.886 2.906-7.269 6.036a5.584 5.584 0 00-.042.678c0 .117.015.23.021.345.222 3.737 3.994 6.428 8.6 6.428.235 0 .473-.007.712-.021a10.723 10.723 0 004.35 1.878c.681 0 .878-.543.492-1.026a14.459 14.459 0 01-1.263-1.848 6.5 6.5 0 003.974-5.751zm-4.4 4.852l-.942.446.484.923a10.673 10.673 0 00.759 1.2 14.28 14.28 0 01-2.9-1.5l-.279-.185-.334.02c-.219.013-.437.019-.653.019-4.21 0-7.515-2.462-7.614-5.629 0-.048-.009-.1-.009-.144a4.521 4.521 0 01.1-.922c.5-2.386 2.87-4.288 5.908-4.75a9.506 9.506 0 011.092-.1c.113 0 .225-.013.339-.013 4.1 0 7.443 2.594 7.443 5.782a5.517 5.517 0 01-3.394 4.853z"></path>
                    </svg>
                </div>
                <p className="font-normal text-xl">Have questions about buying a Mac?</p>
                <a className="text-sky-600 text-xl font-normal">Chat with a Mac Specialist</a>
            </div>
        )
    }

    const renderInchFilter = () => {
        return (
            <div
                ref={inchFilterRef}
                className={`flex justify-center sticky top-0 py-7 ${isSticky ? 'bg-gray-100 opacity-95' : ''}`} >
                {
                    ["14-inch", "16-inch"].map((currentInch, index) => {
                        let style = "border rounded-s-xl p-10";
                        if (index === 1) {
                            style = "border rounded-e-xl p-10";
                        }

                        if (inch === currentInch) {
                            style += " border-cyan-700";
                        }
                        return (
                            <Link key={"inch" + index} to={"/macbook-pro/" + currentInch}>
                                <p className={style}>{currentInch}</p>
                            </Link>
                        )
                    })
                }
            </div >
        )
    }

    function distinct(value: string, index: number, array: string[]) {
        return array.indexOf(value) === index;
    }


    const renderChipFilter = () => {
        return (
            <div className="flex items-center flex-col my-4">
                <p className="text-sm font-medium text-slate-400">Filter by chip:</p>
                <div className="flex">
                    {["All", ...Array.from(productFilteredByInch, p => p.chip).filter(distinct)].map((chip, chipIndex) => {
                        let style = "bg-gray-100 rounded-full text-sm font-medium m-2 px-6 py-2";
                        if (chip === selectedChip) {
                            style += " text-white";
                            style = style.replace("bg-gray-100", "bg-black");
                        } else if (selectedChip === "" && chip === "All") {
                            style += " text-white";
                            style = style.replace("bg-gray-100", "bg-black");
                        }
                        return (
                            <button onClick={() => setSelectedChip(chip === "All" ? "" : chip)} key={"chip" + chipIndex} className={style}>{chip}</button>
                        )
                    })}
                </div>
            </div>
        )
    }

    const renderProducts = () => {
        return (
            <div className={`${GENERAL_MARGIN} text-zinc-500 flex justify-center my-4 grid gap-4 grid-cols-1 md:grid-cols-3`}>
                {products.map((product, productIndex) => {
                    return (
                        <div key={"product" + productIndex}>
                            <Product product={product} />
                        </div>

                    )
                })}
            </div>
        )
    }

    return (
        <div id="listing">
            <h1 className="text-5xl font-semibold text-center mt-12">Choose your new MacBook Pro.</h1>
            {renderChatbox()}
            {renderInchFilter()}
            {renderChipFilter()}
            {renderProducts()}
        </div>
    );
}
