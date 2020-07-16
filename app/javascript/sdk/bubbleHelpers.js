import { addClass, toggleClass, wootOn } from './DOMHelpers';
import { IFrameHelper } from './IFrameHelper';

export const bubbleImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABX0lEQVRoge2YO07EMBRFz0MsAJgSWqCDkiVQsA9KFkADCwBWwmcBrIKeLkPJwEzL59IEKWNMwI4mdkY+UqTEkZ178vJxAoVCIQhJR5LG6o+ZpDtJu748FiFQAVudz0Q4L8C+mVXNxpUEQWJZBy7dxhiBY2DcOU4ch25D8CXUN5LU3DazucxDuoS8FIHUeAUk7Ui6rZ/BfTznbyRtxwj8uIklbQIPwChmwA5MgD0ze3LyBN/EF/QfHmADuArt5KvAcz1YCqZmtubkaa2AT+ANWF1IvH/gBizvgdwpAqlZSoHsZ6hNlrICg6II9EDz87Vydw5B4PsbvKrX5/DNhT5IKObOdf5iCBVopQikpgikJjeBaWiH3ATuQzvk9B6YAAdm9hjSKYcKzIBrIsJ7kfTZ8hftrPMBFk2LQP7h4VeBYYQHkPTqhD9PnSkISSeS3uvlNHWeKCSNJKX4wVsoFAL5AjG0pIfpuTtDAAAAAElFTkSuQmCC'

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
