import { useForm } from "react-hook-form"
export default function ShoppingListFormValidation({func}){
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({ mode: "onChange" });

    const registerOptions = {
        product : {required : "product name is required"},
        qty : {required : "Quantity is required"}
    };
    function showData (formdata){
        func(formdata.product, formdata.qty);
        reset()
    }
    
    return (
        <form onSubmit={handleSubmit(showData)} className="shoppingform">
            <label htmlFor="product">Product : </label>
            <input 
                type="text" 
                name="product" 
                placeholder="Product name" 
                id="product"
                {...register("product", registerOptions.product)}
            />
            <small className="text-danger">{errors?.product && errors.product.message}</small>
            <label htmlFor="product">Quantity : </label>
            <input 
                type="number" 
                name="qty" 
                placeholder="quantity" 
                id="qty"
                {...register("qty", registerOptions.qty)}
            />
            <small className="text-danger">{errors?.qty && errors.qty.message}</small>
            <button>Submit</button>
        </form>
    )
}