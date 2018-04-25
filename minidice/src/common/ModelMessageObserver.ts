module common
{
	/**
	 * 消息观察者
	 */
	export class ModelMessageObserver
	{
		private callBack: any;

		/**
		 * 消息列表
		 */
		private messages: string[];

		private messageCallback: ModelMessageCallback;



		public constructor(messageCare: IModelMessageCare)
		{
			let careMessages: string[] = messageCare.careMessages;

			if(careMessages == null || careMessages.length == 0)
			{
				return;
			}

			this.messages = careMessages.concat();
			this.messageCallback = new ModelMessageCallback(messageCare.updateData, messageCare);

			

			for(let i = 0; i < careMessages.length; i++)
			{
				ModelMessageManager.getInstance().registMessage(careMessages[i], messageCare.updateData, messageCare);
			}
		}

		public destroy(): void
		{
			if(this.messages == null)
			{
				return;
			}

			for(let i = 0; i < this.messages.length; i++)
			{
				ModelMessageManager.getInstance().unregistMessage(this.messages[i], this.messageCallback.callBack, this.messageCallback.thisObj);
			}

			this.messageCallback.destroy();
			this.messageCallback = null;
			this.messages = null;
		}

	}
}