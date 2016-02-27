guard :livereload,
      port: YAML.load_file('_config.yml')['livereload']['port'] do
  watch %r{dist/.+}
end

guard :shell do
  watch 'modernizr-config.json' do
    `npm run modernizr`
  end

  watch %r{src/_assets/elements/(?!vulcanized)\w+.html} do
    `npm run vulcanize`
  end
end
