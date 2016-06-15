# dpi-grunt
Boilerplates for Grunt preprocessing of SASS and JavaScript in development environments common for DPI.

## Boilerplates
* [concat-sftp](https://github.com/pimschaaf/dpi-grunt/tree/master/concat-sftp) JavaScript concatenation to 1 file, with JavaScript validation and SFTP deployment.
* [concat](https://github.com/pimschaaf/dpi-grunt/tree/master/concat) JavaScript concatenation to 1 file, with JavaScript validation.
* [sass-concat-sftp](https://github.com/pimschaaf/dpi-grunt/tree/master/sass-concat-sftp) SASS compilation to 1 file and JavaScript concatenation to 1 file, with JavaScript validation and SFTP deployment.
* [sass-sftp](https://github.com/pimschaaf/dpi-grunt/tree/master/sass-sftp) SASS compilation to 1 file with SFTP deployment.
* [sass-uglify-sftp](https://github.com/pimschaaf/dpi-grunt/tree/master/sass-uglify-sftp) SASS compilation to 1 file and JavaScript minification to 1 file, with JavaScript validation and SFTP deployment.
* [sass-uglify](https://github.com/pimschaaf/dpi-grunt/tree/master/sass-uglify) SASS compilation to 1 file and JavaScript minification to 1 file, with JavaScript validation.
* [sass](https://github.com/pimschaaf/dpi-grunt/tree/master/sass) SASS compilation to 1 file.
* [uglify-sftp](https://github.com/pimschaaf/dpi-grunt/tree/master/uglify-sftp) JavaScript minification to 1 file, with JavaScript validation and SFTP deployment.
* [uglify](https://github.com/pimschaaf/dpi-grunt/tree/master/uglify) JavaScript minification to 1 file, with JavaScript validation.

## CMS Boilerplates
* Magento 1.9
    * [sass-concat-sftp](https://github.com/pimschaaf/dpi-grunt/tree/master/magento/sass-concat-sftp) SASS compilation to 1 file and JavaScript concatenation to 1 file, with JavaScript validation and SFTP deployment for Magento.
* WordPress
    * sass-uglify

## Usage
Most Boilerplates can be installed with `npm install` and run with `grunt watch` through your OS CLI. Check the Boilerplate readme for usage details.

NodeJS (npm) with Grunt CLI is required.

Always check the paths in the `gruntfile.js` to make sure they have the right references.