async function loadProjects() {
  const projectList = document.getElementById("project-list");

  if (!projectList) return;

  const { data, error } = await supabaseClient
    .from("projects")
    .select("*")
    .order("project_date", { ascending: false });

  if (error) {
    console.error("Ошибка загрузки проектов:", error);
    return;
  }

  if (!data || data.length === 0) {
    console.log("Проектов пока нет");
    return;
  }

  projectList.innerHTML = "";

  data.forEach((project, index) => {
    const article = document.createElement("article");

    article.className = index === 0
      ? "project-feature"
      : index % 2 === 0
        ? "project-row reverse"
        : "project-row";

    const image = document.createElement("div");
    image.className = "project-image";

    if (project.image_url) {
      const img = document.createElement("img");
      img.src = project.image_url;
      img.alt = project.title;
      image.appendChild(img);
    }

    const info = document.createElement("div");
    info.className = "project-info";

    const topline = document.createElement("div");
    topline.className = "project-topline";

    const date = document.createElement("span");
    date.className = "project-date";
    date.textContent = project.project_date
      ? new Date(project.project_date).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric"
        }).toUpperCase()
      : "";

    topline.appendChild(date);

    const category = document.createElement("p");
    category.className = "eyebrow";
    category.textContent = project.category || "";

    const title = document.createElement("h2");
    title.textContent = project.title;

    const role = document.createElement("h3");
    role.textContent = project.role || "";

    const description = document.createElement("p");
    description.textContent = project.description || "";

    const tags = document.createElement("div");
    tags.className = "project-tags";

    (project.tags || []).forEach(tag => {
      const span = document.createElement("span");
      span.textContent = tag;
      tags.appendChild(span);
    });

    info.append(topline, category, title, role, description, tags);
    article.append(image, info);

    projectList.appendChild(article);
  });
}

loadProjects();
