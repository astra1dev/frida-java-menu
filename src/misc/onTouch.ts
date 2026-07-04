import Java from "frida-java-bridge";

import { Api, ACTION_DOWN, ACTION_MOVE, ACTION_UP, GONE, ORIENTATION_LANDSCAPE, VISIBLE } from "../api";
import { app } from "../runtime";
import { View } from "../ui/view";
import { instance, config } from "../menu";

/** @internal */
type InitialPosition = {
    x: number,
    y: number
};

/** @internal */
type TouchPosition = {
    x: number,
    y: number
};

/** @internal */
export class OnTouch {
    initialPosition: InitialPosition;
    touchPosition: TouchPosition;

    constructor(target: View) {
        this.initialPosition = {x: 0, y: 0};
        this.touchPosition = {x: 0, y: 0};

        target.onTouchListener = (v, e) => this.callback(v, e);
    }

    callback(view: Java.Wrapper, event: Java.Wrapper) {
        switch(event.getAction()) {
            case ACTION_DOWN:
                this.initialPosition.x = Math.floor(instance.layout.params.x.value);
                this.initialPosition.y = Math.floor(instance.layout.params.y.value);

                this.touchPosition.x = Math.floor(event.getRawX());
                this.touchPosition.y = Math.floor(event.getRawY());
                return true;
            case ACTION_UP:
                instance.layout.me.alpha = 1.;
                instance.$icon.alpha = instance.$icon.instance.$className == Api.ImageView.$className ? 255 : 1.;

                const [rawX, rawY] = [Math.floor(event.getRawX() - this.touchPosition.x), Math.floor(event.getRawX() - this.touchPosition.y)];
                if (instance.$icon.visibility == VISIBLE) {
                    if (app.orientation == ORIENTATION_LANDSCAPE) {
                        instance.$icon.visibility = GONE;
                        instance.layout.me.visibility = VISIBLE;
                    }
                    else if (rawX < 10 && rawY < 10) {
                        instance.$icon.visibility = GONE;
                        instance.layout.me.visibility = VISIBLE;
                    }
                }
                return true;
            case ACTION_MOVE:
                instance.layout.me.alpha = 0.5;
                instance.$icon.alpha = instance.$icon.instance.$className == Api.ImageView.$className ?
                    Math.round(config.icon.alpha / 2) : 0.5;

                instance.layout.params.x.value = this.initialPosition.x + Math.floor(event.getRawX() - this.touchPosition.x);
                instance.layout.params.y.value = this.initialPosition.y + Math.floor(event.getRawY() - this.touchPosition.y);

                Java.scheduleOnMainThread(() => {
                    app.windowManager.updateViewLayout(instance.rootFrame.instance, instance.layout.params);
                })
                return true;
            default:
                return false;
        }
    }
}
