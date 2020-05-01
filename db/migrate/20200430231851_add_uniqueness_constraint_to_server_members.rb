class AddUniquenessConstraintToServerMembers < ActiveRecord::Migration[5.2]
  def change
    remove_index :server_members, :server_id

    add_index :server_members, [:server_id, :member_id], unique: true
  end
end
