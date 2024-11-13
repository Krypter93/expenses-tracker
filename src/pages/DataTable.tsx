import { RootState } from "../redux/store"
import { totalAmount } from "./service/totalAmount";
import { useSelector } from "react-redux";
import { PayloadType } from "../types/payloadType";

export const DataTable = () => {
    const dataState =  useSelector((state: RootState) => state.data)
    const darkModeState = useSelector((state: RootState) => state.darkMode.value)
    
    return (
        <>
        <section className={`w-4/2 md:w-4/5 mt-16 mx-auto font-mono flex justify-between rounded ${darkModeState ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <table className="w-full text-center border-solid border-2 border-slate-400">
                <thead>
                    <tr>
                        <th className={` text-white text-xs md:text-xl ${darkModeState ? 'bg-slate-900' : 'bg-green-700'}`}>Expense Name</th>
                        <th className={` text-white text-xs md:text-xl ${darkModeState ? 'bg-slate-900' : 'bg-green-700'}`}>Category</th>
                        <th className={` text-white text-xs md:text-xl ${darkModeState ? 'bg-slate-900' : 'bg-green-700'}`}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {dataState && dataState.map((item: PayloadType, index: number) => (
                        <tr key={index} className="border-solid border-2 border-slate-400">
                            <td className={`text-xs md:text-base ${darkModeState ? 'text-white' : 'text-gray-800'}`}>{item.title}</td>
                            <td className={`text-xs md:text-base ${darkModeState ? 'text-white' : 'text-gray-800'}`}>{item.category}</td>
                            <td className={`text-xs md:text-base ${darkModeState ? 'text-white' : 'text-gray-800'}`}>$ {item.amount}</td>
                        </tr>
                    ))}
                    <tr className="border-solid border-2 border-slate-400">
                        <td></td>
                        <td className={`font-bold  text-white text-xl ${darkModeState ? 'bg-slate-900' : 'bg-green-700'}`}>Total</td>
                        <td className={`font-bold  text-white text-xl ${darkModeState ? 'bg-slate-900' : 'bg-green-700'}`}>$ {totalAmount()}</td>
                    </tr>
                </tbody>
            </table>
        </section>  
        </>
    )
}