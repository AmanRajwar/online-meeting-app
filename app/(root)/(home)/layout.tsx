import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { ReactNode } from "react"



const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="relative ">
            <Navbar/>


            <div className="flex">
                <Sidebar />
                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 border-4 border-red-900">
                    <div className="w-full bg-emerald-700 h-full">
                        {children}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomeLayout