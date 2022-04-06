import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {amountDecrease, amountIncrease, removeItem} from "../../action/songAction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  margin: auto;
  color: white;
`
const EmptyInfo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  height: 400px;
  line-height: 400px;
  color: white;
`
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
  color: white;
  background-color: rgba(0,0,0,0.9);
`

const ItemDetail = styled.div`
  min-width: 200px;
  height: 200px;
  padding-top: 100px;
  color: white;
  
`

const ItemInfo = styled.div`
  min-width: 200px;
  height: 200px;
  line-height: 200px;
  color: white;
  font-size: 1.2rem;
  
`




const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.CartReducer.cart)

    return (
        <>
            <Container>
                {
                    cart.length > 0
                        ?

                        cart.map((value, index) => {
                            let num = (value.count) * (value.price)
                                return (
                                    <ItemContainer key={index}>
                                        <ItemInfo style={{
                                            background: `url(${value.cover})`,
                                            backgroundSize: '200px'
                                        }}> </ItemInfo>
                                        <ItemDetail>
                                            <h3>
                                                {value.title}
                                            </h3>
                                            <div>{value.artist}</div>
                                            <button onClick={()=>{removeItem(value.id)(dispatch)}}>Delete Item</button>
                                        </ItemDetail>
                                        <ItemInfo>{value.price}$</ItemInfo>
                                        <ItemInfo>
                                            <button disabled={value.count > 1 ? false : true} onClick={()=>amountDecrease(value.id)(dispatch)}>+</button>
                                            <input type="text" min="1" value={value.count} />
                                            <button onClick={()=>amountIncrease(value.id)(dispatch)}>+</button>
                                        </ItemInfo>
                                        <ItemInfo>{num.toFixed(2)}$</ItemInfo>
                                    </ItemContainer>
                                )
                            }
                        )

                        :
                        <EmptyInfo>Ops. Your cart is empty. Why not go add something?</EmptyInfo>
                }

            </Container>

        </>
    )
}

export default Cart