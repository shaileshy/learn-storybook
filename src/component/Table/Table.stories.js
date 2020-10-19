import React from 'react'
import {Table} from './Table'

export default {
    title: 'Example/Table',
    component: Table,
}

const Template = (args) => <Table {...args} />;

export const Light = Template.bind({});
Light.args = {
  className: 'table-light',
  label: 'Table Light',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'table-dark',
  label: 'Table Dark',
};