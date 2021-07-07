import React, { useMemo } from 'react';

//component
import { ProgressBar } from 'common/components/Chart/Chart';
import BudgetContainer from '../BudgetContainer/BudgetContainer';

// assets
import { budgetIcon, remaingIcon, spentIcon } from 'config/images';

// styles
import { Container, LeftContainer, RightContainer, BudgetRow } from './styles';

const getColor = (percentage: number) => {
  if (percentage >= 100) {
    return '#d05353ff';
  } else if (percentage >= 75 && percentage < 100) {
    return '#FFC107';
  } else {
    return '#7ddf64ff';
  }
};

interface ProgressCardProps {
  budget: number;
  budgetSpent: number;
}

const BudgetCard: React.FC<ProgressCardProps> = ({ budgetSpent = 5, budget = 25 }) => {
  const [percentage, color] = useMemo(() => {
    const data = Math.ceil((budgetSpent / budget) * 100);
    const color = getColor(data);
    return [data, color];
  }, [budgetSpent, budget]);

  return (
    <Container>
      <LeftContainer>
        <ProgressBar percentage={percentage} color={color} />
      </LeftContainer>

      <RightContainer>
        <BudgetContainer image={remaingIcon.default} title='Remaining Budget' amount={budget - budgetSpent} isPrimary={true} />
        <BudgetRow>
          <BudgetContainer image={budgetIcon.default} title='Total Budget' amount={budget} />
          <BudgetContainer image={spentIcon.default} title='Budget Spent' amount={budgetSpent} />
        </BudgetRow>
      </RightContainer>
    </Container>
  );
};

export default BudgetCard;
