import BaseLanguage from './BaseLanguage';
import _ from "lodash";

export default class Scala extends BaseLanguage {
  static getName() {
    return 'Scala';
  }

  static getId() {
    return 'scala';
  }

  static getCommentChar(){
    return '//';
  }

  static getAceName(){
    return 'scala';
  }

  static getFileExtension(){
    return '.scala';
  }

  static getSupportedVersions(){
    return [
      '2.11'
    ]
  }
  static nameNode(nodeTemplate, usedVariables){
    // TODO: [Optimisation/Medium] Implement camelCase generator to drop lodash depedendency
    const baseName = _.camelCase(nodeTemplate.getName());

    let num;
    for(num = 1; usedVariables[baseName + num]; num++ ){}

    return baseName + num;
  }

  // TODO: [Critical] Implement intelligent Scala parsing (ignoring scope variables, keywords etc)
  static parseVariables(parameters, usedVariables){
    let variables = [];

    let splittedParameter;
    for(let parameter of parameters){
      splittedParameter = parameter.split(' ');

      for(let word of splittedParameter){
        if(usedVariables[word]){
          variables.push(word);
        }
      }
    }

    return variables;
  }
}
