// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './Menu.scss';
import * as uiActions from 'shared/actions/ui';

class Menu extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ul className={styles.left}>
          <li><a href="#"><i className="fa fa-file-o"/></a></li>
          <li><a href="#"><i className="fa fa-save"/></a></li>
          <li><a href="#"><i className="fa fa-folder-open-o"/></a></li>
        </ul>
        <ul className={styles.left}>
          <li><a href="#"><i className="fa fa-files-o"/></a></li>
          <li><a href="#"><i className="fa fa-scissors"/></a></li>
          <li><a href="#"><i className="fa fa-clipboard"/></a></li>
        </ul>
        <ul className={styles.left}>
          <li><a href="#"><i className="fa fa-undo"/></a></li>
          <li><a href="#"><i className="fa fa-repeat"/></a></li>
          <li><a href="#"><i className="fa fa-search-plus"/></a></li>
          <li><a href="#"><i className="fa fa-search-minus"/></a></li>
        </ul>
        <ul className={styles.left}>
          <li><a href="#"><i className="fa fa-object-group"/></a></li>
        </ul>

        <ul className={styles.right}>
          <li className={this.props.showCodeView ? styles.active : ''}><a href="#" onClick={this.props.onCodeViewToggle}><i className="fa fa-code"/></a></li>
          <li><a href="#"><i className="fa fa-cog"/></a></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showCodeView: state.getIn('ui.showCodeView'.split('.'))
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCodeViewToggle: () => {
      dispatch(uiActions.codeViewToggle());
    },
    onShowSettings: (node) => {
      dispatch(uiActions.showSettings());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
