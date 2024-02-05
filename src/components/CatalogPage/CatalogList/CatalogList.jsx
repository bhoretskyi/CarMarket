import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import heartSvg from '../../img/svg/heart.svg';
import heartActive from '../../img/svg/heart,active.svg';
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
  const [likeList, setLikeList] = useState(() => {
    const storedLikeList = localStorage.getItem('likeList');
    return storedLikeList ? JSON.parse(storedLikeList) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getCars(currentPage);
        console.log(resp);
        setAdverts(prevAdverts => [...prevAdverts, ...resp]);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [currentPage]);
  useEffect(() => {
    const addLike = () => {
      localStorage.setItem('likeList', JSON.stringify(likeList));
    };
    addLike();
  }, [likeList]);
  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleHeartClick = event => {
    const grandparentWithId = event.target.closest('[id]');
    if (likeList.includes(grandparentWithId.id)) {
      const index = likeList.indexOf(grandparentWithId.id);
      const newList = [...likeList];
      newList.splice(index, 1);
      setLikeList(newList);
      return;
    }
    setLikeList(prevLikeList => [...prevLikeList, grandparentWithId.id]);
  };
  const isHeartActive = id => {
    const stringId = id + '';
    return likeList.includes(stringId) ? heartActive : heartSvg;
  };

  const splitAddressFromString = (adString, index) => {
    const splitedAddress = adString.split(',');
    return splitedAddress[index];
  };

  return (
    <>
      <List>
        {adverts.map(ad => (
          <ListItem key={nanoid()} id={ad.id}>
            <ImageContainer>
              <HeartButton type="button" onClick={handleHeartClick}>
                <HeartSvgStyled
                  src={isHeartActive(ad.id)}
                  alt="Heart Icon"
                  width="20"
                  color="black"
                />
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
            <ul>
              <li>{splitAddressFromString(ad.address, 1)}</li>
              <li>{splitAddressFromString(ad.address, 2)}</li>
              <li>{ad.rentalCompany}</li>
              <li>Premium</li>
            </ul>
            <ul>
              <li>{ad.type}</li>
              <li>{ad.model}</li>
              <li>{ad.mileage}</li>
              <li>{ad.functionalities[1]}</li>
            </ul>
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
