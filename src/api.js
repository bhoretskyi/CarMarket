import axios from 'axios';

export async function getCars(currentPage) {
   
      const response = await axios.get(`https://65aed74a1dfbae409a759cc3.mockapi.io/adverts?page=${currentPage}&limit=12`);
      return response.data;
    } 