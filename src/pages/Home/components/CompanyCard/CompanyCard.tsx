import React from 'react';
import { useDispatch } from 'react-redux';

// components
import BudgetCard from '../BudgetCard/BudgetCard';
import BudgetEdit from '../BudgetEdit/BudgetEdit';

// redux
import { openModal, closeModal } from 'features/modal/modalSlice';
import { editComapany } from 'features/company/companySlice';

import { Card, CardHeader, CardBody } from './styles';

interface CompanyProps {
  data: any;
}

const Company: React.FC<CompanyProps> = ({ data }) => {
  const dispatch = useDispatch();

  const handleBudgetUpdate = (payload: any) => {
    dispatch(editComapany(payload));
    dispatch(closeModal());
  };

  if (!data) return <></>;

  return (
    <Card onClick={() => dispatch(openModal(<BudgetEdit data={data} handleSubmit={handleBudgetUpdate} />))}>
      <CardHeader>
        <h2>{data?.name}</h2>
        <div className='date_container'>
          <p>Date of first purchase</p>
          <h4>{data?.date_of_first_purchase}</h4>
        </div>
      </CardHeader>
      <CardBody>
        <BudgetCard budget={data.budget} budgetSpent={data.budget_spent} />
      </CardBody>
    </Card>
  );
};

export default Company;
