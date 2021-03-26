module Types
  class MutationType < Types::BaseObject
    field :user_create, mutation: Mutations::User::CreateUser, description: "Create a new user"
    field :user_sign_in, mutation: Mutations::User::SignIn, description: "Sign in a user"
  end
end
