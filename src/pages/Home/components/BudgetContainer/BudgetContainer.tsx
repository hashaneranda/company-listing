import React from 'react';

// styles
import { Card, CardWrapper, CardBody } from './styles';

interface BudgetContainerProps {
  image: any;
  title: string;
  amount: number;
  isPrimary?: boolean;
}

const BudgetContainer: React.FC<BudgetContainerProps> = ({ image, title, amount, isPrimary }) => (
  <Card className={isPrimary ? 'primary' : ''}>
    <CardWrapper>
      <img src={image} alt={title} />
    </CardWrapper>
    <CardWrapper>
      <CardBody>
        <p>{title}</p>
        <h4>
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
          }).format(amount)}
        </h4>
      </CardBody>
    </CardWrapper>
  </Card>
);

export default BudgetContainer;
