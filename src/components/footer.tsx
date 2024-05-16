import { Link, useParams } from "react-router-dom";
import { SiteMapDirectory } from "../models/sitemap";
import listingFootNoteData from '../data/listing-footnote.json';
import productFootNoteData from '../data/product-footnote.json';
import { useEffect, useState } from "react";
import { GENERAL_MARGIN } from "../constant/them.style";
import listingData from '../data/listing.json';

function Footer({ sitemap }: { sitemap: SiteMapDirectory[] | undefined }) {
    const initialBreadcrumb = ["Mac", "MacBook Pro", "Buy MacBook Pro"];
    const [breadcrumb, setbreadcrumb] = useState(initialBreadcrumb);
    const [footNotes, setFootNotes] = useState(listingFootNoteData);
    const [expandedAccordionIndex, setExpandedAccordionIndex] = useState(-1);
    let { inch, name } = useParams();
    const product = listingData.find(product => product.key === name);

    useEffect(() => {
        if (!!inch) {
            setbreadcrumb(initialBreadcrumb);
            setFootNotes(listingFootNoteData);
        }

        if (!!name) {
            setbreadcrumb([...initialBreadcrumb, "Customise MacBook Pro"]);
            setFootNotes(productFootNoteData);
        }
    }, [inch])

    const renderBreadcrumb = () => {

        return (
            <nav>
                <ul className="flex items-center flex-wrap my-2 md:my-0">
                    <li className="flex items-center">
                        <a href="#" className="mr-4">
                            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    {breadcrumb.map((crumb, index) => {
                        return (<li key={"crumb" + index} className="flex items-center">
                            <p className="text-xl text-zinc-500 leading-6">{">"}</p>
                            <Link to={"/macbook-pro/14-inch"}><span className="m-4 text-zinc-500 text-xs md:text-xl">{crumb}</span></Link>
                        </li>)
                    })}
                </ul>
            </nav>
        )
    }

    return (
        <footer className={`${product?.inStock ? "pb-[80px]" : ""} bg-slate-50`}>
            <section className={`border-b border-slate-900/10 ${GENERAL_MARGIN} font-normal text-xs text-zinc-500 leading-6`}>{footNotes.map((note, index) => (<p key={"note" + index} className="text-sm p-2">{note}</p>))}</section>
            <section className={`${GENERAL_MARGIN}`}>{renderBreadcrumb()}</section>
            <section className={`${GENERAL_MARGIN} grid grid-cols-1 md:grid-cols-5 grid-flow-column`}>{sitemap?.map((sm, key) =>
            (<>
                <div key={"sitemap" + key} className="hidden md:block">
                    <h3 className="font-semibold text-sm">{sm.directory}</h3>
                    <ul className="">
                        {sm.sections.map((section, index) =>
                            (<li key={"footer-dir" + index} className="text-zinc-500 text-sm">{section}</li>)
                        )}
                    </ul>
                </div>
                <button
                    onClick={() => setExpandedAccordionIndex(idx => {
                        if (idx === key) {
                            return -1;
                        }
                        return key;
                    })}
                    type="button"
                    className={`block md:hidden flex items-center justify-between w-full p-2 font-medium rtl:text-right ${expandedAccordionIndex === key ? "" : "border border-x-0 border-gray-200"}`}>
                    <span>{sm.directory}</span>
                    <svg data-accordion-icon="" className="w-3 h-3 shrink-0 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"></path>
                    </svg>
                </button>
                <div className={`md:hidden ${expandedAccordionIndex === key ? "block" : "hidden"}`}>
                    <div className="px-5">
                        <ul className="py-2">
                            {sm.sections.map((section, index) =>
                                (<li key={"footer-dir" + index} className="text-zinc-500 text-sm">{section}</li>)
                            )}
                        </ul>
                    </div>
                </div>
            </>))}</section>
            <p className={`${GENERAL_MARGIN} py-4 text-sm text-zinc-500 leading-6`}>More ways to shop: <a className="text-blue-500 underline underline-offset-4">Find a retailer</a> near you. Or call 1800-80-6419</p>
            <div className={`${GENERAL_MARGIN} pt-5 lg:pt-10 lg:pb-28 border-spacing-2 border-t border-slate-200 sm:flex justify-between text-slate-500 flex flex-col lg:flex-row`}>
                <p className="text-sm">Copyright © 2024 Apple Inc. All rights reserved.</p>
                <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 text-sm">
                    <a className="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Privacy Policy</a>
                    <span className="m-2">|</span>
                    <a className="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Terms of Use</a>
                    <span className="m-2">|</span>
                    <a className="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Sales and Refunds</a>
                    <span className="m-2">|</span>
                    <a className="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Legal</a>
                    <span className="m-2">|</span>
                    <a className="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Site Map</a>
                </p>
                <p className="text-sm">Malaysia</p>
            </div>
        </footer>
    )
}

export default Footer;