import Java from "frida-java-bridge";

import { Api, WRAP_CONTENT} from "../api";
import { app } from "../runtime";
import { View } from "./view";
import { ThisWithIndexCallback } from "../types";
import { Button } from "./button";
import { sharedPreferences } from "../menu";
import { Layout } from "./layout";

/** Wrapper for `android.widget.RadioGroup` */
export class RadioGroup extends View {
    /** @internal Button lust */
    buttons: string[];

    constructor(buttons: string[]) {
        super();
        this.instance = Api.RadioGroup.$new(app.context);
        this.buttons = buttons;
    }
    /** Checks object with given id */
    check(id: number) {
        this.instance.check(id);
    }
    /** Gets child at ginen index */
    getChildAt(index: number): Java.Wrapper {
        return this.instance.getChildAt(index);
    }
}

/** @internal Makes buttons from `string[]` */
export function makeButtonInstances(buttons: string[], callback?: ThisWithIndexCallback<Button>) {
    return buttons.map((e: string, index: number) => {
        const object = new View(Api.RadioButton.$new(app.context)) as Button;
        object.text = e;
        object.onClickListener = () => {
            sharedPreferences.putInt(buttons.join(), index);
            callback?.call(object, index);
        }

        return object;
    });
}

/** @internal Initializes new `android.widget.RadioGroup` wrapper with default parameters */
export function radioGroup(buttons: View[]): RadioGroup {
    const radioGroup = new RadioGroup(buttons.map(e => e.text));
    for (const button of buttons) {
        radioGroup.instance.addView(button.instance, buttons.indexOf(button), Layout.LinearLayoutParams(WRAP_CONTENT, WRAP_CONTENT));
    }

    const savedIndex = sharedPreferences.getInt(buttons.join());
    if (savedIndex > -1)
        Java.scheduleOnMainThread(() => radioGroup.check(radioGroup.getChildAt(savedIndex).getId()));

    return radioGroup;
}
