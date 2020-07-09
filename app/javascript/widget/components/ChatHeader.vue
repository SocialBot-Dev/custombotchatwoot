<template>
  <header class="header-collapsed">
    <div class="header-branding">
      <img v-if="avatarUrl" :src="avatarUrl" alt="avatar" />
       <span class="header-elements" v-html="introheaderElements">
        <h2 class="title" v-html="title"></h2>
        <span class="reply-eta">Usually replies within 1 hour</span>
        <span class="social-links">
            <span class="email">
                <a href="mailto:care@wevrlabs.net" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-envelope"></i>
                </a>
            </span>
            <span class="whatsapp">
                <a href="https://wa.me/19712514959" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </span>
            <span class="facebook">
                <a href="https://fb.me/WevrLabs" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </span>
            <span class="twitter">
                <a href="https://twitter.com/WevrLabs" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                </a>
            </span>
        </span>
    </span>
    </div>
    <span class="close-button" @click="closeWindow"></span>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import { IFrameHelper } from 'widget/helpers/utils';

export default {
  name: 'ChatHeader',
  props: {
    avatarUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters({
      widgetColor: 'appConfig/getWidgetColor',
    }),
  },
  methods: {
    closeWindow() {
      if (IFrameHelper.isIFrame()) {
        IFrameHelper.sendMessage({
          event: 'toggleBubble',
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '~widget/assets/scss/variables.scss';
@import '~widget/assets/scss/mixins.scss';

.header-collapsed {
  display: flex;
  justify-content: space-between;
  padding: $space-two $space-medium;
  width: 100%;
  box-sizing: border-box;
  color: $color-white;

  .header-branding {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
    }
  }

  .title {
    font-size: $font-size-large;
    font-weight: $font-weight-medium;
    color: $color-white;
  }
  
  .reply-eta {
    color: $color-white;
    display: block;
    opacity: .8!important;
    font-size: 11.6px!important;
    line-height: 16px;
    margin: 7px 2px 0;
  }
  .social-links {
    span {
      background: #fff;
      display: inline-block;
      border-radius: 50%;
    }
  }

  img {
    height: 44px;
    width: 44px;
    margin-right: $space-small;
  }

  .close-button {
    display: none;
  }
}
</style>
