import React from 'react';
import { useDispatch } from 'react-redux';

// components
import BudgetCard from '../BudgetCard/BudgetCard';
import BudgetEdit from '../BudgetEdit/BudgetEdit';

// redux
import { openModal } from 'features/modal/modalSlice';

import { Card, CardHeader, CardBody } from './styles';

interface CompanyProps {
  data: any;
}

const Company: React.FC<CompanyProps> = ({ data }) => {
  const dispatch = useDispatch();

  if (!data) return <></>;

  return (
    <Card onClick={() => dispatch(openModal(<BudgetEdit data={data} />))}>
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
