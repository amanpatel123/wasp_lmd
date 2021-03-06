Rails.application.routes.draw do
  # Commenting this for now since we are using react and we don't need this 
  # devise_for :users 
  
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  root to: 'root#index'

  get "/*path", to: 'root#index'
end
