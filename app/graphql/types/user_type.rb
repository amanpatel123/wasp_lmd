# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    graphql_name "User"

    field :id, ID, null: false
    field :email, String, null: false
    field :full_name, String, null: false
  end
end
