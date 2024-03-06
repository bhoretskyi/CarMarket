import { useFormik } from 'formik';
import { Form, FormElement, FormSection, Input, Label, SubmitButton } from './CatalogForm.styled';

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
      <Form onSubmit={formik.handleSubmit}>
        <FormElement>
        <Label htmlFor="brand">Car brand</Label>
        <Input
          id="brand"
          name="brand"
          type="text"
          onChange={formik.handleChange}
          placeholder="Enter the text"
          value={formik.values.brand}
        />
        </FormElement>
        <FormElement>
        <Label htmlFor="price">Price/ 1 hour</Label>
        <Input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          placeholder="To $"
          value={formik.values.price}
        /></FormElement>
        <FormElement>
        <Label htmlFor="mileage">Сar mileage / km</Label>
        <Input
          id="mileage"
          name="mileage"
          type="text"
          onChange={formik.handleChange}
          placeholder="From"
          value={formik.values.mileage}
        />
        
        </FormElement>
        <Input
          id="mileageTo"
          name="mileageTo"
          type="text"
          onChange={formik.handleChange}
          placeholder="To"
          value={formik.values.mileageTo}
        />
       

        <SubmitButton type="submit">Search</SubmitButton>
      </Form>
      </FormSection>
    </>
  );
};
