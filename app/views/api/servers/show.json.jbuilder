json.server do
  json.extract! @server, :id, :name, :member_ids
end