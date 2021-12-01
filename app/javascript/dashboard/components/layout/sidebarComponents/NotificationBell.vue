<template>
  <div class="notifications-link">
    <primary-nav-item
      name="NOTIFICATIONS"
      icon="alert"
      :to="`/app/accounts/${accountId}/notifications`"
      :count="unreadCount"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PrimaryNavItem from 'dashboard/modules/sidebar/components/PrimaryNavItem';

export default {
  components: { PrimaryNavItem },
  computed: {
    ...mapGetters({
      accountId: 'getCurrentAccountId',
      notificationMetadata: 'notifications/getMeta',
    }),
    unreadCount() {
      if (!this.notificationMetadata.unreadCount) {
        return '0';
      }

      return this.notificationMetadata.unreadCount < 100
        ? `${this.notificationMetadata.unreadCount}`
        : '99+';
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.notifications {
  font-size: var(--font-size-big);
  margin-bottom: auto;
  margin-left: auto;
  margin-top: auto;
  position: relative;

  .unread-badge {
    background: #920606;
    border-radius: var(--space-small);
    color: var(--white);
    font-size: var(--font-size-micro);
    font-weight: var(--font-weight-black);
    left: var(--space-slab);
    padding: 0 var(--space-smaller);
    position: absolute;
    top: var(--space-smaller);
  }
  .notifications-link {
    margin-bottom: var(--space-small);
  }
}
</style>
