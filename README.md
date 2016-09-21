# Sass環境安裝


##Install node.js

 Install  [ Node.js ](https://nodejs.org/en/)  


## Install ruby ( Windows User )

**1. Windows user**  
 RubyInstaller  http://rubyinstaller.org/downloads/    
 (除了一直按 Next 之外，記得安裝途中把 *Add Ruby executables to your PATH * 勾選起來。)    

![ruby](http://i1.wp.com/naturaljenius.com/wp-content/uploads/2011/10/Ruby-Install-1.png "rubyinstaller")   

**2. Mac user is not install**

## Install Sass

**1. Windows user**

Open your  "Ruby  Terminal" or "Command Prompt"

輸入  `gem install sass`

Double-check - you can on "Ruby  Terminal"  type   輸入  `sass -v` 看是否有灌成功
 如果有成功 會return  `Sass 3.4.22`  版本

**2. Mac user**

Open the Mac's  Terminal.app / 終端機

輸入  `sudo gem install sass`

Double-check - you can on "Terminal.app / 終端機"  type   輸入  `sass -v` 看是否有灌成功
 如果有成功 會return  `Sass 3.4.22`  版本

# Grunt環境安裝

 ![grunt](http://www.gruntjs.net/img/grunt-logo.png)

 Grunt和 Grunt 套件是通過 npm 安裝管理的，npm是 Node.js 的套件管理器。

 **Open**    Terminal.app / 終端機  or Command

 **type**   `npm install -g grunt-cli`

 **mac user type**  `sudo npm install -g grunt-cli`



## Grunt 基本架構

 ```javascript
 module.exports = function(grunt) {

   // Project configuration.
   grunt.initConfig({

   //放置執行函數

   });

   // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-uglify');

   // Default task(s).
   grunt.registerTask('default', ['uglify']);

 };
 ```


## 檔案名稱

 1. package.json
 2. Gruntfile.js

 ## Grunt uglify plugin structure


 **Gruntfile.js**
 ``` javascript

 module.exports = function(grunt) {

     //Project configuration.
   grunt.initConfig({

     uglify: {
     my_target: {
       files: {
         'dest/output.js': ['src/*.js']
       }
     }
   }
   });

   //Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-uglify');

   // Default task(s).
   grunt.registerTask('default', ['uglify']);


  };
 ```


 **package.json**

 ```javascript
 {
   "name": "my-project-name",
   "version": "0.1.0",
   "devDependencies": {
     "grunt": "^0.4.5",
     "grunt-contrib-uglify": "^0.9.1"
   }
 }
 ```

 **build dest / src**

  同個資料夾底下  
  建立兩個目錄  
 1. dest / output.js  (目的地檔案)  
 2. src / input.js （來源檔案）  

 **npm i 建立套件**

 1. cd  （到資料夾）

 2. c: / 資料夾名稱 / npm i

 **執行grunt**

 到cmd  
  c: / 資料夾名稱 / grunt   

 ### 練習下載
 [Uglify github](https://github.com/sexfat/basic)


## Grunt minicss plugin structure

 **Gruntfile.js**

 ```javascript
 module.exports = function(grunt) {

     // Project configuration.
     grunt.initConfig({
         cssmin: {
             target: {
                 files: {
                     'minicss.css': ['foo.css', 'bar.css']
                 }
             }
         }


     });

     // Load the plugin that provides the "uglify" task.
     grunt.loadNpmTasks('grunt-contrib-cssmin');

     // Default task(s).
     grunt.registerTask('default', ['cssmin']);

 };


 ```


 **package.json**


 ```javascript
 {
   "name": "cssmin_project",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "author": "xxx",
   "license": "ISC",
   "devDependencies": {
     "grunt": "^0.4.5",
     "grunt-contrib-cssmin": "~1.0.1"
   }
 }

 ```


 **build foo.css bar.css / minicss.css**

  同個資料夾底下  
  建立三個檔案  
 1.  minicss.css  (目的地檔案)  
 2.  foo.css/ bar.css （來源檔案）  

 **執行grunt**

 到cmd  
  c: / 資料夾名稱 / grunt  
