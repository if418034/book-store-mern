import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {
    Home,
    CreateBook,
    ShowBook,
    EditBook,
    DeleteBook
} from './pages/library'
import {
    Login,
    Register,
    EditJob,
    Landing
} from './pages/jobify'

const App = () => {
    return (
        <Routes>
            <Route path='/jobify/login' element={<Login/>} />
            <Route path='/jobify/register' element={<Register/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/books/create' element={<CreateBook/>} />
            <Route path='/books/detail/:id' element={<ShowBook/>} />
            <Route path='/books/edit/:id' element={<EditBook/>} />
            <Route path='/books/delete/:id' element={<DeleteBook/>} />
        </Routes>
    )
}

export default App