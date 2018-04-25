module common
{
	/**
	 * 消息管理器
	 */
	export class ModelMessageManager
	{
		private callBack: any;
		
		public constructor()
		{
			this.callBack = {};
		}

		private static instance: ModelMessageManager;
		public static getInstance(): ModelMessageManager
		{
			if(ModelMessageManager.instance == null)
			{
				ModelMessageManager.instance = new ModelMessageManager();
			}

			return ModelMessageManager.instance;
		}

		/**
		 * 注册消息
		 */
		public registMessage(type: string, callback: (type: string) => void, thisObj:any): void
		{
			let call: Array<ModelMessageCallback> = this.callBack[type];

			if(call == null)
			{
				call = new Array<ModelMessageCallback>();

				this.callBack[type] = call;
			}

			call.push(new ModelMessageCallback(callback, thisObj));
		}

		/**
		 * 取消注册消息
		 */
		public unregistMessage(type: string, callback: (type: string) => void, thisObj:any): void
		{
			let call: Array<ModelMessageCallback> = this.callBack[type];

			if(call == null)
			{
				return;
			}

			for(let i = 0; i < call.length; i++)
			{
				if(call[i].callBack == callback && call[i].thisObj == thisObj)
				{
					call.splice(i, 1);

					return;
				}
			}
		}

		public sendMessage(type: string): void
		{
			let call: Array<ModelMessageCallback> = this.callBack[type];

			if(call == null || call.length == 0)
			{
				return;
			}

			for(let i = 0; i < call.length; i++)
			{
				call[i].call(type);
			}
		}
		
	}
}