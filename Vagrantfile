# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant::Config.run do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box     = "cloudspace_default_12.042"
  config.vm.box_url = "http://vagrant.cloudspace.com.s3.amazonaws.com/cloudspace_ubuntu_12.042_ruby_2.box"

  config.ssh.private_key_path = File.join(ENV['HOME'], '.ssh', 'cs_vagrant.pem')

  config.vm.share_folder("v-root", "/srv/hunahview-front-end", ".")


  # config.vm.boot_mode = :gui

  config.vm.define :web do |web|
    web.vm.network(:hostonly, "33.33.33.13")
  end
  
  config.vm.customize do |vm|
    vm.name = 'hunahview'
    vm.memory_size = 1024
  end
    
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "cookbooks"
    chef.add_recipe "ubuntu"
    chef.add_recipe "mysql::client"
    chef.add_recipe "mysql::server"
    chef.add_recipe "apache2"
    chef.add_recipe "passenger_apache2"
    chef.add_recipe "passenger_apache2::mod_rails"
    chef.add_recipe "postfix"
    chef.add_recipe "imagemagick"
    chef.add_recipe "memcached"
    chef.add_recipe "php"
    chef.add_recipe "php::module_mysql"
    chef.add_recipe "php::module_gd"
    chef.add_recipe "apache2::mod_php5"

    chef.json = {
      :mysql => {
        :server_root_password => '',
        :server_debian_password => '',
        :server_repl_password => ''
      }, :postfix => {
        :mydomain => 'hunahview.org'
      }
    }
  end
end
