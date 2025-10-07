import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchbar/searchbar';
import Pagination from './components/pagination/pagination'

function App() {
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        //console.log('total pages updated', totalPages);
    }, [totalPages]);

    function handleDataFromChild(data) {
        //console.log('child data', data);
        setTotalPages(data);
    }

    return (
        <>
            <Searchbar sendDataToParent={handleDataFromChild}></Searchbar>
            {/* <Navbar></Navbar> */}
            <Pagination lastPage={totalPages}></Pagination>
        </>
    );
}

export default App;
