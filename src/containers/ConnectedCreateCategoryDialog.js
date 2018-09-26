import { connect } from 'react-redux';
import { createCategoryAction } from '../actions/categories';
import CreateCategoryDialog from '../components/CreateCategoryDialog/CreateCategoryDialog';
import uuidv4 from 'uuid';

let index = 0;

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createCategory: (color, description) => {
      const category = {
        color: color,
        description: description,
        identifier: uuidv4(),
        index: index++,
        visible: true
      };

      dispatch(createCategoryAction(category));

      props.onClose();
    }
  };
};

const ConnectedCreateCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryDialog);

export default ConnectedCreateCategoryDialog;
