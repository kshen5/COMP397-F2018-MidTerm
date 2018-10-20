var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Ocean2 = /** @class */ (function (_super) {
        __extends(Ocean2, _super);
        // public properties
        // constructor
        function Ocean2() {
            var _this = _super.call(this, "ocean") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Ocean2.prototype._checkBounds = function () {
            if (this.x >= 0) {
                this.Reset();
            }
        };
        Ocean2.prototype._move = function () {
            this.x -= this._horizontalSpeed;
        };
        // public methods
        Ocean2.prototype.Reset = function () {
            this.x = 2000;
        };
        Ocean2.prototype.Start = function () {
            this.Reset();
            this._horizontalSpeed = 5; // 5 px per frame
        };
        Ocean2.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Ocean2.prototype.Destroy = function () {
        };
        return Ocean2;
    }(objects.GameObject));
    objects.Ocean2 = Ocean2;
})(objects || (objects = {}));
//# sourceMappingURL=ocean2.js.map