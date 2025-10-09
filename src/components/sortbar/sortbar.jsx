import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

const sortbar = (props) => {
    const [filters, setFilters] = useState(props.filters);

    useEffect(() => {
        //console.log('sortbar', filters);
        props.sendToParent(filters);
    }, [filters]);

    return (
    <>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {/* <Form>
        {['radio'].map((type) => (
            <div key={"inline-${type}"} className="col-sm-6 offset-sm-3 my-3">
                <label>Sort By:</label>
                <Form.Check className="ms-3" inline checked={filters.sort_by === "featured"} label="Featured" name="sort-by" type={type} id="sort-by-featured" onClick={() => { setFilters({sort_by:"featured", sort_dir:""}); }}/>
                <Form.Check className="ms-3" inline checked={filters.sort_by === "title-a-z"} label="Title (A-Z)" name="sort-by" type={type} id="sort-by-title-a-z" onClick={() => { setFilters({sort_by:"title", sort_dir:"asc"}); }}/>
                <Form.Check className="ms-3" inline checked={filters.sort_by === "title-z-a"} label="Title (Z-A)" name="sort-by" type={type} id="sort-by-title-z-a" onClick={() => { setFilters({sort_by:"title", sort_dir:"desc"}); }}/>
            </div>
        ))}
    </Form> */}
    </>
    )
}

export default sortbar