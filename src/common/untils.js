// 工具类  给js用
import { Message } from "element-ui";

/**
 * 
 * @param {*} type 消息类型
 * @param {*} message 消息主体
 * @param {*} callback 消息关闭
 */

export const $Message = (type, message, callback = () => { }) => {
    Message({
        type,
        message,
        duration: 5000,
        onClose: callback
    })
}
