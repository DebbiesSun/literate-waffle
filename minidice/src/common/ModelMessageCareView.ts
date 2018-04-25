/**
 * 实现消息关心接口的界面
 */
class ModelMessageCareView extends eui.Component implements common.IModelMessageCare
{
	private observer: common.ModelMessageObserver;

	public constructor()
	{
		super();

		if(this.observer == null)
		{
			this.observer = new common.ModelMessageObserver(this.careMessages, this.updateData);
		}

		this.once(eui.UIEvent.COMPLETE, this.onUICompleteHandler, this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStageHandler, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStageHandler, this);
	}

	protected onUICompleteHandler(e: eui.UIEvent): void
	{

	}

	protected onAddToStageHandler(e: egret.Event): void
	{

	}

	protected onRemoveFromStageHandler(e: egret.Event): void
	{

	}

	/**
	 * 关心的消息列表
	 */
	public get careMessages(): string[]
	{
		return [];
	}

	/**
	 * 消息列表回调函数
	 */
	public updateData(type: string): void
	{
		switch(type)
		{

		}
	}

	public destroy(): void
	{
		this.removeEventListener(eui.UIEvent.COMPLETE, this.onUICompleteHandler, this);
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStageHandler, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStageHandler, this);

		this.observer.destroy();
		this.observer = null;
	}
}