// reducers
import company from 'features/company/companySlice';
import modal from 'features/modal/modalSlice';

const rootReducer = {
  company,
  modal,
};

export type RootState = ReturnType<any>;

export default rootReducer;
