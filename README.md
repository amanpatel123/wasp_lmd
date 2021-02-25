# Last mile delivery dashboard
### Requirements:

```
* ruby 2.7.0p0
* rails 6.0.3.2
* postgres 10
```

### Setup
```
1. clone https://github.com/amanpatel123/wasp_lmd.git
2. cd wasp_lmd
3. bundle install
4. rails db:setup
5. rails db:migrate

- On one terminal run: rails s (fire up your rails server)
- On another run: bin/webpack-dev-server (fireup your webpacker)

only use yarn package manager to install any javascript packages, do not use npm
```

Everything related to react is in app/javascript folder
It has components folder where all our components will reside

Since its a single page application only App components will be exported and rendered on `index` page 
