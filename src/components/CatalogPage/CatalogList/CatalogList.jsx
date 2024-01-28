import axios from 'axios';
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';
import { List, Image } from './CatalogList.styled';

export const CatalogList = () => {
  const [adverts, setAdverts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://65aed74a1dfbae409a759cc3.mockapi.io/adverts'
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
        <li key={nanoid()}>
          <Image src={ad.img || ad.photoLink} alt={ad.description} />
          <p> {ad.make}</p>
          <p> {ad.model}</p>
          <p> {ad.year}</p>
          <p> {ad.rentalPrice}</p>
        </li>
      ))}
    </List>
  );
};
