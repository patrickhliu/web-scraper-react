import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const sortbar = (props) => {
    if(!props.filters.game_category) props.filters.game_category = [];
    let cloneFilters = { ...props.filters };
    if(!cloneFilters.game_category) cloneFilters.game_category = [];

    async function clickFilter(obj) {
        const promise = new Promise((resolve, reject) => {
            Object.keys(obj).forEach(key => {
                console.log(`Key: ${key}, Value: ${obj[key]}`);
                if(key == "game_category" && obj[key]) {
                    if(cloneFilters.game_category.includes(obj[key])) {
                        let index = cloneFilters.game_category.indexOf(obj[key]);

                        if (index !== -1) {
                            cloneFilters.game_category.splice(index, 1);
                        }
                    } else {
                        cloneFilters.game_category.push(obj[key]);
                    }
                    return;
                } else if(key == "game_category" && !obj[key]) {
                    cloneFilters.game_category = [];
                    return;
                }

                cloneFilters[key] = obj[key]
            });

            resolve(cloneFilters);
        });

        await Promise.all([promise]);
        //console.log(cloneFilters);
        props.sendToParent(cloneFilters);
    }

    return (
    <>
    <ButtonGroup aria-label="Side-by-side dropdown buttons">
    <Dropdown>
      <Dropdown.Toggle variant="" className="bg-steel-blue">Sort By</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => { clickFilter({sort_by:"featured", sort_dir:""}); }}>Featured {props.filters.sort_by == "featured" && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <Dropdown.Item onClick={() => { clickFilter({sort_by:"title", sort_dir:"asc"}); }}>Title <i className="fa-solid fa-arrow-down-a-z"></i> {props.filters.sort_by == "title" && props.filters.sort_dir == "asc" && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <Dropdown.Item onClick={() => { clickFilter({sort_by:"title", sort_dir:"desc"}); }}>Title <i className="fa-solid fa-arrow-down-z-a"></i> {props.filters.sort_by == "title" && props.filters.sort_dir == "desc" && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <Dropdown.Item onClick={() => { clickFilter({sort_by:"price", sort_dir:"asc"}); }}>Price <i className="fa-solid fa-arrow-down-1-9"></i> {props.filters.sort_by == "price" && props.filters.sort_dir == "asc" && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <Dropdown.Item onClick={() => { clickFilter({sort_by:"price", sort_dir:"desc"}); }}>Price <i className="fa-solid fa-arrow-down-9-1"></i> {props.filters.sort_by == "price" && props.filters.sort_dir == "desc" && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="" className="bg-steel-blue ms-3">Deals</Dropdown.Toggle>
      <Dropdown.Menu style={{ width: '250px', }}>
        <Dropdown.Item onClick={() => { clickFilter({game_category:"Deals"}); }}>On Sale ({props.gameCategoryCount.deals}) {props.filters.game_category.includes("Deals") && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <Dropdown.Item onClick={() => { clickFilter({game_category:"Demo available"}); }}>Has Demo ({props.gameCategoryCount.demo}) {props.filters.game_category.includes("Demo available") && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <Dropdown.Item onClick={() => { clickFilter({game_category:"DLC"}); }}>DLC ({props.gameCategoryCount.dlc}) {props.filters.game_category.includes("DLC") && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <Dropdown.Item onClick={() => { clickFilter({game_category:"Game Voucher eligible"}); }}>Game Voucher Eligible ({props.gameCategoryCount.voucher}) {props.filters.game_category.includes("Game Voucher eligible") && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <Dropdown.Item onClick={() => { clickFilter({game_category:"Games with DLC"}); }}>Games w/ DLC ({props.gameCategoryCount.games_dlc}) {props.filters.game_category.includes("Games with DLC") && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <Dropdown.Item onClick={() => { clickFilter({game_category:"Upgrade pack"}); }}>Upgrade Packs ({props.gameCategoryCount.upgrade}) {props.filters.game_category.includes("Upgrade pack") && <i className="mt-1 fa-regular fa-circle-check float-end"></i>}</Dropdown.Item>
        <hr/>
        <Dropdown.Item onClick={() => { clickFilter({game_category:null }); }}>Clear</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </ButtonGroup>
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