module objects {
    export class Player2 extends objects.GameObject {
        // private instance variables
        
        // public properties
        
        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.x = 100;
        }

        public Update():void {
            this.x = managers.Game.stage.mouseY;
            this._updatePosition();

            // checks the right boundary
            if(this.y > 640 - this.HalfWidth) {
                this.y = 640 - this.HalfWidth;
            }

            // check the left boundary
            if(this.y < this.HalfWidth) {
                this.y = this.HalfWidth;
            }
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }
    }
}