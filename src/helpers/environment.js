
function env ( variable ) {
  const viteVariable = `VITE_${variable}`
  return import.meta.env[viteVariable] || undefined
}

export { env }