json.server do
  json.extract! @server, :id, :name, :member_ids
end

# every time we iterate something we need to set a key
json.members do
  @server.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username
    end
  end
end