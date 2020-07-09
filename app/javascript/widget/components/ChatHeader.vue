<template>
  <header class="header-collapsed">
    <div class="header-branding">
      <img v-if="avatarUrl" :src="avatarUrl" alt="avatar" />
       <span class="header-elements">
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
@import url('https://dash.wevrlabs.net/assets/css/fontawesome-all.min.css');

.header-collapsed {
  display: flex;
  justify-content: space-between;
  padding: $space-two $space-medium;
  width: 100%;
  box-sizing: border-box;
  color: $color-white;

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
      
      span a:hover i:before {
              opacity: 1;
              transition: .3s ease all;
          }
      span a {
        background: rgba(0, 0, 0, 0.25);
        display: inline-block;
        border-radius: 50%;
        padding: 9px 5px;
          
         i:before {
            background-size: contain!important;
            background-repeat: no-repeat!important;
            background-position: center!important;
            display: inline-block!important;
            width: 20px!important;
            height: 10px!important;
            margin-top: 2px!important;
            content: "";
            opacity: .9;
            transition: .3s ease all;
        }
        i.fas.fa-envelope:before {
            background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNiAxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik03Ljk1IDcuOTNMNi4wNDUgNi4zOC41OTggMTAuNzIzYy4xOTguMTcuNDY1LjI3Ny43Ni4yNzdoMTMuMTg0Yy4yOTQgMCAuNTYtLjEwNi43NTctLjI3N0w5Ljg1NSA2LjM4IDcuOTUgNy45M3pNMTUuMzAyLjI5OGExLjEwOCAxLjEwOCAwIDAgMC0uNzYtLjI5OEgxLjM1OEMxLjA2NCAwIC43OTguMTE0LjYuM2w3LjM1IDUuNzVMMTUuMzAyLjI5OHpNLjI1IDEuMjQzdjguNTkxbDUuMTctNC4yNDd6TTEwLjQ4IDUuNTg5bDUuMTcgNC4yNDVWMS4yNDN6Ii8+PC9nPjwvc3ZnPg==)!important;
        }
        i.fab.fa-whatsapp:before {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADpElEQVRoge2ZS4hWZRjHf4/jqGUXldSyCxTkFHSZyCBtUUq1qI0LobAWLUokCFqEkbUIhqCSICqyEqJFdCGIQKhFDYVl1KIIA5WwjemIlaYxZk3mr8WZD6Yz7/m+93yXmUXz233v5Xn///f5znkvB2aY4f9NdCOIOgu4AVgNrAAGgAuB+eNjjAIjwA/AN8BnwFcR8U83xm8bdZn6lLrf+oyoW9RLpkP4IvUl9c82hJcZU7epi6dK/Dr15y4IL3NUvbeXwvvUF3ogvMw2tb/b4ueq70+B+AYfqfO7Jb5PfW8KxTf4RJ3bDQPPT4P4Bq91Kn6tenoaDaiub6axciFTzwH2AMs6moXO+Q0YiIhfUpWzmnR8kjzx+4BhIDlAF1gIDNXqoS5R/8hI79MW24jGqjzao7/RX+rFKa1VGdgInNHC58fAYxFxGiAiRoC3as1UPnOAh7JaqqHuy5iVmxN9B3uUAdUDjme7lYFrM4L9rc6u6L+zhyZWlsdLOVqdkahfI+JURd0bGf3b5ZZyQcrA9RmBFqvzKuqurqOoJivKBSkDAxmB+lLB1DuBB+vryubyckHKwPmZwe5PlL1KYa5XXFAuSBk4OzPYPepgqezl2pLqMUlbykDVw1lmNrBVnTjjzwJftCEsF8sFKQPHagS8EdjU+DH+ZlpHcXjvBb+XC1IGjtQMOqTe3vgREYeBNcC3Fe2/o9hn7a85DhQ3G82xONLV5ai6vBRnnvqiempCu0PqReP1/ep96p4a47yTY2BjGwa0uFq5LBHvGvVti4uAmxL1s9S71ZMZYzySY+CKNg2oHlQnrQ85qD9lxL8uN9iuDkycsMhi9q2fxT1Tq5Pfj6mYVbu7TrbFZwJbgWF1VWafDbS+5nwzIia9RpOoC9VjHWRhIjvUB9RFiXH61c3+90FPcUJdmtLa7Ew8BDyR5TiPMeBr4EuKc+5SYC1waUbf5yKi9QM8EfXhLmWgUw6p51bpbHbCubWW494gsCEijlc1SBpQ5wCTjozTwJaI2N6sQVUGVgJndV9PLT4ANrdqVGXgtu5qqc27wF05X3CqDEzX/1/gGWB9RIy1F6FYA1q9l3vBAfWOunpTGVhD82PhSWAH8DqJ/XkbjFLM+pUR8WHH0dRXSjNzRN2ublJXWbyhGm0XqI+q37cx43vVx9XzOtE7aSVWPwUOAjuBz4HdjevDFsaXUzw7g8BVwBJgAUWWjwOHgb0Un1mHI2J3J8JnmGGGgn8BSiRCGCWj8SIAAAAASUVORK5CYII=);
            transform: scale(1.7);
        }
        i.fab.fa-facebook-f:before {
            background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy45OS4yNUMzLjg1My4yNS41IDMuMzc0LjUgNy4yMjhjMCAyLjE5NiAxLjA5IDQuMTU1IDIuNzkxIDUuNDM0djIuNjYxbDIuNTUtMS40MDhjLjY4MS4xOSAxLjQwMi4yOTIgMi4xNDkuMjkyIDQuMTM3IDAgNy40OS0zLjEyNSA3LjQ5LTYuOTc5UzEyLjEyNy4yNSA3Ljk5LjI1em0uNzQ0IDkuMzk3TDYuODI3IDcuNiAzLjEwNSA5LjY0NyA3LjIgNS4yNzRsMS45NTQgMi4wNDcgMy42NzUtMi4wNDctNC4wOTQgNC4zNzN6IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNGRkYiLz48L3N2Zz4=)!important;
            transform: scale(1.6);
        }
        i.fab.fa-twitter:before {
            background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNyAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuMjU2IDIuMTQ0YTYuODc0IDYuODc0IDAgMCAxLTEuNjQ1IDEuNjk2IDkuMzIgOS4zMiAwIDAgMS0uMzc2IDMuMDYyIDkuNTI1IDkuNTI1IDAgMCAxLTEuMTczIDIuNTI0IDkuOTIxIDkuOTIxIDAgMCAxLTEuODc0IDIuMTM4Yy0uNzI0LjYyLTEuNTk4IDEuMTEzLTIuNjIgMS40ODJhOS41OSA5LjU5IDAgMCAxLTMuMjguNTU0QTkuMTEgOS4xMSAwIDAgMSAuMjUgMTIuMTI3Yy4yMzcuMDI3LjUwMS4wNDEuNzkyLjA0MWE2LjQyMyA2LjQyMyAwIDAgMCA0LjA3My0xLjQwMiAzLjE5OCAzLjE5OCAwIDAgMS0xLjkxLS42NTUgMy4yMDkgMy4yMDkgMCAwIDEtMS4xNTctMS42MmMuMjIzLjAzNC40My4wNTEuNjIuMDUxLjI5IDAgLjU3OC0uMDM3Ljg2Mi0uMTEyYTMuMjI3IDMuMjI3IDAgMCAxLTEuODg0LTEuMTMyQTMuMTcgMy4xNyAwIDAgMSAuOSA1LjIxMXYtLjA0Yy40Ni4yNTcuOTU1LjM5NSAxLjQ4My40MTZhMy4yNzcgMy4yNzcgMCAwIDEtMS4wNjctMS4xNjhBMy4xOTYgMy4xOTYgMCAwIDEgLjkyIDIuODU1YzAtLjU5Ni4xNS0xLjE0OC40NDctMS42NTZhOS4zIDkuMyAwIDAgMCAyLjk5MSAyLjQyMiA5LjE0IDkuMTQgMCAwIDAgMy43NzMgMS4wMTEgMy42NDQgMy42NDQgMCAwIDEtLjA4MS0uNzUyYzAtLjkwNy4zMi0xLjY4Ljk2LTIuMzJDOS42NS45MiAxMC40MjMuNiAxMS4zMy42Yy45NDggMCAxLjc0Ny4zNDUgMi4zOTcgMS4wMzZBNi40MzIgNi40MzIgMCAwIDAgMTUuODEuODQ0YTMuMTg1IDMuMTg1IDAgMCAxLTEuNDQyIDEuODA4IDYuNTM2IDYuNTM2IDAgMCAwIDEuODktLjUwOHoiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==)!important;
            transform: scale(1.35);
        }
      }
    }
   }

  img {
    height: 55px;
    width: 55px;
    margin-right: 1.4rem;
  }

  .close-button {
    /*display: none;*/
  }
}
</style>
