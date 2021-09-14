<template>
  <div class="custom-attributes--panel">
    <div
      v-for="attribute in listOfAttributes"
      :key="attribute"
      class="custom-attribute--row"
    >
      <div class="custom-attribute--row__attribute">
        {{ attribute }}
      </div>
      <div>
        <span v-html="valueWithLink(customAttributes[attribute])"></span>
      </div>
    </div>
    <p v-if="!listOfAttributes.length">
      {{ $t('CUSTOM_ATTRIBUTES.NOT_AVAILABLE') }}
    </p>
  </div>
</template>

<script>
import MessageFormatter from 'shared/helpers/MessageFormatter.js';

export default {
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
  methods: {
    valueWithLink(attribute) {
      const parsedAttribute = this.parseAttributeToString(attribute);
      const messageFormatter = new MessageFormatter(parsedAttribute);
      return messageFormatter.formattedMessage;
    },
    parseAttributeToString(attribute) {
      switch (typeof attribute) {
        case 'string':
          return attribute;
        case 'object':
          return JSON.stringify(attribute);
        default:
          return `${attribute}`;
      }
    },
  },
};
</script>

<style scoped>
.custom-attributes--panel {
  padding: 0 var(--space-slab) var(--space-slab);
  margin-bottom: var(--space-normal);
}

.conv-details--item {
  padding-bottom: 0;
}
.custom-attribute--row {
  margin-bottom: var(--space-small);
  margin-left: var(--space-medium);
}
.custom-attribute--row div {
    border: 1px solid #333;
    padding: 5px 15px;
    display: inline-flex;
    border-radius: 3px;
}
.custom-attribute--row span {
    word-break: break-all;
}
.custom-attribute--row div {
  span {
    p {
      margin-bottom: 0 !important;
    }
  }
}

.custom-attribute--row__attribute {
  font-weight: 500;
  margin: 0 0 8px 0px;
  background: #31302a;
  color: #8e8e8e;
}
</style>
