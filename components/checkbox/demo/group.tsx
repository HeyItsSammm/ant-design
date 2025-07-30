import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxOptionType, GetProp } from 'antd';

const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options: CheckboxOptionType<string>[] = [
  { label: 'Apple', value: 'Appointment / Recruitment of staff members', className: 'label-1' },
  { label: 'Pear', value: 'Supervision', className: 'label-2' },
  { label: 'Orange', value: 'Promotion', className: 'label-3' },
  { label: 'Lemon', value: 'Awarding of work / contracts', className: 'label-4' },
  { label: 'Guava', value: 'Provision of other benefits', className: 'label-5' },
];

const optionsWithDisabled: CheckboxOptionType<string>[] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', className: 'label-3', disabled: false },
];

const App: React.FC = () => (
  <>
    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </>
);

export default App;
