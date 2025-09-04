import * as yup from 'yup';

// Combined schema for final validation
export const fullSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup.string().required('ZIP code is required'),
  country: yup.string().required('Country is required'),
  occupation: yup.string().required('Occupation is required'),
  company: yup.string().required('Company is required'),
  experience: yup.string().required('Years of experience is required'),
  skills: yup.string().required('Skills are required'),
});

// Type for the validated form data
export type ValidatedFormData = yup.InferType<typeof fullSchema>;
