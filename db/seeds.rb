User.delete_all
Server.delete_all
ServerMember.delete_all
Channel.delete_all

User.create!([
  {username: "masterchef", email: "shaphen@aa.io", password_digest: "$2a$12$v26IS.RKAACveUisf2eE7uWQ1f6aZ1zVilYi9HMlFCPUyRjyc14G.", session_token: "bcHoWfo1cZUUhZIc6xu7lg"},
  {username: "TAVanessa", email: "iwalks@aa.io", password_digest: "$2a$12$V99U2JC.Yi1cbrIkeXGRV.BUCJF7nrPOua2UZlay..w40i3EVAl0e", session_token: "VWwWrUdNdVR0NkDmomQpoQ"},
  {username: "u1tic00ki3s", email: "s0yum@aa.io", password_digest: "$2a$12$pXfFkK15wm3knrRH44xVCuqun5GGawHJsGhkKd1X/4x9Ar55KmUZW", session_token: "HicRkiIE4_-bo1J5wbVNrA"},
  {username: "tsuderezan", email: "toosmart@aa.io", password_digest: "$2a$12$WfbtSnp0DZ2XVMBC/OY/MORH1U7qjcmE.ZwVKLND1R.M987GaTzsy", session_token: "_FKsV3cxKyqZ0eu51nBOuA"}
  ])
  
Server.create!([
  {name: "Extra Thicc Trashbags", owner_id: User.first.id, invite_code: SecureRandom.hex(5).upcase}, #masterchef
  {name: "Peaches and Gravy Team", owner_id: User.first.id, invite_code: SecureRandom.hex(5).upcase}, #masterchef
  {name: "Obama Sama Lama", owner_id: User.fourth.id, invite_code: SecureRandom.hex(5).upcase}, #tsunderezan
  {name: "Secret Cave Goats", owner_id: User.second.id, invite_code: SecureRandom.hex(5).upcase} #TAVanessa
])

ServerMember.create!([
  {member_id: User.first.id, server_id: Server.fourth.id},
  {member_id: User.first.id, server_id: Server.first.id},
  {member_id: User.second.id, server_id: Server.first.id},
  {member_id: User.third.id, server_id: Server.first.id},
  {member_id: User.fourth.id, server_id: Server.first.id},
  {member_id: User.first.id, server_id: Server.second.id},
  {member_id: User.second.id, server_id: Server.second.id},
  {member_id: User.third.id, server_id: Server.second.id},
  {member_id: User.fourth.id, server_id: Server.second.id},
  {member_id: User.first.id, server_id: Server.third.id},
  {member_id: User.fourth.id, server_id: Server.third.id},
  {member_id: User.second.id, server_id: Server.fourth.id},
  {member_id: User.third.id, server_id: Server.fourth.id},
  {member_id: User.fourth.id, server_id: Server.fourth.id}
])

Channel.create!([
  {name: "general", server_id: Server.first.id},
  {name: "trashbag Exchange", server_id: Server.first.id},
  {name: "Dumpster Diving", server_id: Server.first.id},
  {name: "general", server_id: Server.second.id},
  {name: "Taste Test Seminars", server_id: Server.second.id},
  {name: "general", server_id: Server.third.id},
  {name: "Obama", server_id: Server.third.id},
  {name: "The Sama", server_id: Server.third.id},
  {name: "Lama", server_id: Server.third.id},
  {name: "general", server_id: Server.fourth.id},
  {name: "Secret Cave Meetings", server_id: Server.fourth.id},
  {name: "Secreter Cave Meetings", server_id: Server.fourth.id},
])
