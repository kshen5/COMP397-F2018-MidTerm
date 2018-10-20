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
    var Island2 = /** @class */ (function (_super) {
        __extends(Island2, _super);
        // public properties
        // constructor
        function Island2() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Island2.prototype._move = function () {
            this.x -= this._horizontalSpeed;
            this._updatePosition();
        };
        Island2.prototype._checkBounds = function () {
            if (this.x > 480 + this.Width) {
                this.Reset();
            }
        };
        // public methods
        Island2.prototype.Reset = function () {
            this._horizontalSpeed = 5;
            this.x = -this.Width;
            this.y = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        };
        Island2.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        Island2.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Island2.prototype.Destroy = function () {
        };
        return Island2;
    }(objects.GameObject));
    objects.Island2 = Island2;
})(objects || (objects = {}));
//# sourceMappingURL=island2.js.map