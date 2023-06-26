// BaseTab.stories.js

import BaseTab from "@/components/UI/BaseTab.vue";

//👇 This default export determines where your story goes in the story list
export default {
  component: BaseTab,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { BaseTab },
    setup() {
      return { args };
    },
    template: '<BaseTab v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};
