import { addInfo } from "../redux/dataSlice"
import { UseSelector, useDispatch } from "react-redux"
import addTitle from "../redux/titleSlice"
import { addCategory } from "../redux/catSlice"
import { addAmount } from "../redux/amountSlice"
 

export const DataForm = () => {
    const dispatch = useDispatch()
    const titleState = useSelector(state => state.title)
    const categoryState = useSelector(state => state.category)
    const amountState = useSelector(state => state.amount)

    const handleTitleChange = (e) => {
        dispatch(addTitle(e.target.value))
    }

    const handleCategoryChange = (e) => {
        dispatch(addCategory(e.target.value))
    }

    const handleAmountChange = (e) => {
        dispatch(addAmount(e.target.value))
    }
    const handleData = () => {
        dispatch(addInfo({title: titleState, category: categoryState, amount: amountState}))
    }
    
    return (
        <>
            <section className="w-4/5 bg-gray-200 flex flex-col justify-center items-center mt-32 left-0 mx-auto font-mono rounded">
                <form className="flex flex-col gap-5 mt-5 w-1/2 mx-auto p-2 justify-start">
                    <h1 className="-ml-96">Title</h1>
                    <input type="text" placeholder="Enter your expense name" className="mb-5 -mt-4 " onChange={handleTitleChange}/>

                    <h1 className="-ml-96">Category</h1>
                    <input type="text" placeholder="Enter your expense category" className="mb-5 -mt-4 p-2" onChange={handleCategoryChange}/>

                    <h1 className="-ml-96">Amount</h1>
                    <input type="number" placeholder="Enter your expense amount" className="mb-5 -mt-4 p-2" onChange={handleAmountChange}/>

                    <button className="-mt-2 mb-2 bg-green-700 w-24 mx-auto rounded text-white text-center p-1" onChange={handleData}>Add</button>
                </form>
            </section>
        </>
    )
}