import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 50px 29px;
`;
export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 274px ;
  height: 268px;
`;
export const Image = styled.img`
  /* position: relative; */
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;
export const HeartSvgStyled = styled.img`
  color: black;
`;
export const HeartButton = styled.button`
  top: 14px;
  left: 242px;
  position: absolute;
  border: none;
  background: none;
`;
export const ListItem = styled.li`
position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  
`;
export const CarListCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const CarTitle = styled.h2`
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const CarModel = styled.span`
  color: #3470ff;
`;

export const CarInfoList = styled.ul`
  /* max-width: 100%; */
  display: flex;
  gap: 6px;
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope';
  font-size: 12px;
  line-height: 1.5;
  white-space: nowrap;
  
 

  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.5);
  }
`;
export const CarInfoListItem = styled.li`
  /* width: 100% */
  padding-right: 6px;
`;

export const LoadButton = styled.button`
  font-size: 16px;
  line-height: calc(16 / 24 * 100%);
  display: block;
  margin-bottom: 100px;
  color: #3470ff;
  border: none;
  background: none;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const CarListSection = styled.section`
  margin: 0 auto;
  padding: 0 128px 0 128px;
`;

export const LearnMoreBtn = styled.button`

  /* _ Main button */
  position: absolute;
  bottom: 0;
  width: 274px;
  height: 44px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 99px 12px 99px;

  /* Inside Auto Layout */

  border-radius: 12px;
  border: none;

  background: rgb(52, 112, 255);
  color: rgb(255, 255, 255);
font-family: Manrope;
font-size: 14px;
font-weight: 600;
line-height: 20px;
text-align: left;

  &:hover
  {
    background: rgb(11, 68, 205);
    transition: all 0.3s ease 0s;
  }
  &:focus {
    background: rgb(11, 68, 205);

  }

`;


export const CarInfoListSection = styled.section `
margin-bottom: 28px;
`