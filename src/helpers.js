const formatarData = (dataStr) => {
  const data = new Date(dataStr);
  return data.toLocaleDateString('pt-BR')
}

export { formatarData }
