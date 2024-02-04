import axios from 'axios';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { List, Image, ListItem, CarListCardContainer, CarTitle, CarModel } from './CatalogList.styled';

export const CatalogList = () => {
  const [adverts, setAdverts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://65aed74a1dfbae409a759cc3.mockapi.io/adverts?page=1&limit=12'
        );
        console.log(response.data);
        setAdverts(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  return (
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
  );
};
