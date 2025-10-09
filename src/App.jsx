import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchbar/searchbar';
import Pagination from './components/pagination/pagination'

function App() {
    const [currentTab, setCurrentTab] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [apiResponse, setApiResponse] = useState([]);

    useEffect(() => {
        //console.log('total pages updated', totalPages);
    }, [currentPage]);

    useEffect(() => {
        //console.log('total pages updated', totalPages);
    }, [totalPages]);

    function dataFromSearchBar(data) {
        //console.log('dataFromSearchBar', data);
        setTotalPages(data.total_pages);
        setApiResponse(data.results);
    }

    function dataFromPagination(data) {
        setCurrentPage(data);
        //console.log('dataFromPagination', data);
    }

    function dataFromNavBar(data) {
        setCurrentTab(data);
        console.log('dataFromNavBar', data);
    }

    return (
        <>
            <div className="my-3 ms-3">
                <Searchbar sendToParent={dataFromSearchBar} currentPage={currentPage}></Searchbar>
            </div>
            <Navbar sendToParent={dataFromNavBar} currentTab={currentTab}></Navbar>
            <div className="my-3 ms-3">
                { currentTab == 1 &&  apiResponse.map((obj, i) => <p key={i}>{obj.title}</p>) }
            </div>
            <Pagination sendToParent={dataFromPagination} lastPage={totalPages}></Pagination>
        </>
    );
}

export default App;
