import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Competitive = () => {
  const firstRowStats = [
    {
      platform: "LeetCode",
      problems: 383,
      color: "#FFA116",
      link: "https://leetcode.com/u/devansh1356/"
    },
    {
      platform: "GFG",
      problems: 321,
      color: "#2F8D46",
      link: "https://www.geeksforgeeks.org/user/sharan2732/?_gl=1*1osiuyn*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwtdi_BhACEiwA97y8BIXNc-QG1UHYI4gGCIY5JLpVkZ9PBUZ8nw8kZNGpQfUODJBQhEBqGhoCnpgQAvD_BwE"
    },
    {
      platform: "InterviewBit",
      problems: 385,
      color: "#007BFF",
      link: "https://www.interviewbit.com/practice/#text=g.devansh@iitg.ac.in"
    }
  ];

  const secondRowStats = [
    {
      platform: "Codeforces",
      problems: 296,
      color: "#1F8ACB",
      extra: "Max Rated: Expert (1635)",
      link: "https://codeforces.com/profile/devansh1356"
    },
    {
      platform: "CodeChef",
      problems: 136,
      color: "#5A3E85",
      extra: "Max Rated: 1982",
      link: "https://www.codechef.com/users/devansh1356"
    }
  ];

  const renderStatCard = (stat) => (
    <div
      className="stat-card p-4 text-center"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        width: "100%",
        maxWidth: "300px",
        borderTop: `5px solid ${stat.color}`,
        color: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <div>
        <h5 style={{ color: stat.color }}>{stat.platform}</h5>
        <p className="mb-2">Problems Solved: <strong>{stat.problems}</strong></p>
        {stat.extra && (
          <small style={{ color: stat.color }}>
            {stat.extra}
          </small>
        )}
      </div>
      <a
        href={stat.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm mt-3"
        style={{
          backgroundColor: stat.color,
          color: "#fff",
          border: "none",
          padding: "8px 12px",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        Visit Profile
      </a>
    </div>
  );

  return (
    <section className="competitive mb-6" id="competitive">
      <div className="container">
        <div className="row text-center mb-5">
          <h2 className="fw-bold">Competitive Programming</h2>
          <p>I actively solve problems on multiple platforms and enjoy competing in contests.</p>
        </div>

        <div className="row justify-content-center g-4 mb-4">
          {secondRowStats.map((stat, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              {renderStatCard(stat)}
            </div>
          ))}
        </div>

        <div className="row justify-content-center g-4 mb-5">
          {firstRowStats.map((stat, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              {renderStatCard(stat)}
            </div>
          ))}
        </div>

        {/* Notable Achievements */}
        <div className="row justify-content-center" style={{ backgroundColor: "#000" }}>
          <div className="col-lg-8 text-center">
            <h4 className="mb-4" style={{ color: "#fff" }}>🏆 Notable Achievements</h4>
            <ul className="list-unstyled">
              {[
                {
                  text: "CodeChef Starters 114 Division 3",
                  rank: "Global Rank 1",
                  link: "https://www.codechef.com/rankings/START114C?itemsPerPage=100&order=asc&page=1&sortBy=rank",
                  color: "#00ffcc"
                },
                {
                  text: "CodeChef Starters 126 Division 2",
                  rank: "Global Rank 34",
                  link: "https://www.codechef.com/rankings/START126B?itemsPerPage=100&order=asc&page=1&sortBy=rank",
                  color: "#ffcc00"
                }
              ].map((ach, idx) => (
                <li key={idx} className="mb-4">
                  <div style={{ color: "#fff", fontSize: "1.05rem" }}>{ach.text}</div>
                  <div className="text-center" style={{ fontWeight: "bold", color: ach.color, fontSize: "1.1rem" }}>
                    {ach.rank}
                  </div>
                  <div className="mt-2">
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#6c63ff",
                        color: "#fff",
                        borderRadius: "5px",
                        padding: "4px 10px",
                        fontSize: "0.85rem",
                        textDecoration: "none"
                      }}
                    >
                      View Ranking
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Background image */}
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
