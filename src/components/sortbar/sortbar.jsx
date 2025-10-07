import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';


const sortbar = (props) => {
    const [filters, setFilters] = useState(props.filters);

    useEffect(() => {
        //console.log('sortbar', filters);
        props.sendToParent(filters);
    }, [filters]);

    return (
    <>
    <Form>
        {['radio'].map((type) => (
            <div key={"inline-${type}"} className="col-sm-6 offset-sm-3 my-3">
                <label>Sort By:</label>
                <Form.Check className="ms-3" inline checked={filters.sort_by === "featured"} label="Featured" name="sort-by" type={type} id="sort-by-featured" onClick={() => { setFilters({sort_by:"featured", sort_dir:""}); }}/>
                <Form.Check className="ms-3" inline checked={filters.sort_by === "title-a-z"} label="Title (A-Z)" name="sort-by" type={type} id="sort-by-title-a-z" onClick={() => { setFilters({sort_by:"title", sort_dir:"asc"}); }}/>
                <Form.Check className="ms-3" inline checked={filters.sort_by === "title-z-a"} label="Title (Z-A)" name="sort-by" type={type} id="sort-by-title-z-a" onClick={() => { setFilters({sort_by:"title", sort_dir:"desc"}); }}/>
            </div>
        ))}
    </Form>
    </>
    )
}

export default sortbar