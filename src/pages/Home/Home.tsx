import React from 'react';
import { useSelector } from 'react-redux';

// components
import CompanyCard from './components/CompanyCard/CompanyCard';

// redux
import { RootState } from 'app/rootReducer';

// styles
import { Container, MainWrapper, CompanyWrapper } from './styles';

const Form: React.FC = () => {
  const comapany = useSelector((state: RootState) => state.company.comapany);

  return (
    <Container>
      <MainWrapper>
        <h1>Comapnies</h1>
        <CompanyWrapper>
          {comapany.map((data: any) => (
            <CompanyCard key={data.id} data={data} />
          ))}
        </CompanyWrapper>
      </MainWrapper>
    </Container>
  );
};

export default Form;
