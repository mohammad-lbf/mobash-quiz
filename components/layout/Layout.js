import React from 'react';
import Footer from '../modules/Footer';
import Header from '../modules/Header';

const Layout = ({children , theme , setTheme}) => {
    return (
        <div className={`layout ${theme == "theme-night" ? "theme-night" : "theme-day"}`}>
            <Header theme={theme} setTheme={setTheme} />
                <main>
                    {children}
                </main>
            <Footer theme={theme} setTheme={setTheme}/>

        </div>
    );
};

export default Layout;