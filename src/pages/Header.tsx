import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/store";
import { toggleDarkMode } from "../redux/darkModeSlice";

export const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    const darkModeState = useSelector((state: RootState) => state.darkMode.value)

    const handleDarkMode = () => {
        dispatch(toggleDarkMode())
    }

    return (
        <>
            <section className={`w-full flex flex-row justify-between items-center fixed top-0 left-0  p-2  text-lg font-mono ${darkModeState ? 'bg-slate-900' : 'bg-green-700'}`}>
                <h1 className="mx-2 text-white">Expense Tracker</h1>
                {darkModeState ?
                <FiSun className="mx-2 hover:cursor-pointer text-white" onClick={handleDarkMode} title="Light Mode"/>
                : 
                <MdOutlineDarkMode className="mx-2 hover:cursor-pointer text-white" onClick={handleDarkMode} title="Dark Mode"/>}
                
            </section>
        </>
    )
}