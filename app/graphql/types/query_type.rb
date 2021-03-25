module Types
  class QueryType < Types::BaseObject
    
    field :current_user, Types::UserType, null: true, description: "returns the signed in user"
    field :users, [Types::UserType], null: false, description: "returns all the users"
  
    def current_user
      context[:current_user]
    end

    def users
      User.all
    end
  end
end

