class RemoveIndexOnChannelBody < ActiveRecord::Migration[5.2]
  def change
    remove_index :channel_messages, :body
  end
end
