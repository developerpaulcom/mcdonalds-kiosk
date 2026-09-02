import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

// Gebruik: npm run new <Naam> [atoms|molecules|organisms|pages]
const [name, layer = 'atoms'] = process.argv.slice(2);

if (!name) {
  console.error('Gebruik: npm run new <Naam> [atoms|molecules|organisms|pages]');
  process.exit(1);
}

const validLayers = ['atoms', 'molecules', 'organisms', 'pages'];
if (!validLayers.includes(layer)) {
  console.error(`Onbekende laag "${layer}". Kies uit: ${validLayers.join(', ')}`);
  process.exit(1);
}

const base = layer === 'pages'
  ? path.join('src', 'pages', name)
  : path.join('src', 'components', layer, name);

if (existsSync(base)) {
  console.error(`✗ ${base} bestaat al`);
  process.exit(1);
}

const cls = name.toLowerCase();

await mkdir(base, { recursive: true });

await writeFile(path.join(base, `${name}.tsx`),
`import './styles.scss';

function ${name}() {
  return (
    <div className="${cls}">${name}</div>
  );
}

export default ${name};
`);

await writeFile(path.join(base, 'styles.scss'), `.${cls} {\n}\n`);

console.log(`✓ ${base}/${name}.tsx + styles.scss aangemaakt`);
