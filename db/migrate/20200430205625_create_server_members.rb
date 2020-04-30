class CreateServerMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :server_members do |t|
      t.integer :member_id
      t.integer :server_id

      t.timestamps
    end
  end
end
