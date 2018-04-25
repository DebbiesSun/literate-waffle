module common
{
	export interface IModelMessageCare
	{
		/**
		 * 消息列表
		 */
		careMessages: string[];

		/**
		 * 消息回调函数
		 */
		updateData: (type: string) => void;
	}
}