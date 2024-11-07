import { FiSun } from "react-icons/fi";

export const Header = () => {
    return (
        <>
            <section className="w-full flex flex-row justify-between items-center fixed top-0 left-0  p-2 bg-green-700 text-lg font-mono">
                <h1 className="mx-2 text-white">Expense Tracker</h1>
                <FiSun className="mx-2 hover:cursor-pointer text-white"/>
            </section>
        </>
    )
}