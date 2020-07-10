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
  transition: .3s ease all;
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
  bottom: 94px;
}

.woot-widget-holder iframe {
  width: 100% !important;
  height: 100% !important;
  border: 0;
}

.woot-widget-bubble {
  z-index: 2147483000 !important;
  -moz-box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  -o-box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  -webkit-box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  -o-border-radius: 100px !important;
  -moz-border-radius: 100px !important;
  -webkit-border-radius: 100px !important;
  border-radius: 100px !important;
  background: #1f93ff;
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  width: 64px !important;
  height: 64px !important;
  transition: .3s ease all;
}
.woot-widget-bubble:active {
  transform: scale(.9);
}

.woot-widget-bubble.woot-elements--left {
  left: 20px;
}

.woot-widget-bubble.woot-elements--right {
  right: 20px;
}

@media only screen and (min-width: 667px) {
  .woot-widget-holder.woot-elements--left {
    left: 20px;
  }

  .woot-widget-holder.woot-elements--right {
    right: 20px;
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
  margin: 16px 16px;
}

.woot--close:hover {
  opacity: 1;
}

.woot--close:before, .woot--close:after {
  position: absolute;
  left: 32px;
  top: 20px;
  content: ' ';
  height: 24px;
  width: 2px;
  background-color: white;
}

.woot--close:before {
  transform: rotate(45deg);
}

.woot--close:after {
  transform: rotate(-45deg);
}


.woot--hide {
  visibility: hidden !important;
  z-index: -1 !important;
  opacity: 0;
  /*bottom: -20000px;*/
}

@media only screen and (max-width: 667px) {
  .woot-widget-holder {
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
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
`;
