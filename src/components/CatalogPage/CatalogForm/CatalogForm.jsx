import { useFormik } from 'formik';
import { Form, FormElement, FormSection, Input, Label, Select, SubmitButton, } from './CatalogForm.styled';
import makes from '../../../makes.json'

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
        <Select
              id="brand"
              name="brand"
              onChange={formik.handleChange}
              value={formik.values.brand}
              width={'224px'}
            >
              <option value="">Select a brand</option>
              {makes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </Select>
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
          width={'125px'}
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
          width={'160px'}
        />
        
        </FormElement>
        <Input
          id="mileageTo"
          name="mileageTo"
          type="text"
          onChange={formik.handleChange}
          placeholder="To"
          value={formik.values.mileageTo}
          width={'160px'}
        />
       

        <SubmitButton type="submit">Search</SubmitButton>
      </Form>
      </FormSection>
    </>
  );
};
