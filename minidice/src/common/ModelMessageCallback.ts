module common
{
	/**
	 * 消息回调函数
	 */
	export class ModelMessageCallback
	{
		/**
		 * 回调函数
		 */
		public callBack: (type: string) => void;

		/**
		 * this对象
		 */
		public thisObj: any;

		public constructor(callback: (type: string) => void, thisObj: any)
		{
			this.callBack = callback;
			this.thisObj = thisObj;
		}

		/**
		 * 调用回调函数
		 */
		public call(type: string): void
		{
			this.callBack.call(this.thisObj, type);
		}

		public destroy(): void
		{
			this.callBack = null;
			this.thisObj = null;
		}
	}
}