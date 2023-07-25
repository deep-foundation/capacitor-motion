import {execa} from 'execa';
import replaceInFile from 'replace-in-file';

const generate = async () => {
  await execa('git', ['config', '--global', 'user.name', 'FreePhoenix888']);
  await execa('git', ['config', '--global', 'user.email', 'freephoenix888@gmail.com']);

  const { stdout: tableOfContents } = await execa('npm', ['run', '--silent','documentation:generate-table-of-contents-in-readme']);

  const options = {
    files: 'README.md',
    from: /(<!-- TABLE_OF_CONTENTS_START -->)[\S\s]*(<!-- TABLE_OF_CONTENTS_END -->)/g,
    to: `<!-- TABLE_OF_CONTENTS_START -->\n${tableOfContents}\n<!-- TABLE_OF_CONTENTS_END -->`,
  };

  try {
    await replaceInFile.replaceInFile(options);
    console.log('Replacement completed...');
  }
  catch (error) {
    console.error('Error occurred:', error);
  }

  await execa('git', ['add', 'README.md']);

  const { exitCode } = await execa('git', ['diff', '--staged', '--quiet'], { reject: false });

  if (exitCode === 0) {
    console.log("No changes to commit");
  } else {
    await execa('git', ['commit', '-m', 'docs: update README.md']);
    await execa('git', ['push', 'origin', 'main']);
  }

  await execa('npm', ['run', 'library:documentation:generate']);
};

generate();
