import { Api, TRANSPARENT, WRAP_CONTENT } from "../api";
import { bitmap, dp } from "./misc";
import { Layout } from "./layout";
import { View } from "./view";
import { app } from "../runtime";
import { config } from "../menu";

/** Commonized wrapper for `android.widget.ImageView` or `android.webkit.WebView` */
export class Icon extends View {
    constructor(type: "Normal" | "Web", value: string) {
        super();
        this.instance = type == "Normal" ? Api.ImageView.$new(app.context) : Api.WebView.$new(app.context);
        if (value)
            this.image = value;
    }

    /** @internal */
    set imageForImageView(image: string) {
        this.instance.setScaleType(Api.ScaleType.FIT_XY.value);
        this.instance.setImageBitmap(bitmap(image));

        config.icon.alpha = Math.round(config.icon.alpha * 255);
    }

    /** @internal */
    set imageForWebView(image: string) {
        this.instance.loadData(`<html><head></head><body style=\"margin: 0; padding: 0\"><img src=\"${image}\" width=\"${config.icon.size}\" height=\"${config.icon.size}\" ></body></html>`, "text/html", "utf-8");
        this.instance.backgroundColor = TRANSPARENT;
        this.instance.getSettings().setAppCacheEnabled(true);
    }

    /** Sets image */
    set image(image: string) {
        const isNormalType = this.instance.$className == Api.ImageView.$className;
        const applyDimension = Math.floor(dp(config.icon.size));
        isNormalType ? this.imageForImageView = image : this.imageForWebView = image;

        this.alpha = config.icon.alpha;

        this.layoutParams = Layout.LinearLayoutParams(WRAP_CONTENT, WRAP_CONTENT);
        this.instance.getLayoutParams().height.value = applyDimension;
        this.instance.getLayoutParams().width.value = applyDimension;
    }
}
