var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Plot } from "./Plot";
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        var _this = _super.call(this) || this;
        _this.flammable = false;
        return _this;
    }
    Field.prototype.toString = function () {
        return "Field:" + _super.prototype.toString.call(this);
    };
    return Field;
}(Plot));
export { Field };
//# sourceMappingURL=Field.js.map