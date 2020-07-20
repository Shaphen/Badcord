json.server do
  json.extract! @server, :id, :name, :owner_id, :invite_code, :member_ids, :channel_ids
  if @server.photo.attached?
    json.photoURL url_for(@server.photo)
  end
end


# every time we iterate something we need to set a key
json.members do
  @server.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username
    end
  end
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :id, :name
    end
  end
end
