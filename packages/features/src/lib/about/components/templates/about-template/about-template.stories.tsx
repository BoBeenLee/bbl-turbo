import { Story, Meta } from '@storybook/react';
import { LayoutTemplate } from '@bbl-turbo/ui-components';
import { AboutTemplate, AboutTemplateProps } from './about-template';

export default {
  component: AboutTemplate,
  title: 'templates/AboutTemplate',
  argTypes: {},
} as Meta;

const Template: Story<AboutTemplateProps> = (args) => (
  <LayoutTemplate>
    <AboutTemplate {...args} />
  </LayoutTemplate>
);

export const Primary = Template.bind({});
Primary.args = {};
