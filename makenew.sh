#!/usr/bin/env sh

set -e
set -u

find_replace () {
  git ls-files -z | xargs -0 sed -i "$1"
}

check_env () {
  test -d .git || (echo 'This is not a Git repository. Exiting.' && exit 1)
  for cmd in ${1}; do
    command -v ${cmd} >/dev/null 2>&1 || \
      (echo "Could not find '$cmd' which is required to continue." && exit 2)
  done
  echo
  echo 'Ready to bootstrap your new project!'
  echo
}

stage_env () {
  echo
  git rm -f makenew.sh
  echo
  echo 'Staging changes.'
  git add --all
  echo
  echo 'Done!'
  echo
}

makenew () {
  read -p '> Site title: ' mk_title
  read -p '> Site name (slug): ' mk_slug
  read -p '> Site description: ' mk_description
  read -p '> Version number: ' mk_version
  read -p '> Site domain (e.g., makenew.github.io): ' mk_domain
  read -p '> Site base url (leave empty or e.g., /jekyll-site): ' mk_baseurl
  read -p '> Author name: ' mk_author
  read -p '> Author email: ' mk_email
  read -p '> Copyright owner: ' mk_owner
  read -p '> Copyright year: ' mk_year
  read -p '> GitHub user or organization name: ' mk_user
  read -p '> GitHub repository name: ' mk_repo

  sed -i -e '3d;11,143d;327,330d' README.md
  sed -i -e "10i ${mk_description}" README.md
  sed -i -e '24d' bower.json
  sed -i -e '1d' _config.production.yml

  find_replace "s/version\": \".*\"/version\": \"${mk_version}\"/g"
  find_replace "s/0\.0\.0\.\.\./${mk_version}.../g"
  find_replace "s/Jekyll Site Skeleton/${mk_title}/g"
  find_replace "s/Jekyll site skeleton\./${mk_description}/g"
  find_replace "s/2016 Evan Sosenko/${mk_year} ${mk_owner}/g"
  find_replace "s/Evan Sosenko/${mk_author}/g"
  find_replace "s/razorx@evansosenko\.com/${mk_email}/g"
  find_replace "s/makenew\/jekyll-site/${mk_user}\/${mk_repo}/g"
  find_replace "s/makenew-jekyll-site/${mk_slug}/g"
  find_replace "s/makenew.github.io/${mk_domain}/g"
  find_replace "s/cd jekyll-site/cd ${mk_repo}/g"

  if [ -n "$mk_baseurl" ]; then
    sed -i -e "1i baseurl: ${mk_baseurl}" _config.production.yml
  fi

  mk_attribution='> Built from [makenew/jekyll-site](https://github.com/makenew/jekyll-site).'
  sed -i -e "8i ${mk_attribution}\n" README.md

  echo
  echo 'Replacing boilerplate.'
}

check_env 'git read sed xargs'
makenew
stage_env
exit
