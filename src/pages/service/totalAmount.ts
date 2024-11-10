import { RootState } from "../../redux/store";
export const totalAmount = () => {
    const dataSet = JSON.parse(localStorage.getItem('expenses') || '[]')
    let sum: number = 0

    dataSet.forEach((item:RootState) => {
        sum += parseFloat(item.amount)
    })
    
    return sum.toFixed(2)
}