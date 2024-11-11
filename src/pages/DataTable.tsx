import { RootState } from "../redux/store"
import { totalAmount } from "./service/totalAmount";

export const DataTable = () => {
    const dataState = JSON.parse(localStorage.getItem('expenses') || '[]')
    console.log(dataState);
    
    return (
        <>
        <section className="w-4/5 bg-gray-200 mt-7 mx-auto font-mono flex justify-between rounded">
        <table className="w-full text-center border-solid border-2 border-slate-400">
                <thead>
                    <tr>
                        <th className="bg-green-700 text-white">Expense Name</th>
                        <th className="bg-green-700 text-white">Category</th>
                        <th className="bg-green-700 text-white">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {dataState && dataState.map((item: RootState, index: number) => (
                        <tr key={index} className="border-solid border-2 border-slate-400">
                            <td className="text-gray-800">{item.title}</td>
                            <td className="text-gray-800">{item.category}</td>
                            <td className="text-gray-800">$ {item.amount}</td>
                        </tr>
                    ))}
                    <tr className="border-solid border-2 border-slate-400">
                        <td></td>
                        <td className="font-bold bg-green-700 text-white">Total</td>
                        <td className="font-bold bg-green-700 text-white">$ {totalAmount()}</td>
                    </tr>
                </tbody>
            </table>
        </section>  
        </>
    )
}