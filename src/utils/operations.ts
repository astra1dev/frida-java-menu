import Java from "frida-java-bridge";

import { View } from "../ui/view";
import { instance } from "../menu";

export declare type RawOrWrapper = Java.Wrapper | View;

/** @internal Gets Java handle from Wrapper or just return given argument */
export function instanceofRawOrWrapper(object: RawOrWrapper) {
    return object instanceof View ? object.instance : object;
}

/** Adds view to layout */
export function add(view: View, layout: RawOrWrapper = instance.layout.layout) {
    Java.scheduleOnMainThread(() => {
        instanceofRawOrWrapper(layout).addView(instanceofRawOrWrapper(view));
    })
}

/** Removes view from layout */
export function remove(view: View, layout: RawOrWrapper = instance.layout.layout) {
    Java.scheduleOnMainThread(() => {
        instanceofRawOrWrapper(layout).removeView(instanceofRawOrWrapper(view));
    })
}
