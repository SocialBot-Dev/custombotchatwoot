<template>
  <div
    class="chat-bubble user"
    v-html="formatMessage(message, false)"
  />
</template>

<script>
import messageFormatterMixin from 'shared/mixins/messageFormatterMixin';

export default {
  name: 'UserMessageBubble',
  mixins: [messageFormatterMixin],
  props: {
    message: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
    widgetColor: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~widget/assets/scss/variables.scss';

.chat-bubble.user::v-deep pre {
  background: $color-primary-light;
  color: $color-body;
  overflow: scroll;
  padding: $space-smaller;

  blockquote {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  dd {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  dl {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  figure {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  h1 {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  h2 {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  h3 {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  h4 {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  h5 {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  h6 {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  p {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
  pre {
    text-align: start !important;
    unicode-bidi: plaintext;
  }
}
</style>
