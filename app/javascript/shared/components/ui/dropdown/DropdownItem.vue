<template>
  <li
    class="dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
    }"
    :tabindex="disabled ? null : -1"
    :aria-disabled="disabled"
  >
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'WootDropdownItem',
  componentName: 'WootDropdownMenu',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.dropdown-menu__item {
  list-style: none;

  ::v-deep {
    a,
    .button {
      width: 100%;
      text-align: left;
      white-space: nowrap;
      display: inline-flex;
      border-radius: var(--border-radius-normal);
      background: transparent;

      &:hover {
        background: var(--color-border);
        color: var(--b-400) !important;
      }

      &:focus {
        background: var(--color-border);
        color: var(--b-400) !important;
      }
    }
  }
}
</style>
