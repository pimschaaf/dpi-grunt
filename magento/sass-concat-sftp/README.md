# dpi-grunt/magento/sass-concat-sftp
SASS compilation to 1 file and JavaScript concatenation to 1 file, with JavaScript validation and SFTP deployment for Magento.

# Usage
Replace path variables for package and theme on line 5, 6 and 41.

Install with `npm install`.
Run with `grunt watch`.

# Production deployment
Merge and minify JS and CSS through Magento Admin panel:

* System > Configuration > Advanced > Developer > JavaScript Settings > Merge JavaScript Files
* System > Configuration > Advanced > Developer > CSS Settings > Merge CSS Files