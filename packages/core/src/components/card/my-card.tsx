import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  render() {
    return (
      <div class="card">
        <h1 class="card__title">
          <slot name="title" />
        </h1>
        <div class="card__content">
          <slot />
        </div>
      </div>
    );
  }
}
