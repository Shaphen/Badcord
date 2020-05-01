User.delete_all
Server.delete_all
ServerMember.delete_all

User.create!([
  {username: "shaphen", email: "shaphen@aa.io", password_digest: "$2a$12$v26IS.RKAACveUisf2eE7uWQ1f6aZ1zVilYi9HMlFCPUyRjyc14G.", session_token: "bcHoWfo1cZUUhZIc6xu7lg"},
  {username: "walker", email: "mewalks@aa.io", password_digest: "$2a$12$fuzwFUwBtTAdyfyUrip1bucnbVKkAAXsK.BVug8CxbeTwqsI7qwoq", session_token: "Je4-uWCIDrdpSQSAm4LrIQ"},
  {username: "TAwalker", email: "iwalks@aa.io", password_digest: "$2a$12$V99U2JC.Yi1cbrIkeXGRV.BUCJF7nrPOua2UZlay..w40i3EVAl0e", session_token: "VWwWrUdNdVR0NkDmomQpoQ"},
  {username: "bailey", email: "baileythecute@aa.io", password_digest: "$2a$12$pXfFkK15wm3knrRH44xVCuqun5GGawHJsGhkKd1X/4x9Ar55KmUZW", session_token: "HicRkiIE4_-bo1J5wbVNrA"},
  {username: "stephen", email: "toosmart@aa.io", password_digest: "$2a$12$WfbtSnp0DZ2XVMBC/OY/MORH1U7qjcmE.ZwVKLND1R.M987GaTzsy", session_token: "_FKsV3cxKyqZ0eu51nBOuA"}
  ])
  
  Server.create!([
    {name: "Extra Thicc Trashbags", owner_id: User.first.id},
    {name: "Peaches and Gravy Team", owner_id: User.first.id},
    {name: "Obama Sama Lama", owner_id: User.second.id}
  ])

  ServerMember.create!([
    {member_id: User.first.id, server_id: Server.second.id}
  ])