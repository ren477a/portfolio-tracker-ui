import type { Asset } from "src/types";
import type { APIResult } from "./types"

function getAssets(): APIResult<ReadonlyArray<Asset>> {
  const assets = [
    {
      id: 1,
      dateOfPurchase: new Date(),
      code: "SMPH",
      numOfShares: 500,
      buyPrice: 37.80,
      brokerFee: 100.00,
    },
    {
      id: 2,
      dateOfPurchase: new Date(),
      code: "SMPH",
      numOfShares: 100,
      buyPrice: 37.80,
      brokerFee: 100.00,
    },
    {
      id: 3,
      dateOfPurchase: new Date(),
      code: "SMPH",
      numOfShares: 100,
      buyPrice: 37.80,
      brokerFee: 100.00,
    }
  ];

  return {
    data: assets,
    error: null,
  }
}

export default {
  getAssets,
};
