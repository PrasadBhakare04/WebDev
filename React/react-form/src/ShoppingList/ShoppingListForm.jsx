import { useState } from "react"

export default function ShoppingListForm({func}){
    const [formData, setFormData] = useState({product : "", qty : ""})
    function updateData(e){
            setFormData(currData => {
                return {
                    ...currData,
                    [e.target.name] : e.target.value,
                }
            })
    }
    function showData (e){
        e.preventDefault()
        func(formData.product, formData.qty)
        setFormData({product : "", qty : ""})
    }
    return (
        <form onSubmit={showData} className="shoppingform">
            <label htmlFor="product">Product : </label>
            <input 
                type="text" 
                name="product" 
                placeholder="Product name" 
                value={formData.product} 
                id="product"
                onChange={updateData}
            />
            <label htmlFor="product">Quantity : </label>
            <input 
                type="number" 
                name="qty" 
                placeholder="quantity" 
                value={formData.qty}
                id="qty" 
                onChange={updateData}
            />
            <button>Submit</button>
        </form>
    )
}