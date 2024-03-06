import styled from 'styled-components';

export const FormSection = styled.section`
width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
 
  @media screen and (min-width: 1440px) {
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  @media screen and (min-width: 833px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
   
  }
`;
export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px
`;

export const Label = styled.label`
  color: rgb(138, 138, 137);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;
`;

export const Input = styled.input`
  border: none;
  border-radius: 14px;
  height: 48px;

  background: rgb(247, 247, 251);
  color: rgb(18, 20, 23);
font-family: 'Manrope';
font-size: 18px;
font-weight: 500;
line-height: 20px;
text-align: left;
&::placeholder {
    opacity: 1;
    color: rgb(18, 20, 23);
font-family: 'Manrope';
font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0%;
text-align: left;
}

`;

export const SubmitButton = styled.button`
  border-radius: 12px;
  border: none;

  background: rgb(52, 112, 255);
  /* _ Main button */
  width: 136px;
  height: 48px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 44px 14px 44px;

  color: rgb(255, 255, 255);
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  &:hover,
  &:focus {
    background: rgb(11, 68, 205);
    transition: all 0.3s ease 0s;
  }
`;
