import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';

import BudgetEdit from '../BudgetEdit';

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

const sampleData = {
  id: 1,
  name: 'Martian Firma',
  budget: 10000.0,
  budget_spent: 4500.0,
  date_of_first_purchase: '2119-07-07',
};

describe('BudgetEdit Componenet', () => {
  it('should take a snapshot', () => {
    const handleSubmit = jest.fn();

    const { asFragment } = renderWithStyles(<BudgetEdit data={sampleData} handleSubmit={handleSubmit} />);

    expect(asFragment(<BudgetEdit data={sampleData} handleSubmit={handleSubmit} />)).toMatchSnapshot();
  });

  it('should submit form with corrent values', async () => {
    const handleSubmit = jest.fn();
    const { getByTestId, container } = renderWithStyles(<BudgetEdit data={sampleData} handleSubmit={handleSubmit} />);

    const budgetInput = container.querySelector('input[name="budget"]');
    fireEvent.change(budgetInput, { target: { value: 50000 } });

    fireEvent.click(getByTestId('submit_btn'));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        ...sampleData,
        budget: '50000',
      }),
    );
  });

  it('should show validation on blur', async () => {
    const handleSubmit = jest.fn();
    const { container } = renderWithStyles(<BudgetEdit data={sampleData} handleSubmit={handleSubmit} />);

    const budgetInput = container.querySelector('input[name="budget"]');
    fireEvent.blur(budgetInput);

    await waitFor(() => {
      expect(container.querySelector('.MuiFormHelperText-root')).not.toBe(null);
      expect(container.querySelector('.MuiFormHelperText-root')).toHaveTextContent('Budget is Required');
    });
  });
});
