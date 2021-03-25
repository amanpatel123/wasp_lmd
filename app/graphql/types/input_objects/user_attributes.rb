# frozen_string_literal: true

module Types::InputObjects
  class UserAttributes < Types::BaseInputObject
    description "Attributes for updating a user"
    argument :email, String, required: false
    argument :full_name, String, required: false
    argument :password, String, required: false
  end 
end
