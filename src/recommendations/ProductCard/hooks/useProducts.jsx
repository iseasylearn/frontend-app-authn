import { useEffect, useState } from 'react';

import { getConfig } from '@edx/frontend-platform';

import { filterLocationRestriction } from '../../data/utils';

export default function useProducts(countryCode) {
  const [popularProducts, setPopularProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const popular = filterLocationRestriction(JSON.parse(getConfig().POPULAR_PRODUCTS), countryCode);
    const trending = filterLocationRestriction(JSON.parse(getConfig().TRENDING_PRODUCTS), countryCode);

    setPopularProducts(popular);
    setTrendingProducts(trending);
  }, [countryCode]);

  return { popularProducts, trendingProducts };
}