require 'html/proofer'

desc 'Default task'
task default: :build

desc 'Remove build files with jekyll clean'
task :clean do
  sh(*%w{bundle exec jekyll clean})

  asset_cache = './src/.asset-cache'
  if Dir.exists? asset_cache
    puts " Cleaning #{asset_cache}..."
    FileUtils.remove_entry_secure('src/.asset-cache')
    puts "                    done."
  else
    puts "Nothing to do for #{asset_cache}."
  end
end

desc 'Generate and test a production build of the Jekyll site'
task build: :clean do
  ENV['JEKYLL_ENV'] = 'production'
  sh(*%W{bundle exec jekyll build
         --config _config.yml,_config.#{ENV['JEKYLL_ENV']}.yml})
  HTML::Proofer.new('dist', disable_external: true).run
end

desc 'Start a local Jekyll development server'
task dev: :clean do
  spawn(*%W{bundle exec jekyll serve --host #{Socket.gethostname}})
end

# Spawn a server and kill it gracefully when interrupt is received.
def spawn *cmd
  puts cmd.join(' ')
  pid = Process.spawn(*cmd)
  switch = true
  Signal.trap 'SIGINT' do
    Process.kill(:QUIT, pid) && Process.wait
    switch = false
  end
  while switch do sleep 0.1 end
end
