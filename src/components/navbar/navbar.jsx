import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

function navbar({ data }) {
  //console.log('b', data);

  return (
    <>
    <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Hot Sales</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Tab 3</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
        </Nav.Item>
    </Nav>
    </>
  );
}

export default navbar;