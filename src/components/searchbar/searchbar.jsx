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
    const [sortBy, setSortBy] = useState("featured");

    useEffect(() => {}, [pageData]);

    useEffect(() => {
        search();
    }, [currentPage, sortBy]);

    const search = async () => {
        try {
            const response = await axios("http://localhost:3000/scrape?q=" + query + "&current_page=" + currentPage + "&sort_by=" + sortBy);
            setPageData(response.data.results);
            props.sendToParent(response.data.total_pages);
        } catch (err) {
            console.error("Error fetching data:", err);
            //setData([]);
        } finally {
            //setLoading(false);
        }
    };

    function dataFromSortBar(data) {
        setSortBy(data);
        //console.log("dataFromSortBar", sortBy);
    }

    return (
        <>
        <div className="col-sm-6 offset-sm-3 my-4">
            <InputGroup>
                <Form.Control placeholder="Search..." onChange={(e) => setQuery(e.target.value)} value={query}/>
                <Button variant="warning" onClick={search}>Search</Button>
            </InputGroup>
        </div>
        <Sortbar sendToParent={dataFromSortBar}></Sortbar>
        { pageData.map((obj, i) => <p key={i}>{obj.title}</p>) }
        </>
    );
}

export default searchbar;