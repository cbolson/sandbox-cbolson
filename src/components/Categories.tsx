import Cards from "../components/Cards";

import projects from "../data/projects.json";
const data = projects;
function Categories() {
  return (
    <>
      {data &&
        data.map((cat, idx) => (
          <section key={`cat-${idx}`}>
            <h2>{cat.title}</h2>
            <div className='cards-container'>
              {cat.projects.map((props, idp) => (
                <Cards key={`card-${idp}`} {...props} />
              ))}
            </div>
          </section>
        ))}
    </>
  );
}
export default Categories;
