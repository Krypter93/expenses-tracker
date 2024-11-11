import { RootState } from "../redux/store"
import { totalAmount } from "./service/totalAmount";

export const DataTable = () => {
    const dataState = JSON.parse(localStorage.getItem('expenses') || '[]')
    console.log(dataState);
    
    return (
        <>
        <section className="w-4/2 md:w-4/5 bg-gray-200 mt-16 mx-auto font-mono flex justify-between rounded">
        <table className="w-full text-center border-solid border-2 border-slate-400">
                <thead>
                    <tr>
                        <th className="bg-green-700 text-white text-xs md:text-base">Expense Name</th>
                        <th className="bg-green-700 text-white text-xs md:text-base">Category</th>
                        <th className="bg-green-700 text-white text-xs md:text-base">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {dataState && dataState.map((item: RootState, index: number) => (
                        <tr key={index} className="border-solid border-2 border-slate-400">
                            <td className="text-gray-800 text-xs md:text-base">{item.title}</td>
                            <td className="text-gray-800 text-xs md:text-base">{item.category}</td>
                            <td className="text-gray-800 text-xs md:text-base">$ {item.amount}</td>
                        </tr>
                    ))}
                    <tr className="border-solid border-2 border-slate-400">
                        <td></td>
                        <td className="font-bold bg-green-700 text-white text-lg">Total</td>
                        <td className="font-bold bg-green-700 text-white text-lg">$ {totalAmount()}</td>
                    </tr>
                </tbody>
            </table>
        </section>  
        </>
    )
}