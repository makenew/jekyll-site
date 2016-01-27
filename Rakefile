desc 'Default task'
task default: :build

desc 'Remove build files with jekyll clean'
task :clean do
  sh(*%w{bundle exec jekyll clean})
end

desc 'Generate a production build of the site with Jekyll'
task build: :clean do
  ENV['JEKYLL_ENV'] = 'production'
  sh(*%W{bundle exec jekyll build
         --config _config.yml,_config.#{ENV['JEKYLL_ENV']}.yml})
end

desc 'Start a local Jekyll development server'
task dev: :clean do
  spawn(*%w{bundle exec jekyll serve})
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
