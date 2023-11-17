import { useState } from 'react';

interface Props {
  text: string;
}

export default function ButtonCopy(props: Props) {
  const { text } = props;

  const [tooltipText, setTooltipText] = useState('Copiar');

  function copyClipboard() {
    navigator.clipboard.writeText(text);
    setTooltipText('Copiado!');
  }

  return (
    <span
      className="tooltip tooltip-top"
      data-tooltip={tooltipText}
      onMouseEnter={() => setTooltipText('Copiar')}
    >
      <button onClick={copyClipboard}>
        <i className="fa fa-clipboard"></i>
      </button>
    </span>
  );
}
