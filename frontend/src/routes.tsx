import React from 'react';
import { Text } from 'react-native';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Text style={{ fontSize: 24 }}>Home Page</Text>
    </div>
);

const About = () => (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Text style={{ fontSize: 24 }}>About Page</Text>
    </div>
);

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
