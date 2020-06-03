class AddInviteLinkToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :invite_code, :string, unique: true
  end
end
