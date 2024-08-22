import React from 'react';
import { ThemeProvider } from '../Theme/ThemeContext';
import { UserProvider } from '../User/UserContext';
import { CounterProvider } from '../Counter/CounterContext';
import ThemeToggler from '../Theme/ThemeToggler';
import ThemedComponent from '../Theme/ThemedComponent';
import LoginForm from '../User/LoginForm';
import LogoutButton from '../User/LogoutButton';
import UserProfile from '../User/UserProfile';
import CounterComponent from '../Counter/CounterComponent';

const App = () => {
    return (
        <ThemeProvider>
            <UserProvider>
                <CounterProvider>
                    <div>
                        <ThemeToggler />
                        <ThemedComponent />
                        <UserProfile />
                        <LoginForm />
                        <LogoutButton />
                        <CounterComponent />
                    </div>
                </CounterProvider>
            </UserProvider>
        </ThemeProvider>
    );
};

export default App;
