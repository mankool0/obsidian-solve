// AUTOGENERATED FILE
// This file was generated from Vector3Arithmetic.ohm by `ohm generateBundles`.

import {
  BaseActionDict,
  Grammar,
  IterationNode,
  Namespace,
  Node,
  NonterminalNode,
  Semantics,
  TerminalNode
} from 'ohm-js';

export interface BasicArithmeticActionDict<T> extends BaseActionDict<T> {
  Expression?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  LogicalShift_left?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  LogicalShift_right?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  LogicalShift?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  AS_addition?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode) => T;
  AS_subtraction?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode) => T;
  AS?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  MD_multiplication?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode) => T;
  MD_division?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode) => T;
  MD_modulo?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode) => T;
  MD?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  E_exponent?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode) => T;
  E?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  P_parenthesis?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode, arg2: TerminalNode) => T;
  P?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Primitive_positive?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode) => T;
  Primitive_negative?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode) => T;
  Primitive?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  add?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  subtract?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  multiply?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  divide?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  modulo?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  exponent?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  constant?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  number?: (this: NonterminalNode, arg0: IterationNode, arg1: IterationNode) => T;
  separator?: (this: NonterminalNode, arg0: TerminalNode) => T;
  whole?: (this: NonterminalNode, arg0: IterationNode) => T;
  hex?: (this: NonterminalNode, arg0: IterationNode | TerminalNode, arg1: IterationNode | TerminalNode) => T;
}

export interface BasicArithmeticSemantics extends Semantics {
  addOperation<T>(name: string, actionDict: BasicArithmeticActionDict<T>): this;
  extendOperation<T>(name: string, actionDict: BasicArithmeticActionDict<T>): this;
  addAttribute<T>(name: string, actionDict: BasicArithmeticActionDict<T>): this;
  extendAttribute<T>(name: string, actionDict: BasicArithmeticActionDict<T>): this;
}

export interface BasicArithmeticGrammar extends Grammar {
  createSemantics(): BasicArithmeticSemantics;
  extendSemantics(superSemantics: BasicArithmeticSemantics): BasicArithmeticSemantics;
}

export interface Vector3ArithmeticActionDict<T> extends BasicArithmeticActionDict<T> {
  Expression?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  P_parenthesis?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode, arg2: TerminalNode) => T;
  P?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  MD_multiplication?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode) => T;
  MD_division?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode) => T;
  MD?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Vector3_parse?: (this: NonterminalNode, arg0: IterationNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode, arg6: NonterminalNode, arg7: TerminalNode) => T;
  Vector3?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Function?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  LengthSq_function?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode) => T;
  LengthSq?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  DistanceSq_function?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode) => T;
  DistanceSq?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Length_function?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode) => T;
  Length?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Distance_function?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode) => T;
  Distance?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Normalise_function?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode) => T;
  Normalise?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Dot_function?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode) => T;
  Dot?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  AngleBetween_function?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode) => T;
  AngleBetween?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Cross_function?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode) => T;
  Cross?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Lerp_function?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode, arg6: NonterminalNode, arg7: TerminalNode) => T;
  Lerp?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  vector3?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  lengthSq?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  distanceSq?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  length?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  distance?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  normalise?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  dot?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  angleBetween?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  cross?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  lerp?: (this: NonterminalNode, arg0: NonterminalNode) => T;
}

export interface Vector3ArithmeticSemantics extends Semantics {
  addOperation<T>(name: string, actionDict: Vector3ArithmeticActionDict<T>): this;
  extendOperation<T>(name: string, actionDict: Vector3ArithmeticActionDict<T>): this;
  addAttribute<T>(name: string, actionDict: Vector3ArithmeticActionDict<T>): this;
  extendAttribute<T>(name: string, actionDict: Vector3ArithmeticActionDict<T>): this;
}

export interface Vector3ArithmeticGrammar extends Grammar {
  createSemantics(): Vector3ArithmeticSemantics;
  extendSemantics(superSemantics: Vector3ArithmeticSemantics): Vector3ArithmeticSemantics;
}

declare const ns: {
  BasicArithmetic: BasicArithmeticGrammar;
  Vector3Arithmetic: Vector3ArithmeticGrammar;
};
export default ns;

