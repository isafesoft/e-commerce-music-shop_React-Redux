import Layout from "../components/layout/Layout";
import Cart from "../components/cartPage/Cart";


const CartView = () => {

    return(
        <>
            <Layout path={'shop'} title={'Cart'}>
                <Cart/>
            </Layout>
        </>
    )
}

export default CartView