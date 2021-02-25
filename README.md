# wasp_lmd

# Last mile delivery dashboard
## Requirements:

* ruby 2.7.0p0
* rails 6.0.3.2
* postgres 10

1. Clone the project
2. bundle install
3. rails db:setup
4. rails db:migrate (not needed right now since there are no migration)

On one terminal run: rails s
On another run: bin/webpack-dev-server

Everything related to react is in app/javascript folder
It has components folder where all our components will reside

Since its a single page application only App components will be exported and rendered on `index` page 

