import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

// redux
import { RootState } from 'app/rootReducer';
import { closeModal } from 'features/modal/modalSlice';

// componenets
import Modal from 'common/components/Modal/Modal';

import { useThemeValue } from 'theme/themeContext';
import { THEME_OPTIONS } from 'theme/config';

// pages
const Home = React.lazy(() => import('pages/Home/Home'));

// styles
import { RootConatiner, FabContainer, LoadingConatiner } from './styles';

const Layout: React.FC = () => {
  const [{ selectedTheme }, dispatchTheme] = useThemeValue();

  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);

  const toggleTheme = () => {
    const toggleTheme = selectedTheme === THEME_OPTIONS.DARK ? THEME_OPTIONS.LIGHT : THEME_OPTIONS.DARK;

    dispatchTheme({
      type: toggleTheme,
    });
  };

  return (
    <RootConatiner>
      <FabContainer color='primary' aria-label='add' onClick={() => toggleTheme()}>
        {selectedTheme === THEME_OPTIONS.DARK ? <Brightness7Icon /> : <Brightness4Icon />}
      </FabContainer>

      <Suspense
        fallback={
          <LoadingConatiner>
            <CircularProgress />
          </LoadingConatiner>
        }
      >
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            {/* <Route path='/summary' exact component={DataView} /> */}
          </Switch>
        </Router>
      </Suspense>

      <Modal open={modalState.isOpen} handleClose={() => dispatch(closeModal())} showCloseBtn={true}>
        {modalState.data}
      </Modal>
    </RootConatiner>
  );
};

export default Layout;
