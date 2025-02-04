import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /** The first name */
  @Prop() first: string;

  /** The middle name */
  @Prop() middle: string;

  /** The last name */
  @Prop() last: string;

  connectedCallback() {
    console.log('Component will connect', this.first, this.middle, this.last);
  }

  componentWillLoad() {
    console.log('Component will load', this.first, this.middle, this.last);
  }

  componentDidLoad() {
    console.log('Component did load', this.first, this.middle, this.last);
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
