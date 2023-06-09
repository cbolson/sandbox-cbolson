import Cards from "../components/Cards";

import projects from "../data/projects.json";

console.log(projects);
function Categories() {
  return (
    <>
      {projects &&
        projects.map((cat, idx) => (
          <section key={`cat-${idx}`}>
            <h2>{cat.title}</h2>
            <div className='cards-container'>
              {cat.type.map((props, idp) => (
                <Cards key={`card-${idp}`} {...props} />
              ))}
            </div>
          </section>
        ))}
    </>
  );
}
export default Categories;
