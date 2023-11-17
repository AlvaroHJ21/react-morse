export const morse: {
  [key: string]: string;
} = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-.',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '---.',
  ' ': '/',
};

export function encodeMorse(text: string) {
  return text
    .toUpperCase()
    .split('')
    .map((char) => morse[char])
    .join(' ');
}

export function decodeMorse(text: string) {
  return text
    .split(' ')
    .map((char) => {
      const key = Object.keys(morse).find((key) => morse[key] === char);
      return key ? key : '';
    })
    .join('');
}
