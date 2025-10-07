import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";

function pagination(props) {
    const [currentPage, setCurrentPage] = useState(1);
    let arr = [];

    for (let i = 1; i <= props.lastPage; i++) {
        arr.push(<Pagination.Item key={i} active={i === 1}>{i}</Pagination.Item>);
    }

    return (
        <>
        <Pagination>
            <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
            {arr}
            <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === props.lastPage} />
            <Pagination.Last onClick={() => setCurrentPage(props.lastPage)} disabled={currentPage === props.lastPage} />
        </Pagination>
        </>
    );
}

export default pagination;