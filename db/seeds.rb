User.delete_all
Server.delete_all
ServerMember.delete_all
Channel.delete_all
ChannelMessage.delete_all

User.create!([
  {username: "masterchef", email: "shaphen@aa.io", password_digest: "$2a$12$v26IS.RKAACveUisf2eE7uWQ1f6aZ1zVilYi9HMlFCPUyRjyc14G.", session_token: "bcHoWfo1cZUUhZIc6xu7lg"},
  {username: "TAVanessa", email: "iwalks@aa.io", password_digest: "$2a$12$V99U2JC.Yi1cbrIkeXGRV.BUCJF7nrPOua2UZlay..w40i3EVAl0e", session_token: "VWwWrUdNdVR0NkDmomQpoQ"},
  {username: "u1tic00ki3s", email: "s0yum@aa.io", password_digest: "$2a$12$pXfFkK15wm3knrRH44xVCuqun5GGawHJsGhkKd1X/4x9Ar55KmUZW", session_token: "HicRkiIE4_-bo1J5wbVNrA"},
  {username: "tsunderezan", email: "toosmart@aa.io", password_digest: "$2a$12$WfbtSnp0DZ2XVMBC/OY/MORH1U7qjcmE.ZwVKLND1R.M987GaTzsy", session_token: "_FKsV3cxKyqZ0eu51nBOuA"}
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

ChannelMessage.create!([
  {body: "Anyone want my trash?", author_id: User.third.id, channel_id: Channel.first.id},
  {body: "I want your trashbags", author_id: User.second.id, channel_id: Channel.first.id},
  {body: "But only the extra thicc ones", author_id: User.second.id, channel_id: Channel.first.id},
  {body: "乇乂丅尺卂 丅卄工匚匚", author_id: User.fourth.id, channel_id: Channel.first.id},
  {body: "I like my trashbags like I like my toilet paper. E X T R A  T H I C C", author_id: User.third.id, channel_id: Channel.first.id},
  {body: "I'll take any kind of toilet paper at this point", author_id: User.third.id, channel_id: Channel.first.id},

  {body: "Oh hi there", author_id: User.second.id, channel_id: Channel.second.id},
  {body: "I've been trying to get rid of this trashbag for years", author_id: User.fourth.id, channel_id: Channel.second.id},
  {body: "I'll pay you to take it just please take it!", author_id: User.fourth.id, channel_id: Channel.second.id},
  {body: "-leaves chat-", author_id: User.second.id, channel_id: Channel.second.id},
  {body: "NOOOOOOOOOOOOO", author_id: User.fourth.id, channel_id: Channel.second.id},

  {body: "Is this an actual thing?", author_id: User.fourth.id, channel_id: Channel.third.id},
  {body: "HECK YEAH IT IS", author_id: User.first.id, channel_id: Channel.third.id},
  {body: "You haven't lived if you haven't cannon-balled into old pizza", author_id: User.first.id, channel_id: Channel.third.id},
  {body: "I guess i'm never living", author_id: User.fourth.id, channel_id: Channel.third.id},
  {body: "Let me know when your ready to reach enlightenment", author_id: User.first.id, channel_id: Channel.third.id},
  {body: "Let's go this Saturday!", author_id: User.third.id, channel_id: Channel.third.id},
  {body: "NOT YOU TOO", author_id: User.fourth.id, channel_id: Channel.third.id},

  {body: "Welcome to the best combination in the world", author_id: User.first.id, channel_id: Channel.fourth.id},
  {body: "Has anyone even tried this before?", author_id: User.fourth.id, channel_id: Channel.fourth.id},
  {body: "Yup", author_id: User.second.id, channel_id: Channel.fourth.id},
  {body: "Right here", author_id: User.first.id, channel_id: Channel.fourth.id},
  {body: "Of course, you haven't?", author_id: User.third.id, channel_id: Channel.fourth.id},
  {body: "... Why am I here", author_id: User.fourth.id, channel_id: Channel.fourth.id},

  {body: "Made this channel to help tsunderezan get over their pansiness", author_id: User.third.id, channel_id: Channel.fifth.id},
  {body: "So unnecessary!", author_id: User.fourth.id, channel_id: Channel.fifth.id},

  {body: "Please", author_id: User.fourth.id, channel_id: Channel.all[5].id},
  {body: "Notice", author_id: User.fourth.id, channel_id: Channel.all[6].id},
  {body: "Me", author_id: User.fourth.id, channel_id: Channel.all[7].id},
  {body: "Obama-sama!", author_id: User.fourth.id, channel_id: Channel.all[8].id},
  {body: "I'm very worried for you", author_id: User.first.id, channel_id: Channel.all[8].id},

  {body: "This is the secretest secret of all secerts so make sure to keep the secret", author_id: User.second.id, channel_id: Channel.all[9].id},
  {body: "So wahts the secret?", author_id: User.first.id, channel_id: Channel.all[9].id},
  {body: "I can't tell you it's a secret", author_id: User.second.id, channel_id: Channel.all[9].id},
  {body: "Well that makes it easier to not tell anyone I guess", author_id: User.first.id, channel_id: Channel.all[9].id},
  {body: "Why am I in this one too...", author_id: User.fourth.id, channel_id: Channel.all[9].id},

  {body: "When is the first secret cave meeting?!", author_id: User.first.id, channel_id: Channel.all[10].id},
  {body: "You already missed it", author_id: User.second.id, channel_id: Channel.all[10].id},
  {body: "What how? Nobody told me about it", author_id: User.first.id, channel_id: Channel.all[10].id},
  {body: "BECAUSE IT'S A SECRET MRUAHAHAHAH", author_id: User.second.id, channel_id: Channel.all[10].id},
  {body: "... Right", author_id: User.first.id, channel_id: Channel.all[10].id},

  {body: "I'm not even going to try on this one", author_id: User.first.id, channel_id: Channel.all[10].id},
  {body: "Aww but that's no fun!", author_id: User.second.id, channel_id: Channel.all[10].id},
  {body: "Can't I go back to my obama shrine now?", author_id: User.fourth.id, channel_id: Channel.all[10].id},

])
