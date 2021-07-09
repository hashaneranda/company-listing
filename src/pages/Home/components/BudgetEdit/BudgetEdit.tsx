import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// assets
import { budgetIcon } from 'config/images';

// components
import { TextInput } from 'common/components/FormHelper/FormHelper';
import { PrimaryButton } from 'common/components/Button/Button';
import { successNoty } from 'common/components/Notification/Notification';

import { Container, Form } from './styles';

interface CompanyProps {
  data: any;
  handleSubmit: (e: any) => void;
}

interface InitialData {
  [index: string]: number | string;
}

export const initialData: InitialData = {
  budget: '',
};

const BudgetEdit: React.FC<CompanyProps> = ({ data, handleSubmit }) => {
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

      handleSubmit(payload);
      successNoty({ msg: `${data?.name} budget updated successfully` });
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

        <PrimaryButton className='budget_edit__btn' type='submit' data-testid='submit_btn'>
          Update
        </PrimaryButton>
      </Form>
    </Container>
  );
};

export default BudgetEdit;
