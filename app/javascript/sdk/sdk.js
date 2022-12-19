export const SDK_CSS = `
:root {
  --b-100: #F2F3F7;
  --s-700: #37546D;
}

.woot-widget-holder {
  box-shadow: 0 12px 20px 0 rgba(0,0,0,.15);
  opacity: 1;
  will-change: transform, opacity;
  transform: translateY(0);
  overflow: hidden !important;
  position: fixed !important;
  transition: opacity 0.3s ease-in-out;
  z-index: 2147483000 !important;
}

.woot-widget-holder.woot-widget-holder--flat {
  box-shadow: none;
  border-radius: 0;
  border: 1px solid var(--b-100);
}

.woot-widget-holder iframe {
  border: 0;
  height: 100% !important;
  width: 100% !important;
  max-height: 100vh !important;
}

.woot-widget-holder.has-unread-view {
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -o-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -o-border-radius: 0 !important;
  -moz-border-radius: 0 !important;
  -webkit-border-radius: 0 !important;
  border-radius: 0 !important;
  min-height: 80px !important;
  height: auto;
  bottom: 94px;
  box-shadow: none !important;
  border: 0;
}
.woot-widget-holder iframe {
  width: 100% !important;
  height: 100% !important;
  border: 0;
}
.woot-widget-bubble {
  background: #1f93ff;
  border-radius: 100px;
  border-width: 0px;
  bottom: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  cursor: pointer;
  height: 64px;
  padding: 0px;
  position: fixed;
  user-select: none;
  width: 64px;
  z-index: 2147483000 !important;
  transition: opacity 0.3s ease-in-out;
  will-change: transform, opacity
}

.woot-widget-bubble.woot-widget-bubble--flat {
  border-radius: 0;
}

.woot-widget-holder.woot-widget-holder--flat {
  bottom: 90px;
}

.woot-widget-bubble.woot-widget-bubble--flat {
  height: 56px;
  width: 56px;
}

.woot-widget-bubble.woot-widget-bubble--flat svg {
  margin: 16px;
}

.woot-widget-bubble.woot-widget-bubble--flat.woot--close::before,
.woot-widget-bubble.woot-widget-bubble--flat.woot--close::after {
  left: 28px;
  top: 16px;
}

.woot-widget-bubble.unread-notification::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: #ff4040;
  border-radius: 100%;
  top: 0px;
  right: 0px;
  border: 2px solid #ffffff;
  transition: background 0.2s ease;
}

.woot-widget-bubble.woot-widget--expanded {
  bottom: 24px;
  display: flex;
  height: 48px !important;
  width: auto !important;
  align-items: center;
}

.woot-widget-bubble.woot-widget--expanded div {
  align-items: center;
  color: #fff;
  display: flex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  padding-right: 20px;
  width: auto !important;
}

.woot-widget-bubble.woot-widget--expanded.woot-widget-bubble-color--lighter div{
  color: var(--s-700);
}

.woot-widget-bubble.woot-widget--expanded svg {
  height: 20px;
  margin: 14px 8px 14px 16px;
  width: 20px;
}
.woot-widget-bubble.woot-elements--left {
  left: 31px;
  animation: pulse-2 2s infinite;
}
.woot-widget-bubble.woot-elements--right {
  right: 31px;
  animation: pulse-2 2s infinite;
}
@keyframes pulse-2 {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 #433863;
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px transparent;
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 transparent;
  }
}

.woot-widget-bubble .bubble-tooltip .tooltip-text {
    display: inline-flex;
    position: relative;
    padding: 10px 10px 10px 0;
    font-size: 1.5rem;
}
.woot-widget-bubble .bubble-tooltip img {
    display: inline-flex;
    width: 12%;
    height: auto;
    margin: 10px 15px;
}
.woot-widget-bubble .bubble-tooltip {
    display: flex;
    position: relative;
    background: #fff;
    width: 300% !important;
    vertical-align: middle;
    align-content: center;
    align-items: center;
    right: 205px;
    top: -58px;
    border-radius: 3px;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
}
.woot-elements--right.woot-widget-bubble.woot--close .bubble-tooltip {
    top: 9px !important;
    width: 230% !important;
    right: 160px;
}
.woot-elements--right.woot-widget-bubble.woot--close .bubble-tooltip img {
    margin: 10px;
    width: 15%;
}
.woot-widget-bubble svg {
  all: revert;
  height: 34px;
  width: 34px;
  margin: 17px 15px;
}

.woot-widget-bubble.woot-widget-bubble-color--lighter path{
  fill: var(--s-700);
}

@media only screen and (min-width: 667px) {
  .woot-widget-holder.woot-elements--left {
    left: 30px;
  }
  .woot-widget-holder.woot-elements--right {
    right: 30px;
  }
}
.woot-widget-bubble:hover {
  background: #1f93ff;
  /*-moz-box-shadow: 0 8px 32px rgba(0, 0, 0, .4) !important;
  -o-box-shadow: 0 8px 32px rgba(0, 0, 0, .4) !important;
  -webkit-box-shadow: 0 8px 32px rgba(0, 0, 0, .4) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, .4) !important;*/
}
.woot--close:hover {
  opacity: 1;
}

.woot--close::before, .woot--close::after {
  background-color: #fff;
  content: ' ';
  display: inline;
  height: 24px;
  left: 32px;
  position: absolute;
  top: 20px;
  width: 2px;
}

.woot-widget-bubble-color--lighter.woot--close::before, .woot-widget-bubble-color--lighter.woot--close::after {
  background-color: var(--s-700);
}

.woot--close::before {
  transform: rotate(45deg);
}
.woot--close:after {
  transform: rotate(-45deg);
}
.woot--hide {
  bottom: -100vh !important;
  transform: translateY(40px);
  top: unset !important;
  opacity: 0;
  visibility: hidden !important;
  z-index: -1 !important;
  opacity: 0;
  /*bottom: -20000px;*/
}

.woot-widget--without-bubble {
  bottom: 20px !important;
}

@media only screen and (max-width: 667px) {
  .woot-widget-holder {
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }

 .woot-widget-holder iframe {
    min-height: 100% !important;
  }


 .woot-widget-holder.has-unread-view {
    height: auto;
    right: 0;
    width: auto;
    bottom: 0;
    top: auto;
    max-height: 100vh;
    padding: 0 8px;
  }

  .woot-widget-holder.has-unread-view iframe {
    min-height: unset !important;
  }

 .woot-widget-holder.has-unread-view.woot-elements--left {
    left: 0;
  }

  .woot-widget-bubble.woot--close {
    visibility: hidden !important;
    z-index: -1 !important;
    opacity: 0;
    bottom: 60px;
  }
}
@media only screen and (min-width: 667px) {
  .woot-widget-holder {
    border-radius: 16px;
    bottom: 104px;
    height: calc(90% - 64px - 20px);
    width: 400px !important;
    min-height: 250px !important;
    max-height: 650px !important;
    -o-border-radius: 6px !important;
    -moz-border-radius: 6px !important;
    -webkit-border-radius: 6px !important;
    border-radius: 6px !important;
  }
}

.woot-hidden {
  display: none !important;
}
`;
