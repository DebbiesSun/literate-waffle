module common
{
    export class WheelList extends eui.Component
    {
        private container: eui.Group;
        
        private containerMask: eui.Rect;

        public constructor()
        {
            super();

            this.container = new eui.Group();
            this.container.percentWidth = 100;
            this.container.percentHeight = 100;
            this.addChild(this.container);

            this.containerMask = new eui.Rect();
            this.containerMask.percentWidth = 100;
            this.containerMask.percentHeight = 100;
            this.addChild(this.containerMask);
        }

        protected createChildren(): void
        {
            super.createChildren();

            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStageHandler, this);
            this.addEventListener(egret.Event.RESIZE, this.onResizeHandler, this);
        }


        private touchBegin(e: egret.TouchEvent): void
        {

        }

        private onRemoveFromStageHandler(e: egret.Event): void
        {

        }

        private onResizeHandler(e: egret.Event): void
        {

        }

        
    }
}