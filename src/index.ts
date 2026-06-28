import { makeKey } from "./make-key";
import { get } from "./get";
import { set } from "./set";
import { clear } from "./clear";

export const cache = {
  // =============================>
  // ## Cache: Make key of cache database
  // =============================>
  makeKey,

  // =============================>
  // ## Cache: Get cache with key
  // =============================>
  get,

  // =============================>
  // ## Cache: Set cache record
  // =============================>
  set,

  // =============================>
  // ## Cache: Set cache record
  // =============================>
  clear,
}
