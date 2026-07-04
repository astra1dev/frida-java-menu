import {View} from "./ui/view";

/** Callback without arguments and return value*/
export type EmptyCallback = () => void;
/** Callback with `this` argument, type set by template without return value */
export type ThisCallback<T extends View> = (this: T) => void;
/** Callback with `this` and `index` argument without return value */
export type ThisWithIndexCallback<T extends View> = (this: T, index: number) => void;
