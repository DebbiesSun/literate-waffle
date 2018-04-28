module common
{
	export enum LayerType
	{
		BASE_LAYER,

		/**
		 * UI层
		 */
		UI_LAYER,

		/**
		 * 窗体层
		 */
		WINDOW_LAYER,

		/**
		 * 模态层
		 */
		MODAL_LAYER,

		/**
		 * 弹出提示层
		 */
		TIP_LAYER,

		/**
		 * 指引层
		 */
		GUIDE_LAYER
	}

	export class LayerManager
	{
		/**
		 * 最底层
		 */
		private base_layer: egret.DisplayObjectContainer;

		private ui_layer: egret.DisplayObjectContainer;

		public constructor()
		{

		}

		private static instance: LayerManager;
		public static getInstance(): LayerManager
		{
			if(LayerManager.instance == null)
			{
				LayerManager.instance = new LayerManager();
			}

			return LayerManager.instance;
		}

		/**
		 * 图层字典
		 */
		private layerDict: any = {};

		public init(stage: egret.Stage): void
		{
			let state: egret.Stage = stage;

			this.base_layer = new eui.Group();
			this.base_layer.touchEnabled = false;

			this.ui_layer = new eui.Group();
			this.base_layer.touchEnabled = false;

			this.resizeLayer(stage.stageWidth, stage.stageHeight);

			stage.addEventListener(egret.Event.RESIZE, this.resizeHandler, this);

			this.layerDict[LayerType.BASE_LAYER] = stage.addChild(this.base_layer);
			this.layerDict[LayerType.UI_LAYER] = stage.addChild(this.ui_layer);

		}

		private resizeLayer(width: number, height: number): void
		{
			this.base_layer.width = width;
			this.base_layer.height = height;

			this.ui_layer.width = width;
			this.ui_layer.height = height;
		}

		private resizeHandler(e: egret.Event): void
		{
			let stage: egret.Stage = e.currentTarget;

			this.resizeLayer(stage.stageWidth, stage.height);
		}

		public addChildWithClass(clazz: any): void
		{
			
		}

		public removeChildWithClass(clazz: any): void
		{

		}
	}

	export interface IModalPanel
	{
		/**
		 * 背景透明度
		 */
		modalAlpha?: number;

		/**
		 * 点击背景
		 */
		onModalClick(): void;
	}
}