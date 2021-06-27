export type UnsavedAsset = Readonly<{
  dateOfPurchase: Date;
  code: string;
  numOfShares: number;
  buyPrice: number;
  brokerFee: number;
}>;

export type Asset = Readonly<{
  id: number;
  dateOfPurchase: Date;
  code: string;
  numOfShares: number;
  buyPrice: number;
  brokerFee: number;
}>;
