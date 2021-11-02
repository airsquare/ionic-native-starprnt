import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * Emulation constants
 */
import * as ɵngcc0 from '@angular/core';
export var Emulation;
(function (Emulation) {
    /** mPOP, SM-L200, SM-L300, SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["StarPRNT"] = "StarPRNT";
    /** SM-L200, SM-L300 */
    Emulation["StarPRNTL"] = "StarPRNTL";
    /** FVP10, TSP650II, TSP700II, TSP800II */
    Emulation["StarLine"] = "StarLine";
    /** TSP100 */
    Emulation["StarGraphic"] = "StarGraphic";
    /** BSC10 */
    Emulation["EscPos"] = "EscPos";
    /** SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["EscPosMobile"] = "EscPosMobile";
    /** SP700 */
    Emulation["StarDotImpact"] = "StarDotImpact";
})(Emulation || (Emulation = {}));
/**
 * Encoding constants
 */
export var Encoding;
(function (Encoding) {
    /** English */
    Encoding["USASCII"] = "US-ASCII";
    /** French, German, Portuguese, Spanish */
    Encoding["Windows1252"] = "Windows-1252";
    /** Japanese */
    Encoding["ShiftJIS"] = "Shift-JIS";
    /** Russian */
    Encoding["Windows1251"] = "Windows-1251";
    /** Simplified Chinese */
    Encoding["GB2312"] = "GB2312";
    /** Traditional Chinese */
    Encoding["Big5"] = "Big5";
    /** UFT8 */
    Encoding["UTF8"] = "UTF-8";
})(Encoding || (Encoding = {}));
/**
 * CodePageType constants
 */
export var CodePageType;
(function (CodePageType) {
    CodePageType["CP737"] = "CP737";
    CodePageType["CP772"] = "CP772";
    CodePageType["CP774"] = "CP774";
    CodePageType["CP851"] = "CP851";
    CodePageType["CP852"] = "CP852";
    CodePageType["CP855"] = "CP855";
    CodePageType["CP857"] = "CP857";
    CodePageType["CP858"] = "CP858";
    CodePageType["CP860"] = "CP860";
    CodePageType["CP861"] = "CP861";
    CodePageType["CP862"] = "CP862";
    CodePageType["CP863"] = "CP863";
    CodePageType["CP864"] = "CP864";
    CodePageType["CP865"] = "CP865";
    CodePageType["CP869"] = "CP869";
    CodePageType["CP874"] = "CP874";
    CodePageType["CP928"] = "CP928";
    CodePageType["CP932"] = "CP932";
    CodePageType["CP999"] = "CP999";
    CodePageType["CP1001"] = "CP1001";
    CodePageType["CP1250"] = "CP1250";
    CodePageType["CP1251"] = "CP1251";
    CodePageType["CP1252"] = "CP1252";
    CodePageType["CP2001"] = "CP2001";
    CodePageType["CP3001"] = "CP3001";
    CodePageType["CP3002"] = "CP3002";
    CodePageType["CP3011"] = "CP3011";
    CodePageType["CP3012"] = "CP3012";
    CodePageType["CP3021"] = "CP3021";
    CodePageType["CP3041"] = "CP3041";
    CodePageType["CP3840"] = "CP3840";
    CodePageType["CP3841"] = "CP3841";
    CodePageType["CP3843"] = "CP3843";
    CodePageType["CP3845"] = "CP3845";
    CodePageType["CP3846"] = "CP3846";
    CodePageType["CP3847"] = "CP3847";
    CodePageType["CP3848"] = "CP3848";
    CodePageType["UTF8"] = "UTF8";
    CodePageType["Blank"] = "Blank";
})(CodePageType || (CodePageType = {}));
/**
 * InternationalType constants
 */
export var InternationalType;
(function (InternationalType) {
    InternationalType["UK"] = "UK";
    InternationalType["USA"] = "USA";
    InternationalType["France"] = "France";
    InternationalType["Germany"] = "Germany";
    InternationalType["Denmark"] = "Denmark";
    InternationalType["Sweden"] = "Sweden";
    InternationalType["Italy"] = "Italy";
    InternationalType["Spain"] = "Spain";
    InternationalType["Japan"] = "Japan";
    InternationalType["Norway"] = "Norway";
    InternationalType["Denmark2"] = "Denmark2";
    InternationalType["Spain2"] = "Spain2";
    InternationalType["LatinAmerica"] = "LatinAmerica";
    InternationalType["Korea"] = "Korea";
    InternationalType["Ireland"] = "Ireland";
    InternationalType["Legal"] = "Legal";
})(InternationalType || (InternationalType = {}));
/**
 * FontStyleType constants.
 */
export var FontStyleType;
(function (FontStyleType) {
    /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
    FontStyleType["A"] = "A";
    /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
    FontStyleType["B"] = "B";
})(FontStyleType || (FontStyleType = {}));
/**
 * CutPaperAction constants.
 */
export var CutPaperAction;
(function (CutPaperAction) {
    CutPaperAction["FullCut"] = "FullCut";
    CutPaperAction["FullCutWithFeed"] = "FullCutWithFeed";
    CutPaperAction["PartialCut"] = "PartialCut";
    CutPaperAction["PartialCutWithFeed"] = "PartialCutWithFeed";
})(CutPaperAction || (CutPaperAction = {}));
/**
 * BlackMarkType constants.
 */
export var BlackMarkType;
(function (BlackMarkType) {
    BlackMarkType["Valid"] = "Valid";
    BlackMarkType["Invalid"] = "Invalid";
    BlackMarkType["ValidWithDetection"] = "ValidWithDetection";
})(BlackMarkType || (BlackMarkType = {}));
/**
 * LogoSize constants
 */
export var LogoSize;
(function (LogoSize) {
    LogoSize["Normal"] = "Normal";
    LogoSize["DoubleWidth"] = "DoubleWidth";
    LogoSize["DoubleHeight"] = "DoubleHeight";
    LogoSize["DoubleWidthDoubleHeight"] = "DoubleWidthDoubleHeight";
})(LogoSize || (LogoSize = {}));
/**
 * AlignmentPosition constants
 */
export var AlignmentPosition;
(function (AlignmentPosition) {
    AlignmentPosition["Left"] = "Left";
    AlignmentPosition["Center"] = "Center";
    AlignmentPosition["Right"] = "Right";
})(AlignmentPosition || (AlignmentPosition = {}));
/**
 * BarcodeSymbology constants
 */
export var BarcodeSymbology;
(function (BarcodeSymbology) {
    BarcodeSymbology["Code128"] = "Code128";
    BarcodeSymbology["Code39"] = "Code39";
    BarcodeSymbology["Code93"] = "Code93";
    BarcodeSymbology["ITF"] = "ITF";
    BarcodeSymbology["JAN8"] = "JAN8";
    BarcodeSymbology["JAN13"] = "JAN13";
    BarcodeSymbology["NW7"] = "NW7";
    BarcodeSymbology["UPCA"] = "UPCA";
    BarcodeSymbology["UPCE"] = "UPCE";
})(BarcodeSymbology || (BarcodeSymbology = {}));
/**
 * BarcodeWidth constants
 */
export var BarcodeWidth;
(function (BarcodeWidth) {
    BarcodeWidth["Mode1"] = "Mode1";
    BarcodeWidth["Mode2"] = "Mode2";
    BarcodeWidth["Mode3"] = "Mode3";
    BarcodeWidth["Mode4"] = "Mode4";
    BarcodeWidth["Mode5"] = "Mode5";
    BarcodeWidth["Mode6"] = "Mode6";
    BarcodeWidth["Mode7"] = "Mode7";
    BarcodeWidth["Mode8"] = "Mode8";
    BarcodeWidth["Mode9"] = "Mode9";
})(BarcodeWidth || (BarcodeWidth = {}));
/**
 * QrCodeModel constants
 */
export var QrCodeModel;
(function (QrCodeModel) {
    QrCodeModel["No1"] = "No1";
    QrCodeModel["No2"] = "No2";
})(QrCodeModel || (QrCodeModel = {}));
/**
 * QrCodeLevel constants
 */
export var QrCodeLevel;
(function (QrCodeLevel) {
    QrCodeLevel["H"] = "H";
    QrCodeLevel["L"] = "L";
    QrCodeLevel["M"] = "M";
    QrCodeLevel["Q"] = "Q";
})(QrCodeLevel || (QrCodeLevel = {}));
/**
 * BitmapConverterRotation constants
 */
export var BitmapConverterRotation;
(function (BitmapConverterRotation) {
    BitmapConverterRotation["Normal"] = "Normal";
    BitmapConverterRotation["Left90"] = "Left90";
    BitmapConverterRotation["Right90"] = "Right90";
    BitmapConverterRotation["Rotate180"] = "Rotate180";
})(BitmapConverterRotation || (BitmapConverterRotation = {}));
var StarPRNT = /** @class */ (function (_super) {
    __extends(StarPRNT, _super);
    function StarPRNT() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for Emulation
         */
        _this.Emulation = {
            StarPRNT: 'StarPRNT',
            StarPRNTL: 'StarPRNTL',
            StarLine: 'StarLine',
            StarGraphic: 'StarGraphic',
            EscPos: 'EscPos',
            EscPosMobile: 'EscPosMobile',
            StarDotImpact: 'StarDotImpact',
        };
        /**
         * Constant for possible Encoding
         */
        _this.Encoding = {
            USASCII: 'US-ASCII',
            Windows1252: 'Windows-1252',
            ShiftJIS: 'Shift-JIS',
            Windows1251: 'Windows-1251',
            GB2312: 'GB2312',
            Big5: 'Big5',
            UTF8: 'UTF-8',
        };
        /**
         * CodePageType constants
         */
        _this.CodePageType = {
            CP737: 'CP737',
            CP772: 'CP772',
            CP774: 'CP774',
            CP851: 'CP851',
            CP852: 'CP852',
            CP855: 'CP855',
            CP857: 'CP857',
            CP858: 'CP858',
            CP860: 'CP860',
            CP861: 'CP861',
            CP862: 'CP862',
            CP863: 'CP863',
            CP864: 'CP864',
            CP865: 'CP865',
            CP869: 'CP869',
            CP874: 'CP874',
            CP928: 'CP928',
            CP932: 'CP932',
            CP999: 'CP999',
            CP1001: 'CP1001',
            CP1250: 'CP1250',
            CP1251: 'CP1251',
            CP1252: 'CP1252',
            CP2001: 'CP2001',
            CP3001: 'CP3001',
            CP3002: 'CP3002',
            CP3011: 'CP3011',
            CP3012: 'CP3012',
            CP3021: 'CP3021',
            CP3041: 'CP3041',
            CP3840: 'CP3840',
            CP3841: 'CP3841',
            CP3843: 'CP3843',
            CP3845: 'CP3845',
            CP3846: 'CP3846',
            CP3847: 'CP3847',
            CP3848: 'CP3848',
            UTF8: 'UTF8',
            Blank: 'Blank',
        };
        /**
         * Constant for possible InternationalType
         */
        _this.InternationalType = {
            UK: 'UK',
            USA: 'USA',
            France: 'France',
            Germany: 'Germany',
            Denmark: 'Denmark',
            Sweden: 'Sweden',
            Italy: 'Italy',
            Spain: 'Spain',
            Japan: 'Japan',
            Norway: 'Norway',
            Denmark2: 'Denmark2',
            Spain2: 'Spain2',
            LatinAmerica: 'LatinAmerica',
            Korea: 'Korea',
            Ireland: 'Ireland',
            Legal: 'Legal',
        };
        /**
         * Constant for possible FontStyleType
         */
        _this.FontStyleType = {
            /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
            A: 'A',
            /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
            B: 'B',
        };
        /**
         * Constant for possible CutPaperAction
         */
        _this.CutPaperAction = {
            FullCut: 'FullCut',
            FullCutWithFeed: 'FullCutWithFeed',
            PartialCut: 'PartialCut',
            PartialCutWithFeed: 'PartialCutWithFeed',
        };
        /**
         * Constant for possible BlackMarkType
         */
        _this.BlackMarkType = {
            Valid: 'Valid',
            Invalid: 'Invalid',
            ValidWithDetection: 'ValidWithDetection',
        };
        /**
         * Constant for possible AlignmentPosition
         */
        _this.AlignmentPosition = {
            Left: 'Left',
            Center: 'Center',
            Right: 'Right',
        };
        /**
         * Constant for possible LogoSize
         */
        _this.LogoSize = {
            Normal: 'Normal',
            DoubleWidth: 'DoubleWidth',
            DoubleHeight: 'DoubleHeight',
            DoubleWidthDoubleHeight: 'DoubleWidthDoubleHeight',
        };
        /**
         * Constant for possible BarcodeSymbology
         */
        _this.BarcodeSymbology = {
            Code128: 'Code128',
            Code39: 'Code39',
            Code93: 'Code93',
            ITF: 'ITF',
            JAN8: 'JAN8',
            JAN13: 'JAN13',
            NW7: 'NW7',
            UPCA: 'UPCA',
            UPCE: 'UPCE',
        };
        /**
         * Constant for possible BarcodeWidth
         */
        _this.BarcodeWidth = {
            Mode1: 'Mode1',
            Mode2: 'Mode2',
            Mode3: 'Mode3',
            Mode4: 'Mode4',
            Mode5: 'Mode5',
            Mode6: 'Mode6',
            Mode7: 'Mode7',
            Mode8: 'Mode8',
            Mode9: 'Mode9',
        };
        /**
         * Constant for possible QrCodeModel
         */
        _this.QrCodeModel = {
            No1: 'No1',
            No2: 'No2',
        };
        /**
         * Constant for possible QrCodeLevel
         */
        _this.QrCodeLevel = {
            H: 'H',
            L: 'L',
            M: 'M',
            Q: 'Q',
        };
        /**
         * Constant for possible BitmapConverterRotation
         */
        _this.BitmapConverterRotation = {
            Normal: 'Normal',
            Left90: 'Left90',
            Right90: 'Right90',
            Rotate180: 'Rotate180',
        };
        return _this;
    }
    StarPRNT.prototype.portDiscovery = function (type) { return cordova(this, "portDiscovery", {}, arguments); };
    StarPRNT.prototype.checkStatus = function (port, emulation) { return cordova(this, "checkStatus", {}, arguments); };
    StarPRNT.prototype.printRawText = function (port, emulation, printObj) { return cordova(this, "printRawText", {}, arguments); };
    StarPRNT.prototype.printRasterReceipt = function (port, emulation, rasterObj) { return cordova(this, "printRasterReceipt", {}, arguments); };
    StarPRNT.prototype.printBase64Image = function (port, emulation, base64ImageObj) { return cordova(this, "printBase64Image", {}, arguments); };
    StarPRNT.prototype.printImage = function (port, emulation, imageObj) { return cordova(this, "printImage", {}, arguments); };
    StarPRNT.prototype.openCashDrawer = function (port, emulation) { return cordova(this, "openCashDrawer", {}, arguments); };
    StarPRNT.prototype.print = function (port, emulation, commandsArray) { return cordova(this, "print", {}, arguments); };
    StarPRNT.prototype.connect = function (port, emulation, hasBarcodeReader) { return cordova(this, "connect", { "observable": true, "callbackStyle": "node" }, arguments); };
    StarPRNT.prototype.getStatus = function () { return cordova(this, "getStatus", { "eventObservable": true, "event": "starPrntData" }, arguments); };
    StarPRNT.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    StarPRNT.pluginName = "StarPRNT";
    StarPRNT.plugin = "cordova-plugin-starprnt";
    StarPRNT.pluginRef = "starprnt";
    StarPRNT.repo = "https://github.com/auctifera-josed/starprnt";
    StarPRNT.platforms = ["Android", "iOS"];
StarPRNT.ɵfac = function StarPRNT_Factory(t) { return ɵStarPRNT_BaseFactory(t || StarPRNT); };
StarPRNT.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: StarPRNT, factory: function (t) { return StarPRNT.ɵfac(t); } });
var ɵStarPRNT_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(StarPRNT);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StarPRNT, [{
        type: Injectable
    }], null, null); })();
    return StarPRNT;
}(IonicNativePlugin));
export { StarPRNT };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc3Rhci1wcm50L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFrWmxDO0FBQ0E7QUFDQSxHQUFHOztBQUNILE1BQU0sQ0FBTixJQUFZLFNBZVg7QUFmRCxXQUFZLFNBQVM7QUFDcEIsSUFBQyxvRkFBb0Y7QUFDdEYsSUFBRSxrQ0FBcUIsQ0FBQTtBQUFDLElBQ3RCLHVCQUF1QjtBQUN6QixJQUFFLG9DQUF1QixDQUFBO0FBQUMsSUFDeEIsMENBQTBDO0FBQzVDLElBQUUsa0NBQXFCLENBQUE7QUFBQyxJQUN0QixhQUFhO0FBQ2YsSUFBRSx3Q0FBMkIsQ0FBQTtBQUFDLElBQzVCLFlBQVk7QUFDZCxJQUFFLDhCQUFpQixDQUFBO0FBQUMsSUFDbEIsNERBQTREO0FBQzlELElBQUUsMENBQTZCLENBQUE7QUFBQyxJQUM5QixZQUFZO0FBQ2QsSUFBRSw0Q0FBK0IsQ0FBQTtBQUNqQyxDQUFDLEVBZlcsU0FBUyxLQUFULFNBQVMsUUFlcEI7QUFFRDtBQUNBO0FBQ0EsR0FBRztBQUNILE1BQU0sQ0FBTixJQUFZLFFBZVg7QUFmRCxXQUFZLFFBQVE7QUFDbkIsSUFBQyxjQUFjO0FBQ2hCLElBQUUsZ0NBQW9CLENBQUE7QUFBQyxJQUNyQiwwQ0FBMEM7QUFDNUMsSUFBRSx3Q0FBNEIsQ0FBQTtBQUFDLElBQzdCLGVBQWU7QUFDakIsSUFBRSxrQ0FBc0IsQ0FBQTtBQUFDLElBQ3ZCLGNBQWM7QUFDaEIsSUFBRSx3Q0FBNEIsQ0FBQTtBQUFDLElBQzdCLHlCQUF5QjtBQUMzQixJQUFFLDZCQUFpQixDQUFBO0FBQUMsSUFDbEIsMEJB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LENBQUMsRUFBRSxHQUFHO0FBQ1YsWUFBSSxDQUFDLEVBQUUsR0FBRztBQUNWLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLDZCQUF1QixHQUFHO0FBQzVCLFlBQUksTUFBTSxFQUFFLFFBQVE7QUFDcEIsWUFBSSxNQUFNLEVBQUUsUUFBUTtBQUNwQixZQUFJLE9BQU8sRUFBRSxTQUFTO0FBQ3RCLFlBQUksU0FBUyxFQUFFLFdBQVc7QUFDMUIsU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUFNLElBS25CLGdDQUFhLGFBQUMsSUFBWTtBQUtiLElBTWIsOEJBQVcsYUFBQyxJQUFZLEVBQUUsU0FBaUI7QUFLckMsSUFPTiwrQkFBWSxhQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLFFBQWtCO0FBSy9DLElBT2pCLHFDQUFrQixhQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLFNBQW9CO0FBS2pELElBT3ZCLDZCQUFVLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsUUFBa0I7QUFLL0MsSUFNZixpQ0FBYyxhQUFDLElBQVksRUFBRSxTQUFpQjtBQUszQixJQU9uQix3QkFBSyxhQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLGFBQTRCO0FBS3pELElBU1YsMEJBQU8sYUFBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxnQkFBeUI7QUFLWixJQU90RCw0QkFBUztBQUtnRSxJQUt6RSw2QkFBVTtBQUlzQjtBQUFzQztBQUFpRDtBQUFxQztBQUFtRTtJQTVUcE4sUUFBUSx3QkFEcEIsVUFBVSxFQUFFLFFBQ0EsUUFBUTs7Ozs7MEJBQUU7QUFBQyxtQkEzb0J4QjtBQUFFLEVBMm9CNEIsaUJBQWlCO0FBQzlDLFNBRFksUUFBUTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlciB7XG4gIC8qKlxuICAgKiBQcmludGVyIG1vZGVsIG5hbWUgYW5kIG1vZGVsIG51bWJlclxuICAgKi9cbiAgbW9kZWxOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIE1hYyBBZGRyZXNzXG4gICAqL1xuICBtYWNBZGRyZXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIHBvcnQgbmFtZSB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBwb3J0IGluc3RhbmNlIG9mIFNNUG9ydCBvciBTdGFySU9FeHRNYW5hZ2VyXG4gICAqL1xuICBwb3J0TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFVTQiBTZXJpYWwgTnVtYmVyIChVU0IgUHJpbnRlcnMgT25seSlcbiAgICovXG4gIFVTQlNlcmlhbE51bWJlcj86IHN0cmluZztcbn1cbi8qKlxuICogQXJyYXkgb2YgUHJpbnRlciBvYmplY3RzIHJldHVybmVkIGJ5IHRoZSBwb3J0RGlzY292ZXJ5KCkgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcmludGVycyBleHRlbmRzIEFycmF5PFByaW50ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlclN0YXR1cyB7XG4gIC8qKlxuICAgKiBQcmludGVyIE9ubGluZS9PZmZsaW5lIHN0YXR1c1xuICAgKi9cbiAgb2ZmbGluZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBQcmludGVyIG1vZGVsIG5hbWUgYW5kIG1vZGVsIG51bWJlclxuICAgKi9cbiAgTW9kZWxOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIGNvdmVyIHN0YXR1c1xuICAgKi9cbiAgY292ZXJPcGVuPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJpbnRlciBQYXBlciBDdXR0ZXIgc3RhdHVzXG4gICAqL1xuICBjdXR0ZXJFcnJvcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgUGFwZXIgc3RhdHVzXG4gICAqL1xuICByZWNlaXB0UGFwZXJFbXB0eT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgRmlybXdhcmUgaW5mb3JtYXRpb25cbiAgICovXG4gIEZpcm13YXJlVmVyc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmludE9iaiB7XG4gIC8qKlxuICAgKiBzdHJpbmcgY29udGFpbmluZyB0aGUgdGV4dCB0byBwcmludCwgRXhhbXBsZTogXCJTdGFyIENsb3RoaW5nIEJvdXRpcXVlXFxuMTIzIFN0YXIgUm9hZFxcbkNpdHksIFN0YXRlIDEyMzQ1XFxuXFxuXCJcbiAgICovXG4gIHRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogIFNlbmRzIGEgUGFydGlhbEN1dFdpdGhGZWVkIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIsIGRlZmF1bHRzIHRvIHRydWVcbiAgICovXG4gIGN1dFJlY2VpcHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzIgLSBEZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBvcGVuQ2FzaERyYXdlcj86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFJhc3Rlck9iaiBleHRlbmRzIFByaW50T2JqIHtcbiAgLyoqXG4gICAqIEZvbnQgc2l6ZSBudW1iZXIsIGRlZmF1bHRzIHRvIDI1XG4gICAqL1xuICBmb250U2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogUGFwZXIgd2lkdGggKFVuaXRzOiBEb3RzKS4gMiBpbmNoZXM6IDM4NCwgMyBpbmNoZXM6IDU3NiwgNCBpbmNoZXM6IDgzMiwgRVNDUG9zIDMgaW5jaGVzOiA1MTIsIERvdCAzIGluY2hlczogMjEwLiBEZWZhdWx0cyB0byA1NzZcbiAgICovXG4gIHBhcGVyV2lkdGg/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltYWdlT2JqIHtcbiAgLyoqXG4gICAqIEltYWdlIFVSSSB0byBwcmludCwgdGhpcyBjYW4gYmUgb2J0YWluZWQgdmlhIHRoZSBjYW1lcmEgb3IgcGhvdG8gbGlicmFyeSBvciBhcyBhIHN0YXRpYyByZXNvdXJjZSBzYXZlZCBvbiB0aGUgcGhvbmUgbWVtb3J5XG4gICAqL1xuICB1cmk6IHN0cmluZztcblxuICAvKipcbiAgICogSW1hZ2Ugd2lkdGggKFVuaXRzOiBEb3RzKSBkZWZhdWx0cyB0byA1NzZcbiAgICovXG4gIHBhcGVyV2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBTZW5kcyBhIFBhcnRpYWxDdXRXaXRoRmVlZCBjb21tYW5kIHRvIHRoZSBwcmludGVyLCBkZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBjdXRSZWNlaXB0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yIC0gRGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgb3BlbkNhc2hEcmF3ZXI/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBQcmludENvbW1hbmQge1xuICAvKipcbiAgICogQ2hhcmFjdGhlciBlbmNvZGluZyBpcyB1c2VkIHRvIGdldEJ5dGUgZGF0YSBmcm9tIGFsbCBzdWJzZXF1ZW50IGNvbW1hbmRzLiBEZWZhdWx0ICdVUy1BU0NJSSdcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkVuY29kaW5nIG9yIHRoZSBFbmNvZGluZyBlbnVtLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kRW5jb2Rpbmc6J1VTLUFTQ0lJJ31cbiAgICovXG4gIGFwcGVuZEVuY29kaW5nPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgY29kZSBwYWdlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmRzIHByb3BlcnR5LlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIERlZmluZWQgaW4gU3RhclBSTlQuQ29kZVBhZ2VUeXBlIG9yIHRoZSBDb2RlUGFnZVR5cGUgZW51bS5cbiAgICogRXhhbXBsZToge2FwcGVuZENvZGVQYWdlOidDUDg1OCd9XG4gICAqL1xuICBhcHBlbmRDb2RlUGFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGF0YSAoVGV4dCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kOlwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwifVxuICAgKi9cbiAgYXBwZW5kPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEYXRhIChUZXh0KSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRSYXc6XCJTdGFyIENsb3RoaW5nIEJvdXRpcXVlXFxuMTIzIFN0YXIgUm9hZFxcbkNpdHksIFN0YXRlIDEyMzQ1XFxuXFxuXCJ9XG4gICAqL1xuICBhcHBlbmRSYXc/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERhdGEgKENvbW1hbmQpIGlzIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGFrZXMgYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCeXRlczpbMHg0OCwgMHg2NSwgMHg2YywgMHg2YywgMHg2ZiwgMHgyMCwgMHg1NywgMHg2ZiwgMHg3MiwgMHg2YywgMHg2NCwgMHgyZV19XG4gICAqL1xuICBhcHBlbmRCeXRlcz86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBEYXRhIChDb21tYW5kKSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUmF3Qnl0ZXM6WzB4NDgsIDB4NjUsIDB4NmMsIDB4NmMsIDB4NmYsIDB4MjAsIDB4NTcsIDB4NmYsIDB4NzIsIDB4NmMsIDB4NjQsIDB4MmVdfVxuICAgKi9cbiAgYXBwZW5kUmF3Qnl0ZXM/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogU2V0IGNvbW1hbmQgb2YgdGhlIGNoYXJhY3RlciBzcGFjZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gQ2hhcmFjdGVyIFNwYWNzIChVbml0OiBEb3RzKSBFeGFtcGxlOiA0XG4gICAqL1xuICBhcHBlbmRDaGFyYWN0ZXJTcGFjZT86IG51bWJlcjtcblxuICAvKipcbiAgICogIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBlbXBoYXNpcyBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kRW1waGFzaXM6XCJTQUxFXFxuXCJ9XG4gICAqL1xuICBhcHBlbmRFbXBoYXNpcz86IHN0cmluZztcblxuICAvKipcbiAgICogIEVuYWJsZSBlbXBoYXNpcyBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlRW1waGFzaXM6dHJ1ZX1cbiAgICovXG4gIGVuYWJsZUVtcGhhc2lzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBpbnZlcnQgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZEludmVydDpcIlJlZnVuZHMgYW5kIEV4Y2hhbmdlc1xcblwifVxuICAgKi9cbiAgYXBwZW5kSW52ZXJ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogIEVuYWJsZSBpbnZlcnQgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZUludmVydDp0cnVlfVxuICAgKi9cbiAgZW5hYmxlSW52ZXJ0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgdW5kZXIgbGluZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kVW5kZXJsaW5lOlwiMzAgZGF5c1wifVxuICAgKi9cbiAgYXBwZW5kVW5kZXJsaW5lPzogc3RyaW5nO1xuICAvKipcbiAgICogIEVuYWJsZSB1bmRlciBsaW5lIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHtlbmFibGVVbmRlcmxpbmU6dHJ1ZX1cbiAgICovXG4gIGVuYWJsZVVuZGVybGluZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBpbnRlcm5hdGlvbmFsIGNoYXJhY3RlciBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIERlZmluZWQgaW4gU3RhclBSTlQuSW50ZXJuYXRpb25hbFR5cGUgb3IgdGhlIEludGVybmF0aW9uYWxUeXBlIGVudW0uXG4gICAqICdVSycgfCAnVVNBJyB8ICdGcmFuY2UnIHwgJ0dlcm1hbnknIHwgJ0Rlbm1hcmsnIHwgJ1N3ZWRlbicgfCAnSXRhbHknIHwgJ1NwYWluJyB8ICdKYXBhbicgfCAnTm9yd2F5JyB8ICdEZW5tYXJrMicgfCAnU3BhaW4yJyB8ICdMYXRpbkFtZXJpY2EnIHwgJ0tvcmVhJyB8ICdJcmVsYW5kJyB8ICdMZWdhbCdcbiAgICogRXhhbXBsZSB7YXBwZW5kSW50ZXJuYXRpb25hbDpJbnRlcm5hdGlvbmFsVHlwZS5VS31cbiAgICovXG4gIGFwcGVuZEludGVybmF0aW9uYWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExpbmUgZmVlZCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBQYXBlciBmZWVkIHVuaXRzIChVbml0czogTGluZXMpIEV4YW1wbGU6IDJcbiAgICovXG4gIGFwcGVuZExpbmVGZWVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVbml0IGZlZWQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gUGFwZXIgZmVlZCB1bml0cyAoVW5pdHM6IERvdHMpIEV4YW1wbGU6IDY0XG4gICAqL1xuICBhcHBlbmRVbml0RmVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IGNvbW1hbmQgb2YgdGhlIGxpbmUgc3BhY2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIExpbmUgc3BhY2VzIChVbml0czogRG90cykgRXhhbXBsZTogMzJcbiAgICovXG4gIGFwcGVuZExpbmVTcGFjZT86IG51bWJlcjtcblxuICAvKipcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGZvbnQgc3R5bGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5Gb250U3R5bGVUeXBlIG9yIHRoZSBGb250U3R5bGVUeXBlIGVudW0uICdBJyB8ICdCJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kRm9udFN0eWxlOkZvbnRTdHlsZVR5cGUuQX1cbiAgICovXG4gIGFwcGVuZEZvbnRTdHlsZT86IHN0cmluZztcblxuICAvKipcbiAgICogUGFwZXIgY3V0IGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5DdXRQYXBlckFjdGlvbiBvciB0aGUgQ3V0UGFwZXJBY3Rpb24gZW51bS4gJ0Z1bGxDdXQnIHwgJ0Z1bGxDdXRXaXRoRmVlZCcgfCAnUGFydGlhbEN1dCcgfCAnUGFydGlhbEN1dFdpdGhGZWVkJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kQ3V0UGFwZXI6Q3V0UGFwZXJBY3Rpb24uUGFydGlhbEN1dFdpdGhGZWVkfVxuICAgKi9cbiAgYXBwZW5kQ3V0UGFwZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJsYWNrIG1hcmsgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJsYWNrTWFya1R5cGUgb3IgdGhlIEJsYWNrTWFya1R5cGUgZW51bS4gJ1ZhbGlkJyB8ICdJbnZhbGlkJyB8ICdWYWxpZFdpdGhEZXRlY3Rpb24nXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCbGFja01hcms6IEJsYWNrTWFya1R5cGUuVmFsaWR9XG4gICAqL1xuICBhcHBlbmRCbGFja01hcms/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFic29sdXRlIHBvc2l0aW9uIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIChVbml0OiBEb3RzKS4gU2VuZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBkYXRhIHByb3BlcnR5IHRvIGFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiBqdXN0IHRvIHRoYXQgc3RyaW5nXG4gICAqIEV4YW1wbGUxOiBBcHBlbmQgZGF0YSB3aXRoIEFic29sdXRlIHBvc2l0aW9uIHthcHBlbmRBYnNvbHV0ZVBvc2l0aW9uOjQwLCBkYXRhOiBcIlRleHQgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvblwifVxuICAgKiBFeGFtcGxlMjogQXBwZW5kIGFic29sdXRlIHBvc2l0aW9uIHRvIHN1YnNlcXVlbnQgY29tbWFuZHM6IHthcHBlbmRBYnNvbHV0ZVBvc2l0aW9uOjQwfVxuICAgKi9cbiAgYXBwZW5kQWJzb2x1dGVQb3NpdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogQWxpZ25tZW50IGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFNlbmQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZGF0YSBwcm9wZXJ0eSB0byBhcHBlbmQgYWxpZ25tZW50IHBvc2l0aW9uIGp1c3QgdG8gdGhhdCBzdHJpbmdcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkFsaWdubWVudFBvc2l0aW9uIG9yIHRoZSBBbGlnbm1lbnRQb3NpdGlvbiBlbnVtLiAnTGVmdCcgfCAnQ2VudGVyJyB8ICdSaWdodCcuXG4gICAqIEV4YW1wbGUxIEFwcGVuZCBkYXRhIHdpdGggQWxpZ25tZW50IHBvc2l0aW9uOiB7YXBwZW5kQWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlciwgZGF0YTogXCJUZXh0IHdpdGggY2VudGVyZWQgcG9zaXRpb25cIn1cbiAgICogRXhhbXBsZTIgQXBwZW5kIGFic29sdXRlIHBvc2l0aW9uIHRvIHN1YnNlcXVlbnQgY29tbWFuZHM6IHthcHBlbmRBbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfVxuICAgKi9cbiAgYXBwZW5kQWxpZ25tZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIHRhYiBzZXQvY2xlYXIgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gKE9ubHkgd29ya3MgZm9yIGNlcnRhaW4gcHJpbnRlciBtb2RlbHMsIGNoZWNrIHRoZSBzdGFyU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMpXG4gICAqIEFycmF5IG9mIGhvcml6b250YWwgdGFiIHBvc2l0aW9ucyAoVW5pdHM6IEFOSyBjaGFyYWN0ZXIgcGl0Y2gpLiBTcGVjaWZ5aW5nIGVtcHR5IGFycmF5IGRlbGV0ZXMgYWxsIGN1cnJlbnRseSBzZXQgaG9yaXpvbnRhbCB0YWIgcG9zaXRpb25zLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uOlsxNSwgMzVdfVxuICAgKiBEZWxldGUgcG9zaXRpb25zIEV4YW1wbGU6IHthcHBlbmRIb3Jpem9udGFsVGFiUG9zaXRpb246W119XG4gICAqL1xuICBhcHBlbmRIb3Jpem9udGFsVGFiUG9zaXRpb24/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgbG9nbyBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGhlIGxvZ28gaGFzIHRvIGJlIHVwbG9hZGVkIHRvIHRoZSBwcmludGVyIHVzaW5nIHRoZSBTdGFyIFByaW50IHV0aWxpdHkuXG4gICAqIFNlbmQgaW4gY29uanVjdGlvbiB3aXRoIHRoZSBsb2dvU2l6ZSBwcm9wZXJ0eSB0byBzZXQgdGhlIGxvZ28gc2l6ZVxuICAgKiBFeGFtcGxlOiB7YXBwZW5kTG9nbzoxfVxuICAgKiBFeGFtcGxlIHdpdGggTG9nb1NpemU6IHthcHBlbmRMb2dvOjEsIGxvZ29TaXplOkxvZ29TaXplLkRvdWJsZVdpZHRoRG91YmxlSGVpZ2h0fVxuICAgKi9cbiAgYXBwZW5kTG9nbz86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRMb2dvIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5Mb2dvU2l6ZSBvciB0aGUgTG9nb1NpemUgZW51bS4gJ05vcm1hbCcgfCAnRG91YmxlV2lkdGgnIHwgJ0RvdWJsZUhlaWdodCcgfCAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnO1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kTG9nbzoxLCBsb2dvU2l6ZTpMb2dvU2l6ZS5Eb3VibGVXaWR0aERvdWJsZUhlaWdodH1cbiAgICovXG4gIGxvZ29TaXplPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBiYXJjb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IEJhcmNvZGVTeW1ib2xvZ3ksIEJhcmNvZGVXaWR0aCwgaGVpZ2h0LCBocmksIGFic29sdXRlUG9zaXRpb24sIGFsaWdubWVudC5cbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6XCJ7QlN0YXJcIiwgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjgsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTIsIGhlaWdodDo0MCwgaHJpOnRydWUgfVxuICAgKiBFeGFtcGxlIHdpdGggYWJzb2x1dGVQb3NpdGlvbjoge2FwcGVuZEJhcmNvZGU6XCJ7QlN0YXJcIiwgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjgsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTIsIGhlaWdodDo0MCwgaHJpOnRydWUsIGFic29sdXRlUG9zaXRpb246NDAgfVxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OnthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlLCBhbGlnbm1lbnQ6YWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlciB9XG4gICAqL1xuICBhcHBlbmRCYXJjb2RlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJhcmNvZGVTeW1ib2xvZ3kgb3IgdGhlIEJhcmNvZGVTeW1ib2xvZ3kgZW51bS5cbiAgICogJ0NvZGUxMjgnIHwgJ0NvZGUzOScgfCAnQ29kZTkzJyB8ICdJVEYnIHwgJ0pBTjgnIHwgJ0pBTjEzJyB8ICdOVzcnIHwgJ1VQQ0EnIHwgJ1VQQ0UnIHxcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4fVxuICAgKi9cbiAgQmFyY29kZVN5bWJvbG9neT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CYXJjb2RlV2lkdGggb3IgdGhlIEJhcmNvZGVXaWR0aCBlbnVtLlxuICAgKiBNb2RlMSB8IE1vZGUyIHwgTW9kZTMgfCBNb2RlNCB8IE1vZGU1IHwgTW9kZTYgfCBNb2RlNyB8IE1vZGU4IHwgTW9kZTlcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTJ9XG4gICAqL1xuICBCYXJjb2RlV2lkdGg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxuICAgKiBVbmRlci1iYXIgY2hhcmFjdGVycy4gdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWRcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIGhyaTp0cnVlfVxuICAgKi9cbiAgaHJpPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQgb3IgdGhlIGFwcGVuZE11bHRpcGxlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXG4gICAqIGFwcGVuZEJhcmNvZGUgRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIGhlaWdodDo0MH1cbiAgICogYXBwZW5kTXVsdGlwbGU6IHthcHBlbmRNdWx0aXBsZTondGV4dCB0byBwcmludCcsIGhlaWdodDo0MH1cbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCBvciB0aGUgYXBwZW5kTXVsdGlwbGUgY29tbWFuZCAoVW5pdHM6RG90cylcbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCB3aWR0aDo1NzZ9XG4gICAqIGFwcGVuZE11bHRpcGxlOiB7YXBwZW5kTXVsdGlwbGU6J3RleHQgdG8gcHJpbnQnLCB3aWR0aDo0MH1cbiAgICovXG4gIHdpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLCBvciB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXG4gICAqIGFwcGVuZEJhcmNvZGUgRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIGFic29sdXRlUG9zaXRpb246NDB9LlxuICAgKiBhcHBlbmRRckNvZGUgRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXG4gICAqL1xuICBhYnNvbHV0ZVBvc2l0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLCBvciB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5BbGlnbm1lbnRQb3NpdGlvbiBvciB0aGUgQWxpZ25tZW50UG9zaXRpb24gZW51bS4gJ0xlZnQnIHwgJ0NlbnRlcicgfCAnUmlnaHQnLlxuICAgKiBhcHBlbmRCaXRtYXAgRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cbiAgICogYXBwZW5kUXJDb2RlIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxuICAgKi9cbiAgYWxpZ25tZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgbXVsdGlwbGUgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzOiB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJcbiAgICogRXhhbXBsZToge2FwcGVuZE11bHRpcGxlOlwiICAgJDE1Ni45NVxcblwiLCB3aWR0aDoyLCBoZWlnaHQ6Mn0uXG4gICAqL1xuICBhcHBlbmRNdWx0aXBsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRW5hYmxlIG11bHRpcGxlIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllczogd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyXG4gICAqIEV4YW1wbGU6IHtlbmFibGVNdWx0aXBsZTp0cnVlLCB3aWR0aDoyLCBoZWlnaHQ6Mn1cbiAgICogRGlzYWJsZSBFeGFtcGxlOiB7ZW5hYmxlTXVsdGlwbGU6ZmFsc2V9XG4gICAqL1xuICBlbmFibGVNdWx0aXBsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIFFSIGNvZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogUXJDb2RlTW9kZWwsIFFyQ29kZUxldmVsLCBjZWxsLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDh9LlxuICAgKiBFeGFtcGxlIHdpdGggYWJzb2x1dGVQb3NpdGlvbjoge2FwcGVuZFFyQ29kZTpcIntCU3RhclwiLCBRckNvZGVNb2RlbDpcIk5vMlwiLCBRckNvZGVMZXZlbDpcIkxcIiwgY2VsbDogOCwgYWJzb2x1dGVQb3NpdGlvbjogNDAgfS5cbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDoge2FwcGVuZFFyQ29kZTpcIntCU3RhclwiLCBRckNvZGVNb2RlbDpcIk5vMlwiLCBRckNvZGVMZXZlbDpcIkxcIiwgY2VsbDogOCwgYWxpZ25tZW50OlwiQ2VudGVyXCIgfS5cbiAgICovXG4gIGFwcGVuZFFyQ29kZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZC5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULlFyQ29kZU1vZGVsIG9yIHRoZSBRckNvZGVNb2RlbCBlbnVtLiAnTm8xJyB8ICdObzInIERlZmF1bHQgJ05vMidcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgUXJDb2RlTW9kZWw6UXJDb2RlTW9kZWwuTm8xfVxuICAgKi9cbiAgUXJDb2RlTW9kZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5RckNvZGVMZXZlbCBvciB0aGUgUXJDb2RlTGV2ZWwgZW51bS4gJ05vMScgfCAnTm8yJy4gRGVmYXVsdCAnSCdcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgUXJDb2RlTGV2ZWw6UXJDb2RlTGV2ZWwuSH1cbiAgICovXG4gIFFyQ29kZUxldmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLiBRUkNvZGUgQ2VsbCBzaXplLiBEZWZhdWx0IDQuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGNlbGw6OH1cbiAgICovXG4gIGNlbGw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGJpdG1hcCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGFrZXMgYSBzdHJpbmcgaW1hZ2UgVVJJXG4gICAqIHRoaXMgY2FuIGJlIG9idGFpbmVkIHZpYSB0aGUgY2FtZXJhIG9yIHBob3RvIGxpYnJhcnkgb3IgYXMgYSBzdGF0aWMgcmVzb3VyY2Ugc2F2ZWQgb24gdGhlIHBob25lIG1lbW9yeS5cbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBkaWZmdXNpb24sIHdpZHRoLCBib3RoU2NhbGUsIHJvdGF0aW9uLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlfVxuICAgKiBFeGFtcGxlIHdpdGggYWJzb2x1dGVQb3NpdGlvbjoge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogdHJ1ZSwgd2lkdGg6NTc2LCBib3RoU2NhbGU6IHRydWUsIGFic29sdXRlUG9zaXRpb246IDQwIH0uXG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlLCBhbGlnbm1lbnQ6XCJDZW50ZXJcIiB9LlxuICAgKi9cbiAgYXBwZW5kQml0bWFwPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLiBSYW5kb20gZGl0aGVyOiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZC4gRGVmYXVsdCB0cnVlLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiBmYWxzZSB9XG4gICAqL1xuICBkaWZmdXNpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLiBIZWlnaHQgaXMgY2hhbmdlZCBhY2NvcmRpbmcgdG8gdGhlIGNvbnZlcnNpb24gcmF0ZSBvZiB0aGUgd2lkdGggcHJvcGVydHkuXG4gICAqIHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkLiBEZWZhdWx0IHRydWUuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBib3RoU2NhbGU6IHRydWUgfVxuICAgKi9cbiAgYm90aFNjYWxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJpdG1hcENvbnZlcnRlclJvdGF0aW9uIG9yIHRoZSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBlbnVtLlxuICAgKiAnTm9ybWFsJyB8ICdMZWZ0OTAnIHwgJ1JpZ2h0OTAnIHwgJ1JvdGF0ZTE4MCdcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIHJvdGF0aW9uOiBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbi5MZWZ0OTAgfVxuICAgKi9cbiAgcm90YXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHNlbmRzIGEgYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVsIG51bWJlcjogRXhhbXBsZTogMSA9IE5vMSwgMiA9IE5vMlxuICAgKi9cbiAgb3BlbkNhc2hEcmF3ZXI/OiBudW1iZXI7XG59XG5cbi8qKlxuICogRW11bGF0aW9uIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBFbXVsYXRpb24ge1xuICAvKiogbVBPUCwgU00tTDIwMCwgU00tTDMwMCwgU00tUzIxMGksIFNNLVMyMjBpLCBTTS1TMjMwaSwgU00tVDMwMGkvVDMwMCwgU00tVDQwMGkgKi9cbiAgU3RhclBSTlQgPSAnU3RhclBSTlQnLFxuICAvKiogU00tTDIwMCwgU00tTDMwMCAqL1xuICBTdGFyUFJOVEwgPSAnU3RhclBSTlRMJyxcbiAgLyoqIEZWUDEwLCBUU1A2NTBJSSwgVFNQNzAwSUksIFRTUDgwMElJICovXG4gIFN0YXJMaW5lID0gJ1N0YXJMaW5lJyxcbiAgLyoqIFRTUDEwMCAqL1xuICBTdGFyR3JhcGhpYyA9ICdTdGFyR3JhcGhpYycsXG4gIC8qKiBCU0MxMCAqL1xuICBFc2NQb3MgPSAnRXNjUG9zJyxcbiAgLyoqIFNNLVMyMTBpLCBTTS1TMjIwaSwgU00tUzIzMGksIFNNLVQzMDBpL1QzMDAsIFNNLVQ0MDBpICovXG4gIEVzY1Bvc01vYmlsZSA9ICdFc2NQb3NNb2JpbGUnLFxuICAvKiogU1A3MDAgKi9cbiAgU3RhckRvdEltcGFjdCA9ICdTdGFyRG90SW1wYWN0Jyxcbn1cblxuLyoqXG4gKiBFbmNvZGluZyBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gRW5jb2Rpbmcge1xuICAvKiogRW5nbGlzaCAqL1xuICBVU0FTQ0lJID0gJ1VTLUFTQ0lJJyxcbiAgLyoqIEZyZW5jaCwgR2VybWFuLCBQb3J0dWd1ZXNlLCBTcGFuaXNoICovXG4gIFdpbmRvd3MxMjUyID0gJ1dpbmRvd3MtMTI1MicsXG4gIC8qKiBKYXBhbmVzZSAqL1xuICBTaGlmdEpJUyA9ICdTaGlmdC1KSVMnLFxuICAvKiogUnVzc2lhbiAqL1xuICBXaW5kb3dzMTI1MSA9ICdXaW5kb3dzLTEyNTEnLFxuICAvKiogU2ltcGxpZmllZCBDaGluZXNlICovXG4gIEdCMjMxMiA9ICdHQjIzMTInLFxuICAvKiogVHJhZGl0aW9uYWwgQ2hpbmVzZSAqL1xuICBCaWc1ID0gJ0JpZzUnLFxuICAvKiogVUZUOCAqL1xuICBVVEY4ID0gJ1VURi04Jyxcbn1cblxuLyoqXG4gKiBDb2RlUGFnZVR5cGUgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIENvZGVQYWdlVHlwZSB7XG4gIENQNzM3ID0gJ0NQNzM3JyxcbiAgQ1A3NzIgPSAnQ1A3NzInLFxuICBDUDc3NCA9ICdDUDc3NCcsXG4gIENQODUxID0gJ0NQODUxJyxcbiAgQ1A4NTIgPSAnQ1A4NTInLFxuICBDUDg1NSA9ICdDUDg1NScsXG4gIENQODU3ID0gJ0NQODU3JyxcbiAgQ1A4NTggPSAnQ1A4NTgnLFxuICBDUDg2MCA9ICdDUDg2MCcsXG4gIENQODYxID0gJ0NQODYxJyxcbiAgQ1A4NjIgPSAnQ1A4NjInLFxuICBDUDg2MyA9ICdDUDg2MycsXG4gIENQODY0ID0gJ0NQODY0JyxcbiAgQ1A4NjUgPSAnQ1A4NjUnLFxuICBDUDg2OSA9ICdDUDg2OScsXG4gIENQODc0ID0gJ0NQODc0JyxcbiAgQ1A5MjggPSAnQ1A5MjgnLFxuICBDUDkzMiA9ICdDUDkzMicsXG4gIENQOTk5ID0gJ0NQOTk5JyxcbiAgQ1AxMDAxID0gJ0NQMTAwMScsXG4gIENQMTI1MCA9ICdDUDEyNTAnLFxuICBDUDEyNTEgPSAnQ1AxMjUxJyxcbiAgQ1AxMjUyID0gJ0NQMTI1MicsXG4gIENQMjAwMSA9ICdDUDIwMDEnLFxuICBDUDMwMDEgPSAnQ1AzMDAxJyxcbiAgQ1AzMDAyID0gJ0NQMzAwMicsXG4gIENQMzAxMSA9ICdDUDMwMTEnLFxuICBDUDMwMTIgPSAnQ1AzMDEyJyxcbiAgQ1AzMDIxID0gJ0NQMzAyMScsXG4gIENQMzA0MSA9ICdDUDMwNDEnLFxuICBDUDM4NDAgPSAnQ1AzODQwJyxcbiAgQ1AzODQxID0gJ0NQMzg0MScsXG4gIENQMzg0MyA9ICdDUDM4NDMnLFxuICBDUDM4NDUgPSAnQ1AzODQ1JyxcbiAgQ1AzODQ2ID0gJ0NQMzg0NicsXG4gIENQMzg0NyA9ICdDUDM4NDcnLFxuICBDUDM4NDggPSAnQ1AzODQ4JyxcbiAgVVRGOCA9ICdVVEY4JyxcbiAgQmxhbmsgPSAnQmxhbmsnLFxufVxuXG4vKipcbiAqIEludGVybmF0aW9uYWxUeXBlIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBJbnRlcm5hdGlvbmFsVHlwZSB7XG4gIFVLID0gJ1VLJyxcbiAgVVNBID0gJ1VTQScsXG4gIEZyYW5jZSA9ICdGcmFuY2UnLFxuICBHZXJtYW55ID0gJ0dlcm1hbnknLFxuICBEZW5tYXJrID0gJ0Rlbm1hcmsnLFxuICBTd2VkZW4gPSAnU3dlZGVuJyxcbiAgSXRhbHkgPSAnSXRhbHknLFxuICBTcGFpbiA9ICdTcGFpbicsXG4gIEphcGFuID0gJ0phcGFuJyxcbiAgTm9yd2F5ID0gJ05vcndheScsXG4gIERlbm1hcmsyID0gJ0Rlbm1hcmsyJyxcbiAgU3BhaW4yID0gJ1NwYWluMicsXG4gIExhdGluQW1lcmljYSA9ICdMYXRpbkFtZXJpY2EnLFxuICBLb3JlYSA9ICdLb3JlYScsXG4gIElyZWxhbmQgPSAnSXJlbGFuZCcsXG4gIExlZ2FsID0gJ0xlZ2FsJyxcbn1cblxuLyoqXG4gKiBGb250U3R5bGVUeXBlIGNvbnN0YW50cy5cbiAqL1xuZXhwb3J0IGVudW0gRm9udFN0eWxlVHlwZSB7XG4gIC8qKiBGb250LUEgKDEyIHggMjQgZG90cykgLyBTcGVjaWZ5IDcgeCA5IGZvbnQgKGhhbGYgZG90cykgKi9cbiAgQSA9ICdBJyxcbiAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xuICBCID0gJ0InLFxufVxuXG4vKipcbiAqIEN1dFBhcGVyQWN0aW9uIGNvbnN0YW50cy5cbiAqL1xuZXhwb3J0IGVudW0gQ3V0UGFwZXJBY3Rpb24ge1xuICBGdWxsQ3V0ID0gJ0Z1bGxDdXQnLFxuICBGdWxsQ3V0V2l0aEZlZWQgPSAnRnVsbEN1dFdpdGhGZWVkJyxcbiAgUGFydGlhbEN1dCA9ICdQYXJ0aWFsQ3V0JyxcbiAgUGFydGlhbEN1dFdpdGhGZWVkID0gJ1BhcnRpYWxDdXRXaXRoRmVlZCcsXG59XG5cbi8qKlxuICogQmxhY2tNYXJrVHlwZSBjb25zdGFudHMuXG4gKi9cbmV4cG9ydCBlbnVtIEJsYWNrTWFya1R5cGUge1xuICBWYWxpZCA9ICdWYWxpZCcsXG4gIEludmFsaWQgPSAnSW52YWxpZCcsXG4gIFZhbGlkV2l0aERldGVjdGlvbiA9ICdWYWxpZFdpdGhEZXRlY3Rpb24nLFxufVxuXG4vKipcbiAqIExvZ29TaXplIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBMb2dvU2l6ZSB7XG4gIE5vcm1hbCA9ICdOb3JtYWwnLFxuICBEb3VibGVXaWR0aCA9ICdEb3VibGVXaWR0aCcsXG4gIERvdWJsZUhlaWdodCA9ICdEb3VibGVIZWlnaHQnLFxuICBEb3VibGVXaWR0aERvdWJsZUhlaWdodCA9ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCcsXG59XG5cbi8qKlxuICogQWxpZ25tZW50UG9zaXRpb24gY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEFsaWdubWVudFBvc2l0aW9uIHtcbiAgTGVmdCA9ICdMZWZ0JyxcbiAgQ2VudGVyID0gJ0NlbnRlcicsXG4gIFJpZ2h0ID0gJ1JpZ2h0Jyxcbn1cblxuLyoqXG4gKiBCYXJjb2RlU3ltYm9sb2d5IGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBCYXJjb2RlU3ltYm9sb2d5IHtcbiAgQ29kZTEyOCA9ICdDb2RlMTI4JyxcbiAgQ29kZTM5ID0gJ0NvZGUzOScsXG4gIENvZGU5MyA9ICdDb2RlOTMnLFxuICBJVEYgPSAnSVRGJyxcbiAgSkFOOCA9ICdKQU44JyxcbiAgSkFOMTMgPSAnSkFOMTMnLFxuICBOVzcgPSAnTlc3JyxcbiAgVVBDQSA9ICdVUENBJyxcbiAgVVBDRSA9ICdVUENFJyxcbn1cblxuLyoqXG4gKiBCYXJjb2RlV2lkdGggY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEJhcmNvZGVXaWR0aCB7XG4gIE1vZGUxID0gJ01vZGUxJyxcbiAgTW9kZTIgPSAnTW9kZTInLFxuICBNb2RlMyA9ICdNb2RlMycsXG4gIE1vZGU0ID0gJ01vZGU0JyxcbiAgTW9kZTUgPSAnTW9kZTUnLFxuICBNb2RlNiA9ICdNb2RlNicsXG4gIE1vZGU3ID0gJ01vZGU3JyxcbiAgTW9kZTggPSAnTW9kZTgnLFxuICBNb2RlOSA9ICdNb2RlOScsXG59XG5cbi8qKlxuICogUXJDb2RlTW9kZWwgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIFFyQ29kZU1vZGVsIHtcbiAgTm8xID0gJ05vMScsXG4gIE5vMiA9ICdObzInLFxufVxuXG4vKipcbiAqIFFyQ29kZUxldmVsIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBRckNvZGVMZXZlbCB7XG4gIEggPSAnSCcsXG4gIEwgPSAnTCcsXG4gIE0gPSAnTScsXG4gIFEgPSAnUScsXG59XG5cbi8qKlxuICogQml0bWFwQ29udmVydGVyUm90YXRpb24gY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIHtcbiAgTm9ybWFsID0gJ05vcm1hbCcsXG4gIExlZnQ5MCA9ICdMZWZ0OTAnLFxuICBSaWdodDkwID0gJ1JpZ2h0OTAnLFxuICBSb3RhdGUxODAgPSAnUm90YXRlMTgwJyxcbn1cblxuLyoqXG4gKiBQdXNoIGEgbmV3IFByaW50Q29tbWFuZCBvYmplY3QgdG8gdGhlIGFycmF5IGZvciBhIHNlcGFyYXRlIGluc3RydWN0aW9uIHRvIHRoZSBwcmludGVyLiBFeGFtcGxlIFt7YXBwZW5kOlwidGV4dFwifSwge1wib3BlbkNhc2hEcmF3ZXI6IDFcIn1dXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZHNBcnJheSBleHRlbmRzIEFycmF5PFByaW50Q29tbWFuZD4ge31cblxuLyoqXG4gKiBAbmFtZSBTdGFyUFJOVFxuICogQGRlc2NyaXB0aW9uXG4gKiAqIElvbmljIE5hdGl2ZSB3cmFwcGVycyBmb3IgdGhlIHN0YXJwcm50IGNvcmRvdmEgcGx1Z2luIGZvciBTdGFyIE1pY3JvbmljcyBCbHVldG9vdGgvTEFOIHByaW50ZXJzXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdGFyUFJOVCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3Rhci1wcm50L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhcnBybnQ6IFN0YXJQUk5UKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zdGFycHJudC5wb3J0RGlzY292ZXJ5KCdhbGwnKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N0YXJQUk5UJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RhcnBybnQnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnc3RhcnBybnQnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXVjdGlmZXJhLWpvc2VkL3N0YXJwcm50JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXJQUk5UIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIEVtdWxhdGlvblxuICAgKi9cbiAgRW11bGF0aW9uID0ge1xuICAgIFN0YXJQUk5UOiAnU3RhclBSTlQnLFxuICAgIFN0YXJQUk5UTDogJ1N0YXJQUk5UTCcsXG4gICAgU3RhckxpbmU6ICdTdGFyTGluZScsXG4gICAgU3RhckdyYXBoaWM6ICdTdGFyR3JhcGhpYycsXG4gICAgRXNjUG9zOiAnRXNjUG9zJyxcbiAgICBFc2NQb3NNb2JpbGU6ICdFc2NQb3NNb2JpbGUnLFxuICAgIFN0YXJEb3RJbXBhY3Q6ICdTdGFyRG90SW1wYWN0JyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEVuY29kaW5nXG4gICAqL1xuICBFbmNvZGluZyA9IHtcbiAgICBVU0FTQ0lJOiAnVVMtQVNDSUknLFxuICAgIFdpbmRvd3MxMjUyOiAnV2luZG93cy0xMjUyJyxcbiAgICBTaGlmdEpJUzogJ1NoaWZ0LUpJUycsXG4gICAgV2luZG93czEyNTE6ICdXaW5kb3dzLTEyNTEnLFxuICAgIEdCMjMxMjogJ0dCMjMxMicsXG4gICAgQmlnNTogJ0JpZzUnLFxuICAgIFVURjg6ICdVVEYtOCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvZGVQYWdlVHlwZSBjb25zdGFudHNcbiAgICovXG4gIENvZGVQYWdlVHlwZSA9IHtcbiAgICBDUDczNzogJ0NQNzM3JyxcbiAgICBDUDc3MjogJ0NQNzcyJyxcbiAgICBDUDc3NDogJ0NQNzc0JyxcbiAgICBDUDg1MTogJ0NQODUxJyxcbiAgICBDUDg1MjogJ0NQODUyJyxcbiAgICBDUDg1NTogJ0NQODU1JyxcbiAgICBDUDg1NzogJ0NQODU3JyxcbiAgICBDUDg1ODogJ0NQODU4JyxcbiAgICBDUDg2MDogJ0NQODYwJyxcbiAgICBDUDg2MTogJ0NQODYxJyxcbiAgICBDUDg2MjogJ0NQODYyJyxcbiAgICBDUDg2MzogJ0NQODYzJyxcbiAgICBDUDg2NDogJ0NQODY0JyxcbiAgICBDUDg2NTogJ0NQODY1JyxcbiAgICBDUDg2OTogJ0NQODY5JyxcbiAgICBDUDg3NDogJ0NQODc0JyxcbiAgICBDUDkyODogJ0NQOTI4JyxcbiAgICBDUDkzMjogJ0NQOTMyJyxcbiAgICBDUDk5OTogJ0NQOTk5JyxcbiAgICBDUDEwMDE6ICdDUDEwMDEnLFxuICAgIENQMTI1MDogJ0NQMTI1MCcsXG4gICAgQ1AxMjUxOiAnQ1AxMjUxJyxcbiAgICBDUDEyNTI6ICdDUDEyNTInLFxuICAgIENQMjAwMTogJ0NQMjAwMScsXG4gICAgQ1AzMDAxOiAnQ1AzMDAxJyxcbiAgICBDUDMwMDI6ICdDUDMwMDInLFxuICAgIENQMzAxMTogJ0NQMzAxMScsXG4gICAgQ1AzMDEyOiAnQ1AzMDEyJyxcbiAgICBDUDMwMjE6ICdDUDMwMjEnLFxuICAgIENQMzA0MTogJ0NQMzA0MScsXG4gICAgQ1AzODQwOiAnQ1AzODQwJyxcbiAgICBDUDM4NDE6ICdDUDM4NDEnLFxuICAgIENQMzg0MzogJ0NQMzg0MycsXG4gICAgQ1AzODQ1OiAnQ1AzODQ1JyxcbiAgICBDUDM4NDY6ICdDUDM4NDYnLFxuICAgIENQMzg0NzogJ0NQMzg0NycsXG4gICAgQ1AzODQ4OiAnQ1AzODQ4JyxcbiAgICBVVEY4OiAnVVRGOCcsXG4gICAgQmxhbms6ICdCbGFuaycsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBJbnRlcm5hdGlvbmFsVHlwZVxuICAgKi9cbiAgSW50ZXJuYXRpb25hbFR5cGUgPSB7XG4gICAgVUs6ICdVSycsXG4gICAgVVNBOiAnVVNBJyxcbiAgICBGcmFuY2U6ICdGcmFuY2UnLFxuICAgIEdlcm1hbnk6ICdHZXJtYW55JyxcbiAgICBEZW5tYXJrOiAnRGVubWFyaycsXG4gICAgU3dlZGVuOiAnU3dlZGVuJyxcbiAgICBJdGFseTogJ0l0YWx5JyxcbiAgICBTcGFpbjogJ1NwYWluJyxcbiAgICBKYXBhbjogJ0phcGFuJyxcbiAgICBOb3J3YXk6ICdOb3J3YXknLFxuICAgIERlbm1hcmsyOiAnRGVubWFyazInLFxuICAgIFNwYWluMjogJ1NwYWluMicsXG4gICAgTGF0aW5BbWVyaWNhOiAnTGF0aW5BbWVyaWNhJyxcbiAgICBLb3JlYTogJ0tvcmVhJyxcbiAgICBJcmVsYW5kOiAnSXJlbGFuZCcsXG4gICAgTGVnYWw6ICdMZWdhbCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBGb250U3R5bGVUeXBlXG4gICAqL1xuICBGb250U3R5bGVUeXBlID0ge1xuICAgIC8qKiBGb250LUEgKDEyIHggMjQgZG90cykgLyBTcGVjaWZ5IDcgeCA5IGZvbnQgKGhhbGYgZG90cykgKi9cbiAgICBBOiAnQScsXG4gICAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xuICAgIEI6ICdCJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEN1dFBhcGVyQWN0aW9uXG4gICAqL1xuICBDdXRQYXBlckFjdGlvbiA9IHtcbiAgICBGdWxsQ3V0OiAnRnVsbEN1dCcsXG4gICAgRnVsbEN1dFdpdGhGZWVkOiAnRnVsbEN1dFdpdGhGZWVkJyxcbiAgICBQYXJ0aWFsQ3V0OiAnUGFydGlhbEN1dCcsXG4gICAgUGFydGlhbEN1dFdpdGhGZWVkOiAnUGFydGlhbEN1dFdpdGhGZWVkJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJsYWNrTWFya1R5cGVcbiAgICovXG4gIEJsYWNrTWFya1R5cGUgPSB7XG4gICAgVmFsaWQ6ICdWYWxpZCcsXG4gICAgSW52YWxpZDogJ0ludmFsaWQnLFxuICAgIFZhbGlkV2l0aERldGVjdGlvbjogJ1ZhbGlkV2l0aERldGVjdGlvbicsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBBbGlnbm1lbnRQb3NpdGlvblxuICAgKi9cbiAgQWxpZ25tZW50UG9zaXRpb24gPSB7XG4gICAgTGVmdDogJ0xlZnQnLFxuICAgIENlbnRlcjogJ0NlbnRlcicsXG4gICAgUmlnaHQ6ICdSaWdodCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBMb2dvU2l6ZVxuICAgKi9cbiAgTG9nb1NpemUgPSB7XG4gICAgTm9ybWFsOiAnTm9ybWFsJyxcbiAgICBEb3VibGVXaWR0aDogJ0RvdWJsZVdpZHRoJyxcbiAgICBEb3VibGVIZWlnaHQ6ICdEb3VibGVIZWlnaHQnLFxuICAgIERvdWJsZVdpZHRoRG91YmxlSGVpZ2h0OiAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQmFyY29kZVN5bWJvbG9neVxuICAgKi9cbiAgQmFyY29kZVN5bWJvbG9neSA9IHtcbiAgICBDb2RlMTI4OiAnQ29kZTEyOCcsXG4gICAgQ29kZTM5OiAnQ29kZTM5JyxcbiAgICBDb2RlOTM6ICdDb2RlOTMnLFxuICAgIElURjogJ0lURicsXG4gICAgSkFOODogJ0pBTjgnLFxuICAgIEpBTjEzOiAnSkFOMTMnLFxuICAgIE5XNzogJ05XNycsXG4gICAgVVBDQTogJ1VQQ0EnLFxuICAgIFVQQ0U6ICdVUENFJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJhcmNvZGVXaWR0aFxuICAgKi9cbiAgQmFyY29kZVdpZHRoID0ge1xuICAgIE1vZGUxOiAnTW9kZTEnLFxuICAgIE1vZGUyOiAnTW9kZTInLFxuICAgIE1vZGUzOiAnTW9kZTMnLFxuICAgIE1vZGU0OiAnTW9kZTQnLFxuICAgIE1vZGU1OiAnTW9kZTUnLFxuICAgIE1vZGU2OiAnTW9kZTYnLFxuICAgIE1vZGU3OiAnTW9kZTcnLFxuICAgIE1vZGU4OiAnTW9kZTgnLFxuICAgIE1vZGU5OiAnTW9kZTknLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgUXJDb2RlTW9kZWxcbiAgICovXG4gIFFyQ29kZU1vZGVsID0ge1xuICAgIE5vMTogJ05vMScsXG4gICAgTm8yOiAnTm8yJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIFFyQ29kZUxldmVsXG4gICAqL1xuICBRckNvZGVMZXZlbCA9IHtcbiAgICBIOiAnSCcsXG4gICAgTDogJ0wnLFxuICAgIE06ICdNJyxcbiAgICBROiAnUScsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvblxuICAgKi9cbiAgQml0bWFwQ29udmVydGVyUm90YXRpb24gPSB7XG4gICAgTm9ybWFsOiAnTm9ybWFsJyxcbiAgICBMZWZ0OTA6ICdMZWZ0OTAnLFxuICAgIFJpZ2h0OTA6ICdSaWdodDkwJyxcbiAgICBSb3RhdGUxODA6ICdSb3RhdGUxODAnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5kIGF2YWlsYWJsZSBwcmludGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAgSW50ZXJmYWNlIFR5cGU6IEFsbCwgTEFOLCBCbHVldG9vdGgsIFVTQlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFByaW50ZXJzPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFycmF5IG9mIHByaW50ZXJzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBvcnREaXNjb3ZlcnkodHlwZTogc3RyaW5nKTogUHJvbWlzZTxQcmludGVycz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFByaW50ZXJTdGF0dXM+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIFByaW50ZXJTdGF0dXMgb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrU3RhdHVzKHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcpOiBQcm9taXNlPFByaW50ZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUHJpbnRzIHBsYWluIHRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEBwYXJhbSB7UHJpbnRPYmp9IHByaW50T2JqICB0ZXh0OnN0cmluZywgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmludFJhd1RleHQocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZywgcHJpbnRPYmo6IFByaW50T2JqKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHRleHQgaW50byBhIGJpdG1hcCBpbWFnZSBhbmQgc2VuZHMgaXQgdG8gdGhlIHByaW50ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0ge1Jhc3Rlck9ian0gcmFzdGVyT2JqICB0ZXh0OnN0cmluZywgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW4sIGZvbnRTaXplOm51bWJlciwgcGFwZXJXaWR0aDpudW1iZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmludFJhc3RlclJlY2VpcHQocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZywgcmFzdGVyT2JqOiBSYXN0ZXJPYmopOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIGltYWdlIGZyb20gYSBzdHJpbmcgVVJJIGFuZCBjb252ZXJ0cyBpdCB0byBiaXRtYXAgdG8gc2VuZCBpdCB0byB0aGUgcHJpbnRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtJbWFnZU9ian0gaW1hZ2VPYmogIHVyaTpzdHJpbmcsIHBhcGVyV2lkdGg/Om51bWJlciwgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmludEltYWdlKHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIGltYWdlT2JqOiBJbWFnZU9iaik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbmRzIGFuIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIG9wZW5lZCBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuQ2FzaERyYXdlcihwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gQXJyYXkgb2YgY29tbWFuZHMgdG8gdGhlIGNvbW1hbmQgYnVmZmVyIHVzaW5nIHRoZSBBbmRyb2lkIElDb21tYW5kQnVpbGRlckludGVyZmFjZSBvciBpT1MgSVNDQkJ1aWxkZXJJbnRlcmZhY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0ge0NvbW1hbmRzQXJyYXl9IGNvbW1hbmRzQXJyYXkgIGVhY2ggY29tbWFuZCBpbiB0aGUgYXJyYXkgc2hvdWxkIGJlIGFuIGluc3RhbmNlIG9mIHRoZSBQcmludENvbW1hbmQgb2JqZWN0LiBFeGFtcGxlIFt7YXBwZW5kOlwidGV4dFwifSwge1wib3BlbkNhc2hEcmF3ZXI6IDFcIn1dXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnQocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZywgY29tbWFuZHNBcnJheTogQ29tbWFuZHNBcnJheSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB5b3UgdG8gY29ubmVjdCB0byB0aGUgcHJpbnRlciwga2VlcCB0aGUgY29ubmVjdGlvbiBhbGl2ZSBhbmQgcmVjZWl2ZSBzdGF0dXMgdXBkYXRlcyB0aHJvdWdoIGFuIG9ic2VydmFibGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIHByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gU3VjY2VzcyEgaWYgY29ubmVjdGVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIGNvbm5lY3QocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZywgaGFzQmFyY29kZVJlYWRlcjogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBkZXZpY2Ugc3RhdHVzIGV2ZW50cy4gT25seSBmaXJlcyB3aGVuIGEgcHJpbnRlciBpcyBjb25ubmVjdGVkIHRocm91Z2ggdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IGRhdGFUeXBlOiBwcmludGVyT25saW5lLCBwcmludGVyT2ZmbGluZSwgcHJpbnRlckltcG9zc2libGUsIHByaW50ZXJQYXBlckVtcHR5LCBwcmludGVyUGFwZXJOZWFyRW1wdHksIHByaW50ZXJQYXBlclJlYWR5LCBwcmludGVyQ292ZXJPcGVuLCBwcmludGVyQ292ZXJDbG9zZSwgY2FzaERyYXdlck9wZW4sIGNhc2hEcmF3ZXJDbG9zZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ3N0YXJQcm50RGF0YScsXG4gIH0pXG4gIGdldFN0YXR1cygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gZGlzY29ubmVjdCAoY2xvc2UgdGhlIGNvbm5lY3Rpb24gdG8gdGhlIHBlcmlwaGVyYWxzKSwgdGhpcyBpcyB1c2VmdWwgdG8gYXZvaWQga2VlcGluZyBhbGl2ZSBhIGNvbm5lY3Rpb24gd2hlbiBub3QgaW4gdGhlIGFwcCB0byBzYXZlIGRldmljZSBiYXR0ZXJ5XG4gICAqIChlbmVyZ3kgY29uc3VtcHRpb24pLiBZb3Ugc2hvdWxkIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSBhcHAgaXMgcGF1c2VkIG9yIGNsb3NlZC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBjb25uZWN0ZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19