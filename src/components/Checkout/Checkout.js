import { useState } from "react"
import { useContext } from "react"
import { db } from "../../services/firebase/firebaseConfig"
import { CartContext } from "../../CartContext/CartContext"
import { Timestamp, collection } from "firebase/firestore"

const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] =useState("")

    const {cart, total, clearCart}  = useContext(CartContext)
    const createOrder = async ({name, phone, email}) =>{
        setLoading(true)

        try{
            const objOrder ={
                buyer:{
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBarch(db)

            const outOfStock= []
            
            const ids =cart.map(prod=>prod.id)

            const productsRef =collection(db, "Item")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),"in", id) ))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc =>{
                const dataDoc= doc.data()
                const stockDb= dataDoc.stockDb
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
            if(outOfStock.lenght === 0){
                await batch.commit()

                const orderRef =collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else{
                console.error("Hay productos que estan fuera de stock")
            }
        } .catch (error){
            console.log(error)
        
        } .finally{
            setLoading(false)
        }
    }

    if(loading){
        return <h1>Se esta generando su orden...</h1>
    }
    if(orderId){
        <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
        
        </div>
    )
}


export default Checkout