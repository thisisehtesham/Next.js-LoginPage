import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="bg-[#2F1893] sticky py-[65px]">
                <div className="container mx-auto ">
                    <div className="flex justify-between items-center h-full text-xl">
                        <Link href="/">
                            <p className="text-2xl text-white">Ehtesham</p>
                        </Link>
                        <ul className="hidden md:flex gap-x-6 text-white">
                            <Link href="/Overview">
                                <li className="text-white hover:text-[#6C5DB3]">
                                    Overview
                                </li>
                            </Link>
                            <Link href="/Prices">
                                <li className="text-white hover:text-[#6C5DB3]">
                                    Prices
                                </li>
                            </Link>
                            <Link href="/Blog">
                                <li className="text-white hover:text-[#6C5DB3]">
                                    Blog
                                </li>
                            </Link>
                            <Link href="/Feedback">
                                <li className="text-white hover:text-[#6C5DB3]">
                                    Feedback
                                </li>
                            </Link>
                            <Link href="/Purchase">
                                <li className="bg-[#E93A7D] text-white px-4 py-2 rounded-full">
                                    Purchase
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
