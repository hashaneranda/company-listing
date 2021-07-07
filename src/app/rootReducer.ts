// reducers
import company from 'features/company/companySlice';

const rootReducer = {
  company,
};

export type RootState = ReturnType<any>;

export default rootReducer;
