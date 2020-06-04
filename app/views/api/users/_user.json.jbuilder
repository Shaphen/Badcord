json.extract! user, :id, :username
if user.photo.attached?
  json.photoURL url_for(user.photo)
end