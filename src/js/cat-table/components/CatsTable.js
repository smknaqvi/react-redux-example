import React, { useEffect, useMemo } from 'react';
import uniqueId from '@hs/transmute/uniqueId';
import PropTypes from 'prop-types';

const CatsTable = ({ isLoading, catFacts, getCatFacts }) => {
  useEffect(() => {
    getCatFacts();
  }, []);

  const catFactsJSON = useMemo(() => !isLoading && catFacts.toJS(), [
    catFacts,
    isLoading,
  ]);

  return (
    !isLoading && (
      <table>
        <tr>
          <th>Cat Fact</th>
          <th>Upvotes</th>
        </tr>
        <tbody>
          {catFactsJSON.map((cat) => (
            <tr key={uniqueId(cat.id)}>
              <td>{cat.text}</td>
              <td>{cat.upvotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

CatsTable.prototypes = {
  isLoading: PropTypes.bool.isRequired,
  catFacts: PropTypes.object.isRequired,
  getCatFacts: PropTypes.func.isRequired,
};
export default CatsTable;
