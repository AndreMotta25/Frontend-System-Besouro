import React from "react";

const myTeam = [
  {
    fullName: "Lucas Santos",
    jobTitle: "Desenvolvedor frontend",
    email: "lucasgsantos1727@gmail.com",
    phoneNumber: "(11)961499951",
    sector: "Tecnologia da informação",
  },
  {
    fullName: "Artur Gomes",
    jobTitle: "Analista de banco de dados",
    email: "arturgomes@email.com",
    phoneNumber: "(11)961499592",
    sector: "Dados",
  },
  {
    fullName: "Nickolas Gonçalves Junior",
    jobTitle: "Professor",
    email: "nickJr@gmail.com",
    phoneNumber: "(11)961473251",
    sector: "Pedagogia",
  },
];

const ProfileTeam = () => {
  const headers = Object.keys(myTeam[0]);

  const tableTitles = ["Nome Completo", "Função", "Email", "Celular", "Setor"];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Minha equipe</h1>

      <div className="overflow-auto rounded-2xl shadow-lg">
        <table className="min-w-full text-grayText">
          <thead>
            <tr>
              {tableTitles.map((item, index) => (
                <th key={index} scope="col" className="p-2 text-left">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-bgDefault">
            {myTeam.map((item: any, index) => (
              <tr key={index}>
                {headers.map((key) => (
                  <td key={key} className="p-2">
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileTeam;
