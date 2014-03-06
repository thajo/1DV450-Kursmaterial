class AddToUser < ActiveRecord::Migration
  def change
    add_column(:users, :token_expires, :datetime)
  end
end
