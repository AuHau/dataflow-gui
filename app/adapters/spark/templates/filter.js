import joint from 'jointjs';
import _ from 'lodash';

import portDefinition from '../../../core/graph/portDefinition';
import NodeTemplate from '../../../core/graph/NodeTemplate';

const NAME = 'Filter';
const NODE_TYPE = 'spark.filter';
const MODEL = joint.shapes.basic.Rect.extend({
  portMarkup: '<circle class="port-body"/>',
  defaults: _.defaultsDeep({
    type: NODE_TYPE,
    size: {
      width: 80,
      height: 80
    },
    attrs: {
      '.': {
        magnet: false
      },
      text : { text: NAME }
    },
    dfGui: {
      title: NAME
    },
    ports: {
      items: [
        {
          id: 'in',
          group: 'in'
        },
        {
          id: 'out',
          group: 'out'
        }
      ],
      groups: portDefinition
    }
  }, joint.shapes.basic.Rect.prototype.defaults)
});

if(!joint.shapes['spark']) joint.shapes['spark'] = {};
joint.shapes['spark']['filter'] = MODEL;

export default class Filter extends NodeTemplate{

  static getNodeType(){
    return NODE_TYPE;
  }

  static getName(){
    return NAME;
  }

  static getModel(){
    return MODEL.bind(joint);
  }

  static changeTitle(nodeObject, newTitle){
    nodeObject.attrs = nodeObject.attrs || {};
    nodeObject.attrs.text = nodeObject.attrs.text || {};
    return nodeObject.attrs.text.text = newTitle;
  }
}