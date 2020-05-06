
@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :name, :server_id
  end
end
