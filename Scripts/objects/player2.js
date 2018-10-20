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
    var Player2 = /** @class */ (function (_super) {
        __extends(Player2, _super);
        // private instance variables
        // public properties
        // constructors
        function Player2() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Player2.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 100;
        };
        Player2.prototype.Update = function () {
            this.x = managers.Game.stage.mouseY;
            this._updatePosition();
            // checks the right boundary
            if (this.y > 640 - this.HalfWidth) {
                this.y = 640 - this.HalfWidth;
            }
            // check the left boundary
            if (this.y < this.HalfWidth) {
                this.y = this.HalfWidth;
            }
        };
        Player2.prototype.Reset = function () {
        };
        Player2.prototype.Destroy = function () {
        };
        return Player2;
    }(objects.GameObject));
    objects.Player2 = Player2;
})(objects || (objects = {}));
//# sourceMappingURL=player2.js.map