import React, { PureComponent } from 'react';
import uniqueId from '@hs/transmute/uniqueId';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

class CatsTable extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    catFacts: PropTypes.object.isRequired,
    getCatFacts: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    const { getCatFacts } = this.props;
    getCatFacts();
  }

  renderRows() {
    const { catFacts } = this.props;
    return catFacts.map((cat) => (
      <tr key={uniqueId(cat.get('id'))}>
        <td>{cat.get('text')}</td>
        <td>{cat.get('upvotes')}</td>
      </tr>
    ));
  }

  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <Container>
          <CircularProgress />
        </Container>
      );
    }

    return (
      <table>
        <tr>
          <th>Cat Fact</th>
          <th>Upvotes</th>
        </tr>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }
}

export default CatsTable;
