import { Elena } from '@elenajs/core';

export default class Card extends Elena(HTMLElement) {
	static tagName = 'incd-card';
	static events = ['click', 'focus', 'blur'];
}
Card.define();
