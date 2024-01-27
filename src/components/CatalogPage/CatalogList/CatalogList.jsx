import axios from 'axios';
import { useEffect, useState } from 'react';

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
    <ul>
      {adverts.map(ad => (
        <li key={ad.id}>
          <p> {ad.make}</p>
          <p> {ad.model}</p>
          <p> {ad.year}</p>
          <p> {ad.rentalPrice}</p>
        </li>
      ))}
    </ul>
  );
};
