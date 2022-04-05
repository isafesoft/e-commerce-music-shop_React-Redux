import styled from 'styled-components'
import {useSelector} from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  margin: auto;
`
const EmptyInfo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  height: 400px;
  line-height: 400px;
`
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
`

const ItemInfo = styled.div`
  min-width: 200px;
  height: 200px;
`


const Cart = () => {
    const cart = useSelector(state => state.CartReducer.cart)

    return (
        <>
            <Container>
                {
                    cart.length > 0
                        ?

                        cart.map((value, index) => {
                                return (
                                    <ItemContainer key={index}>
                                        <ItemInfo style={{
                                            background: `url(${value.cover})`,
                                            backgroundSize: '200px'
                                        }}> </ItemInfo>
                                        <ItemInfo>
                                            <h3>
                                                {value.title}
                                            </h3>
                                            <div>{value.artist}</div>
                                        </ItemInfo>
                                        <ItemInfo>{value.price}</ItemInfo>
                                        <ItemInfo>{value.count}</ItemInfo>
                                        <ItemInfo>{(value.count) * (value.price)}</ItemInfo>
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