export const SDK_CSS = ` .woot-widget-holder {
  z-index: 2147483000 !important;
  position: fixed !important;
  -moz-box-shadow: 0 12px 20px 0 rgba(0,0,0,.15) !important;
  -o-box-shadow: 0 12px 20px 0 rgba(0,0,0,.15) !important;
  -webkit-box-shadow: 0 12px 20px 0 rgba(0,0,0,.15) !important;
  box-shadow: 0 12px 20px 0 rgba(0,0,0,.15) !important;
  overflow: hidden !important;
  opacity: 1;
  transition-property: opacity, bottom;
  /*transition-duration: 0.5s, 0.5s;*/
  transition: .4s ease all;
}

.woot-widget-holder iframe {
  border: 0;
  height: 100% !important;
  width: 100% !important;
}

.woot-widget-holder.has-unread-view {
  border-radius: 0 !important;
  bottom: 94px;
  box-shadow: none !important;
}

.woot-widget-bubble {
  z-index: 2147483000 !important;
  /* -moz-box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  -o-box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  -webkit-box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important; */
  -o-border-radius: 100px !important;
  -moz-border-radius: 100px !important;
  -webkit-border-radius: 100px !important;
  border-radius: 100px !important;
  background: #1f93ff;
  bottom: 20px;
  cursor: pointer;
  height: 64px !important;
  transition: .25s ease all;
}
.woot-widget-bubble:active {
  transform: scale(.9);
  position: fixed;
  width: 64px !important;
  z-index: 2147483000 !important;
}

.woot-widget-bubble.woot-widget--expanded {
  bottom: 24px;
  display: flex;
  height: 48px !important;
  width: auto !important;
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

.woot-widget-bubble.woot-widget--expanded img {
  height: 20px;
  margin: 14px 8px 14px 16px;
  width: 20px;
}

.woot-widget-bubble.woot-elements--left {
  left: 30px;
}

.woot-widget-bubble.woot-elements--right {
  right: 30px;
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

.woot-widget-bubble img {
  width: 34px;
  height: 34px;
  margin: 17px 15px;
.woot-widget-bubble:hover {
  background: #1f93ff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, .4) !important;
}

.woot-widget-bubble img {
  height: 24px;
  margin: 20px;
  width: 24px;
}

@media only screen and (min-width: 667px) {
  .woot-widget-holder.woot-elements--left {
    left: 20px;
 }
  .woot-widget-holder.woot-elements--right {
    right: 20px;
 }
}

.woot--close:hover {
  opacity: 1;
}

.woot--close::before, .woot--close::after {
  background-color: #fff;
  content: ' ';
  height: 24px;
  left: 32px;
  position: absolute;
  top: 20px;
  width: 2px;
}

.woot--close::before {
  transform: rotate(45deg);
}

.woot--close::after {
  transform: rotate(-45deg);
}

.woot--hide {
  bottom: -20000px;
  opacity: 0;
  visibility: hidden !important;
  z-index: -1 !important;
  opacity: 0;
  /*bottom: -20000px;*/
}

@media only screen and (max-width: 667px) {
  .woot-widget-holder {
    height: 100%;
    right: 0;
    top: 0;
    width: 100%;
 }
  .woot-widget-bubble.woot--close {
    bottom: 60px;
    opacity: 0;
    visibility: hidden !important;
    z-index: -1 !important;
 }
}

@media only screen and (min-width: 667px) {
  .woot-widget-holder {
    border-radius: 16px !important;
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
}
`;
