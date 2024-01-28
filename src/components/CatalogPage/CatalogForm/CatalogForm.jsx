import { useFormik } from 'formik';
import { FormSection } from './CatalogForm.styled';

export const CatalogForm = () => {
  const formik = useFormik({
    initialValues: {
      brand: '',
      price: '',
      mileage: '',
      mileageTo: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <><FormSection>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="brand">Car brand</label>
        <input
          id="brand"
          name="brand"
          type="text"
          onChange={formik.handleChange}
          placeholder="Enter the text"
          value={formik.values.brand}
        />
        <label htmlFor="price">Price/ 1 hour</label>
        <input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          placeholder="To $"
          value={formik.values.price}
        />
        <label htmlFor="mileage">Сar mileage / km</label>
        <input
          id="mileage"
          name="mileage"
          type="text"
          onChange={formik.handleChange}
          placeholder="From"
          value={formik.values.mileage}
        />
        <input
          id="mileageTo"
          name="mileageTo"
          type="text"
          onChange={formik.handleChange}
          placeholder="To"
          value={formik.values.mileageTo}
        />

        <button type="submit">Search</button>
      </form>
      </FormSection>
    </>
  );
};
