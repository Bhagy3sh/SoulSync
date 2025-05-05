import React from 'react';
import { Text } from 'react-native';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BadgesStreaks from './BadgesStreaks';
import CalendarInput from './CalendarInput';
import Conversations from './Conversations';
import Insights from './Insights';
import MoodInput from './MoodInput';
import Notifications from './Notifications';
import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/badges_streaks" element={<BadgesStreaks />} />
                <Route path="/calendar" element={<CalendarInput />} />
                <Route path="/conversations" element={<Conversations />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/moodinput" element={<MoodInput />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

            </Routes>
        </Router>
    );
};

export default AppRoutes;
