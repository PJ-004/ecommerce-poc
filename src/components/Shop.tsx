import React, { useEffect, useState } from 'react';
import client from '../api/client';
import { GET_SHOP } from '../api/queries/shop';
// import { ADD_PRODUCT } from '../api/mutations/addProduct';
import { Query, QueryGetShopArgs /*, Mutation, MutationAddProductArgs */ } from '../api/generated/graphql';

const Shop: React.FC<{ id: string }> = ({ id }) => {
  const [shop, setShop] = useState<Query['getShop'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShop = async () => {
      try {
        setLoading(true);
        const data = await client.request<Query, QueryGetShopArgs>(GET_SHOP, { id });
        setShop(data.getShop);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShop();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{shop?.name}</h1>
      <p>{shop?.description}</p>
    </div>
  );
};

export default Shop;