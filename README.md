# Codename: moby

## Installation

* **Ruby** – Jekyll requires the Ruby language. If you have a Mac, you've most likely already got Ruby. If you open up the Terminal application, and run the command `ruby --version` you can confirm this. Your Ruby version should be at least `2.0.0`. If you've got that, you're all set. Skip to step #2. Otherwise, follow [these instructions](https://www.ruby-lang.org/en/downloads/) to install Ruby.

* **Bundler** – Bundler is a package manager that makes versioning Ruby software like Jekyll a lot easier if you're going to be building GitHub Pages sites locally. If you don't already have Bundler installed, you can install it by running the command `gem install bundler`.

* **Jekyll** – Simply run the command, `bundle install` and you're good to go.

* **Grunt CLI** – Run `npm install -g grunt-cli` if you have the Grunt CLI not already installed

* **Grunt Plugins** – Run `npm install`

* **Livereload Browser Extension** – [http://livereload.com/extensions/](http://livereload.com/extensions/)

## Run the project

After installing all dependencies run `grunt serve`. This triggers `jekyll serve` and also a Grunt watch task, Sass compiler and live reload.