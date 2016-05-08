#!/bin/bash

set -e
set -u

if [ ! "${TRAVIS:-}" = 'true' ]; then
  echo 'This is not running on Travis CI. Exiting!'
  exit 1
fi

if [ "${TRAVIS_PULL_REQUEST:-}" = 'true' ]; then
  echo 'Skipping deploy step for pull request.'
  exit
fi

if [ -z "${SOURCE_BRANCH:-}" ]; then
  echo 'Skipping deploy: SOURCE_BRANCH not set.'
  exit
fi

if [ ! "${TRAVIS_BRANCH:-}" = ${SOURCE_BRANCH} ]; then
  echo 'Skipping deploy since this is not the SOURCE_BRANCH.'
  exit
fi

echo 'Starting deploy.'
echo

set -v

openssl aes-256-cbc \
  -K $encrypted_481c86cbc046_key \
  -iv $encrypted_481c86cbc046_iv \
  -in .travis/deploy.key.enc \
  -out .travis/deploy.key -d

eval "$(ssh-agent -s)"
chmod 600 .travis/deploy.key
ssh-add .travis/deploy.key

git config --global user.name "${GIT_USER_NAME:=Evan Sosenko}"
git config --global user.email "${GIT_USER_EMAIL:=razorx@evansosenko.com}"

npm run deploy

exit
