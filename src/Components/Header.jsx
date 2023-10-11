import React from 'react'
import { styled } from 'styled-components'

function Header() {
  return (
    <Div>
        <DivStyle>
          <H1Style>facebook</H1Style>
            <PStyle>Facebook помогает вам всегда <br />
              оставаться на связи и общаться со <br />
              своими знакомыми.
            </PStyle>

        </DivStyle>

    </Div>
  )
}

export default Header
const Div = styled.div `
    width: 35%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around ;
`
const DivStyle = styled.div`
    width: 100%;
    height: 230px;

`
const H1Style = styled.h1`
    color:blue;
    font-size: 35px;
`
const PStyle = styled.p`
    font-size: 25px;
`