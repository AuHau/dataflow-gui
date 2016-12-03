import Immutable from 'immutable';

import UI from '../actions/ui';

export default (state, action) => {

  switch (action.type){
    case UI.CANVAS_RESIZE:
      const rect = action.payload;
      return state.set('canvasContainerSpec', Immutable.Map({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
      }));

    case UI.CHANGE_NODE_DETAIL:
      return state.set('detailNodeId', action.nid);
    default:
      return state;
  }
};