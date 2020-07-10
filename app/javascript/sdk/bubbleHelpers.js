import { addClass, toggleClass, wootOn } from './DOMHelpers';
import { IFrameHelper } from './IFrameHelper';

export const bubbleImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABi0lEQVRoge2YXWrCQBSFzy3FIK0uwbiHuo3StdiXPvTvRYpPWUvBdhO2qzArSLQIQjh9ESr2jsyk0ZnQ+R5vZuR8YXKIASKRSKsR1w2LxeIGwBjACMBF44l++ALwQTJL03RmWuQkkOf5lOTdn6O58zIYDO61C9YC2zv/2lgkR0hep2n6tj8/c/iNcYN56nCrDV0ErhoKUpeRNnQRuGwoSC1EpKfNzw9tIrnbOEeDJDabDZbLJdbrtdNeowDJKYCTNI6IIEkSJEmCsixRFIX1XvUIbe+8j7pEv99Ht9u1Xm96Brw2Tq+nHncVk4DXxul0OtZrTQK+G8d6rUuNBkkU8E0U8E0U8E0UOCGlNmyNgIh8avPWCFRVlWnztghMhsPhu3bh4D8yz6xEZF5VVWYKDxg+q5Dk8XLZIZavpKEeIbVxNEIVUBtHI1QBtXE0QhSYiIjxod0nlBZaAZgDyFzCG6EZ9QtxcBjCP/jOZU2rwwO/BB5953FmJ/yT7yy1aHV4ACD57DtDJBL5J3wDipq90XZr0vgAAAAASUVORK5CYII=';

export const body = document.getElementsByTagName('body')[0];
export const widgetHolder = document.createElement('div');

export const bubbleHolder = document.createElement('div');
export const chatBubble = document.createElement('div');
export const closeBubble = document.createElement('div');

export const notificationBubble = document.createElement('span');

export const createBubbleIcon = ({ className, src, target }) => {
  target.className = `${className} woot-elements--${window.$chatwoot.position}`;
  const bubbleIcon = document.createElement('img');
  bubbleIcon.src = src;
  target.appendChild(bubbleIcon);
  return target;
};

export const createBubbleHolder = () => {
  addClass(bubbleHolder, 'woot--bubble-holder');
  body.appendChild(bubbleHolder);
};

export const createNotificationBubble = () => {
  addClass(notificationBubble, 'woot--notification');
  return notificationBubble;
};

export const onBubbleClick = (props = {}) => {
  const { toggleValue } = props;
  const { isOpen } = window.$chatwoot;
  if (isOpen !== toggleValue) {
    const newIsOpen = toggleValue === undefined ? !isOpen : toggleValue;
    window.$chatwoot.isOpen = newIsOpen;

    toggleClass(chatBubble, 'woot--hide');
    toggleClass(closeBubble, 'woot--hide');
    toggleClass(widgetHolder, 'woot--hide');
    IFrameHelper.events.onBubbleToggle(newIsOpen);
  }
};

export const onClickChatBubble = () => {
  wootOn(bubbleHolder, 'click', onBubbleClick);
};
