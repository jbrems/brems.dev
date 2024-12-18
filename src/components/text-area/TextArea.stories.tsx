import { TextArea } from './TextArea'

export default {
  component: TextArea,
}

export const Default = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    withActions: true,
  },
}

export const JSON = {
  args: {
    children: '{"name":"John Doe","age":30,"isStudent":false,"hobbies":["reading","gaming","cycling"],"address":{"street":"123 Main St","city":"Anytown","zip":"12345"}}',
    withActions: true,
  },
}