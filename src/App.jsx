import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchbar/searchbar';
import Pagination from './components/pagination/pagination'

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        //console.log('total pages updated', totalPages);
    }, [currentPage]);

    useEffect(() => {
        //console.log('total pages updated', totalPages);
    }, [totalPages]);

    function dataFromSearchBar(data) {
        //console.log('dataFromSearchBar', data);
        setTotalPages(data);
    }

    function dataFromPagination(data) {
        setCurrentPage(data);
        //console.log('dataFromPagination', data);
    }

    return (
        <>
            <Searchbar sendToParent={dataFromSearchBar} currentPage={currentPage}></Searchbar>
            {/* <Navbar></Navbar> */}
            <Pagination sendToParent={dataFromPagination} lastPage={totalPages}></Pagination>
        </>
    );
}

export default App;
