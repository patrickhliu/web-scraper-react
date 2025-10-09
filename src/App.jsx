import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchbar/searchbar';
import Pagination from './components/pagination/pagination';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

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

    const imageUrl = 'https://place-hold.it/500x500/666'; // Replace with your remote image URL

    return (
        <>
            <div className="my-3 ms-3">
                <Searchbar sendToParent={dataFromSearchBar} currentPage={currentPage}></Searchbar>
            </div>
            <Navbar sendToParent={dataFromNavBar} currentTab={currentTab}></Navbar>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                { currentTab == 1 &&  apiResponse.map((obj, i) =>
                <Card key={i} style={{ width:'15%' }} className="mt-5">
                    { obj.photo_url && <Card.Img variant="top" src={obj.photo_url} /> }
                    { !obj.photo_url && <Card.Img variant="top" src="https://place-hold.it/500x500?text=%22No%20Image%22&fontsize=48" /> }
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>
                            { obj.platform_code == "NINTENDO_SWITCH_2" && <Badge className="float-end" bg="danger">Switch 2</Badge> }
                            <b style={{ fontSize: '18px', }}>{obj.title}</b>
                            <p className="mt-2" style={{ fontSize: '16px', }}>{obj.release_date}</p>
                            <Badge className="float-start" bg="danger"><span style={{ fontSize: '14px', }}>${obj.regular_price}</span></Badge>
                        </Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" className="mt-auto">Go somewhere</Button>
                    </Card.Body>
                </Card>


            )}
            </div>
            <Pagination sendToParent={dataFromPagination} lastPage={totalPages}></Pagination>
        </>
    );
}

export default App;
