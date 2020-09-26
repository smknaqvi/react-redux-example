import { connect } from 'react-redux';
import {
  getCatFactsFromState,
  getIsLoadingFromState,
} from '../selectors/getCats';
import { getCatFacts } from '../actions/catActions';
import CatsTable from '../components/CatsTable';

const mapStateToProps = (state) => ({
  isLoading: getIsLoadingFromState(state),
  catFacts: getCatFactsFromState(state),
});

const mapDispatchToProps = { getCatFacts };

export default connect(mapStateToProps, mapDispatchToProps)(CatsTable);
