<script setup lang="ts">
import {
  simpleButton,
  type SimpleButtonVariant,
} from "../../styled-system/recipes";

const props = defineProps<{
  visual: SimpleButtonVariant["visual"];
  size: SimpleButtonVariant["size"];
  shape: SimpleButtonVariant["shape"];
}>();
</script>

<template>
  <button
    :class="[
      simpleButton({
        visual: props.visual,
        size: props.size,
        shape: props.shape,
      }),
    ]"
  >
    Click me
  </button>
</template>
