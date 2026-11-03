async function loadProjects() {
  const { data, error } = await supabaseClient
    .from("projects")
    .select("*")
    .order("project_date", { ascending: false });

  if (error) {
    console.error("Ошибка загрузки проектов:", error);
    return;
  }

  console.log("Проекты из Supabase:", data);
}

loadProjects();
