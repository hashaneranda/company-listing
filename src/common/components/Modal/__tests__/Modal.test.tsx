import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Modal from '../Modal';

import { StylesProvider } from '@material-ui/core/styles';
import Theme from 'theme/theme';
import ThemeSwitcher from 'theme/themeSwitcher';

const renderWithStyles = (component: React.ReactNode) => {
  return render(
    <StylesProvider injectFirst>
      <ThemeSwitcher>
        <Theme>{component}</Theme>
      </ThemeSwitcher>
    </StylesProvider>,
  );
};

afterEach(cleanup);

describe('Modal Componenet', () => {
  it('should take a snapshot', () => {
    const { asFragment } = renderWithStyles(
      <Modal>
        <h1>Test</h1>
      </Modal>,
    );

    expect(
      asFragment(
        <Modal>
          <h1>Test</h1>
        </Modal>,
      ),
    ).toMatchSnapshot();
  });

  it('children renders correctly', () => {
    const { getByText } = renderWithStyles(
      <Modal open>
        <h1>Test</h1>
      </Modal>,
    );
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('close button works correctly', () => {
    let testToggler = true;
    const closeActionMock = () => {
      testToggler = false;
    };

    const { getByTestId } = renderWithStyles(
      <Modal handleClose={() => closeActionMock()} showCloseBtn open>
        Test
      </Modal>,
    );
    fireEvent.click(getByTestId('modal_close'));

    expect(testToggler).toEqual(false);
  });
});
