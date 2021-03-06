import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from '../benches/bench_index';

export default ({benches, fetchBenches}) => (
  <div>
    <BenchMap benches={benches} fetchBenches={fetchBenches} />
    <BenchIndex benches={benches} fetchBenches={fetchBenches} />
  </div>
);
