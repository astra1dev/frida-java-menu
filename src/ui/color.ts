import { Api } from "../api";
import { app } from "../runtime";
import { colorToHex, parseColor } from "./misc";

/** Resolves a system color attribute to its actual color value. If the attribute cannot be resolved, returns the resource ID instead. */
export function resolveAndroidSystemColor(resourceName: string, defaultResourceType: string): number {
    const resources = app.context.getResources();
    const typedValue = Api.TypedValue.$new();
    const theme = app.context.getTheme();
    const resourceId = resources.getIdentifier(resourceName, defaultResourceType, "android");
    if (theme.resolveAttribute(resourceId, typedValue, true)) {
        return resources.getColor(typedValue.resourceId.value, theme);
    }
    return resourceId.value;
}

/** Returns the system accent color in hex format. */
export function systemAccentColor(fallback: string | number = "#000000"): string {
    // I also tried getting Android 12 dynamic colors (https://source.android.com/docs/core/display/dynamic-color)
    // with "color" instead of "attr" default resource type, but it would always throw an exception.

    const color =  resolveAndroidSystemColor("colorAccent", "attr") ||
        resolveAndroidSystemColor("colorControlActivated", "attr") ||
        parseColor(fallback);

    return colorToHex(color);
}
