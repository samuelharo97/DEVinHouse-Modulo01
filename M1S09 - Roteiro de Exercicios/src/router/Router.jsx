import { Menu, ProdutosSelecionados } from '@pages'
import { Routes, Route, Navigate } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/produtos-selecionados" element={<ProdutosSelecionados />} />
      <Route path="*" element={<Navigate to={'/'} replace={true} />} />
    </Routes>
  )
}
