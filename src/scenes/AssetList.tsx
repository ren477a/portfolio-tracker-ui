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
  
    const assetList = assets.map(asset => {
      const amount = asset.buyPrice * asset.numOfShares;
      return (
        <tr>
          <td className="text-center">{asset.dateOfPurchase.toDateString()}</td>
          <td className="text-center">{asset.code}</td>
          <td><span className="float-end">{asset.numOfShares}</span></td>
          <td><span className="float-end">{asset.buyPrice}</span></td>
          <td><span className="float-end">{amount.toFixed(2)}</span></td>
          <td><span className="float-end">{asset.brokerFee}</span></td>
        </tr>
      );
    });
  
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
                <th className="text-center">Date of Purchase</th>
                <th className="text-center">Code</th>
                <th className="text-center"># of Shares</th>
                <th className="text-center">Buy Price</th>
                <th className="text-center">Amount</th>
                <th className="text-center">Broker Fee</th>
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
