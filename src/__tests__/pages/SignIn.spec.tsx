import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import SignIn from '../../pages/signin';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      signIn: jest.fn(),
    }),
  };
});

describe('SignIn page', () => {
  it('should be able to Sign In', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailfield = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Password');
    const buttonElement = getByText('Enter');

    fireEvent.change(emailfield, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });
});
