import React from 'react';

const teamMembers = [
  {
    name: "Erhan FIRAT",
    role: "Project Owner",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQH7S4tWlpr5gQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1725350801989?e=1730721600&v=beta&t=fKP5Le8m5Mi7ssvlsGFhne6hrzUeKmCs2RdhLNzw-yo", // LinkedIn'den alabilirsiniz.
  },
  {
    name: "Gökhan Özdemir",
    role: "Scrum Master",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635783306921?e=1735776000&v=beta&t=9wLgalZ8wSP1hyoXgeZPA8DuXA-I65lO1wb_wCRjJSo", // LinkedIn'den alabilirsiniz.
  },
  {
    name: "Orhan Kalsın",
    role: "Full Stack Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEJsfKEoIEvQg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1728829877932?e=1730721600&v=beta&t=sc2tRp4aQb-R9uwt4VvSJ9FPCje5uASPIp4FH1LAyqg", // Kendi profil resminizi ekleyin
  },
  {
    name: "Mr. Robot",
    role: "Frontend Developer",
    image: "https://playtusu.com/wp-content/uploads/2017/12/mrrobot_s2_cast_rami-malek2.jpg", // Placeholder resim
  },
  {
    name: "Barbara Gordon",
    role: "Backend Developer",
    image: "https://image.api.playstation.com/cdn/UP1018/CUSA00133_00/dUkb18OSwGNzpHlpqekGIuDvKXWMecnY.png?w=440&thumb=false", // Placeholder resim
  },
  // Diğer takım üyeleri
];

const TeamPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
        <p className="text-gray-500">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <img
              src={member.image}
              alt={`${member.name} photo`}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
