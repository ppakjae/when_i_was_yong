import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Test from './page/Test';
import Result from './page/Result';


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/result/:id" element={<Result />} />
        </Routes>
    );
};

export default App;