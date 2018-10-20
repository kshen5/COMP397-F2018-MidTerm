module objects {
    export class Island2 extends objects.GameObject {
        // private instance variables
        private _horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("island");

            this.Start();
        }

        // private methods
        private _move():void {
            this.x -= this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.x > 480 + this.Width) {
                this.Reset();
            }
        }

        // public methods

        public Reset(): void {
            this._horizontalSpeed = 5;
            this.x = -this.Width;
            this.y = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}