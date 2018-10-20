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
    var Cloud2 = /** @class */ (function (_super) {
        __extends(Cloud2, _super);
        // public properties
        // constructor
        function Cloud2() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Cloud2.prototype._move = function () {
            this.y += this._verticalSpeed;
            this.x -= this._horizontalSpeed;
            this._updatePosition();
        };
        Cloud2.prototype._checkBounds = function () {
            if (this.x < 480 + this.Width) {
                this.Reset();
            }
        };
        // public methods
        Cloud2.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 5);
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2);
            this.x = -this.Height;
            this.y = Math.floor((Math.random() * (640 - this.Height)) + this.HalfHeight);
            this.IsColliding = false;
        };
        Cloud2.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        Cloud2.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Cloud2.prototype.Destroy = function () {
        };
        return Cloud2;
    }(objects.GameObject));
    objects.Cloud2 = Cloud2;
})(objects || (objects = {}));
//# sourceMappingURL=cloud2.js.map