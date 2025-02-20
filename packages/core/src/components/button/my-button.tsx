import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: { delegatesFocus: true },
})
export class MyButton {
  render() {
    return (<div><button><slot></slot></button></div>);
  }
}
