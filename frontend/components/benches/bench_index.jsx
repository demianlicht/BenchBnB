import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.benches.map(bench => (
          <BenchIndexItem key={bench.id} bench={bench} />
        ))}
      </ul>
    );
  }
}

export default BenchIndex;
