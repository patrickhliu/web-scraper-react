import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";
import Sortbar from "../../components/sortbar/sortbar";

function searchbar(props) {
    const currentPage = props.currentPage
    const [query, setQuery] = useState("");
    const [pageData, setPageData] = useState([]);
    const [filters, setFilters] = useState({sort_by:"featured", sort_dir:""});

    useEffect(() => {}, [pageData]);

    useEffect(() => {
        //console.log('update-filter', filters);
        search();
    }, [currentPage, filters]);

    const search = async () => {
        try {
            const response = await axios("http://localhost:3000/scrape?q=" + query + "&current_page=" + currentPage + "&filters=" + JSON.stringify(filters));
            setPageData(response.data.results);
            props.sendToParent(response.data);
        } catch (err) {
            console.error("Error fetching data:", err);
            //setData([]);
        } finally {
            //setLoading(false);
        }
    };

    function dataFromSortBar(data) {
        setFilters(data);
        //console.log("dataFromSortBar", filters);
    }

    return (
        <>
        <div className="col-sm-6 offset-sm-3 my-4">
            <InputGroup>
                <Form.Control placeholder="Search..." onChange={(e) => setQuery(e.target.value)} value={query}/>
                <Button variant="warning" onClick={search}>Search</Button>
            </InputGroup>
        </div>
        <Sortbar sendToParent={dataFromSortBar} filters={filters}></Sortbar>

        </>
    );
}

export default searchbar;