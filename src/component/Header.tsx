import React from 'react';

interface Props{
  text: string
}

export default function Header(props: Props) {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};