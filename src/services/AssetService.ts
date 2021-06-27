import type { Asset } from 'src/types';

import type { APIResult } from './types';

function getAssets(): APIResult<ReadonlyArray<Asset>> {
  const assets = [
    {
      id: 1,
      dateOfPurchase: new Date(2021, 1, 1),
      code: 'SMPH',
      numOfShares: 500,
      buyPrice: 37.8,
      brokerFee: 100.0,
    },
    {
      id: 2,
      dateOfPurchase: new Date(2021, 4, 1),
      code: 'SMPH',
      numOfShares: 100,
      buyPrice: 38.2,
      brokerFee: 100.0,
    },
    {
      id: 3,
      dateOfPurchase: new Date(2021, 7, 1),
      code: 'SMPH',
      numOfShares: 100,
      buyPrice: 38.4,
      brokerFee: 100.0,
    },
  ];

  return {
    data: assets,
    error: null,
  };
}

export default {
  getAssets,
};
