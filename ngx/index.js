import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * Emulation constants
 */
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
    StarPRNT.decorators = [
        { type: Injectable }
    ];
    return StarPRNT;
}(IonicNativePlugin));
export { StarPRNT };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0YXItcHJudC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBa1psQzs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFNBZVg7QUFmRCxXQUFZLFNBQVM7SUFDbkIsb0ZBQW9GO0lBQ3BGLGtDQUFxQixDQUFBO0lBQ3JCLHVCQUF1QjtJQUN2QixvQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBMEM7SUFDMUMsa0NBQXFCLENBQUE7SUFDckIsYUFBYTtJQUNiLHdDQUEyQixDQUFBO0lBQzNCLFlBQVk7SUFDWiw4QkFBaUIsQ0FBQTtJQUNqQiw0REFBNEQ7SUFDNUQsMENBQTZCLENBQUE7SUFDN0IsWUFBWTtJQUNaLDRDQUErQixDQUFBO0FBQ2pDLENBQUMsRUFmVyxTQUFTLEtBQVQsU0FBUyxRQWVwQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksUUFlWDtBQWZELFdBQVksUUFBUTtJQUNsQixjQUFjO0lBQ2QsZ0NBQW9CLENBQUE7SUFDcEIsMENBQTBDO0lBQzFDLHdDQUE0QixDQUFBO0lBQzVCLGVBQWU7SUFDZixrQ0FBc0IsQ0FBQTtJQUN0QixjQUFjO0lBQ2Qsd0NBQTRCLENBQUE7SUFDNUIseUJBQXlCO0lBQ3pCLDZCQUFpQixDQUFBO0lBQ2pCLDBCQUEwQjtJQUMxQix5QkFBYSxDQUFBO0lBQ2IsV0FBVztJQUNYLDBCQUFjLENBQUE7QUFDaEIsQ0FBQyxFQWZXLFFBQVEsS0FBUixRQUFRLFFBZW5CO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxZQXdDWDtBQXhDRCxXQUFZ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O1NBQ1gsQ0FBQztRQUVGOztXQUVHO1FBQ0gsaUJBQVcsR0FBRztZQUNaLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsNkJBQXVCLEdBQUc7WUFDeEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLFdBQVc7U0FDdkIsQ0FBQzs7O0lBUUYsZ0NBQWEsYUFBQyxJQUFZO0lBVzFCLDhCQUFXLGFBQUMsSUFBWSxFQUFFLFNBQWlCO0lBWTNDLCtCQUFZLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsUUFBa0I7SUFZaEUscUNBQWtCLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsU0FBb0I7SUFZeEUsNkJBQVUsYUFBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxRQUFrQjtJQVc5RCxpQ0FBYyxhQUFDLElBQVksRUFBRSxTQUFpQjtJQVk5Qyx3QkFBSyxhQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLGFBQTRCO0lBY25FLDBCQUFPLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsZ0JBQXlCO0lBWWxFLDRCQUFTO0lBVVQsNkJBQVU7Ozs7Ozs7Z0JBelRYLFVBQVU7O21CQTFvQlg7RUEyb0I4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXIge1xuICAvKipcbiAgICogUHJpbnRlciBtb2RlbCBuYW1lIGFuZCBtb2RlbCBudW1iZXJcbiAgICovXG4gIG1vZGVsTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnRlciBNYWMgQWRkcmVzc1xuICAgKi9cbiAgbWFjQWRkcmVzcz86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnRlciBwb3J0IG5hbWUgdXNlZCB0byBjcmVhdGUgYSBuZXcgcG9ydCBpbnN0YW5jZSBvZiBTTVBvcnQgb3IgU3RhcklPRXh0TWFuYWdlclxuICAgKi9cbiAgcG9ydE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVU0IgU2VyaWFsIE51bWJlciAoVVNCIFByaW50ZXJzIE9ubHkpXG4gICAqL1xuICBVU0JTZXJpYWxOdW1iZXI/OiBzdHJpbmc7XG59XG4vKipcbiAqIEFycmF5IG9mIFByaW50ZXIgb2JqZWN0cyByZXR1cm5lZCBieSB0aGUgcG9ydERpc2NvdmVyeSgpIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlcnMgZXh0ZW5kcyBBcnJheTxQcmludGVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXJTdGF0dXMge1xuICAvKipcbiAgICogUHJpbnRlciBPbmxpbmUvT2ZmbGluZSBzdGF0dXNcbiAgICovXG4gIG9mZmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgUHJpbnRlciBtb2RlbCBuYW1lIGFuZCBtb2RlbCBudW1iZXJcbiAgICovXG4gIE1vZGVsTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnRlciBjb3ZlciBzdGF0dXNcbiAgICovXG4gIGNvdmVyT3Blbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgUGFwZXIgQ3V0dGVyIHN0YXR1c1xuICAgKi9cbiAgY3V0dGVyRXJyb3I/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIFBhcGVyIHN0YXR1c1xuICAgKi9cbiAgcmVjZWlwdFBhcGVyRW1wdHk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIEZpcm13YXJlIGluZm9ybWF0aW9uXG4gICAqL1xuICBGaXJtd2FyZVZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRPYmoge1xuICAvKipcbiAgICogc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHRleHQgdG8gcHJpbnQsIEV4YW1wbGU6IFwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwiXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBTZW5kcyBhIFBhcnRpYWxDdXRXaXRoRmVlZCBjb21tYW5kIHRvIHRoZSBwcmludGVyLCBkZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBjdXRSZWNlaXB0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yIC0gRGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgb3BlbkNhc2hEcmF3ZXI/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBSYXN0ZXJPYmogZXh0ZW5kcyBQcmludE9iaiB7XG4gIC8qKlxuICAgKiBGb250IHNpemUgbnVtYmVyLCBkZWZhdWx0cyB0byAyNVxuICAgKi9cbiAgZm9udFNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFBhcGVyIHdpZHRoIChVbml0czogRG90cykuIDIgaW5jaGVzOiAzODQsIDMgaW5jaGVzOiA1NzYsIDQgaW5jaGVzOiA4MzIsIEVTQ1BvcyAzIGluY2hlczogNTEyLCBEb3QgMyBpbmNoZXM6IDIxMC4gRGVmYXVsdHMgdG8gNTc2XG4gICAqL1xuICBwYXBlcldpZHRoPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbWFnZU9iaiB7XG4gIC8qKlxuICAgKiBJbWFnZSBVUkkgdG8gcHJpbnQsIHRoaXMgY2FuIGJlIG9idGFpbmVkIHZpYSB0aGUgY2FtZXJhIG9yIHBob3RvIGxpYnJhcnkgb3IgYXMgYSBzdGF0aWMgcmVzb3VyY2Ugc2F2ZWQgb24gdGhlIHBob25lIG1lbW9yeVxuICAgKi9cbiAgdXJpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEltYWdlIHdpZHRoIChVbml0czogRG90cykgZGVmYXVsdHMgdG8gNTc2XG4gICAqL1xuICBwYXBlcldpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiAgU2VuZHMgYSBQYXJ0aWFsQ3V0V2l0aEZlZWQgY29tbWFuZCB0byB0aGUgcHJpbnRlciwgZGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgY3V0UmVjZWlwdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHNlbmRzIGEgYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVscyBObzEgYW5kIE5vMiAtIERlZmF1bHRzIHRvIHRydWVcbiAgICovXG4gIG9wZW5DYXNoRHJhd2VyPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRDb21tYW5kIHtcbiAgLyoqXG4gICAqIENoYXJhY3RoZXIgZW5jb2RpbmcgaXMgdXNlZCB0byBnZXRCeXRlIGRhdGEgZnJvbSBhbGwgc3Vic2VxdWVudCBjb21tYW5kcy4gRGVmYXVsdCAnVVMtQVNDSUknXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5FbmNvZGluZyBvciB0aGUgRW5jb2RpbmcgZW51bS5cbiAgICogRXhhbXBsZToge2FwcGVuZEVuY29kaW5nOidVUy1BU0NJSSd9XG4gICAqL1xuICBhcHBlbmRFbmNvZGluZz86IHN0cmluZztcblxuICAvKipcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGNvZGUgcGFnZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kcyBwcm9wZXJ0eS5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkNvZGVQYWdlVHlwZSBvciB0aGUgQ29kZVBhZ2VUeXBlIGVudW0uXG4gICAqIEV4YW1wbGU6IHthcHBlbmRDb2RlUGFnZTonQ1A4NTgnfVxuICAgKi9cbiAgYXBwZW5kQ29kZVBhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERhdGEgKFRleHQpIGlzIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZDpcIlN0YXIgQ2xvdGhpbmcgQm91dGlxdWVcXG4xMjMgU3RhciBSb2FkXFxuQ2l0eSwgU3RhdGUgMTIzNDVcXG5cXG5cIn1cbiAgICovXG4gIGFwcGVuZD86IHN0cmluZztcblxuICAvKipcbiAgICogRGF0YSAoVGV4dCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kUmF3OlwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwifVxuICAgKi9cbiAgYXBwZW5kUmF3Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEYXRhIChDb21tYW5kKSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQnl0ZXM6WzB4NDgsIDB4NjUsIDB4NmMsIDB4NmMsIDB4NmYsIDB4MjAsIDB4NTcsIDB4NmYsIDB4NzIsIDB4NmMsIDB4NjQsIDB4MmVdfVxuICAgKi9cbiAgYXBwZW5kQnl0ZXM/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogRGF0YSAoQ29tbWFuZCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhbiBhcnJheSBvZiBieXRlcy5cbiAgICogRXhhbXBsZToge2FwcGVuZFJhd0J5dGVzOlsweDQ4LCAweDY1LCAweDZjLCAweDZjLCAweDZmLCAweDIwLCAweDU3LCAweDZmLCAweDcyLCAweDZjLCAweDY0LCAweDJlXX1cbiAgICovXG4gIGFwcGVuZFJhd0J5dGVzPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFNldCBjb21tYW5kIG9mIHRoZSBjaGFyYWN0ZXIgc3BhY2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIENoYXJhY3RlciBTcGFjcyAoVW5pdDogRG90cykgRXhhbXBsZTogNFxuICAgKi9cbiAgYXBwZW5kQ2hhcmFjdGVyU3BhY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgZW1waGFzaXMgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZEVtcGhhc2lzOlwiU0FMRVxcblwifVxuICAgKi9cbiAgYXBwZW5kRW1waGFzaXM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBFbmFibGUgZW1waGFzaXMgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZUVtcGhhc2lzOnRydWV9XG4gICAqL1xuICBlbmFibGVFbXBoYXNpcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRJbnZlcnQ6XCJSZWZ1bmRzIGFuZCBFeGNoYW5nZXNcXG5cIn1cbiAgICovXG4gIGFwcGVuZEludmVydD86IHN0cmluZztcbiAgLyoqXG4gICAqICBFbmFibGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHtlbmFibGVJbnZlcnQ6dHJ1ZX1cbiAgICovXG4gIGVuYWJsZUludmVydD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiAgU2VsZWN0IGNvbW1hbmQgb2YgdGhlIHVuZGVyIGxpbmUgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZFVuZGVybGluZTpcIjMwIGRheXNcIn1cbiAgICovXG4gIGFwcGVuZFVuZGVybGluZT86IHN0cmluZztcbiAgLyoqXG4gICAqICBFbmFibGUgdW5kZXIgbGluZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlVW5kZXJsaW5lOnRydWV9XG4gICAqL1xuICBlbmFibGVVbmRlcmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgaW50ZXJuYXRpb25hbCBjaGFyYWN0ZXIgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkludGVybmF0aW9uYWxUeXBlIG9yIHRoZSBJbnRlcm5hdGlvbmFsVHlwZSBlbnVtLlxuICAgKiAnVUsnIHwgJ1VTQScgfCAnRnJhbmNlJyB8ICdHZXJtYW55JyB8ICdEZW5tYXJrJyB8ICdTd2VkZW4nIHwgJ0l0YWx5JyB8ICdTcGFpbicgfCAnSmFwYW4nIHwgJ05vcndheScgfCAnRGVubWFyazInIHwgJ1NwYWluMicgfCAnTGF0aW5BbWVyaWNhJyB8ICdLb3JlYScgfCAnSXJlbGFuZCcgfCAnTGVnYWwnXG4gICAqIEV4YW1wbGUge2FwcGVuZEludGVybmF0aW9uYWw6SW50ZXJuYXRpb25hbFR5cGUuVUt9XG4gICAqL1xuICBhcHBlbmRJbnRlcm5hdGlvbmFsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMaW5lIGZlZWQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gUGFwZXIgZmVlZCB1bml0cyAoVW5pdHM6IExpbmVzKSBFeGFtcGxlOiAyXG4gICAqL1xuICBhcHBlbmRMaW5lRmVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogVW5pdCBmZWVkIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFBhcGVyIGZlZWQgdW5pdHMgKFVuaXRzOiBEb3RzKSBFeGFtcGxlOiA2NFxuICAgKi9cbiAgYXBwZW5kVW5pdEZlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBjb21tYW5kIG9mIHRoZSBsaW5lIHNwYWNlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBMaW5lIHNwYWNlcyAoVW5pdHM6IERvdHMpIEV4YW1wbGU6IDMyXG4gICAqL1xuICBhcHBlbmRMaW5lU3BhY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBmb250IHN0eWxlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuRm9udFN0eWxlVHlwZSBvciB0aGUgRm9udFN0eWxlVHlwZSBlbnVtLiAnQScgfCAnQidcbiAgICogRXhhbXBsZToge2FwcGVuZEZvbnRTdHlsZTpGb250U3R5bGVUeXBlLkF9XG4gICAqL1xuICBhcHBlbmRGb250U3R5bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBhcGVyIGN1dCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQ3V0UGFwZXJBY3Rpb24gb3IgdGhlIEN1dFBhcGVyQWN0aW9uIGVudW0uICdGdWxsQ3V0JyB8ICdGdWxsQ3V0V2l0aEZlZWQnIHwgJ1BhcnRpYWxDdXQnIHwgJ1BhcnRpYWxDdXRXaXRoRmVlZCdcbiAgICogRXhhbXBsZToge2FwcGVuZEN1dFBhcGVyOkN1dFBhcGVyQWN0aW9uLlBhcnRpYWxDdXRXaXRoRmVlZH1cbiAgICovXG4gIGFwcGVuZEN1dFBhcGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCbGFjayBtYXJrIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CbGFja01hcmtUeXBlIG9yIHRoZSBCbGFja01hcmtUeXBlIGVudW0uICdWYWxpZCcgfCAnSW52YWxpZCcgfCAnVmFsaWRXaXRoRGV0ZWN0aW9uJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmxhY2tNYXJrOiBCbGFja01hcmtUeXBlLlZhbGlkfVxuICAgKi9cbiAgYXBwZW5kQmxhY2tNYXJrPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBYnNvbHV0ZSBwb3NpdGlvbiBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiAoVW5pdDogRG90cykuIFNlbmQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZGF0YSBwcm9wZXJ0eSB0byBhcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24ganVzdCB0byB0aGF0IHN0cmluZ1xuICAgKiBFeGFtcGxlMTogQXBwZW5kIGRhdGEgd2l0aCBBYnNvbHV0ZSBwb3NpdGlvbiB7YXBwZW5kQWJzb2x1dGVQb3NpdGlvbjo0MCwgZGF0YTogXCJUZXh0IHdpdGggYWJzb2x1dGUgcG9zaXRpb25cIn1cbiAgICogRXhhbXBsZTI6IEFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiB0byBzdWJzZXF1ZW50IGNvbW1hbmRzOiB7YXBwZW5kQWJzb2x1dGVQb3NpdGlvbjo0MH1cbiAgICovXG4gIGFwcGVuZEFic29sdXRlUG9zaXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFsaWdubWVudCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBTZW5kIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGRhdGEgcHJvcGVydHkgdG8gYXBwZW5kIGFsaWdubWVudCBwb3NpdGlvbiBqdXN0IHRvIHRoYXQgc3RyaW5nXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5BbGlnbm1lbnRQb3NpdGlvbiBvciB0aGUgQWxpZ25tZW50UG9zaXRpb24gZW51bS4gJ0xlZnQnIHwgJ0NlbnRlcicgfCAnUmlnaHQnLlxuICAgKiBFeGFtcGxlMSBBcHBlbmQgZGF0YSB3aXRoIEFsaWdubWVudCBwb3NpdGlvbjoge2FwcGVuZEFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIsIGRhdGE6IFwiVGV4dCB3aXRoIGNlbnRlcmVkIHBvc2l0aW9uXCJ9XG4gICAqIEV4YW1wbGUyIEFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiB0byBzdWJzZXF1ZW50IGNvbW1hbmRzOiB7YXBwZW5kQWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn1cbiAgICovXG4gIGFwcGVuZEFsaWdubWVudD86IHN0cmluZztcblxuICAvKipcbiAgICogSG9yaXpvbnRhbCB0YWIgc2V0L2NsZWFyIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIChPbmx5IHdvcmtzIGZvciBjZXJ0YWluIHByaW50ZXIgbW9kZWxzLCBjaGVjayB0aGUgc3RhclNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzKVxuICAgKiBBcnJheSBvZiBob3Jpem9udGFsIHRhYiBwb3NpdGlvbnMgKFVuaXRzOiBBTksgY2hhcmFjdGVyIHBpdGNoKS4gU3BlY2lmeWluZyBlbXB0eSBhcnJheSBkZWxldGVzIGFsbCBjdXJyZW50bHkgc2V0IGhvcml6b250YWwgdGFiIHBvc2l0aW9ucy5cbiAgICogRXhhbXBsZToge2FwcGVuZEhvcml6b250YWxUYWJQb3NpdGlvbjpbMTUsIDM1XX1cbiAgICogRGVsZXRlIHBvc2l0aW9ucyBFeGFtcGxlOiB7YXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uOltdfVxuICAgKi9cbiAgYXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGxvZ28gaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRoZSBsb2dvIGhhcyB0byBiZSB1cGxvYWRlZCB0byB0aGUgcHJpbnRlciB1c2luZyB0aGUgU3RhciBQcmludCB1dGlsaXR5LlxuICAgKiBTZW5kIGluIGNvbmp1Y3Rpb24gd2l0aCB0aGUgbG9nb1NpemUgcHJvcGVydHkgdG8gc2V0IHRoZSBsb2dvIHNpemVcbiAgICogRXhhbXBsZToge2FwcGVuZExvZ286MX1cbiAgICogRXhhbXBsZSB3aXRoIExvZ29TaXplOiB7YXBwZW5kTG9nbzoxLCBsb2dvU2l6ZTpMb2dvU2l6ZS5Eb3VibGVXaWR0aERvdWJsZUhlaWdodH1cbiAgICovXG4gIGFwcGVuZExvZ28/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kTG9nbyBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuTG9nb1NpemUgb3IgdGhlIExvZ29TaXplIGVudW0uICdOb3JtYWwnIHwgJ0RvdWJsZVdpZHRoJyB8ICdEb3VibGVIZWlnaHQnIHwgJ0RvdWJsZVdpZHRoRG91YmxlSGVpZ2h0JztcbiAgICogRXhhbXBsZToge2FwcGVuZExvZ286MSwgbG9nb1NpemU6TG9nb1NpemUuRG91YmxlV2lkdGhEb3VibGVIZWlnaHR9XG4gICAqL1xuICBsb2dvU2l6ZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgYmFyY29kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBCYXJjb2RlU3ltYm9sb2d5LCBCYXJjb2RlV2lkdGgsIGhlaWdodCwgaHJpLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlIH1cbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOjQwIH1cbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDp7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSwgYWxpZ25tZW50OmFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIgfVxuICAgKi9cbiAgYXBwZW5kQmFyY29kZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CYXJjb2RlU3ltYm9sb2d5IG9yIHRoZSBCYXJjb2RlU3ltYm9sb2d5IGVudW0uXG4gICAqICdDb2RlMTI4JyB8ICdDb2RlMzknIHwgJ0NvZGU5MycgfCAnSVRGJyB8ICdKQU44JyB8ICdKQU4xMycgfCAnTlc3JyB8ICdVUENBJyB8ICdVUENFJyB8XG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOH1cbiAgICovXG4gIEJhcmNvZGVTeW1ib2xvZ3k/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQmFyY29kZVdpZHRoIG9yIHRoZSBCYXJjb2RlV2lkdGggZW51bS5cbiAgICogTW9kZTEgfCBNb2RlMiB8IE1vZGUzIHwgTW9kZTQgfCBNb2RlNSB8IE1vZGU2IHwgTW9kZTcgfCBNb2RlOCB8IE1vZGU5XG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyfVxuICAgKi9cbiAgQmFyY29kZVdpZHRoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cbiAgICogVW5kZXItYmFyIGNoYXJhY3RlcnMuIHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBocmk6dHJ1ZX1cbiAgICovXG4gIGhyaT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kIG9yIHRoZSBhcHBlbmRNdWx0aXBsZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBoZWlnaHQ6NDB9XG4gICAqIGFwcGVuZE11bHRpcGxlOiB7YXBwZW5kTXVsdGlwbGU6J3RleHQgdG8gcHJpbnQnLCBoZWlnaHQ6NDB9XG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQgb3IgdGhlIGFwcGVuZE11bHRpcGxlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgd2lkdGg6NTc2fVxuICAgKiBhcHBlbmRNdWx0aXBsZToge2FwcGVuZE11bHRpcGxlOid0ZXh0IHRvIHByaW50Jywgd2lkdGg6NDB9XG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBhcHBlbmRCaXRtYXAgRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGFic29sdXRlUG9zaXRpb246NDB9LlxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBhYnNvbHV0ZVBvc2l0aW9uOjQwfS5cbiAgICogYXBwZW5kUXJDb2RlIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGFic29sdXRlUG9zaXRpb246NDB9LlxuICAgKi9cbiAgYWJzb2x1dGVQb3NpdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQWxpZ25tZW50UG9zaXRpb24gb3IgdGhlIEFsaWdubWVudFBvc2l0aW9uIGVudW0uICdMZWZ0JyB8ICdDZW50ZXInIHwgJ1JpZ2h0Jy5cbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgYWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn0uXG4gICAqIGFwcGVuZFFyQ29kZSBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cbiAgICovXG4gIGFsaWdubWVudD86IHN0cmluZztcblxuICAvKipcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIG11bHRpcGxlIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllczogd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRNdWx0aXBsZTpcIiAgICQxNTYuOTVcXG5cIiwgd2lkdGg6MiwgaGVpZ2h0OjJ9LlxuICAgKi9cbiAgYXBwZW5kTXVsdGlwbGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBtdWx0aXBsZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXM6IHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlclxuICAgKiBFeGFtcGxlOiB7ZW5hYmxlTXVsdGlwbGU6dHJ1ZSwgd2lkdGg6MiwgaGVpZ2h0OjJ9XG4gICAqIERpc2FibGUgRXhhbXBsZToge2VuYWJsZU11bHRpcGxlOmZhbHNlfVxuICAgKi9cbiAgZW5hYmxlTXVsdGlwbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBRUiBjb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IFFyQ29kZU1vZGVsLCBRckNvZGVMZXZlbCwgY2VsbCwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOlwie0JTdGFyXCIsIFFyQ29kZU1vZGVsOlwiTm8yXCIsIFFyQ29kZUxldmVsOlwiTFwiLCBjZWxsOiA4fS5cbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFic29sdXRlUG9zaXRpb246IDQwIH0uXG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFsaWdubWVudDpcIkNlbnRlclwiIH0uXG4gICAqL1xuICBhcHBlbmRRckNvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5RckNvZGVNb2RlbCBvciB0aGUgUXJDb2RlTW9kZWwgZW51bS4gJ05vMScgfCAnTm8yJyBEZWZhdWx0ICdObzInXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIFFyQ29kZU1vZGVsOlFyQ29kZU1vZGVsLk5vMX1cbiAgICovXG4gIFFyQ29kZU1vZGVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuUXJDb2RlTGV2ZWwgb3IgdGhlIFFyQ29kZUxldmVsIGVudW0uICdObzEnIHwgJ05vMicuIERlZmF1bHQgJ0gnXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIFFyQ29kZUxldmVsOlFyQ29kZUxldmVsLkh9XG4gICAqL1xuICBRckNvZGVMZXZlbD86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZC4gUVJDb2RlIENlbGwgc2l6ZS4gRGVmYXVsdCA0LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBjZWxsOjh9XG4gICAqL1xuICBjZWxsPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBiaXRtYXAgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGEgc3RyaW5nIGltYWdlIFVSSVxuICAgKiB0aGlzIGNhbiBiZSBvYnRhaW5lZCB2aWEgdGhlIGNhbWVyYSBvciBwaG90byBsaWJyYXJ5IG9yIGFzIGEgc3RhdGljIHJlc291cmNlIHNhdmVkIG9uIHRoZSBwaG9uZSBtZW1vcnkuXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogZGlmZnVzaW9uLCB3aWR0aCwgYm90aFNjYWxlLCByb3RhdGlvbiwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZX1cbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOiA0MCB9LlxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZSwgYWxpZ25tZW50OlwiQ2VudGVyXCIgfS5cbiAgICovXG4gIGFwcGVuZEJpdG1hcD86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gUmFuZG9tIGRpdGhlcjogdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWQuIERlZmF1bHQgdHJ1ZS5cbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogZmFsc2UgfVxuICAgKi9cbiAgZGlmZnVzaW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gSGVpZ2h0IGlzIGNoYW5nZWQgYWNjb3JkaW5nIHRvIHRoZSBjb252ZXJzaW9uIHJhdGUgb2YgdGhlIHdpZHRoIHByb3BlcnR5LlxuICAgKiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZC4gRGVmYXVsdCB0cnVlLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYm90aFNjYWxlOiB0cnVlIH1cbiAgICovXG4gIGJvdGhTY2FsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBvciB0aGUgQml0bWFwQ29udmVydGVyUm90YXRpb24gZW51bS5cbiAgICogJ05vcm1hbCcgfCAnTGVmdDkwJyB8ICdSaWdodDkwJyB8ICdSb3RhdGUxODAnXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCByb3RhdGlvbjogQml0bWFwQ29udmVydGVyUm90YXRpb24uTGVmdDkwIH1cbiAgICovXG4gIHJvdGF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbCBudW1iZXI6IEV4YW1wbGU6IDEgPSBObzEsIDIgPSBObzJcbiAgICovXG4gIG9wZW5DYXNoRHJhd2VyPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEVtdWxhdGlvbiBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gRW11bGF0aW9uIHtcbiAgLyoqIG1QT1AsIFNNLUwyMDAsIFNNLUwzMDAsIFNNLVMyMTBpLCBTTS1TMjIwaSwgU00tUzIzMGksIFNNLVQzMDBpL1QzMDAsIFNNLVQ0MDBpICovXG4gIFN0YXJQUk5UID0gJ1N0YXJQUk5UJyxcbiAgLyoqIFNNLUwyMDAsIFNNLUwzMDAgKi9cbiAgU3RhclBSTlRMID0gJ1N0YXJQUk5UTCcsXG4gIC8qKiBGVlAxMCwgVFNQNjUwSUksIFRTUDcwMElJLCBUU1A4MDBJSSAqL1xuICBTdGFyTGluZSA9ICdTdGFyTGluZScsXG4gIC8qKiBUU1AxMDAgKi9cbiAgU3RhckdyYXBoaWMgPSAnU3RhckdyYXBoaWMnLFxuICAvKiogQlNDMTAgKi9cbiAgRXNjUG9zID0gJ0VzY1BvcycsXG4gIC8qKiBTTS1TMjEwaSwgU00tUzIyMGksIFNNLVMyMzBpLCBTTS1UMzAwaS9UMzAwLCBTTS1UNDAwaSAqL1xuICBFc2NQb3NNb2JpbGUgPSAnRXNjUG9zTW9iaWxlJyxcbiAgLyoqIFNQNzAwICovXG4gIFN0YXJEb3RJbXBhY3QgPSAnU3RhckRvdEltcGFjdCcsXG59XG5cbi8qKlxuICogRW5jb2RpbmcgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEVuY29kaW5nIHtcbiAgLyoqIEVuZ2xpc2ggKi9cbiAgVVNBU0NJSSA9ICdVUy1BU0NJSScsXG4gIC8qKiBGcmVuY2gsIEdlcm1hbiwgUG9ydHVndWVzZSwgU3BhbmlzaCAqL1xuICBXaW5kb3dzMTI1MiA9ICdXaW5kb3dzLTEyNTInLFxuICAvKiogSmFwYW5lc2UgKi9cbiAgU2hpZnRKSVMgPSAnU2hpZnQtSklTJyxcbiAgLyoqIFJ1c3NpYW4gKi9cbiAgV2luZG93czEyNTEgPSAnV2luZG93cy0xMjUxJyxcbiAgLyoqIFNpbXBsaWZpZWQgQ2hpbmVzZSAqL1xuICBHQjIzMTIgPSAnR0IyMzEyJyxcbiAgLyoqIFRyYWRpdGlvbmFsIENoaW5lc2UgKi9cbiAgQmlnNSA9ICdCaWc1JyxcbiAgLyoqIFVGVDggKi9cbiAgVVRGOCA9ICdVVEYtOCcsXG59XG5cbi8qKlxuICogQ29kZVBhZ2VUeXBlIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBDb2RlUGFnZVR5cGUge1xuICBDUDczNyA9ICdDUDczNycsXG4gIENQNzcyID0gJ0NQNzcyJyxcbiAgQ1A3NzQgPSAnQ1A3NzQnLFxuICBDUDg1MSA9ICdDUDg1MScsXG4gIENQODUyID0gJ0NQODUyJyxcbiAgQ1A4NTUgPSAnQ1A4NTUnLFxuICBDUDg1NyA9ICdDUDg1NycsXG4gIENQODU4ID0gJ0NQODU4JyxcbiAgQ1A4NjAgPSAnQ1A4NjAnLFxuICBDUDg2MSA9ICdDUDg2MScsXG4gIENQODYyID0gJ0NQODYyJyxcbiAgQ1A4NjMgPSAnQ1A4NjMnLFxuICBDUDg2NCA9ICdDUDg2NCcsXG4gIENQODY1ID0gJ0NQODY1JyxcbiAgQ1A4NjkgPSAnQ1A4NjknLFxuICBDUDg3NCA9ICdDUDg3NCcsXG4gIENQOTI4ID0gJ0NQOTI4JyxcbiAgQ1A5MzIgPSAnQ1A5MzInLFxuICBDUDk5OSA9ICdDUDk5OScsXG4gIENQMTAwMSA9ICdDUDEwMDEnLFxuICBDUDEyNTAgPSAnQ1AxMjUwJyxcbiAgQ1AxMjUxID0gJ0NQMTI1MScsXG4gIENQMTI1MiA9ICdDUDEyNTInLFxuICBDUDIwMDEgPSAnQ1AyMDAxJyxcbiAgQ1AzMDAxID0gJ0NQMzAwMScsXG4gIENQMzAwMiA9ICdDUDMwMDInLFxuICBDUDMwMTEgPSAnQ1AzMDExJyxcbiAgQ1AzMDEyID0gJ0NQMzAxMicsXG4gIENQMzAyMSA9ICdDUDMwMjEnLFxuICBDUDMwNDEgPSAnQ1AzMDQxJyxcbiAgQ1AzODQwID0gJ0NQMzg0MCcsXG4gIENQMzg0MSA9ICdDUDM4NDEnLFxuICBDUDM4NDMgPSAnQ1AzODQzJyxcbiAgQ1AzODQ1ID0gJ0NQMzg0NScsXG4gIENQMzg0NiA9ICdDUDM4NDYnLFxuICBDUDM4NDcgPSAnQ1AzODQ3JyxcbiAgQ1AzODQ4ID0gJ0NQMzg0OCcsXG4gIFVURjggPSAnVVRGOCcsXG4gIEJsYW5rID0gJ0JsYW5rJyxcbn1cblxuLyoqXG4gKiBJbnRlcm5hdGlvbmFsVHlwZSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gSW50ZXJuYXRpb25hbFR5cGUge1xuICBVSyA9ICdVSycsXG4gIFVTQSA9ICdVU0EnLFxuICBGcmFuY2UgPSAnRnJhbmNlJyxcbiAgR2VybWFueSA9ICdHZXJtYW55JyxcbiAgRGVubWFyayA9ICdEZW5tYXJrJyxcbiAgU3dlZGVuID0gJ1N3ZWRlbicsXG4gIEl0YWx5ID0gJ0l0YWx5JyxcbiAgU3BhaW4gPSAnU3BhaW4nLFxuICBKYXBhbiA9ICdKYXBhbicsXG4gIE5vcndheSA9ICdOb3J3YXknLFxuICBEZW5tYXJrMiA9ICdEZW5tYXJrMicsXG4gIFNwYWluMiA9ICdTcGFpbjInLFxuICBMYXRpbkFtZXJpY2EgPSAnTGF0aW5BbWVyaWNhJyxcbiAgS29yZWEgPSAnS29yZWEnLFxuICBJcmVsYW5kID0gJ0lyZWxhbmQnLFxuICBMZWdhbCA9ICdMZWdhbCcsXG59XG5cbi8qKlxuICogRm9udFN0eWxlVHlwZSBjb25zdGFudHMuXG4gKi9cbmV4cG9ydCBlbnVtIEZvbnRTdHlsZVR5cGUge1xuICAvKiogRm9udC1BICgxMiB4IDI0IGRvdHMpIC8gU3BlY2lmeSA3IHggOSBmb250IChoYWxmIGRvdHMpICovXG4gIEEgPSAnQScsXG4gIC8qKiBGb250LUIgKDkgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNSB4IDkgZm9udCAoMlAtMSkgKi9cbiAgQiA9ICdCJyxcbn1cblxuLyoqXG4gKiBDdXRQYXBlckFjdGlvbiBjb25zdGFudHMuXG4gKi9cbmV4cG9ydCBlbnVtIEN1dFBhcGVyQWN0aW9uIHtcbiAgRnVsbEN1dCA9ICdGdWxsQ3V0JyxcbiAgRnVsbEN1dFdpdGhGZWVkID0gJ0Z1bGxDdXRXaXRoRmVlZCcsXG4gIFBhcnRpYWxDdXQgPSAnUGFydGlhbEN1dCcsXG4gIFBhcnRpYWxDdXRXaXRoRmVlZCA9ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnLFxufVxuXG4vKipcbiAqIEJsYWNrTWFya1R5cGUgY29uc3RhbnRzLlxuICovXG5leHBvcnQgZW51bSBCbGFja01hcmtUeXBlIHtcbiAgVmFsaWQgPSAnVmFsaWQnLFxuICBJbnZhbGlkID0gJ0ludmFsaWQnLFxuICBWYWxpZFdpdGhEZXRlY3Rpb24gPSAnVmFsaWRXaXRoRGV0ZWN0aW9uJyxcbn1cblxuLyoqXG4gKiBMb2dvU2l6ZSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gTG9nb1NpemUge1xuICBOb3JtYWwgPSAnTm9ybWFsJyxcbiAgRG91YmxlV2lkdGggPSAnRG91YmxlV2lkdGgnLFxuICBEb3VibGVIZWlnaHQgPSAnRG91YmxlSGVpZ2h0JyxcbiAgRG91YmxlV2lkdGhEb3VibGVIZWlnaHQgPSAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnLFxufVxuXG4vKipcbiAqIEFsaWdubWVudFBvc2l0aW9uIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBBbGlnbm1lbnRQb3NpdGlvbiB7XG4gIExlZnQgPSAnTGVmdCcsXG4gIENlbnRlciA9ICdDZW50ZXInLFxuICBSaWdodCA9ICdSaWdodCcsXG59XG5cbi8qKlxuICogQmFyY29kZVN5bWJvbG9neSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gQmFyY29kZVN5bWJvbG9neSB7XG4gIENvZGUxMjggPSAnQ29kZTEyOCcsXG4gIENvZGUzOSA9ICdDb2RlMzknLFxuICBDb2RlOTMgPSAnQ29kZTkzJyxcbiAgSVRGID0gJ0lURicsXG4gIEpBTjggPSAnSkFOOCcsXG4gIEpBTjEzID0gJ0pBTjEzJyxcbiAgTlc3ID0gJ05XNycsXG4gIFVQQ0EgPSAnVVBDQScsXG4gIFVQQ0UgPSAnVVBDRScsXG59XG5cbi8qKlxuICogQmFyY29kZVdpZHRoIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBCYXJjb2RlV2lkdGgge1xuICBNb2RlMSA9ICdNb2RlMScsXG4gIE1vZGUyID0gJ01vZGUyJyxcbiAgTW9kZTMgPSAnTW9kZTMnLFxuICBNb2RlNCA9ICdNb2RlNCcsXG4gIE1vZGU1ID0gJ01vZGU1JyxcbiAgTW9kZTYgPSAnTW9kZTYnLFxuICBNb2RlNyA9ICdNb2RlNycsXG4gIE1vZGU4ID0gJ01vZGU4JyxcbiAgTW9kZTkgPSAnTW9kZTknLFxufVxuXG4vKipcbiAqIFFyQ29kZU1vZGVsIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBRckNvZGVNb2RlbCB7XG4gIE5vMSA9ICdObzEnLFxuICBObzIgPSAnTm8yJyxcbn1cblxuLyoqXG4gKiBRckNvZGVMZXZlbCBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gUXJDb2RlTGV2ZWwge1xuICBIID0gJ0gnLFxuICBMID0gJ0wnLFxuICBNID0gJ00nLFxuICBRID0gJ1EnLFxufVxuXG4vKipcbiAqIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiB7XG4gIE5vcm1hbCA9ICdOb3JtYWwnLFxuICBMZWZ0OTAgPSAnTGVmdDkwJyxcbiAgUmlnaHQ5MCA9ICdSaWdodDkwJyxcbiAgUm90YXRlMTgwID0gJ1JvdGF0ZTE4MCcsXG59XG5cbi8qKlxuICogUHVzaCBhIG5ldyBQcmludENvbW1hbmQgb2JqZWN0IHRvIHRoZSBhcnJheSBmb3IgYSBzZXBhcmF0ZSBpbnN0cnVjdGlvbiB0byB0aGUgcHJpbnRlci4gRXhhbXBsZSBbe2FwcGVuZDpcInRleHRcIn0sIHtcIm9wZW5DYXNoRHJhd2VyOiAxXCJ9XVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRzQXJyYXkgZXh0ZW5kcyBBcnJheTxQcmludENvbW1hbmQ+IHt9XG5cbi8qKlxuICogQG5hbWUgU3RhclBSTlRcbiAqIEBkZXNjcmlwdGlvblxuICogKiBJb25pYyBOYXRpdmUgd3JhcHBlcnMgZm9yIHRoZSBzdGFycHJudCBjb3Jkb3ZhIHBsdWdpbiBmb3IgU3RhciBNaWNyb25pY3MgQmx1ZXRvb3RoL0xBTiBwcmludGVyc1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RhclBSTlQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXItcHJudC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXJwcm50OiBTdGFyUFJOVCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc3RhcnBybnQucG9ydERpc2NvdmVyeSgnYWxsJylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdGFyUFJOVCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0YXJwcm50JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ3N0YXJwcm50JywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2F1Y3RpZmVyYS1qb3NlZC9zdGFycHJudCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGFyUFJOVCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBFbXVsYXRpb25cbiAgICovXG4gIEVtdWxhdGlvbiA9IHtcbiAgICBTdGFyUFJOVDogJ1N0YXJQUk5UJyxcbiAgICBTdGFyUFJOVEw6ICdTdGFyUFJOVEwnLFxuICAgIFN0YXJMaW5lOiAnU3RhckxpbmUnLFxuICAgIFN0YXJHcmFwaGljOiAnU3RhckdyYXBoaWMnLFxuICAgIEVzY1BvczogJ0VzY1BvcycsXG4gICAgRXNjUG9zTW9iaWxlOiAnRXNjUG9zTW9iaWxlJyxcbiAgICBTdGFyRG90SW1wYWN0OiAnU3RhckRvdEltcGFjdCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBFbmNvZGluZ1xuICAgKi9cbiAgRW5jb2RpbmcgPSB7XG4gICAgVVNBU0NJSTogJ1VTLUFTQ0lJJyxcbiAgICBXaW5kb3dzMTI1MjogJ1dpbmRvd3MtMTI1MicsXG4gICAgU2hpZnRKSVM6ICdTaGlmdC1KSVMnLFxuICAgIFdpbmRvd3MxMjUxOiAnV2luZG93cy0xMjUxJyxcbiAgICBHQjIzMTI6ICdHQjIzMTInLFxuICAgIEJpZzU6ICdCaWc1JyxcbiAgICBVVEY4OiAnVVRGLTgnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb2RlUGFnZVR5cGUgY29uc3RhbnRzXG4gICAqL1xuICBDb2RlUGFnZVR5cGUgPSB7XG4gICAgQ1A3Mzc6ICdDUDczNycsXG4gICAgQ1A3NzI6ICdDUDc3MicsXG4gICAgQ1A3NzQ6ICdDUDc3NCcsXG4gICAgQ1A4NTE6ICdDUDg1MScsXG4gICAgQ1A4NTI6ICdDUDg1MicsXG4gICAgQ1A4NTU6ICdDUDg1NScsXG4gICAgQ1A4NTc6ICdDUDg1NycsXG4gICAgQ1A4NTg6ICdDUDg1OCcsXG4gICAgQ1A4NjA6ICdDUDg2MCcsXG4gICAgQ1A4NjE6ICdDUDg2MScsXG4gICAgQ1A4NjI6ICdDUDg2MicsXG4gICAgQ1A4NjM6ICdDUDg2MycsXG4gICAgQ1A4NjQ6ICdDUDg2NCcsXG4gICAgQ1A4NjU6ICdDUDg2NScsXG4gICAgQ1A4Njk6ICdDUDg2OScsXG4gICAgQ1A4NzQ6ICdDUDg3NCcsXG4gICAgQ1A5Mjg6ICdDUDkyOCcsXG4gICAgQ1A5MzI6ICdDUDkzMicsXG4gICAgQ1A5OTk6ICdDUDk5OScsXG4gICAgQ1AxMDAxOiAnQ1AxMDAxJyxcbiAgICBDUDEyNTA6ICdDUDEyNTAnLFxuICAgIENQMTI1MTogJ0NQMTI1MScsXG4gICAgQ1AxMjUyOiAnQ1AxMjUyJyxcbiAgICBDUDIwMDE6ICdDUDIwMDEnLFxuICAgIENQMzAwMTogJ0NQMzAwMScsXG4gICAgQ1AzMDAyOiAnQ1AzMDAyJyxcbiAgICBDUDMwMTE6ICdDUDMwMTEnLFxuICAgIENQMzAxMjogJ0NQMzAxMicsXG4gICAgQ1AzMDIxOiAnQ1AzMDIxJyxcbiAgICBDUDMwNDE6ICdDUDMwNDEnLFxuICAgIENQMzg0MDogJ0NQMzg0MCcsXG4gICAgQ1AzODQxOiAnQ1AzODQxJyxcbiAgICBDUDM4NDM6ICdDUDM4NDMnLFxuICAgIENQMzg0NTogJ0NQMzg0NScsXG4gICAgQ1AzODQ2OiAnQ1AzODQ2JyxcbiAgICBDUDM4NDc6ICdDUDM4NDcnLFxuICAgIENQMzg0ODogJ0NQMzg0OCcsXG4gICAgVVRGODogJ1VURjgnLFxuICAgIEJsYW5rOiAnQmxhbmsnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgSW50ZXJuYXRpb25hbFR5cGVcbiAgICovXG4gIEludGVybmF0aW9uYWxUeXBlID0ge1xuICAgIFVLOiAnVUsnLFxuICAgIFVTQTogJ1VTQScsXG4gICAgRnJhbmNlOiAnRnJhbmNlJyxcbiAgICBHZXJtYW55OiAnR2VybWFueScsXG4gICAgRGVubWFyazogJ0Rlbm1hcmsnLFxuICAgIFN3ZWRlbjogJ1N3ZWRlbicsXG4gICAgSXRhbHk6ICdJdGFseScsXG4gICAgU3BhaW46ICdTcGFpbicsXG4gICAgSmFwYW46ICdKYXBhbicsXG4gICAgTm9yd2F5OiAnTm9yd2F5JyxcbiAgICBEZW5tYXJrMjogJ0Rlbm1hcmsyJyxcbiAgICBTcGFpbjI6ICdTcGFpbjInLFxuICAgIExhdGluQW1lcmljYTogJ0xhdGluQW1lcmljYScsXG4gICAgS29yZWE6ICdLb3JlYScsXG4gICAgSXJlbGFuZDogJ0lyZWxhbmQnLFxuICAgIExlZ2FsOiAnTGVnYWwnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgRm9udFN0eWxlVHlwZVxuICAgKi9cbiAgRm9udFN0eWxlVHlwZSA9IHtcbiAgICAvKiogRm9udC1BICgxMiB4IDI0IGRvdHMpIC8gU3BlY2lmeSA3IHggOSBmb250IChoYWxmIGRvdHMpICovXG4gICAgQTogJ0EnLFxuICAgIC8qKiBGb250LUIgKDkgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNSB4IDkgZm9udCAoMlAtMSkgKi9cbiAgICBCOiAnQicsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBDdXRQYXBlckFjdGlvblxuICAgKi9cbiAgQ3V0UGFwZXJBY3Rpb24gPSB7XG4gICAgRnVsbEN1dDogJ0Z1bGxDdXQnLFxuICAgIEZ1bGxDdXRXaXRoRmVlZDogJ0Z1bGxDdXRXaXRoRmVlZCcsXG4gICAgUGFydGlhbEN1dDogJ1BhcnRpYWxDdXQnLFxuICAgIFBhcnRpYWxDdXRXaXRoRmVlZDogJ1BhcnRpYWxDdXRXaXRoRmVlZCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCbGFja01hcmtUeXBlXG4gICAqL1xuICBCbGFja01hcmtUeXBlID0ge1xuICAgIFZhbGlkOiAnVmFsaWQnLFxuICAgIEludmFsaWQ6ICdJbnZhbGlkJyxcbiAgICBWYWxpZFdpdGhEZXRlY3Rpb246ICdWYWxpZFdpdGhEZXRlY3Rpb24nLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQWxpZ25tZW50UG9zaXRpb25cbiAgICovXG4gIEFsaWdubWVudFBvc2l0aW9uID0ge1xuICAgIExlZnQ6ICdMZWZ0JyxcbiAgICBDZW50ZXI6ICdDZW50ZXInLFxuICAgIFJpZ2h0OiAnUmlnaHQnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgTG9nb1NpemVcbiAgICovXG4gIExvZ29TaXplID0ge1xuICAgIE5vcm1hbDogJ05vcm1hbCcsXG4gICAgRG91YmxlV2lkdGg6ICdEb3VibGVXaWR0aCcsXG4gICAgRG91YmxlSGVpZ2h0OiAnRG91YmxlSGVpZ2h0JyxcbiAgICBEb3VibGVXaWR0aERvdWJsZUhlaWdodDogJ0RvdWJsZVdpZHRoRG91YmxlSGVpZ2h0JyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJhcmNvZGVTeW1ib2xvZ3lcbiAgICovXG4gIEJhcmNvZGVTeW1ib2xvZ3kgPSB7XG4gICAgQ29kZTEyODogJ0NvZGUxMjgnLFxuICAgIENvZGUzOTogJ0NvZGUzOScsXG4gICAgQ29kZTkzOiAnQ29kZTkzJyxcbiAgICBJVEY6ICdJVEYnLFxuICAgIEpBTjg6ICdKQU44JyxcbiAgICBKQU4xMzogJ0pBTjEzJyxcbiAgICBOVzc6ICdOVzcnLFxuICAgIFVQQ0E6ICdVUENBJyxcbiAgICBVUENFOiAnVVBDRScsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCYXJjb2RlV2lkdGhcbiAgICovXG4gIEJhcmNvZGVXaWR0aCA9IHtcbiAgICBNb2RlMTogJ01vZGUxJyxcbiAgICBNb2RlMjogJ01vZGUyJyxcbiAgICBNb2RlMzogJ01vZGUzJyxcbiAgICBNb2RlNDogJ01vZGU0JyxcbiAgICBNb2RlNTogJ01vZGU1JyxcbiAgICBNb2RlNjogJ01vZGU2JyxcbiAgICBNb2RlNzogJ01vZGU3JyxcbiAgICBNb2RlODogJ01vZGU4JyxcbiAgICBNb2RlOTogJ01vZGU5JyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIFFyQ29kZU1vZGVsXG4gICAqL1xuICBRckNvZGVNb2RlbCA9IHtcbiAgICBObzE6ICdObzEnLFxuICAgIE5vMjogJ05vMicsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBRckNvZGVMZXZlbFxuICAgKi9cbiAgUXJDb2RlTGV2ZWwgPSB7XG4gICAgSDogJ0gnLFxuICAgIEw6ICdMJyxcbiAgICBNOiAnTScsXG4gICAgUTogJ1EnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQml0bWFwQ29udmVydGVyUm90YXRpb25cbiAgICovXG4gIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uID0ge1xuICAgIE5vcm1hbDogJ05vcm1hbCcsXG4gICAgTGVmdDkwOiAnTGVmdDkwJyxcbiAgICBSaWdodDkwOiAnUmlnaHQ5MCcsXG4gICAgUm90YXRlMTgwOiAnUm90YXRlMTgwJyxcbiAgfTtcblxuICAvKipcbiAgICogRmluZCBhdmFpbGFibGUgcHJpbnRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgIEludGVyZmFjZSBUeXBlOiBBbGwsIExBTiwgQmx1ZXRvb3RoLCBVU0JcbiAgICogQHJldHVybiB7UHJvbWlzZTxQcmludGVycz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiBwcmludGVyc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwb3J0RGlzY292ZXJ5KHR5cGU6IHN0cmluZyk6IFByb21pc2U8UHJpbnRlcnM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHJldHVybiB7UHJvbWlzZTxQcmludGVyU3RhdHVzPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBQcmludGVyU3RhdHVzIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGVja1N0YXR1cyhwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxQcmludGVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaW50cyBwbGFpbiB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0ge1ByaW50T2JqfSBwcmludE9iaiAgdGV4dDpzdHJpbmcsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnRSYXdUZXh0KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIHByaW50T2JqOiBQcmludE9iaik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSB0ZXh0IGludG8gYSBiaXRtYXAgaW1hZ2UgYW5kIHNlbmRzIGl0IHRvIHRoZSBwcmludGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtSYXN0ZXJPYmp9IHJhc3Rlck9iaiAgdGV4dDpzdHJpbmcsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuLCBmb250U2l6ZTpudW1iZXIsIHBhcGVyV2lkdGg6bnVtYmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnRSYXN0ZXJSZWNlaXB0KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIHJhc3Rlck9iajogUmFzdGVyT2JqKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBpbWFnZSBmcm9tIGEgc3RyaW5nIFVSSSBhbmQgY29udmVydHMgaXQgdG8gYml0bWFwIHRvIHNlbmQgaXQgdG8gdGhlIHByaW50ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEBwYXJhbSB7SW1hZ2VPYmp9IGltYWdlT2JqICB1cmk6c3RyaW5nLCBwYXBlcldpZHRoPzpudW1iZXIsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnRJbWFnZShwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nLCBpbWFnZU9iajogSW1hZ2VPYmopOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZW5kcyBhbiBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBvcGVuZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3BlbkNhc2hEcmF3ZXIocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGFuIEFycmF5IG9mIGNvbW1hbmRzIHRvIHRoZSBjb21tYW5kIGJ1ZmZlciB1c2luZyB0aGUgQW5kcm9pZCBJQ29tbWFuZEJ1aWxkZXJJbnRlcmZhY2Ugb3IgaU9TIElTQ0JCdWlsZGVySW50ZXJmYWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtDb21tYW5kc0FycmF5fSBjb21tYW5kc0FycmF5ICBlYWNoIGNvbW1hbmQgaW4gdGhlIGFycmF5IHNob3VsZCBiZSBhbiBpbnN0YW5jZSBvZiB0aGUgUHJpbnRDb21tYW5kIG9iamVjdC4gRXhhbXBsZSBbe2FwcGVuZDpcInRleHRcIn0sIHtcIm9wZW5DYXNoRHJhd2VyOiAxXCJ9XVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByaW50KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIGNvbW1hbmRzQXJyYXk6IENvbW1hbmRzQXJyYXkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIGNvbm5lY3QgdG8gdGhlIHByaW50ZXIsIGtlZXAgdGhlIGNvbm5lY3Rpb24gYWxpdmUgYW5kIHJlY2VpdmUgc3RhdHVzIHVwZGF0ZXMgdGhyb3VnaCBhbiBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBwcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFN1Y2Nlc3MhIGlmIGNvbm5lY3RlZCBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxuICB9KVxuICBjb25uZWN0KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIGhhc0JhcmNvZGVSZWFkZXI6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgZGV2aWNlIHN0YXR1cyBldmVudHMuIE9ubHkgZmlyZXMgd2hlbiBhIHByaW50ZXIgaXMgY29ubm5lY3RlZCB0aHJvdWdoIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBkYXRhVHlwZTogcHJpbnRlck9ubGluZSwgcHJpbnRlck9mZmxpbmUsIHByaW50ZXJJbXBvc3NpYmxlLCBwcmludGVyUGFwZXJFbXB0eSwgcHJpbnRlclBhcGVyTmVhckVtcHR5LCBwcmludGVyUGFwZXJSZWFkeSwgcHJpbnRlckNvdmVyT3BlbiwgcHJpbnRlckNvdmVyQ2xvc2UsIGNhc2hEcmF3ZXJPcGVuLCBjYXNoRHJhd2VyQ2xvc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdzdGFyUHJudERhdGEnLFxuICB9KVxuICBnZXRTdGF0dXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHRvIGRpc2Nvbm5lY3QgKGNsb3NlIHRoZSBjb25uZWN0aW9uIHRvIHRoZSBwZXJpcGhlcmFscyksIHRoaXMgaXMgdXNlZnVsIHRvIGF2b2lkIGtlZXBpbmcgYWxpdmUgYSBjb25uZWN0aW9uIHdoZW4gbm90IGluIHRoZSBhcHAgdG8gc2F2ZSBkZXZpY2UgYmF0dGVyeVxuICAgKiAoZW5lcmd5IGNvbnN1bXB0aW9uKS4gWW91IHNob3VsZCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgYXBwIGlzIHBhdXNlZCBvciBjbG9zZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgY29ubmVjdGVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==