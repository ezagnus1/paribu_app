// BaseInput.stories.js

import BaseInput from "@/components/UI/BaseInput.vue";

//👇 This default export determines where your story goes in the story list
export default {
  component: BaseInput,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      return { args };
    },
    template: '<BaseInput v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};
