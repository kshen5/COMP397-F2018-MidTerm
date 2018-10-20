module objects {
    export class Ocean2 extends objects.GameObject {
        // private instance variables
        private _horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("ocean");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if(this.x >=0) {
                this.Reset();
            }
        }

        private _move():void {
            this.x -= this._horizontalSpeed;
        }

        // public methods

        public Reset(): void {
            this.x = 2000;
        }        
        
        public Start(): void {
            this.Reset();
            this._horizontalSpeed = 5; // 5 px per frame
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}