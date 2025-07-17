import React from "react";

const universities = [
  {
    name: "Üsküdar University",
    url: "https://uskudar.edu.tr/en",
  },
  {
    name: "Özyeğin University",
    url: "https://www.ozyegin.edu.tr/en",
  },
  {
    name: "Atlas University",
    url: "https://atlas.edu.tr/en/",
  },
  {
    name: "Istanbul Medeniyet University",
    url: "https://en.medeniyet.edu.tr/",
  },
  {
    name: "Maltepe University",
    url: "https://www.maltepe.edu.tr/en",
  },
  {
    name: "Arel University",
    url: "https://www.arel.edu.tr/en",
  },
  {
    name: "Bahçeşehir University",
    url: "https://bau.edu.tr/",
  },
  {
    name: "Gedik University",
    url: "https://www.gedik.edu.tr/",
  },
  {
    name: "Istanbul Aydın University",
    url: "https://www.aydin.edu.tr/en-us/Pages/default.aspx",
  },
  {
    name: "Istanbul Medipol University",
    url: "https://www.medipol.edu.tr/en",
  },
];

const University = () => {
  return (
    <section className="page1">
      <h1 className="title">Университеттер</h1>
      <ul className="university-list">
        {universities.map((uni, index) => (
          <li
            key={index}
            className="university-item"
            style={{
              backgroundImage: `url(${uni.image})`,
            }}
          >
            <a
              href={uni.url}
              target="_blank"
              rel="noopener noreferrer"
              className="university-link"
            >
              {uni.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default University;
