const fs = require('fs');
const args = require('args');
const path = require('path');
const { resolve } = require('path');

args.options([
  {
    name: 'source',
    description: 'source folder'
  },
  {
    name: 'dest',
    description: 'destination folder'
  },
  {
    name: 'prefix',
    description: 'file name prefix'
  }
])

const copyFile = (source, dest) => new Promise((resolve, reject) => {
  // fs.writeFileSync(dest, '');
  fs
    .createReadStream(source)
    .pipe(fs.createWriteStream(dest))
    .on('finish', () => {
      console.log(`Copy file: ${source} -> ${dest}`);
      resolve(true);
    })
    .on('error', err => reject(err))
});

const main = async (
  sourceFolder,
  destFolder,
  prefix
) => {
  try {
    if (!sourceFolder || !destFolder) {
      throw new Error('Source and destinition foleders should be specified!');
    }

    const files = fs.readdirSync(sourceFolder);
    
    await Promise.all(files.map((f, i) => {
      const copyFileName = prefix
        ? `${prefix}-${i + 1}${path.extname(f)}`
        : f;
      return copyFile(
        path.join(sourceFolder, f),
        path.join(destFolder, copyFileName)
      )
    }));

    console.log('DONE!');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}


const flags = args.parse(process.argv);

main(
  flags.source,
  flags.dest,
  flags.prefix
);

