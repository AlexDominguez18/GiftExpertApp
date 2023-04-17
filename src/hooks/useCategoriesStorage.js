
const useCategoriesStorage = () => {
  const savedCategories = localStorage.getItem('categories')?.split(',') ?? []

  const saveCategorie = (category) => {
    localStorage.setItem('categories', [...savedCategories, category])
  }

  return { savedCategories, saveCategorie }
}

export { useCategoriesStorage }
