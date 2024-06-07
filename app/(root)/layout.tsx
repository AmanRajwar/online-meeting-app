import { ReactNode } from "react"



const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            header
            {children}
            footer
        </main>
    )
}

export default RootLayout