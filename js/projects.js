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

  console.log("Проекты из Supabase:", data);
}

loadProjects();
