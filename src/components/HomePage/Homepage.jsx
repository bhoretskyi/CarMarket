import {
    HomeButton,
  HomeSection,
  HomeTitle,
  StyledHomeList,
  StyledHomeListItem,
  StyledHomeText,
  StyledLink,
} from './Homepage.styled';
import image from '../img/brand-logo.jpg';
import image2 from '../img/1217-hero-the-pros-and-cons-of-a-short-term-car-lease.avif';
import image3 from '../img/support.jpg';
import image4 from '../img/6021218a7ef6777e149cfc0b_secure payment method 2.jpg';





export const HomePage = () => {
  return (
    <HomeSection>
      <HomeTitle>Our Services</HomeTitle>
      <StyledHomeText>
        Welcome to our company, providing a wide range of car rental services in
        Ukraine. We offer:
      </StyledHomeText>
      <StyledHomeList>
        <StyledHomeListItem>
          A diverse selection of cars, from economy to premium class.
          <img src={image} alt="cars" width='250' height='200' />
        </StyledHomeListItem>
        <StyledHomeListItem>
          Flexible rental rates and convenient rental terms.
          <img src={image2} alt="cars" width='250' height='200' />
        </StyledHomeListItem>
        <StyledHomeListItem>
          24/7 support and roadside assistance.
          <img src={image3} alt="cars" width='250' height='200' />
        </StyledHomeListItem>
        <StyledHomeListItem>
          Secure and convenient payment methods.
          <img src={image4} alt="cars" width='250' height='200' />
        </StyledHomeListItem>
      </StyledHomeList>
      <HomeButton type='button'><StyledLink to='/catalog'>Find your car</StyledLink></HomeButton>
    </HomeSection>
  );
};
