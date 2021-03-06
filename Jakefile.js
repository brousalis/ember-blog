var moment = require('moment');

/**
List available Jake commands
*/

desc('List available jake commands');
task('default', function (params) {
  cmds = ['jake --tasks'];

  jake.exec(cmds, {printStdout: true}, function () {
    complete();
  });
});

/**
Build and publish the blog to your Github repo's master branch
*/

desc('Build and publish the blog to your github repo\'s master branch');
task('deploy', function (params) {
  var commitMessage = '"Built for deployment on ' + new moment().format('MMMM Do YYYY, h:mm:ss a') + '"';

  var cmds = [
    'brunch build --production',
    'git add .',
    'git commit -m ' + commitMessage,
    'git push origin master'
  ];

  console.log('Building...');

  jake.exec(cmds, {printStdout: true}, function () {
    console.log('------------------------------------------------');
    console.log('Successfully published the blog to origin/master');
    console.log('------------------------------------------------');
    complete();
  });
});
