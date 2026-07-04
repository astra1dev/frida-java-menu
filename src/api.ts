import Java from "frida-java-bridge";

export const Api = {
    Activity: Java.use("android.app.Activity"),
    ActivityThread: Java.use("android.app.ActivityThread"),
    AlertDialog_Builder: Java.use("android.app.AlertDialog$Builder"),
    ArrayAdapter: Java.use("android.widget.ArrayAdapter"),
    ArrayList: Java.use("java.util.ArrayList"),
    Arrays: Java.use("java.util.Arrays"),
    Base64: Java.use("android.util.Base64"),
    BitmapFactory: Java.use("android.graphics.BitmapFactory"),
    Build_VERSION: Java.use("android.os.Build$VERSION"),
    Button: Java.use("android.widget.Button"),
    Color: Java.use("android.graphics.Color"),
    CompoundButton_OnCheckedChangeListener: Java.use("android.widget.CompoundButton$OnCheckedChangeListener"),
    Configuration: Java.use("android.content.res.Configuration"),
    DialogInterfaceOnClickListener: Java.use("android.content.DialogInterface$OnClickListener"),
    EditText: Java.use("android.widget.EditText"),
    FrameLayout: Java.use("android.widget.FrameLayout"),
    GradientDrawable: Java.use("android.graphics.drawable.GradientDrawable"),
    Gravity: Java.use("android.view.Gravity"),
    HTML: Java.use("android.text.Html"),
    ImageView: Java.use("android.widget.ImageView"),
    InputType: Java.use("android.text.InputType"),
    Intent: Java.use("android.content.Intent"),
    JavaString: Java.use("java.lang.String"),
    LinearLayout: Java.use("android.widget.LinearLayout"),
    LinearLayout_Params: Java.use("android.widget.LinearLayout$LayoutParams"),
    Mode: Java.use("android.graphics.PorterDuff$Mode"),
    MotionEvent: Java.use("android.view.MotionEvent"),
    OnClickListener: Java.use("android.view.View$OnClickListener"),
    OnItemSelectedListener: Java.use("android.widget.AdapterView$OnItemSelectedListener"),
    OnLongClickListener: Java.use("android.view.View$OnLongClickListener"),
    OnSeekBarChangeListener: Java.use("android.widget.SeekBar$OnSeekBarChangeListener"),
    OnTouchListener: Java.use("android.view.View$OnTouchListener"),
    R_Attr: Java.use("android.R$attr"),
    R_Layout: Java.use("android.R$layout"),
    RadioButton: Java.use("android.widget.RadioButton"),
    RadioGroup: Java.use("android.widget.RadioGroup"),
    RelativeLayout: Java.use("android.widget.RelativeLayout"),
    RelativeLayout_Params: Java.use("android.widget.RelativeLayout$LayoutParams"),
    ScaleType: Java.use("android.widget.ImageView$ScaleType"),
    ScrollView: Java.use("android.widget.ScrollView"),
    SeekBar: Java.use("android.widget.SeekBar"),
    Settings: Java.use("android.provider.Settings"),
    Spinner: Java.use("android.widget.Spinner"),
    Switch: Java.use("android.widget.Switch"),
    TextUtils: Java.use("android.text.TextUtils"),
    TextView: Java.use("android.widget.TextView"),
    Toast: Java.use("android.widget.Toast"),
    TruncateAt: Java.use("android.text.TextUtils$TruncateAt"),
    TypedValue: Java.use("android.util.TypedValue"),
    Typeface: Java.use("android.graphics.Typeface"),
    Uri: Java.use("android.net.Uri"),
    View: Java.use("android.view.View"),
    ViewGroup: Java.use("android.view.ViewGroup$LayoutParams"),
    ViewManager: Java.use("android.view.ViewManager"),
    WebView: Java.use("android.webkit.WebView"),
    WindowManager_Params: Java.use("android.view.WindowManager$LayoutParams"),
};

export const ACTION_DOWN = Api.MotionEvent.ACTION_DOWN.value;
export const ACTION_MOVE = Api.MotionEvent.ACTION_MOVE.value;
export const ACTION_UP = Api.MotionEvent.ACTION_UP.value;
export const ALIGN_PARENT_LEFT = Api.RelativeLayout.ALIGN_PARENT_LEFT.value;
export const ALIGN_PARENT_RIGHT = Api.RelativeLayout.ALIGN_PARENT_RIGHT.value;
export const CENTER = Api.Gravity.CENTER.value;
export const CENTER_HORIZONTAL = Api.RelativeLayout.CENTER_HORIZONTAL.value;
export const COMPLEX_UNIT_DIP = Api.TypedValue.COMPLEX_UNIT_DIP.value;
export const GONE = Api.View.GONE.value;
export const MATCH_PARENT = Api.ViewGroup.MATCH_PARENT.value;
export const ORIENTATION_LANDSCAPE = Api.Configuration.ORIENTATION_LANDSCAPE.value;
export const simple_spinner_dropdown_item = Api.R_Layout.simple_spinner_dropdown_item.value;
export const TRANSPARENT = Api.Color.TRANSPARENT.value;
export const VERTICAL = Api.LinearLayout.VERTICAL.value;
export const HORIZONTAL = Api.LinearLayout.HORIZONTAL.value;
export const VISIBLE = Api.View.VISIBLE.value;
export const WINDOW_SERVICE = Api.Activity.WINDOW_SERVICE.value;
export const WRAP_CONTENT = Api.ViewGroup.WRAP_CONTENT.value;
