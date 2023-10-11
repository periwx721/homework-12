import React from 'react'
import { styled } from 'styled-components'

function Headers() {
  return (
    <div>
        <DivStyle>
          <h3>Создать Страницу, </h3>
           <span> знаменитости, музыкальной группы или<br />
           </span>
        </DivStyle>
            <PiStyle>компании.</PiStyle>
            
    </div>
  )
}

export default Headers

const DivStyle = styled.div`
    /* border: 1px solid red; */
    height: 25px;
    margin-top:30px;
    display: flex;
    align-items: center;
    justify-content:space-around;
  
`
const PiStyle = styled.span`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-around;
`