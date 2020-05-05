
@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name
    if server.photo.attached?
      json.photoUrl url_for(server.photo)
    end
  end
end
