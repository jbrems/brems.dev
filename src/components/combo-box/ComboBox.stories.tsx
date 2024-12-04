import { fn } from '@storybook/test'
import { getFirstGenPocemonNames } from "@/lib/pocemon.utils";
import { ComboBox } from "./ComboBox";

export default {
  component: ComboBox,
}

export const Default = {
  args: {
    options: getFirstGenPocemonNames().map((name, index) => ({ value: index + '', label: name })).slice(1),
    selectOption: fn(),
    disabled: false,
  },
}