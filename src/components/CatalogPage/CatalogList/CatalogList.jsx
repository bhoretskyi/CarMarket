import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import {
  List,
  Image,
  ListItem,
  CarListCardContainer,
  CarTitle,
  CarModel,
  LoadButton,
  ButtonWrapper,
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
        setAdverts((prevAdverts) => [...prevAdverts, ...resp]);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [currentPage]);
 

  // const totalPages = Math.ceil(adverts.length / itemsPerPage);
  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <>
    <List>
      {adverts.map(ad => (
        <ListItem key={nanoid()}>
          <Image src={ad.img || ad.photoLink} alt={ad.description} />
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
    <LoadButton type='button' onClick={handleLoadMore}>Load more</LoadButton>
    </ButtonWrapper>
    </>
  );
};
