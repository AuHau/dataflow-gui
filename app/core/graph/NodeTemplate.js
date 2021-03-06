import cssVariables from '!!sass-variable-loader!renderer/variables.scss';

const WIDTH = parseInt(cssVariables.nodeDefaultWidth);
const HEIGHT = parseInt(cssVariables.nodeDefaultHeight);

export default class NodeTemplate {
  /**
   * Returns a string that uniquely identifies the node across all adapters.
   * It is advised to use a prefix to ensure cross-adapters uniqueness.
   * For example "spark:filter".
   *
   * @return {string}
   */
  static getType() {
    throw new TypeError("Method 'getType' has to be implemented!");
  }

  /**
   *  Returns a string which represents the node template name and
   *  which is displayed as label of the node in Canvas.
   *
   *  @return {string}
   */
  static getName() {
    throw new TypeError("Method 'getName' has to be implemented!");
  }

  /**
   * Returns a JointJS model which represents the look of the node in Canvas.
   *
   * @return {function}
   */
  static getModel() {
    throw new TypeError("Method 'getModel' has to be implemented!");
  }

  /**
   * Returns an integer which represents the width of the node.
   *
   * @return {Number}
   */
  static getWidth(){
    return WIDTH;
  }

  /**
   * Returns an integer which represents the height of the node.
   *
   * @return {Number}
   */
  static getHeight(){
    return HEIGHT;
  }

  /**
   * Returns a boolean if the node should be by default hidden in the NodesSidebar.
   *
   * @return {boolean}
   */
  static isNodeHidden(){
    throw new TypeError("Method 'isNodeHidden' has to be implemented!");
  }

  /**
   * Returns a prefix that precede the parameters listing for given language ID.
   * In most cases that means the name of the method the node is converted into.
   * Important is that in case the node translates into method call, this prefix
   * should also have start of the brackets, for example "filter(".
   *
   * @param {string} langId
   * @return {string}
   */
  static getCodePrefix(langId){
    throw new TypeError("Method 'getCodePrefix' has to be implemented!");
  }

  /**
   * Same as getCodePrefix(), but returns a suffix of the method call. In most cases
   * it is ")".
   *
   * @param {string} langId
   * @return {string}
   */
  static getCodeSuffix(langId){
    throw new TypeError("Method 'getCodeSuffix' has to be implemented!");
  }

  /**
   * For given langId returns array of objects that represents parameters for the node.
   * The object has structure: {description: String, required: Boolean, template: String}
   *
   * @param {string} langId
   * @return {array}
   */
  static getCodeParameters(langId){
    throw new TypeError("Method 'getCodeParameters' has to be implemented!");
  }

  /**
   * Returns a string that represents the output data type of the node.
   *
   * @param {string} langId
   * @return {string}
   */
  static getOutputDataType(langId){
    throw new TypeError("Method 'getOutputDataType' has to be implemented!");
  }

  /**
   * Returns true if the passed dataType is valid input data type.
   *
   * @param dataType
   * @param langId
   */
  static isInputDataTypeValid(dataType, langId){
    throw new TypeError("Method 'isInputDataTypeValid' has to be implemented!");
  }

  /**
   * Method that generates a source code representations of a node.
   *
   * @param {array} parameters
   * @param {string} langId
   * @param {array} prevNodes
   * @return {string}
   */
  static generateCode(parameters, langId, prevNodes){
    const templateParams = this.getCodeParameters(langId);
    let output = this.getCodePrefix(langId);

    for(let [index, parameter] of parameters.entries()){
      if(!templateParams[index].template
        || parameter.trim() != templateParams[index].template.trim()
        || templateParams[index].required){

        output += parameter + ', ';
      }
    }

    if(parameters.length >= 1){
      output = output.substring(0, output.length - 2);
    }

    return output + this.getCodeSuffix(langId);
  }

  /**
   * Specifies if during the code generation the channing of method calls should be breaked.
   * Breaking chainning is the same situation as "out-break". New variable name is defined.
   *
   * @return {boolean}
   */
  static requiresBreakChaining(){
    return false;
  }
}
