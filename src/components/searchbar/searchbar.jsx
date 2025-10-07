import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";

function searchbar({ sendDataToParent }) {
    const [query, setQuery] = useState("");
    const [pageData, setPageData] = useState([]);
    useEffect(() => {}, [pageData]);
    useEffect(() => { search(); }, []);

    const search = async () => {
        try {
            const response = await axios("http://localhost:3000/scrape?q=" + query);
            setPageData(response.data.results);
            sendDataToParent(response.data.total_pages);
        } catch (err) {
            console.error("Error fetching data:", err);
            //setData([]);
        } finally {
            //setLoading(false);
        }
    };

    return (
        <>
        <div className="col-sm-6 offset-sm-3 my-4">
            <InputGroup>
                <Form.Control placeholder="Search..." onChange={(e) => setQuery(e.target.value)} value={query}/>
                <Button variant="warning" onClick={search}>Search</Button>
            </InputGroup>
        </div>
        { pageData.map((obj, i) => <p key={i}>{obj.title}</p>) }
        </>
    );
}

export default searchbar;