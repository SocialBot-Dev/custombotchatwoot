<template>
  <header class="header-collapsed">
    <div class="header-branding">
      <img v-if="avatarUrl" :src="avatarUrl" alt="avatar" />
       <span class="header-elements">
        <h2 class="title" v-html="title"></h2>
        <span v-if="showAvailableAgents" class="reply-eta">Online (typically replies within 20min)</span>
        <span v-else class="reply-eta">Currently Offline (We'll respond in a few hours)</span>
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
@import url('https://dash.wevrlabs.net/assets/css/fontawesome-all.min.css');
@import AvailableAgents from 'widget/components/AvailableAgents.vue';

.header-collapsed {
  display: flex;
  justify-content: space-between;
  padding: $space-two $space-medium;
  width: 100%;
  box-sizing: border-box;
  color: $color-white;
  
  .close-button:after {
    background-color: #9babbd !important;
  }
  .close-button:before {
    background-color: #9babbd !important;
  }
  
  .header-branding {
    display: flex;
    align-items: normal;

    img {
      border-radius: 50%;
    }
  }
  
  .header-elements {
    .title {
      font-size: $font-size-large;
      font-weight: $font-weight-medium;
      color: $color-white;
      margin-top: 3px;
    }
    .reply-eta {
      color: $color-white;
      display: block;
      opacity: .7!important;
      font-size: 11.6px!important;
      line-height: 16px;
      margin: 7px 2px 0;
    }
    .social-links {
      margin: 10px 0 0;
      display: block;
      
       span a {
          background: rgba(0, 0, 0, 0.25);
          display: inline-block;
          border-radius: 50%;
          padding: 8px 9px;
          width: 14px;
          height: 15px;
          text-align: center;
          transition: .2s ease all;
          margin-right: 5px;
          
          &:hover i:before {
            opacity: 1;
            transition: .3s ease all;
          }
          &:hover {
            background: rgba(0, 0, 0, 0.5);
            transition: .2s ease all;
            transform: translateY(1.5px);
          }
          
       i:before {
          opacity: .8;
          transition: .3s ease all;
          color: #fff;
          font-size: 15px;
      }
        
        i.fab.fa-whatsapp:before {
             background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADpElEQVRoge2ZS4hWZRjHf4/jqGUXldSyCxTkFHSZyCBtUUq1qI0LobAWLUokCFqEkbUIhqCSICqyEqJFdCGIQKhFDYVl1KIIA5WwjemIlaYxZk3mr8WZD6Yz7/m+93yXmUXz233v5Xn///f5znkvB2aY4f9NdCOIOgu4AVgNrAAGgAuB+eNjjAIjwA/AN8BnwFcR8U83xm8bdZn6lLrf+oyoW9RLpkP4IvUl9c82hJcZU7epi6dK/Dr15y4IL3NUvbeXwvvUF3ogvMw2tb/b4ueq70+B+AYfqfO7Jb5PfW8KxTf4RJ3bDQPPT4P4Bq91Kn6tenoaDaiub6axciFTzwH2AMs6moXO+Q0YiIhfUpWzmnR8kjzx+4BhIDlAF1gIDNXqoS5R/8hI79MW24jGqjzao7/RX+rFKa1VGdgInNHC58fAYxFxGiAiRoC3as1UPnOAh7JaqqHuy5iVmxN9B3uUAdUDjme7lYFrM4L9rc6u6L+zhyZWlsdLOVqdkahfI+JURd0bGf3b5ZZyQcrA9RmBFqvzKuqurqOoJivKBSkDAxmB+lLB1DuBB+vryubyckHKwPmZwe5PlL1KYa5XXFAuSBk4OzPYPepgqezl2pLqMUlbykDVw1lmNrBVnTjjzwJftCEsF8sFKQPHagS8EdjU+DH+ZlpHcXjvBb+XC1IGjtQMOqTe3vgREYeBNcC3Fe2/o9hn7a85DhQ3G82xONLV5ai6vBRnnvqiempCu0PqReP1/ep96p4a47yTY2BjGwa0uFq5LBHvGvVti4uAmxL1s9S71ZMZYzySY+CKNg2oHlQnrQ85qD9lxL8uN9iuDkycsMhi9q2fxT1Tq5Pfj6mYVbu7TrbFZwJbgWF1VWafDbS+5nwzIia9RpOoC9VjHWRhIjvUB9RFiXH61c3+90FPcUJdmtLa7Ew8BDyR5TiPMeBr4EuKc+5SYC1waUbf5yKi9QM8EfXhLmWgUw6p51bpbHbCubWW494gsCEijlc1SBpQ5wCTjozTwJaI2N6sQVUGVgJndV9PLT4ANrdqVGXgtu5qqc27wF05X3CqDEzX/1/gGWB9RIy1F6FYA1q9l3vBAfWOunpTGVhD82PhSWAH8DqJ/XkbjFLM+pUR8WHH0dRXSjNzRN2ublJXWbyhGm0XqI+q37cx43vVx9XzOtE7aSVWPwUOAjuBz4HdjevDFsaXUzw7g8BVwBJgAUWWjwOHgb0Un1mHI2J3J8JnmGGGgn8BSiRCGCWj8SIAAAAASUVORK5CYII=);
            transform: scale(1.7);
            background-size: contain!important;
            background-repeat: no-repeat!important;
            background-position: 50%!important;
            display: inline-block!important;
            width: 13px!important;
            height: 10px!important;
            margin-top: 2px!important;
            content: "" !important;
        }
      }
    }
   }

  img {
    height: 55px;
    width: 55px;
    margin-right: 1.4rem;
    box-shadow: 0 20px 30px -13px rgba(0, 0, 0, 0.55);
  }

  .close-button {
    /*display: none;*/
  }
}
</style>
