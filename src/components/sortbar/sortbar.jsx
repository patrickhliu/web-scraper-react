import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';


const sortbar = (props) => {
    const [sortBy, setSortBy] = useState("featured");

    function changeSort(str) {
        setSortBy(str);
        props.sendToParent(str);
    }

    return (
    <>
    <Form>
        {['radio'].map((type) => (
            <div key={"inline-${type}"} className="col-sm-6 offset-sm-3 my-3">
                <label>Sort By:</label>
                <Form.Check className="ms-3" inline checked={sortBy === "featured"} label="Featured" name="sort-by" type={type} id="sort-by-featured" onClick={() => { changeSort("featured"); }}/>
                <Form.Check className="ms-3" inline checked={sortBy === "title-a-z"} label="Title (A-Z)" name="sort-by" type={type} id="sort-by-title-a-z" onClick={() => { changeSort("title-a-z"); }}/>
                <Form.Check className="ms-3" inline checked={sortBy === "title-z-a"} label="Title (Z-A)" name="sort-by" type={type} id="sort-by-title-z-a" onClick={() => { changeSort("title-z-a"); }}/>
            </div>
        ))}
    </Form>
    </>
    )
}

export default sortbar