import Java from "frida-java-bridge";

import { Api } from "../api";
import { app } from "../runtime";
import { wrap } from "./view";

/** Creates toast. Length should be 0 (2s) or 1 (3.5s) */
export function toast(text: string, length: number) {
    Java.scheduleOnMainThread(() => Api.Toast.makeText(app.context, wrap(text), length).show());
}
