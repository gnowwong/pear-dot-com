import { GENERAL_MARGIN } from "../constant/them.style"
import { Directories } from "../models/navigation-menu"

function Header({ menus }: { menus: Directories | undefined }) {

    const renderMenus = () => {
        return (
            <>
                <div id="menus-large" className="hidden lg:block">
                    <ul className="flex">
                        {menus?.map((menu, menuIdx) => {
                            return (
                                <li key={"group" + menuIdx} className="group cursor-pointer m-4 z-10">
                                    <span className={`text-xs font-normal`}>{menu.directory}</span>
                                    <div className="hidden group-hover:block transition-timing-function absolute w-full overflow-hidden inset-x-0 bg-white min-h-screen">
                                        <div className={`min-h-52 backdrop-blur-sm bg-white/30 grid gap-3 grid-cols-3 my-5 ${GENERAL_MARGIN}`}>
                                            {menu.sections.map((section, sectionIdx) => (
                                                <div key={"menu" + sectionIdx}>
                                                    <span className="text-xs">{section.directory}</span>
                                                    <div>
                                                        {section.sections?.map((title, menuIndex) =>
                                                            <div>
                                                                <span className={`${sectionIdx === 0 ? "font-bold text-lg" : "text-md"}`} key={"submenu" + menuIndex}>{title}</span>
                                                            </div>)
                                                        }
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div id="menus-small">

                </div>
            </>
        )
    }

    return (
        <nav>
            <div id="nav-layer-1" className={`${GENERAL_MARGIN} grid grid-cols-7 md:flex md:justify-between items-center`}>
                <div id="home-wrapper" className="col-span-3">
                    <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z">
                        </path>
                    </svg>
                </div>
                {renderMenus()}
                <div id="search-wrapper" className="col-span-1 flex justify-end">
                    <a role="button">
                        <span>
                            <svg height="44" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
                                <path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z">
                                </path>
                            </svg>
                        </span>
                    </a>
                </div>
                <div id="shopping-bag-wrapper" className="col-span-1 flex justify-end">
                    <a role="button">
                        <span >
                            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z">
                                </path>
                            </svg>
                        </span>
                    </a>
                </div>
                <div id="menu-toggler" className="block lg:hidden col-span-1 float-right flex justify-end">
                    <a role="button">
                        <svg width="18" height="18" viewBox="0 0 18 18">
                            <polyline fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12">
                                <animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5">
                                </animate>
                                <animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12">
                                </animate>
                            </polyline>
                            <polyline fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5">
                                <animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15">
                                </animate>
                                <animate attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate>
                            </polyline>
                        </svg>
                    </a>
                </div>
            </div>
            <div id="nav-layer-2" className={`${GENERAL_MARGIN} flex justify-between`}>
                <a href="https://www.apple.com/my/macbook-pro" className="font-semibold text-xl">
                    MacBook Pro
                </a>
                <div>
                    {["Overview", "macOS", "Compare"].map((x, index) => (<span key={"menu-action" + index} className="ml-4 pt-4 justify-items-end font-normal text-xs text-zinc-500 leading-6">{x}</span>))}
                </div>
            </div>
            <div id="interest-ribbon" className="bg-slate-50 p-4 border-t border-slate-900/10">
                <p className={`${GENERAL_MARGIN} text-zinc-500 md:flex md:justify-center text-center`}>Pay 0% interest for up to 24 months. Terms apply.◊◊ <a className="text-sky-500"><br className="block md:hidden" />Learn more {">"}</a></p>
            </div>
        </nav>
    )
}

export default Header;