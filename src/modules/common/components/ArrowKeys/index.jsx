import React from 'react';
import './styles.css';

export default function ArrowKeys() {
  return (
    <div className="arrow-keys" aria-label="keyboard arrows">
      <kbd className="arrow-key arrow-key--top" />
      <div className="arrow-keys__bottom-layout">
        <kbd className="arrow-key arrow-key--left" />
        <kbd className="arrow-key arrow-key--down" />
        <kbd className="arrow-key arrow-key--right" />
      </div>
    </div>
  );
}
