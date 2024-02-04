import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 29px;
`
export const ImageContainer = styled.div`
 position: relative;
  display: inline-block;
`
export const Image = styled.img`
/* position: relative; */
width: 274px;
height:268px;
margin-bottom:14px;
border-radius: 14px;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;
`
export const HeartSvgStyled = styled.img`  


`
export const HeartButton = styled.button`
top: 14px;
left: 242px;
position: absolute;
border: none;
background: none;
`
export const ListItem = styled.li`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;

`
export const CarListCardContainer = styled.div`
width:100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
`

export const CarTitle = styled.h2`
color: #121417;
font-family: 'Manrope';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5 ;
`


export const CarModel = styled.span`
color: #3470FF;
`

export const LoadButton = styled.button`
font-size: 16px;
line-height: calc(16 / 24 * 100%);
display: block;
margin-bottom: 100px;
color: #3470FF;
border: none;
background: none;
`
export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
`

