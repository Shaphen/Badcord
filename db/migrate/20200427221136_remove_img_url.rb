class RemoveImgUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :img_url
    add_index :users, :email, unique: true
  end
end
