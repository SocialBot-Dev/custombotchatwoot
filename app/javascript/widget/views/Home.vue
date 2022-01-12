<template>
  <div
    v-if="!conversationSize && isFetchingList"
    class="flex flex-1 items-center h-full bg-black-25 justify-center"
  >
    <spinner size="" />
  </div>
  <div v-else class="home" @keydown.esc="closeChat">
    <div
      class="header-wrap bg-white"
      :class="{ expanded: !isHeaderCollapsed, collapsed: isHeaderCollapsed }"
      :style="{ background: widgetColor }"
    >
      <transition
        enter-active-class="transition-all delay-200 duration-300 ease"
        leave-active-class="transition-all duration-200 ease-in"
        enter-class="opacity-0 transform"
        enter-to-class="opacity-100 transform"
        leave-class="opacity-100 transform"
        leave-to-class="opacity-0 transform"
      >
        <chat-header-expanded
          v-if="!isHeaderCollapsed"
          :intro-heading="channelConfig.welcomeTitle"
          :intro-body="channelConfig.welcomeTagline"
          :avatar-url="channelConfig.avatarUrl"
          :show-popout-button="showPopoutButton"
        />
        <chat-header
          v-if="isHeaderCollapsed"
          :title="channelConfig.websiteName"
          :avatar-url="channelConfig.avatarUrl"
          :show-popout-button="showPopoutButton"
          :available-agents="availableAgents"
        />
      </transition>
    </div>
    <banner />
    <div class="flex flex-1 flex-col justify-end">
      <!-- Load Converstion List Components Here -->
    </div>
    <team-availability
      :available-agents="availableAgents"
      :has-conversation="!!conversationSize"
      @start-conversation="startConversation"
    />
  </div>
</template>

<script>
import configMixin from '../mixins/configMixin';
import TeamAvailability from 'widget/components/TeamAvailability';
import { mapGetters } from 'vuex';
import { BUS_EVENTS } from 'shared/constants/busEvents';
import routerMixin from 'widget/mixins/routerMixin';
export default {
  name: 'Home',
  components: {
    TeamAvailability,
  },
  mixins: [configMixin, routerMixin],
  props: {
    hasFetched: {
      type: Boolean,
      default: false,
    },
    showPopoutButton: {
      type: Boolean,
      default: false,
    },
    widgetColor: {  
      type: String, 
      default: '',
    },
    isCampaignViewClicked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOnCollapsedView: false,
      isOnNewConversation: false,
    };
  },
  computed: {
    ...mapGetters({
      availableAgents: 'agent/availableAgents',
      conversationAttributes: 'conversationAttributes/getConversationParams',
      groupedMessages: 'conversation/getGroupedConversation',
      isFetchingList: 'conversation/getIsFetchingList',
      widgetColor: 'appConfig/getWidgetColor',
      currentUser: 'contacts/getCurrentUser',
      activeCampaign: 'campaign/getActiveCampaign',
      conversationSize: 'conversation/getConversationSize',
    }),
  },
  mounted() {
    bus.$on(BUS_EVENTS.START_NEW_CONVERSATION, () => {
      this.isOnCollapsedView = true;
      this.isOnNewConversation = true;
    });
  },
  methods: {
    startConversation() {
      if (this.preChatFormEnabled && !this.conversationSize) {
        return this.replaceRoute('prechat-form');
      }
      return this.replaceRoute('messages');
    },
  },
};
</script>

<style scoped lang="scss">
@import '~widget/assets/scss/variables';
@import '~widget/assets/scss/mixins';
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  background: #f4f6fb;
  .header-wrap {
    border-radius: $space-normal $space-normal 0 0;
    flex-shrink: 0;
    transition: max-height 300ms;
    z-index: 99;
    @include shadow-large;
    border-radius: 0; 
    background-image: linear-gradient(125deg,rgba(255, 255, 255, 0.25) -20%,rgba(0,0,0,0.45)) !important; 
    overflow: hidden;

    &.expanded {
      max-height: 100%;
    }
    &.collapsed {
      max-height: 100%;
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 667px) {
      border-radius: 0;
    }
  }
  .footer-wrap {
    flex-shrink: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -$space-normal;
      left: 0;
      width: 100%;
      height: $space-normal;
      opacity: 0.1;
      background: linear-gradient(
        to top,
        $color-background,
        rgba($color-background, 0)
      );
    }
  }
  .input-wrap {
    padding: 0 $space-two;
  }
}
</style>
