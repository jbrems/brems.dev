export async function getPocemon(id: number, sleep: number): Promise<number> {
  return new Promise(resolve => setTimeout(() => resolve(id), sleep))
}