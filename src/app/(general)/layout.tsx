import { NavBar } from "@/components/index";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    return <>
        <NavBar />
        <main className="flex flex-col items-center p-24">
            <span className="text-lg">Hello first steps layout</span>
            {children}
        </main>
    </>
}