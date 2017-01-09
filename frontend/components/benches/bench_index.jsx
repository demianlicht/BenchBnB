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
    return (
      <ul>
        {Object.keys(this.props.benches).map(id => (
          <BenchIndexItem key={id} bench={this.props.benches[id]} />
        ))}
      </ul>
    );
  }
}

export default BenchIndex;
