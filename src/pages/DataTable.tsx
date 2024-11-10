import { RootState } from "../redux/store"

export const DataTable = () => {
    const dataState = JSON.parse(localStorage.getItem('expenses') || '[]')
    console.log(dataState);
    
    return (
        <>
        <section className="w-4/5 bg-gray-200 mt-7 mx-auto font-mono flex justify-center items-center">
        <table className="table-auto">
                <thead>
                    <tr>
                        <th>Expense Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {dataState && dataState.map((item: RootState, index: number) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>  
        </>
    )
}