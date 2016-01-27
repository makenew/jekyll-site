guard 'livereload',
      port: YAML.load_file('src/_config.yml')['livereload']['port'] do
  watch %r{dist/.+}
end

guard 'shell' do
  watch 'modernizr-config.json' do
    `npm run modernizr`
  end
end
