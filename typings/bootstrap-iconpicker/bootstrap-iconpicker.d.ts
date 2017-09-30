// Type definitions for bootstrap-iconpicker
// Project: http://ivaynberg.github.com/select2/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface IconPickerOptions {
    align?: string;
    arrowClass?: string;
    arrowPrevIconClass?: string;
    arrowNextIconClass?: string;
    cols?: number,
    footer?: boolean,
    header?: boolean,
    icon?: string;
    iconset?: string;
    labelHeader?: string;
    labelFooter?: string;
    placement?: string;
    rows?: number,
    search?: boolean,
    searchText?: string;
    selectedClass?: string;
    unselectedClass?: string;
}
 
interface JQuery {
    iconPicker(options?: IconPickerOptions): JQuery;
} 