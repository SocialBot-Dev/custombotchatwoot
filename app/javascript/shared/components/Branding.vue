<template>
  <a
    class="branding branding--link" href="https://dash.wevrlabs.net/knowledgebase.php?utm_source=chat_widget" target="_blank">
    <!-- <img alt="WevrLabs Hosting" :src="globalConfig.logoThumbnail" /> -->
    <i class="fa fa-book"></i>
    <span>
      Explore Help Articles
    </span>
  </a>
</template>

<script>
import globalConfigMixin from 'shared/mixins/globalConfigMixin';

const {
  LOGO_THUMBNAIL: logoThumbnail,
  BRAND_NAME: brandName,
  WIDGET_BRAND_URL: widgetBrandURL,
} = window.globalConfig || {};

export default {
  mixins: [globalConfigMixin],
  data() {
    return {
      globalConfig: {
        brandName,
        logoThumbnail,
        widgetBrandURL,
      },
    };
  },
  computed: {
    brandRedirectURL() {
      try {
        const referrerHost = this.$store.getters['appConfig/getReferrerHost'];
        const baseURL = `${this.globalConfig.widgetBrandURL}?utm_source=${
          referrerHost ? 'widget_branding' : 'survey_branding'
        }`;
        if (referrerHost) {
          return `${baseURL}&utm_referrer=${referrerHost}`;
        }
        return baseURL;
      } catch (e) {
        // Suppressing the error as getter is not defined in some cases
      }
      return '';
    },
  },
};
</script>

<style scoped lang="scss">
@import '~widget/assets/scss/variables.scss';

.branding--image {
  margin-right: $space-smaller;
  max-width: $space-slab;
  max-height: $space-slab;
}

.branding--link {
  color: #6f6f6f;
  cursor: pointer;
  display: inline-flex;
  filter: grayscale(1);
  font-size: $font-size-small;
  opacity: 0.9;
  text-decoration: none;
  padding: $space-normal 0 $space-slab;
  cursor: pointer;
  transition: .3s ease all;
  justify-content: center;

  &:hover {
    filter: grayscale(0);
    opacity: 1;
    color: #232323;
    transition: .3s ease all;
  }

  img {
    margin-right: $space-smaller;
    /*max-width: $space-slab;*/
    max-height: 1.8rem;
  }
  i.fas, i.fa {
    margin: 0 4px;
  }
}
</style>
