import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

// components
import CompanyCard from './components/CompanyCard/CompanyCard';

// redux
import { RootState } from 'app/rootReducer';

// types
import { Items, InitialData, FormItem } from './types';

// utils

// styles
import { Container, MainWrapper, CompanyWrapper } from './styles';

const Form: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
