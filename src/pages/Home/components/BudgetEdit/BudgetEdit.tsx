import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

// assets
import { budgetIcon } from 'config/images';

// redux
import { editComapany } from 'features/company/companySlice';
import { closeModal } from 'features/modal/modalSlice';

// components
import { TextInput } from 'common/components/FormHelper/FormHelper';
import { PrimaryButton } from 'common/components/Button/Button';

import { Container, Form } from './styles';

interface CompanyProps {
  data: any;
}

interface InitialData {
  [index: string]: number | string;
}

export const initialData: InitialData = {
  budget: '',
};

const BudgetEdit: React.FC<CompanyProps> = ({ data }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    budget: Yup.number().required('Budget is Required').min(data.budget_spent),
  });

  const formik = useFormik({
    initialValues: initialData,
    validationSchema: validationSchema,
    onSubmit: (v: InitialData) => {
      const payload = {
        ...data,
        budget: v.budget,
      };

      console.log('submitted', v, payload);
      dispatch(editComapany(payload));

      dispatch(closeModal());
    },
  });

  return (
    <Container>
      <h3>{data?.name}</h3>
      <Form onSubmit={formik.handleSubmit}>
        <TextInput
          startAdorment={<img src={budgetIcon.default} alt='budget' />}
          label='Budget'
          id='budget'
          name='budget'
          type='text'
          onChange={formik.handleChange}
          value={formik.values['budget']}
          onBlur={formik.handleBlur}
          inputError={formik.errors['budget']}
        />

        <PrimaryButton className='budget_edit__btn' type='submit'>
          Update
        </PrimaryButton>
      </Form>
    </Container>
  );
};

export default BudgetEdit;
