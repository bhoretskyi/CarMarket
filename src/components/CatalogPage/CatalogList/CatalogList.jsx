import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import heartSvg from '../../img/svg/heart.svg';
import {
  List,
  Image,
  ListItem,
  CarListCardContainer,
  CarTitle,
  CarModel,
  LoadButton,
  ButtonWrapper,
  HeartSvgStyled,
  ImageContainer,
  HeartButton,
} from './CatalogList.styled';
import { getCars } from 'api';

export const CatalogList = () => {
  const [adverts, setAdverts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getCars(currentPage);
        setAdverts(prevAdverts => [...prevAdverts, ...resp]);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [currentPage]);

  // const totalPages = Math.ceil(adverts.length / itemsPerPage);
  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleHeartClick = (event) => {
    console.log('Heart clicked');
    console.log(event.target.parentElement.parentElement.parentElement.id)
  };
  return (
    <>
      <List>
        {adverts.map(ad => (
          <ListItem key={nanoid()} id={ad.id}>
            <ImageContainer>
              <HeartButton type="button" onClick={handleHeartClick}>
                <HeartSvgStyled src={heartSvg} alt="Heart Icon" width="20" />
              </HeartButton>

              <Image src={ad.img || ad.photoLink} alt={ad.description} />
            </ImageContainer>
            <CarListCardContainer>
              <CarTitle>
                {ad.make}
                <CarModel> {ad.model}</CarModel>, {ad.year}
              </CarTitle>

              <CarTitle> {ad.rentalPrice}</CarTitle>
            </CarListCardContainer>
          </ListItem>
        ))}
      </List>
      <ButtonWrapper>
        <LoadButton type="button" onClick={handleLoadMore}>
          Load more
        </LoadButton>
      </ButtonWrapper>
    </>
  );
};
