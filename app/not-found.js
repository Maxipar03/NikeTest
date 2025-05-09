import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">

                <Link href={"https://stockx.com/nike-air-force-1-low-404-error"}>
                    <Image src={"/Nike-Air-Force-1-Low-404-Error-Product-Photoroom.png"} className="cursor-pointer transition duration-300 hover:drop-shadow-[0_10px_15px_rgba(255,255,255,0.4)]" width={500} height={500} alt="404 Shoes"/>
                </Link>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
                    <Link href="#" className="text-sm font-semibold text-white">Contact support <span aria-hidden="true">&rarr;</span></Link>
                </div>
        </div>
    )
}