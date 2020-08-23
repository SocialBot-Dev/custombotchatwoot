<template>
  <div class="custom-attributes--panel">
    <contact-details-item
      :title="$t('CONTACT_PANEL.CUSTOM_ATTRIBUTES.TITLE')"
      icon="ion-code"
    />
    <div
      v-for="attribute in listOfAttributes"
      :key="attribute"
      class="custom-attribute--row"
    >
      <div class="custom-attribute--row__attribute">
        {{ attribute }}
      </div>
      <div>
        {{ customAttributes[attribute] }}
      </div>
    </div>
  </div>
</template>

<script>
import ContactDetailsItem from './ContactDetailsItem.vue';

export default {
  components: {
    ContactDetailsItem,
  },
  props: {
    customAttributes: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    listOfAttributes() {
      return Object.keys(this.customAttributes).filter(key => {
        const value = this.customAttributes[key];
        return value !== null && value !== undefined && value !== '';
      });
    },
  },
};
</script>

<style scoped>
.custom-attributes--panel {
  border-top: $color-border-dark2;
  padding: var(--space-normal);
}

.custom-attribute--row {
  margin-bottom: var(--space-small);
  
   div {
    border: 1px solid #333;
    padding: 5px 15px;
    display: inline-flex;
  }
}

.custom-attribute--row__attribute {
  font-weight: 500;
  margin: 0 0 8px 0px;
  background: #31302a;
  color: #8e8e8e;
}
</style>
