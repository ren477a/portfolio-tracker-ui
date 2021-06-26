import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import AssetService from "../services/AssetService";
import type { Asset } from "../types";

function AssetList() {
    const [ assets, setAssets ] = useState<ReadonlyArray<Asset>>([]);
  
    useEffect(() => {
      function fetchAssets() {
        const { data } = AssetService.getAssets();
        if (data) {
          setAssets(data);
        }
      };
      fetchAssets();
    })
  
    const assetList = assets.map(asset => (
      <tr>
        <td>{asset.dateOfPurchase.toLocaleString()}</td>
        <td>{asset.code}</td>
        <td>{asset.numOfShares}</td>
        <td>{asset.buyPrice}</td>
        <td>{asset.brokerFee}</td>
      </tr>
    ));
  
    return (
      <Container>
        <Row>
          <Col md={4}>
            <h1>Assets</h1>
          </Col>
          <Col md={{ span: 2, offset: 6 }}>
            <Button className="float-end">New Asset</Button>
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date of Purchase</th>
                <th>Code</th>
                <th># of Shares</th>
                <th>Buy Price</th>
                <th>Broker Fee</th>
              </tr>
            </thead>
            <tbody>
              {assetList}
            </tbody>
          </Table>
        </Row>
      </Container>
    );
}

export default AssetList;
