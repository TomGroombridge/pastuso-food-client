import { connect } from 'react-redux';
import RecipesSteps from './';
import {
  fetchRecipe
} from './actionCreators';

const mapStateToProps = (state: any) => ({
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = {
  fetchRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps) (RecipesSteps);