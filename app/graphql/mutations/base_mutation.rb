module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    argument_class Types::BaseArgument
    field_class Types::BaseField
    input_object_class Types::BaseInputObject
    object_class Types::BaseObject
    
    def current_user
      context[:current_user]
    end

    def require_params(attributes, *approved)
      attributes.reduce({}) do |params, attribute|
        params[attribute.first] = attribute.last if approved.include?(attribute.first)
        params
      end
    end

    protected

    def authorize_user
      return true if context[:current_user].present?

      raise GraphQL::ExecutionError, "User not signed in"
    end
  end
end
