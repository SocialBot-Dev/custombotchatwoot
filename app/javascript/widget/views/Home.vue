<template>
  <div class="flex flex-1 flex-col justify-end">
    <div class="flex flex-1 overflow-auto">
      <!-- Load Conversation List Components Here -->
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
    return {};
  },
  computed: {
    ...mapGetters({
      availableAgents: 'agent/availableAgents',
      widgetColor: 'appConfig/getWidgetColor',
      activeCampaign: 'campaign/getActiveCampaign',
      conversationSize: 'conversation/getConversationSize',
    }),
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
}
</style>