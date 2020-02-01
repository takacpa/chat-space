require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    config.generator do |g|
      g.stylesheets false
      g.javasxripts false
      g.helper false
      g.test_framework false
  end
end
