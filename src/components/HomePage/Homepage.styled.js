import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 128px 0 128px;
  padding: 1em;
`;

export const HomeTitle = styled.h2`
  text-align: center;
  color: #121417;

  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 30px;
`;
export const StyledHomeText = styled.p`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 80px;
`;

export const StyledHomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;

  @media screen and (min-width: 1200px) {
    width: 1200px;
    flex-wrap: nowrap;
    gap: 10px;
  }
`;

export const StyledHomeListItem = styled.li`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  padding: 15px;
`;
export const HomeButton = styled.button`
  position: relative;
  margin-bottom: 50px;

  display: flex;
  width: 274px;
  padding: 12px 88px;
  justify-content: center;
  border-radius: 12px;
  background: #3470ff;
`;

export const StyledLink = styled(Link)`
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
`;
